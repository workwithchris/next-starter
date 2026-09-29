import { NetworkError } from "../errors";
import { buildQueryString, resolveUrl } from "../http/url-builder";
import { createInitialParserState, parseSSELine } from "./sse-parser";
import type { SSEClientOptions, SSEEventListener, SSEMessage } from "./types";

export class SSEClient {
  private controller: AbortController | null = null;
  private listeners: Map<string, Set<SSEEventListener>> = new Map();
  private isConnected = false;
  private reconnectAttempts = 0;
  private options: SSEClientOptions;
  private url: string;

  constructor(url: string, options: SSEClientOptions = {}) {
    this.url = url;
    this.options = {
      method: "GET",
      autoReconnect: true,
      maxReconnectAttempts: 5,
      reconnectDelayMs: 2000,
      ...options,
    };
  }

  public on<T = unknown>(event: string, listener: SSEEventListener<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener as SSEEventListener);

    return () => {
      this.listeners.get(event)?.delete(listener as SSEEventListener);
    };
  }

  public async connect(): Promise<void> {
    if (this.isConnected) return;

    this.controller = new AbortController();
    const signal = this.options.signal
      ? this.combineSignals(this.controller.signal, this.options.signal)
      : this.controller.signal;

    const fullUrl = resolveUrl(this.url, this.options.baseUrl) + buildQueryString(this.options.params);

    const headers = new Headers(this.options.headers);
    headers.set("Accept", "text/event-stream");
    headers.set("Cache-Control", "no-cache");

    let bodyPayload: BodyInit | undefined = undefined;
    if (this.options.body && this.options.method === "POST") {
      bodyPayload = typeof this.options.body === "string" ? this.options.body : JSON.stringify(this.options.body);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
      }
    }

    try {
      const response = await fetch(fullUrl, {
        method: this.options.method || "GET",
        headers,
        body: bodyPayload,
        signal,
      });

      if (!response.ok) {
        throw new NetworkError(`SSE connection failed with status ${response.status} ${response.statusText}`);
      }

      if (!response.body) {
        throw new NetworkError("SSE response body is empty or not readable");
      }

      this.isConnected = true;
      this.reconnectAttempts = 0;
      this.options.onOpen?.(response);

      await this.readStream(response.body);
    } catch (err: unknown) {
      if (signal.aborted) {
        this.close();
        return;
      }

      this.options.onError?.(err);

      if (this.options.autoReconnect && this.reconnectAttempts < (this.options.maxReconnectAttempts ?? 5)) {
        this.reconnectAttempts++;
        const delay = (this.options.reconnectDelayMs ?? 2000) * Math.pow(1.5, this.reconnectAttempts - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (!this.controller?.signal.aborted) {
          return this.connect();
        }
      } else {
        this.close();
      }
    }
  }

  public close(): void {
    if (this.controller) {
      this.controller.abort();
      this.controller = null;
    }
    this.isConnected = false;
    this.options.onClose?.();
  }

  public get connected(): boolean {
    return this.isConnected;
  }

  private async readStream(stream: ReadableStream<Uint8Array>): Promise<void> {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let parserState = createInitialParserState();

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r\n|\r|\n/);
        buffer = lines.pop() || "";

        for (const line of lines) {
          const { message, nextState } = parseSSELine(line, parserState);
          parserState = nextState;

          if (message) {
            this.options.onMessage?.(message);

            const listeners = this.listeners.get(message.event);
            if (listeners) {
              listeners.forEach((listener) => listener(message));
            }

            if (message.event !== "message") {
              this.listeners.get("message")?.forEach((listener) => listener(message));
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
      this.close();
    }
  }

  private combineSignals(a: AbortSignal, b: AbortSignal): AbortSignal {
    const controller = new AbortController();
    const abort = () => controller.abort();
    a.addEventListener("abort", abort);
    b.addEventListener("abort", abort);
    return controller.signal;
  }

  public static async *stream<T = unknown>(
    url: string,
    options: SSEClientOptions = {}
  ): AsyncGenerator<SSEMessage<T>, void, unknown> {
    const queue: SSEMessage<T>[] = [];
    let error: unknown = null;
    let isComplete = false;
    let notify: (() => void) | null = null;

    const client = new SSEClient(url, {
      ...options,
      autoReconnect: false,
      onMessage: (msg) => {
        queue.push(msg as SSEMessage<T>);
        if (notify) {
          notify();
          notify = null;
        }
      },
      onError: (err) => {
        error = err;
        if (notify) {
          notify();
          notify = null;
        }
      },
      onClose: () => {
        isComplete = true;
        if (notify) {
          notify();
          notify = null;
        }
      },
    });

    client.connect();

    try {
      while (!isComplete || queue.length > 0) {
        if (queue.length > 0) {
          yield queue.shift()!;
        } else if (error) {
          throw error;
        } else if (!isComplete) {
          await new Promise<void>((resolve) => {
            notify = resolve;
          });
        }
      }
    } finally {
      client.close();
    }
  }
}

export function createSSEClient(url: string, options?: SSEClientOptions): SSEClient {
  const client = new SSEClient(url, options);
  client.connect();
  return client;
}
