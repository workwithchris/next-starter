// HTTP Client & helpers
export {
  HttpClient,
  apiClient,
  createHttpClient,
  buildQueryString,
  resolveUrl,
  toFormData,
} from "./client";

// Types
export type {
  HttpMethod,
  QueryParams,
  RetryConfig,
  ResponseType,
  RequestOptions,
  ApiResponse,
  RequestInterceptor,
  ResponseInterceptor,
  ErrorInterceptor,
  ClientConfig,
  MultipartUploadOptions,
} from "./types";

// Errors
export {
  HttpError,
  TimeoutError,
  NetworkError,
  ValidationError,
} from "./errors";

// Server-Sent Events (SSE)
export {
  SSEClient,
  createSSEClient,
} from "./sse";
export type {
  SSEMessage,
  SSEClientOptions,
  SSEEventListener,
} from "./sse";

// WebSockets
export {
  SocketClient,
  createSocketClient,
} from "./socket";
export type {
  SocketStatus,
  SocketClientOptions,
  SocketEventHandler,
} from "./socket";

// React Hooks
export { useSSE } from "./hooks/use-sse";
export type { UseSSEResult } from "./hooks/use-sse";
export { useSocket } from "./hooks/use-socket";
export type { UseSocketResult } from "./hooks/use-socket";
