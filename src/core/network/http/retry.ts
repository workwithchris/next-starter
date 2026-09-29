import { HttpError, NetworkError, TimeoutError } from "../errors";
import type { RetryConfig } from "../types";

export const DEFAULT_RETRY_CONFIG: Required<Omit<RetryConfig, "retryCondition">> = {
  maxRetries: 0,
  delayMs: 1000,
  backoffFactor: 2,
  retryOnStatusCodes: [408, 429, 500, 502, 503, 504],
};

export function normalizeRetryConfig(
  retries?: number | RetryConfig,
  defaultConfig: RetryConfig = DEFAULT_RETRY_CONFIG
): RetryConfig {
  if (typeof retries === "number") {
    return {
      maxRetries: retries,
      delayMs: defaultConfig.delayMs ?? 1000,
      backoffFactor: defaultConfig.backoffFactor ?? 2,
      retryOnStatusCodes: defaultConfig.retryOnStatusCodes ?? [408, 429, 500, 502, 503, 504],
    };
  }

  return {
    maxRetries: retries?.maxRetries ?? defaultConfig.maxRetries ?? 0,
    delayMs: retries?.delayMs ?? defaultConfig.delayMs ?? 1000,
    backoffFactor: retries?.backoffFactor ?? defaultConfig.backoffFactor ?? 2,
    retryOnStatusCodes:
      retries?.retryOnStatusCodes ?? defaultConfig.retryOnStatusCodes ?? [408, 429, 500, 502, 503, 504],
    retryCondition: retries?.retryCondition,
  };
}

export function canRetry(error: unknown, attempt: number, config: RetryConfig): boolean {
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

export function calculateRetryDelay(attempt: number, config: RetryConfig): number {
  const base = config.delayMs ?? 1000;
  const factor = config.backoffFactor ?? 2;
  return base * Math.pow(factor, attempt - 1);
}
