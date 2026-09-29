export type SocketStatus = "CONNECTING" | "OPEN" | "CLOSING" | "CLOSED";

export interface SocketClientOptions {
  autoConnect?: boolean;
  reconnect?: boolean;
  maxReconnectAttempts?: number;
  reconnectIntervalMs?: number;
  reconnectBackoffFactor?: number;
  heartbeat?: boolean;
  heartbeatIntervalMs?: number;
  heartbeatMessage?: string | object;
  protocols?: string | string[];
  queryParams?: Record<string, string | number | boolean>;
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
  onMessage?: (data: any, event: MessageEvent) => void;
}

export type SocketEventHandler<T = any> = (payload: T, rawEvent: MessageEvent) => void;

/**
 * Enterprise-grade WebSocket client with auto-reconnection, heartbeat, message buffering, and typed events
 */
export class SocketClient {
  private socket: WebSocket | null = null;
  private url: string;
  private options: SocketClientOptions;
  private listeners: Map<string, Set<SocketEventHandler>> = new Map();
  private reconnectAttempts = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private messageQueue: (string | ArrayBufferLike | Blob | ArrayBufferView)[] = [];
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

  /**
   * Connect or reconnect to the WebSocket server
   */
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
    } catch (err: unknown) {
      this.handleReconnect();
    }
  }

  /**
   * Disconnect and stop reconnection attempts
   */
  public disconnect(code = 1000, reason = "Client closed"): void {
    this.isIntentionallyClosed = true;
    this.stopHeartbeat();
    this.clearReconnectTimer();

    if (this.socket) {
      this.socket.close(code, reason);
      this.socket = null;
    }
  }

  /**
   * Send raw data or buffered when not yet connected
   */
  public send(data: string | object | ArrayBufferLike | Blob | ArrayBufferView): void {
    const payload = typeof data === "object" && !(data instanceof Blob || data instanceof ArrayBuffer)
      ? JSON.stringify(data)
      : data;

    if (this.isConnected && this.socket) {
      this.socket.send(payload as any);
    } else {
      // Buffer outgoing messages until connection opens
      this.messageQueue.push(payload as any);
    }
  }

  /**
   * Emit a typed event payload structured as { event, data } or { type, payload }
   */
  public emit<T = any>(event: string, data?: T): void {
    this.send({
      event,
      type: event,
      data,
      payload: data,
      timestamp: Date.now(),
    });
  }

  /**
   * Listen for specific event types
   */
  public on<T = any>(event: string, handler: SocketEventHandler<T>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler as SocketEventHandler);

    return () => {
      this.listeners.get(event)?.delete(handler as SocketEventHandler);
    };
  }

  /**
   * Listen for an event only once
   */
  public once<T = any>(event: string, handler: SocketEventHandler<T>): () => void {
    const unsubscribe = this.on<T>(event, (payload, rawEvent) => {
      unsubscribe();
      handler(payload, rawEvent);
    });
    return unsubscribe;
  }

  private setupSocketListeners(socket: WebSocket): void {
    socket.onopen = (event) => {
      this.reconnectAttempts = 0;
      this.startHeartbeat();
      this.flushQueue();
      this.options.onOpen?.(event);
      this.dispatchInternalEvent("open", event);
    };

    socket.onclose = (event) => {
      this.stopHeartbeat();
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
      let parsedData: any = event.data;
      try {
        parsedData = JSON.parse(event.data);
      } catch {
        // Raw string or binary
      }

      this.options.onMessage?.(parsedData, event);
      this.dispatchInternalEvent("message", parsedData, event);

      // Support event routing for structured messages { event/type, data/payload }
      if (parsedData && typeof parsedData === "object") {
        const eventName = parsedData.event || parsedData.type;
        const payload = parsedData.data !== undefined ? parsedData.data : parsedData.payload ?? parsedData;

        if (eventName && typeof eventName === "string") {
          const listeners = this.listeners.get(eventName);
          if (listeners) {
            listeners.forEach((listener) => listener(payload, event));
          }
        }
      }
    };
  }

  private flushQueue(): void {
    if (!this.isConnected || !this.socket) return;

    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift();
      if (message) {
        this.socket.send(message as any);
      }
    }
  }

  private handleReconnect(): void {
    if (this.isIntentionallyClosed) return;

    const maxAttempts = this.options.maxReconnectAttempts ?? 10;
    if (this.reconnectAttempts >= maxAttempts) {
      this.dispatchInternalEvent("reconnect_failed", { attempts: this.reconnectAttempts });
      return;
    }

    this.reconnectAttempts++;
    const baseDelay = this.options.reconnectIntervalMs ?? 2000;
    const factor = this.options.reconnectBackoffFactor ?? 1.5;
    const delay = baseDelay * Math.pow(factor, this.reconnectAttempts - 1);

    this.clearReconnectTimer();
    this.dispatchInternalEvent("reconnecting", { attempt: this.reconnectAttempts, delay });

    this.reconnectTimer = setTimeout(() => {
      this.connect();
    }, delay);
  }

  private startHeartbeat(): void {
    if (!this.options.heartbeat) return;
    this.stopHeartbeat();

    this.heartbeatTimer = setInterval(() => {
      if (this.isConnected && this.options.heartbeatMessage) {
        this.send(this.options.heartbeatMessage);
      }
    }, this.options.heartbeatIntervalMs ?? 30000);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private dispatchInternalEvent(event: string, payload: any, rawEvent?: any): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      listeners.forEach((listener) => listener(payload, rawEvent || ({} as MessageEvent)));
    }
  }
}

/**
 * Creates and initiates a WebSocket client
 */
export function createSocketClient(url: string, options?: SocketClientOptions): SocketClient {
  return new SocketClient(url, options);
}
