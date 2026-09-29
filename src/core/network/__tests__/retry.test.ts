import { describe, expect, it } from "vitest";
import { HttpError, NetworkError, TimeoutError } from "../errors";
import { calculateRetryDelay, canRetry, normalizeRetryConfig } from "../http/retry";

describe("retry policies", () => {
  describe("normalizeRetryConfig", () => {
    it("handles number shorthand", () => {
      const config = normalizeRetryConfig(3);
      expect(config.maxRetries).toBe(3);
      expect(config.delayMs).toBe(1000);
      expect(config.backoffFactor).toBe(2);
    });

    it("handles partial object configuration", () => {
      const config = normalizeRetryConfig({ maxRetries: 5, delayMs: 500 });
      expect(config.maxRetries).toBe(5);
      expect(config.delayMs).toBe(500);
      expect(config.backoffFactor).toBe(2);
    });
  });

  describe("canRetry", () => {
    const config = normalizeRetryConfig(2);

    it("allows retry for TimeoutError and NetworkError", () => {
      expect(canRetry(new TimeoutError(), 1, config)).toBe(true);
      expect(canRetry(new NetworkError(), 1, config)).toBe(true);
    });

    it("allows retry for status codes in retryOnStatusCodes (5xx, 429)", () => {
      expect(canRetry(new HttpError("Server Error", 500, "Internal Server Error"), 1, config)).toBe(true);
      expect(canRetry(new HttpError("Too Many Requests", 429, "Too Many Requests"), 1, config)).toBe(true);
      expect(canRetry(new HttpError("Bad Gateway", 502, "Bad Gateway"), 1, config)).toBe(true);
    });

    it("rejects retry for client errors (400, 401, 403, 404)", () => {
      expect(canRetry(new HttpError("Bad Request", 400, "Bad Request"), 1, config)).toBe(false);
      expect(canRetry(new HttpError("Unauthorized", 401, "Unauthorized"), 1, config)).toBe(false);
      expect(canRetry(new HttpError("Not Found", 404, "Not Found"), 1, config)).toBe(false);
    });

    it("respects custom retryCondition callback", () => {
      const customConfig = normalizeRetryConfig({
        retryCondition: (_err, attempt) => attempt < 2,
      });
      expect(canRetry(new Error("custom"), 1, customConfig)).toBe(true);
      expect(canRetry(new Error("custom"), 2, customConfig)).toBe(false);
    });
  });

  describe("calculateRetryDelay", () => {
    it("calculates exponential backoff delay", () => {
      const config = { delayMs: 1000, backoffFactor: 2 };
      expect(calculateRetryDelay(1, config)).toBe(1000);
      expect(calculateRetryDelay(2, config)).toBe(2000);
      expect(calculateRetryDelay(3, config)).toBe(4000);
    });
  });
});
