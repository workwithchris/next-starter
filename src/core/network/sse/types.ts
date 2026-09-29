import type { QueryParams } from "../types";

export interface SSEMessage<T = unknown> {
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

export type SSEEventListener<T = unknown> = (message: SSEMessage<T>) => void;
