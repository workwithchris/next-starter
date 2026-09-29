import { describe, expect, it } from "vitest";
import { HttpError, NetworkError, TimeoutError, ValidationError } from "../errors";

describe("network error hierarchy", () => {
  describe("HttpError", () => {
    it("provides accurate status classifications", () => {
      const err400 = new HttpError("Bad Request", 400, "Bad Request");
      expect(err400.isClientError).toBe(true);
      expect(err400.isServerError).toBe(false);

      const err401 = new HttpError("Unauthorized", 401, "Unauthorized");
      expect(err401.isUnauthorized).toBe(true);

      const err403 = new HttpError("Forbidden", 403, "Forbidden");
      expect(err403.isForbidden).toBe(true);

      const err404 = new HttpError("Not Found", 404, "Not Found");
      expect(err404.isNotFound).toBe(true);

      const err429 = new HttpError("Rate Limited", 429, "Too Many Requests");
      expect(err429.isRateLimited).toBe(true);

      const err500 = new HttpError("Internal Error", 500, "Internal Server Error");
      expect(err500.isServerError).toBe(true);
      expect(err500.isClientError).toBe(false);
    });

    it("attaches response data and headers", () => {
      const headers = new Headers({ "x-request-id": "req-123" });
      const err = new HttpError("Fail", 422, "Unprocessable", { code: "INVALID" }, headers);
      expect(err.data).toEqual({ code: "INVALID" });
      expect(err.headers.get("x-request-id")).toBe("req-123");
    });
  });

  describe("TimeoutError", () => {
    it("stores timeout duration", () => {
      const err = new TimeoutError("Timed out", 5000);
      expect(err.name).toBe("TimeoutError");
      expect(err.timeoutMs).toBe(5000);
    });
  });

  describe("NetworkError", () => {
    it("captures underlying error", () => {
      const original = new Error("Connection refused");
      const err = new NetworkError("Failed to connect", original);
      expect(err.originalError).toBe(original);
    });
  });

  describe("ValidationError", () => {
    it("stores validation issues", () => {
      const issues = [{ path: ["email"], message: "Invalid email" }];
      const err = new ValidationError("Schema failed", issues);
      expect(err.issues).toEqual(issues);
    });
  });
});
