import { HttpError, NetworkError, TimeoutError, ValidationError } from "../errors";
import type {
  ApiResponse,
  ClientConfig,
  ErrorInterceptor,
  HttpMethod,
  MultipartUploadOptions,
  RequestInterceptor,
  RequestOptions,
  ResponseInterceptor,
  RetryConfig,
} from "../types";
import { buildQueryString, resolveUrl } from "./url-builder";
import { isBinaryOrStream, isFormData } from "./form-data";
import { canRetry, calculateRetryDelay, DEFAULT_RETRY_CONFIG, normalizeRetryConfig } from "./retry";
import { parseResponseBody } from "./response-parser";
import { uploadMultipart } from "./uploader";
import { downloadBlob } from "./downloader";

export class HttpClient {
  private baseUrl?: string;
  private defaultHeaders: Record<string, string>;
  private timeoutMs: number;
  private defaultRetries: RetryConfig;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  constructor(config: ClientConfig = {}) {
    this.baseUrl = config.baseUrl;
    this.defaultHeaders = {
      Accept: "application/json",
      ...config.defaultHeaders,
    };
    this.timeoutMs = config.timeoutMs ?? 30000;
    this.defaultRetries = normalizeRetryConfig(config.defaultRetries, DEFAULT_RETRY_CONFIG);

    if (config.onRequest) this.addRequestInterceptor(config.onRequest);
    if (config.onResponse) this.addResponseInterceptor(config.onResponse);
    if (config.onError) this.addErrorInterceptor(config.onError);
  }

  public addRequestInterceptor(interceptor: RequestInterceptor): () => void {
    this.requestInterceptors.push(interceptor);
    return () => {
      this.requestInterceptors = this.requestInterceptors.filter((i) => i !== interceptor);
    };
  }

  public addResponseInterceptor(interceptor: ResponseInterceptor): () => void {
    this.responseInterceptors.push(interceptor);
    return () => {
      this.responseInterceptors = this.responseInterceptors.filter((i) => i !== interceptor);
    };
  }

  public addErrorInterceptor(interceptor: ErrorInterceptor): () => void {
    this.errorInterceptors.push(interceptor);
    return () => {
      this.errorInterceptors = this.errorInterceptors.filter((i) => i !== interceptor);
    };
  }

  public async request<T = unknown>(
    path: string,
    method: HttpMethod,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    let mergedOptions: RequestOptions = {
      ...options,
      method,
      baseUrl: options.baseUrl ?? this.baseUrl,
      timeoutMs: options.timeoutMs ?? this.timeoutMs,
    };

    for (const interceptor of this.requestInterceptors) {
      mergedOptions = await interceptor(mergedOptions, path);
    }

    const fullUrl = resolveUrl(path, mergedOptions.baseUrl) + buildQueryString(mergedOptions.params);
    const retryConfig = normalizeRetryConfig(mergedOptions.retries, this.defaultRetries);
    const maxAttempts = (retryConfig.maxRetries ?? 0) + 1;
    let attempt = 0;

    while (attempt < maxAttempts) {
      attempt++;
      try {
        const response = await this.executeFetch<T>(fullUrl, method, mergedOptions);
        let finalResponse: ApiResponse<T> = response;

        for (const interceptor of this.responseInterceptors) {
          finalResponse = await interceptor(finalResponse);
        }

        return finalResponse;
      } catch (err: unknown) {
        const shouldRetry = attempt < maxAttempts && canRetry(err, attempt, retryConfig);

        if (shouldRetry) {
          const delay = calculateRetryDelay(attempt, retryConfig);
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        let handledError = err;
        for (const interceptor of this.errorInterceptors) {
          handledError = await interceptor(handledError);
        }
        throw handledError;
      }
    }

    throw new NetworkError(`Request failed after ${maxAttempts} attempts`);
  }

  private async executeFetch<T>(
    fullUrl: string,
    method: HttpMethod,
    options: RequestOptions
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeout = options.timeoutMs ?? this.timeoutMs;
    let timeoutId: NodeJS.Timeout | undefined;

    if (timeout > 0) {
      timeoutId = setTimeout(() => {
        controller.abort(new TimeoutError(`Request timed out after ${timeout}ms`, timeout));
      }, timeout);
    }

    if (options.signal) {
      options.signal.addEventListener("abort", () => {
        controller.abort(options.signal?.reason);
      });
    }

    const headers = new Headers(this.defaultHeaders);
    if (options.headers) {
      if (options.headers instanceof Headers) {
        options.headers.forEach((val, key) => headers.set(key, val));
      } else {
        for (const [k, v] of Object.entries(options.headers)) {
          if (v !== undefined) headers.set(k, v);
        }
      }
    }

    let bodyPayload: BodyInit | null | undefined = undefined;

    if (options.body !== undefined && options.body !== null && method !== "GET" && method !== "HEAD") {
      if (isFormData(options.body)) {
        headers.delete("Content-Type");
        bodyPayload = options.body;
      } else if (isBinaryOrStream(options.body)) {
        bodyPayload = options.body as BodyInit;
      } else if (typeof options.body === "string") {
        bodyPayload = options.body;
        if (!headers.has("Content-Type")) {
          headers.set("Content-Type", "text/plain; charset=utf-8");
        }
      } else {
        bodyPayload = JSON.stringify(options.body);
        if (!headers.has("Content-Type")) {
          headers.set("Content-Type", "application/json; charset=utf-8");
        }
      }
    }

    try {
      const res = await fetch(fullUrl, {
        ...options,
        method,
        headers,
        body: bodyPayload,
        signal: controller.signal,
      });

      if (!res.ok) {
        let errorData: unknown = undefined;
        try {
          const contentType = res.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            errorData = await res.json();
          } else {
            errorData = await res.text();
          }
        } catch {
          // Ignore
        }

        throw new HttpError(
          `HTTP ${res.status}: ${res.statusText}`,
          res.status,
          res.statusText,
          errorData,
          res.headers
        );
      }

      const parsedData = await parseResponseBody<T>(res, options.responseType);

      if (options.schema) {
        const result = options.schema.safeParse(parsedData);
        if (!result.success) {
          throw new ValidationError(
            `Response failed schema validation for ${method} ${fullUrl}`,
            result.error.issues
          );
        }
        return {
          data: result.data as T,
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
          raw: res,
        };
      }

      return {
        data: parsedData,
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
        raw: res,
      };
    } catch (err: unknown) {
      if (err instanceof HttpError || err instanceof ValidationError) {
        throw err;
      }

      if (err instanceof Error) {
        if (err.name === "AbortError" || err instanceof TimeoutError) {
          if (controller.signal.reason instanceof TimeoutError) {
            throw controller.signal.reason;
          }
          throw new TimeoutError(`Request aborted or timed out: ${err.message}`, timeout);
        }
        throw new NetworkError(err.message, err);
      }

      throw new NetworkError("Unknown network failure", err);
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  }

  public get<T = unknown>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "GET", options);
  }

  public post<T = unknown>(path: string, body?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "POST", { ...options, body });
  }

  public put<T = unknown>(path: string, body?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "PUT", { ...options, body });
  }

  public patch<T = unknown>(path: string, body?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "PATCH", { ...options, body });
  }

  public delete<T = unknown>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "DELETE", options);
  }

  public head(path: string, options?: RequestOptions): Promise<ApiResponse<null>> {
    return this.request<null>(path, "HEAD", options);
  }

  public upload<T = unknown>(
    path: string,
    data: FormData | Record<string, unknown>,
    options?: MultipartUploadOptions
  ): Promise<ApiResponse<T>> {
    return uploadMultipart<T>(path, data, options, (p, body, opts) => this.post<T>(p, body, opts));
  }

  public download(path: string, filename?: string, options?: RequestOptions): Promise<Blob> {
    return downloadBlob(path, filename, options, (p, opts) => this.get<Blob>(p, opts));
  }
}

export const apiClient = new HttpClient();

export function createHttpClient(config?: ClientConfig): HttpClient {
  return new HttpClient(config);
}
