import { type z } from "zod";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";

export type QueryParams = Record<
  string,
  string | number | boolean | null | undefined | Array<string | number | boolean>
>;

export interface RetryConfig {
  maxRetries?: number;
  delayMs?: number;
  backoffFactor?: number;
  retryOnStatusCodes?: number[];
  retryCondition?: (error: unknown, attempt: number) => boolean;
}

export type ResponseType = "json" | "text" | "blob" | "arrayBuffer" | "formData";

export interface RequestOptions extends Omit<RequestInit, "body"> {
  baseUrl?: string;
  params?: QueryParams;
  body?: unknown;
  timeoutMs?: number;
  retries?: number | RetryConfig;
  responseType?: ResponseType;
  schema?: z.ZodType<unknown>;
  headers?: Record<string, string> | Headers;
  next?: {
    revalidate?: false | 0 | number;
    tags?: string[];
  };
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  raw: Response;
}

export type RequestInterceptor = (
  options: RequestOptions,
  url: string
) => RequestOptions | Promise<RequestOptions>;

export type ResponseInterceptor = <T = unknown>(
  response: ApiResponse<T>
) => ApiResponse<T> | Promise<ApiResponse<T>>;

export type ErrorInterceptor = (
  error: unknown
) => unknown | Promise<unknown>;

export interface ClientConfig {
  baseUrl?: string;
  defaultHeaders?: Record<string, string>;
  timeoutMs?: number;
  defaultRetries?: number | RetryConfig;
  onRequest?: RequestInterceptor;
  onResponse?: ResponseInterceptor;
  onError?: ErrorInterceptor;
}

export interface MultipartUploadOptions extends Omit<RequestOptions, "body"> {
  onProgress?: (progress: { loaded: number; total: number; percentage: number }) => void;
}
