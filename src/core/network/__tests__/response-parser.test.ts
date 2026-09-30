import { describe, expect, it } from "vitest";
import { parseResponseBody } from "../http/response-parser";

describe("response-parser", () => {
  it("returns null for 204 No Content status", async () => {
    const res = new Response(null, { status: 204 });
    const parsed = await parseResponseBody(res);
    expect(parsed).toBeNull();
  });

  it("returns null for 0 content-length", async () => {
    const res = new Response("", {
      status: 200,
      headers: { "content-length": "0" },
    });
    const parsed = await parseResponseBody(res);
    expect(parsed).toBeNull();
  });

  it("parses application/json content", async () => {
    const payload = { id: 123, active: true };
    const res = new Response(JSON.stringify(payload), {
      headers: { "content-type": "application/json" },
    });
    const parsed = await parseResponseBody(res);
    expect(parsed).toEqual(payload);
  });

  it("parses text format", async () => {
    const res = new Response("plain text content");
    const parsed = await parseResponseBody(res, "text");
    expect(parsed).toBe("plain text content");
  });

  it("parses blob format", async () => {
    const res = new Response("binary content");
    const parsed = await parseResponseBody<Blob>(res, "blob");
    expect(parsed.size).toBe(14);
    expect(await parsed.text()).toBe("binary content");
  });
});
