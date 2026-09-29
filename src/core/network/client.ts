import { HttpError, NetworkError, TimeoutError, ValidationError } from "./errors";
import type {
  ApiResponse,
  ClientConfig,
  ErrorInterceptor,
  HttpMethod,
  MultipartUploadOptions,
  QueryParams,
  RequestInterceptor,
  RequestOptions,
  ResponseInterceptor,
  ResponseType,
  RetryConfig,
} from "./types";

/**
 * Builds URL search parameters cleanly from an object
 */
export function buildQueryString(params?: QueryParams): string {
  if (!params || Object.keys(params).length === 0) return "";

  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null) {
          searchParams.append(key, String(item));
        }
      }
    } else {
      searchParams.append(key, String(value));
    }
  }

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

/**
 * Normalizes and resolves request URL against a base URL
 */
export function resolveUrl(url: string, baseUrl?: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const base = baseUrl || (typeof window !== "undefined" ? "" : process.env.NEXT_PUBLIC_API_URL || "");
  const cleanBase = base.replace(/\/+$/, "");
  const cleanPath = url.replace(/^\/+/, "");

  if (!cleanBase) return `/${cleanPath}`;
  return `${cleanBase}/${cleanPath}`;
}

/**
 * Utility to check if a body is FormData
 */
function isFormData(body: unknown): body is FormData {
  return typeof FormData !== "undefined" && body instanceof FormData;
}

/**
 * Utility to check if a body is a binary or stream payload
 */
function isBinaryOrStream(body: unknown): boolean {
  if (typeof Blob !== "undefined" && body instanceof Blob) return true;
  if (typeof ArrayBuffer !== "undefined" && body instanceof ArrayBuffer) return true;
  if (typeof URLSearchParams !== "undefined" && body instanceof URLSearchParams) return true;
  if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream) return true;
  return false;
}

/**
 * Converts a plain object containing files, blobs, or primitives into FormData
 */
export function toFormData(data: Record<string, any>): FormData {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (item instanceof Blob || item instanceof File) {
          formData.append(key, item);
        } else if (typeof item === "object") {
          formData.append(key, JSON.stringify(item));
        } else {
          formData.append(key, String(item));
        }
      }
    } else if (value instanceof Blob || value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  }

  return formData;
}

/**
 * High-performance, fully typed Network Client with interceptors, retries, and multipart support
 */
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

    const retries = config.defaultRetries;
    this.defaultRetries =
      typeof retries === "number"
        ? { maxRetries: retries, delayMs: 1000, backoffFactor: 2 }
        : {
            maxRetries: retries?.maxRetries ?? 0,
            delayMs: retries?.delayMs ?? 1000,
            backoffFactor: retries?.backoffFactor ?? 2,
            retryOnStatusCodes: retries?.retryOnStatusCodes ?? [408, 429, 500, 502, 503, 504],
          };

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

  /**
   * Core request execution with retries and interceptors
   */
  public async request<T = any>(
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

    // Apply request interceptors
    for (const interceptor of this.requestInterceptors) {
      mergedOptions = await interceptor(mergedOptions, path);
    }

    const fullUrl = resolveUrl(path, mergedOptions.baseUrl) + buildQueryString(mergedOptions.params);

    const retryConfig: RetryConfig =
      typeof mergedOptions.retries === "number"
        ? { maxRetries: mergedOptions.retries, delayMs: 1000, backoffFactor: 2 }
        : {
            maxRetries: mergedOptions.retries?.maxRetries ?? this.defaultRetries.maxRetries ?? 0,
            delayMs: mergedOptions.retries?.delayMs ?? this.defaultRetries.delayMs ?? 1000,
            backoffFactor: mergedOptions.retries?.backoffFactor ?? this.defaultRetries.backoffFactor ?? 2,
            retryOnStatusCodes:
              mergedOptions.retries?.retryOnStatusCodes ?? this.defaultRetries.retryOnStatusCodes ?? [408, 429, 500, 502, 503, 504],
            retryCondition: mergedOptions.retries?.retryCondition,
          };

    const maxAttempts = (retryConfig.maxRetries ?? 0) + 1;
    let attempt = 0;
    let delay = retryConfig.delayMs ?? 1000;

    while (attempt < maxAttempts) {
      attempt++;
      try {
        const response = await this.executeFetch<T>(fullUrl, method, mergedOptions);

        let finalResponse: ApiResponse<T> = response;
        // Apply response interceptors
        for (const interceptor of this.responseInterceptors) {
          finalResponse = await interceptor(finalResponse);
        }

        return finalResponse;
      } catch (err: unknown) {
        const shouldRetry =
          attempt < maxAttempts && this.canRetry(err, attempt, retryConfig);

        if (shouldRetry) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= retryConfig.backoffFactor ?? 2;
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

  private canRetry(error: unknown, attempt: number, config: RetryConfig): boolean {
    if (config.retryCondition) {
      return config.retryCondition(error, attempt);
    }

    if (error instanceof TimeoutError || error instanceof NetworkError) {
      return true;
    }

    if (error instanceof HttpError) {
      return (config.retryOnStatusCodes || []).includes(error.status);
    }

    return false;
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

    // Merge consumer-provided AbortSignal with internal timeout signal
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
        // IMPORTANT: For FormData, do not set Content-Type header.
        // Fetch automatically computes multipart/form-data with unique boundary string!
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
          // Ignore parsing failure for error response
        }

        throw new HttpError(
          `HTTP ${res.status}: ${res.statusText}`,
          res.status,
          res.statusText,
          errorData,
          res.headers
        );
      }

      const parsedData = await this.parseResponseBody<T>(res, options.responseType);

      // Validate data with Zod schema if provided
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

  private async parseResponseBody<T>(res: Response, responseType: ResponseType = "json"): Promise<T> {
    if (res.status === 204 || res.headers.get("content-length") === "0") {
      return null as unknown as T;
    }

    switch (responseType) {
      case "text":
        return (await res.text()) as unknown as T;
      case "blob":
        return (await res.blob()) as unknown as T;
      case "arrayBuffer":
        return (await res.arrayBuffer()) as unknown as T;
      case "formData":
        return (await res.formData()) as unknown as T;
      case "json":
      default: {
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          return (await res.json()) as T;
        }
        const text = await res.text();
        try {
          return JSON.parse(text) as T;
        } catch {
          return text as unknown as T;
        }
      }
    }
  }

  // --- Convenience HTTP Verbs ---

  public get<T = any>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "GET", options);
  }

  public post<T = any>(path: string, body?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "POST", { ...options, body });
  }

  public put<T = any>(path: string, body?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "PUT", { ...options, body });
  }

  public patch<T = any>(path: string, body?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "PATCH", { ...options, body });
  }

  public delete<T = any>(path: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(path, "DELETE", options);
  }

  public head(path: string, options?: RequestOptions): Promise<ApiResponse<null>> {
    return this.request<null>(path, "HEAD", options);
  }

  /**
   * Upload files or multipart data with progress reporting (in browser environments)
   */
  public async upload<T = any>(
    path: string,
    data: FormData | Record<string, any>,
    options: MultipartUploadOptions = {}
  ): Promise<ApiResponse<T>> {
    const formData = isFormData(data) ? data : toFormData(data);

    // If onProgress is supplied and running in browser, use XMLHttpRequest for fine-grained upload progress
    if (options.onProgress && typeof window !== "undefined" && typeof XMLHttpRequest !== "undefined") {
      return new Promise<ApiResponse<T>>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const fullUrl = resolveUrl(path, options.baseUrl ?? this.baseUrl) + buildQueryString(options.params);

        xhr.open(options.method || "POST", fullUrl, true);

        // Set custom headers (excluding Content-Type so browser sets boundary)
        if (options.headers) {
          const headers = options.headers instanceof Headers
            ? Object.fromEntries(options.headers.entries())
            : options.headers;

          for (const [k, v] of Object.entries(headers)) {
            if (k.toLowerCase() !== "content-type" && v) {
              xhr.setRequestHeader(k, v);
            }
          }
        }

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable && options.onProgress) {
            options.onProgress({
              loaded: event.loaded,
              total: event.total,
              percentage: Math.round((event.loaded / event.total) * 100),
            });
          }
        };

        xhr.onload = () => {
          const responseHeaders = new Headers();
          const rawHeaders = xhr.getAllResponseHeaders();
          rawHeaders.trim().split(/[\r\n]+/).forEach((line) => {
            const parts = line.split(": ");
            const header = parts.shift();
            const value = parts.join(": ");
            if (header) responseHeaders.set(header, value);
          });

          let parsedData: any = xhr.responseText;
          try {
            parsedData = JSON.parse(xhr.responseText);
          } catch {
            // Keep as string
          }

          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({
              data: parsedData,
              status: xhr.status,
              statusText: xhr.statusText,
              headers: responseHeaders,
              raw: new Response(xhr.responseText, {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: responseHeaders,
              }),
            });
          } else {
            reject(
              new HttpError(
                `Upload failed: ${xhr.status} ${xhr.statusText}`,
                xhr.status,
                xhr.statusText,
                parsedData,
                responseHeaders
              )
            );
          }
        };

        xhr.onerror = () => reject(new NetworkError("Upload network failure"));
        xhr.ontimeout = () => reject(new TimeoutError("Upload timed out"));

        xhr.send(formData);
      });
    }

    return this.post<T>(path, formData, options);
  }

  /**
   * Download a file as a blob and optionally trigger browser download
   */
  public async download(
    path: string,
    filename?: string,
    options?: RequestOptions
  ): Promise<Blob> {
    const res = await this.get<Blob>(path, { ...options, responseType: "blob" });
    const blob = res.data;

    if (filename && typeof window !== "undefined" && typeof document !== "undefined") {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }

    return blob;
  }
}

/**
 * Default pre-configured API client instance
 */
export const apiClient = new HttpClient();

/**
 * Factory to create custom HTTP client instances
 */
export function createHttpClient(config?: ClientConfig): HttpClient {
  return new HttpClient(config);
}
