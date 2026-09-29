import { HeartbeatManager } from "./heartbeat";
import { MessageQueue, type QueuedSocketMessage } from "./message-queue";
import { calculateReconnectDelay, shouldAttemptReconnect } from "./reconnect";
import type { SocketClientOptions, SocketEventHandler, SocketStatus } from "./types";

export class SocketClient {
  private socket: WebSocket | null = null;
  private url: string;
  private options: SocketClientOptions;
  private listeners: Map<string, Set<SocketEventHandler<unknown>>> = new Map();
  private reconnectAttempts = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private heartbeat: HeartbeatManager;
  private messageQueue: MessageQueue;
  private isIntentionallyClosed = false;

  constructor(url: string, options: SocketClientOptions = {}) {
    this.url = url;
    this.options = {
      autoConnect: true,
      reconnect: true,
      maxReconnectAttempts: 10,
      reconnectIntervalMs: 2000,
      reconnectBackoffFactor: 1.5,
      heartbeat: true,
      heartbeatIntervalMs: 30000,
      heartbeatMessage: JSON.stringify({ type: "ping" }),
      ...options,
    };

    this.messageQueue = new MessageQueue();
    this.heartbeat = new HeartbeatManager(
      this.options.heartbeatIntervalMs ?? 30000,
      this.options.heartbeatMessage ?? JSON.stringify({ type: "ping" }),
      (msg) => this.send(msg)
    );

    if (this.options.autoConnect && typeof window !== "undefined") {
      this.connect();
    }
  }

  public get status(): SocketStatus {
    if (!this.socket) return "CLOSED";
    switch (this.socket.readyState) {
      case WebSocket.CONNECTING:
        return "CONNECTING";
      case WebSocket.OPEN:
        return "OPEN";
      case WebSocket.CLOSING:
        return "CLOSING";
      case WebSocket.CLOSED:
      default:
        return "CLOSED";
    }
  }

  public get isConnected(): boolean {
    return this.status === "OPEN";
  }

  public connect(): void {
    if (typeof window === "undefined" && typeof WebSocket === "undefined") {
      return;
    }

    if (this.socket && (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)) {
      return;
    }

    this.isIntentionallyClosed = false;
    let targetUrl = this.url;

    if (this.options.queryParams) {
      const searchParams = new URLSearchParams();
      for (const [k, v] of Object.entries(this.options.queryParams)) {
        searchParams.append(k, String(v));
      }
      const query = searchParams.toString();
      targetUrl += (targetUrl.includes("?") ? "&" : "?") + query;
    }

    try {
      this.socket = new WebSocket(targetUrl, this.options.protocols);
      this.setupSocketListeners(this.socket);
    } catch {
      this.handleReconnect();
    }
  }

  public disconnect(code = 1000, reason = "Client closed"): void {
    this.isIntentionallyClosed = true;
    this.heartbeat.stop();
    this.clearReconnectTimer();

    if (this.socket) {
      this.socket.close(code, reason);
      this.socket = null;
    }
  }

  public send(data: string | object | ArrayBufferLike | Blob | ArrayBufferView): void {
    const payload = typeof data === "object" && !(data instanceof Blob || data instanceof ArrayBuffer)
      ? JSON.stringify(data)
      : data;

    if (this.isConnected && this.socket) {
      this.socket.send(payload as QueuedSocketMessage);
    } else {
      this.messageQueue.enqueue(payload as QueuedSocketMessage);
    }
  }

  public emit<T = unknown>(event: string, data?: T): void {
    this.send({
      event,
      type: event,
      data,
      payload: data,
      timestamp: Date.now(),
    });
  }

  public on<T = unknown>(event: string, handler: SocketEventHandler<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler as SocketEventHandler<unknown>);

    return () => {
      this.listeners.get(event)?.delete(handler as SocketEventHandler<unknown>);
    };
  }

  public once<T = unknown>(event: string, handler: SocketEventHandler<T>): () => void {
    const unsubscribe = this.on<T>(event, (payload, rawEvent) => {
      unsubscribe();
      handler(payload, rawEvent);
    });
    return unsubscribe;
  }

  private setupSocketListeners(socket: WebSocket): void {
    socket.onopen = (event) => {
      this.reconnectAttempts = 0;
      if (this.options.heartbeat) {
        this.heartbeat.start();
      }
      this.messageQueue.flush((msg) => this.socket?.send(msg));
      this.options.onOpen?.(event);
      this.dispatchInternalEvent("open", event);
    };

    socket.onclose = (event) => {
      this.heartbeat.stop();
      this.options.onClose?.(event);
      this.dispatchInternalEvent("close", event);

      if (!this.isIntentionallyClosed && this.options.reconnect) {
        this.handleReconnect();
      }
    };

    socket.onerror = (event) => {
      this.options.onError?.(event);
      this.dispatchInternalEvent("error", event);
    };

    socket.onmessage = (event) => {
      let parsedData: unknown = event.data;
      try {
        parsedData = JSON.parse(event.data);
      } catch {
        // Raw string or binary
      }

      this.options.onMessage?.(parsedData, event);
      this.dispatchInternalEvent("message", parsedData, event);

      if (parsedData && typeof parsedData === "object") {
        const record = parsedData as Record<string, unknown>;
        const eventName = record.event || record.type;
        const payload = record.data !== undefined ? record.data : record.payload ?? record;

        if (eventName && typeof eventName === "string") {
          const listeners = this.listeners.get(eventName);
          if (listeners) {
            listeners.forEach((listener) => listener(payload, event));
          }
        }
      }
    };
  }

  private handleReconnect(): void {
    if (this.isIntentionallyClosed) return;

    const maxAttempts = this.options.maxReconnectAttempts ?? 10;
    if (!shouldAttemptReconnect(this.reconnectAttempts, maxAttempts, this.isIntentionallyClosed)) {
      this.dispatchInternalEvent("reconnect_failed", { attempts: this.reconnectAttempts });
      return;
    }

    this.reconnectAttempts++;
    const delay = calculateReconnectDelay(
      this.reconnectAttempts,
      this.options.reconnectIntervalMs,
      this.options.reconnectBackoffFactor
    );

    this.clearReconnectTimer();
    this.dispatchInternalEvent("reconnecting", { attempt: this.reconnectAttempts, delay });

    this.reconnectTimer = setTimeout(() => {
      this.connect();
    }, delay);
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private dispatchInternalEvent(event: string, payload: unknown, rawEvent?: MessageEvent | Event): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.forEach((listener) => listener(payload, (rawEvent || {}) as MessageEvent));
    }
  }
}

export function createSocketClient(url: string, options?: SocketClientOptions): SocketClient {
  return new SocketClient(url, options);
}
