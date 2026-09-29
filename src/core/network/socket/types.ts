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
  onMessage?: (data: unknown, event: MessageEvent) => void;
}

export type SocketEventHandler<T = unknown> = (payload: T, rawEvent: MessageEvent) => void;
