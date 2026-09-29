import { describe, expect, it } from "vitest";
import { buildQueryString, resolveUrl } from "../http/url-builder";

describe("url-builder", () => {
  describe("buildQueryString", () => {
    it("returns empty string for undefined or empty params", () => {
      expect(buildQueryString()).toBe("");
      expect(buildQueryString({})).toBe("");
    });

    it("serializes primitive query parameters", () => {
      const qs = buildQueryString({ page: 1, search: "hello", active: true });
      expect(qs).toBe("?page=1&search=hello&active=true");
    });

    it("filters out null and undefined values", () => {
      const qs = buildQueryString({ valid: "yes", skipped: undefined, empty: null });
      expect(qs).toBe("?valid=yes");
    });

    it("handles array parameters", () => {
      const qs = buildQueryString({ ids: [1, 2, 3] });
      expect(qs).toBe("?ids=1&ids=2&ids=3");
    });

    it("encodes special characters correctly", () => {
      const qs = buildQueryString({ query: "foo & bar=baz" });
      expect(qs).toBe("?query=foo+%26+bar%3Dbaz");
    });
  });

  describe("resolveUrl", () => {
    it("returns absolute URLs unchanged", () => {
      expect(resolveUrl("https://api.example.com/v1/users")).toBe("https://api.example.com/v1/users");
      expect(resolveUrl("http://localhost:3000/api")).toBe("http://localhost:3000/api");
    });

    it("resolves relative paths with provided baseUrl", () => {
      expect(resolveUrl("/users", "https://api.example.com")).toBe("https://api.example.com/users");
      expect(resolveUrl("users", "https://api.example.com/")).toBe("https://api.example.com/users");
      expect(resolveUrl("/users/123", "https://api.example.com/v1/")).toBe("https://api.example.com/v1/users/123");
    });

    it("formats relative paths with leading slash when baseUrl is empty", () => {
      expect(resolveUrl("users", "")).toBe("/users");
      expect(resolveUrl("/api/test", "")).toBe("/api/test");
    });
  });
});
