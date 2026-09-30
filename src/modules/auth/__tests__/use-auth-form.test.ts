import { describe, expect, it } from "vitest";
import { LoginSchema } from "../data/auth-types";
import { loginUser } from "../data/auth-api";

describe("Auth Module Logic", () => {
  describe("LoginSchema", () => {
    it("validates correct email and password", () => {
      const result = LoginSchema.safeParse({
        email: "user@example.com",
        password: "securePassword123",
        rememberMe: true,
      });

      expect(result.success).toBe(true);
    });

    it("fails on invalid email", () => {
      const result = LoginSchema.safeParse({
        email: "not-an-email",
        password: "securePassword123",
      });

      expect(result.success).toBe(false);
    });

    it("fails on short password", () => {
      const result = LoginSchema.safeParse({
        email: "user@example.com",
        password: "short",
      });

      expect(result.success).toBe(false);
    });
  });

  describe("loginUser API", () => {
    it("authenticates and returns session", async () => {
      const session = await loginUser({
        email: "test@example.com",
        password: "password123",
        rememberMe: false,
      });

      expect(session.token).toBeDefined();
      expect(session.user.email).toBe("test@example.com");
      expect(session.user.role).toBe("admin");
    });
  });
});
