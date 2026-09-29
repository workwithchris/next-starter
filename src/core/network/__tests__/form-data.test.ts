import { describe, expect, it } from "vitest";
import { isBinaryOrStream, isFormData, toFormData } from "../http/form-data";

describe("form-data utilities", () => {
  describe("isFormData", () => {
    it("identifies FormData instances", () => {
      const fd = new FormData();
      expect(isFormData(fd)).toBe(true);
      expect(isFormData({})).toBe(false);
      expect(isFormData("string")).toBe(false);
      expect(isFormData(null)).toBe(false);
    });
  });

  describe("isBinaryOrStream", () => {
    it("identifies Blob, ArrayBuffer, and URLSearchParams", () => {
      const blob = new Blob(["test"], { type: "text/plain" });
      const buffer = new ArrayBuffer(8);
      const params = new URLSearchParams("a=1");

      expect(isBinaryOrStream(blob)).toBe(true);
      expect(isBinaryOrStream(buffer)).toBe(true);
      expect(isBinaryOrStream(params)).toBe(true);
      expect(isBinaryOrStream({ hello: "world" })).toBe(false);
    });
  });

  describe("toFormData", () => {
    it("converts primitives into FormData entries", () => {
      const fd = toFormData({ name: "Alice", age: 30, active: true });
      expect(fd.get("name")).toBe("Alice");
      expect(fd.get("age")).toBe("30");
      expect(fd.get("active")).toBe("true");
    });

    it("skips undefined and null values", () => {
      const fd = toFormData({ valid: "yes", empty: null, notSet: undefined });
      expect(fd.get("valid")).toBe("yes");
      expect(fd.has("empty")).toBe(false);
      expect(fd.has("notSet")).toBe(false);
    });

    it("serializes nested objects as JSON strings", () => {
      const fd = toFormData({ user: { id: 1, role: "admin" } });
      expect(fd.get("user")).toBe(JSON.stringify({ id: 1, role: "admin" }));
    });

    it("appends multiple entries for arrays", () => {
      const fd = toFormData({ tags: ["dev", "prod"] });
      const values = fd.getAll("tags");
      expect(values).toEqual(["dev", "prod"]);
    });

    it("preserves Blob instances", () => {
      const blob = new Blob(["content"], { type: "text/plain" });
      const fd = toFormData({ file: blob });
      expect(fd.get("file")).toBeInstanceOf(Blob);
    });
  });
});
