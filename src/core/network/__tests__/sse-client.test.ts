import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SSEClient, createSSEClient, type SSEMessage } from "../sse";

describe("SSEClient", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("connects to SSE stream and dispatches messages to listeners", async () => {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode("event: greeting\ndata: hello\n\n"));
        controller.close();
      },
    });

    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(stream, {
        status: 200,
        headers: { "content-type": "text/event-stream" },
      })
    );

    const received: SSEMessage[] = [];
    const client = new SSEClient("https://api.example.com/events", { autoReconnect: false });

    client.on("greeting", (msg) => {
      received.push(msg);
    });

    await client.connect();

    expect(received.length).toBe(1);
    expect(received[0]).toEqual({
      id: undefined,
      event: "greeting",
      data: "hello",
      retry: undefined,
    });
  });

  it("yields messages via SSEClient.stream async iterator", async () => {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode("data: token 1\n\n"));
        controller.enqueue(encoder.encode("data: token 2\n\n"));
        controller.close();
      },
    });

    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(stream, {
        status: 200,
        headers: { "content-type": "text/event-stream" },
      })
    );

    const tokens: string[] = [];
    for await (const message of SSEClient.stream<string>("https://api.example.com/ai")) {
      tokens.push(message.data);
    }

    expect(tokens).toEqual(["token 1", "token 2"]);
  });

  it("factory createSSEClient instantiates and initiates connection", () => {
    const stream = new ReadableStream({
      start(controller) {
        controller.close();
      },
    });

    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(stream, {
        status: 200,
        headers: { "content-type": "text/event-stream" },
      })
    );

    const client = createSSEClient("https://api.example.com/stream");
    expect(client).toBeInstanceOf(SSEClient);
    client.close();
  });
});
