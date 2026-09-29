import { resolveUrl } from "./client";
import { NetworkError } from "./errors";
import type { QueryParams } from "./types";
import { buildQueryString } from "./client";

export interface SSEMessage<T = any> {
  id?: string;
  event: string;
  data: T;
  retry?: number;
}

export interface SSEClientOptions {
  method?: "GET" | "POST";
  headers?: Record<string, string> | Headers;
  body?: unknown;
  params?: QueryParams;
  baseUrl?: string;
  signal?: AbortSignal;
  autoReconnect?: boolean;
  maxReconnectAttempts?: number;
  reconnectDelayMs?: number;
  onOpen?: (response: Response) => void;
  onMessage?: (message: SSEMessage) => void;
  onError?: (error: unknown) => void;
  onClose?: () => void;
}

export type SSEEventListener<T = any> = (message: SSEMessage<T>) => void;

/**
 * Modern, Fetch-based Server-Sent Events (SSE) Client
 * Supports POST requests, custom auth headers, typed events, and async streaming
 */
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

  /**
   * Subscribe to specific SSE events
   */
  public on<T = any>(event: string, listener: SSEEventListener<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener as SSEEventListener);

    return () => {
      this.listeners.get(event)?.delete(listener as SSEEventListener);
    };
  }

  /**
   * Connect to the SSE endpoint
   */
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

  /**
   * Close the SSE connection
   */
  public close(): void {
    if (this.controller) {
      this.controller.abort();
      this.controller = null;
    }
    this.isConnected = false;
    this.options.onClose?.();
  }

  /**
   * Check if connection is currently active
   */
  public get connected(): boolean {
    return this.isConnected;
  }

  /**
   * Parses the SSE chunk stream according to W3C spec
   */
  private async readStream(stream: ReadableStream<Uint8Array>): Promise<void> {
    const reader = stream.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    let currentEvent = "message";
    let currentData = "";
    let currentId: string | undefined = undefined;
    let currentRetry: number | undefined = undefined;

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r\n|\r|\n/);
        // Retain uncompleted line in buffer
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line === "") {
            // Empty line marks message boundary - dispatch event
            if (currentData) {
              const trimmedData = currentData.endsWith("\n") ? currentData.slice(0, -1) : currentData;
              let parsedData: any = trimmedData;
              try {
                parsedData = JSON.parse(trimmedData);
              } catch {
                // Raw string data
              }

              const sseMessage: SSEMessage = {
                id: currentId,
                event: currentEvent,
                data: parsedData,
                retry: currentRetry,
              };

              this.options.onMessage?.(sseMessage);

              const listeners = this.listeners.get(currentEvent);
              if (listeners) {
                listeners.forEach((listener) => listener(sseMessage));
              }

              // Also trigger generic 'message' listeners if non-empty
              if (currentEvent !== "message") {
                this.listeners.get("message")?.forEach((listener) => listener(sseMessage));
              }

              // Reset event fields for next message
              currentEvent = "message";
              currentData = "";
              currentId = undefined;
            }
          } else if (line.startsWith(":")) {
            // Comment / ping line, ignore
            continue;
          } else if (line.startsWith("event:")) {
            currentEvent = line.slice(6).trim();
          } else if (line.startsWith("data:")) {
            currentData += line.slice(5).trim() + "\n";
          } else if (line.startsWith("id:")) {
            currentId = line.slice(3).trim();
          } else if (line.startsWith("retry:")) {
            currentRetry = parseInt(line.slice(6).trim(), 10);
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

  /**
   * Async generator that yields SSE messages one by one
   */
  public static async *stream<T = any>(
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
        queue.push(msg);
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

/**
 * Creates and initiates a Server-Sent Events client
 */
export function createSSEClient(url: string, options?: SSEClientOptions): SSEClient {
  const client = new SSEClient(url, options);
  client.connect();
  return client;
}
