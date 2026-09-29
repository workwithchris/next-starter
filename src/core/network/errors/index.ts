export class HttpError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly data?: unknown;
  public readonly headers: Headers;

  constructor(message: string, status: number, statusText: string, data?: unknown, headers?: Headers) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.statusText = statusText;
    this.data = data;
    this.headers = headers || new Headers();
  }

  get isClientError(): boolean {
    return this.status >= 400 && this.status < 500;
  }

  get isServerError(): boolean {
    return this.status >= 500 && this.status < 600;
  }

  get isUnauthorized(): boolean {
    return this.status === 401;
  }

  get isForbidden(): boolean {
    return this.status === 403;
  }

  get isNotFound(): boolean {
    return this.status === 404;
  }

  get isRateLimited(): boolean {
    return this.status === 429;
  }
}

export class TimeoutError extends Error {
  public readonly timeoutMs: number;

  constructor(message = "Request timed out", timeoutMs = 0) {
    super(message);
    this.name = "TimeoutError";
    this.timeoutMs = timeoutMs;
  }
}

export class NetworkError extends Error {
  public readonly originalError?: unknown;

  constructor(message = "Network connection failed", originalError?: unknown) {
    super(message);
    this.name = "NetworkError";
    this.originalError = originalError;
  }
}

export class ValidationError extends Error {
  public readonly issues: unknown;

  constructor(message: string, issues: unknown) {
    super(message);
    this.name = "ValidationError";
    this.issues = issues;
  }
}
