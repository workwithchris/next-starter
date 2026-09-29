import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { HttpError, ValidationError } from "../errors";
import { createHttpClient, HttpClient } from "../http/http-client";

describe("HttpClient", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("executes basic GET request and parses JSON", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ message: "success" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );

    const client = new HttpClient({ baseUrl: "https://api.example.com" });
    const response = await client.get<{ message: string }>("/test");

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ message: "success" });
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://api.example.com/test",
      expect.objectContaining({ method: "GET" })
    );
  });

  it("serializes JSON body for POST request", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 101 }), {
        status: 201,
        headers: { "content-type": "application/json" },
      })
    );

    const client = new HttpClient();
    const payload = { username: "john" };
    const response = await client.post<{ id: number }>("/users", payload);

    expect(response.status).toBe(201);
    expect(response.data.id).toBe(101);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "/users",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(payload),
      })
    );
  });

  it("applies request and response interceptors", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ value: 10 }), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );

    const client = new HttpClient();

    client.addRequestInterceptor((options) => {
      return {
        ...options,
        headers: {
          ...(options.headers as Record<string, string>),
          Authorization: "Bearer token-123",
        },
      };
    });

    client.addResponseInterceptor((res) => {
      return {
        ...res,
        data: { ...res.data, transformed: true },
      };
    });

    const res = await client.get("/data");
    expect(res.data).toEqual({ value: 10, transformed: true });
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "/data",
      expect.objectContaining({
        headers: expect.any(Headers),
      })
    );
  });

  it("throws HttpError on non-2xx status", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        statusText: "Unauthorized",
        headers: { "content-type": "application/json" },
      })
    );

    const client = new HttpClient();

    await expect(client.get("/protected")).rejects.toThrow(HttpError);
    await expect(client.get("/protected")).rejects.toMatchObject({
      status: 401,
      isUnauthorized: true,
    });
  });

  it("validates response with Zod schema", async () => {
    const UserSchema = z.object({
      id: z.number(),
      name: z.string(),
    });

    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 1, name: "Alice" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );

    const client = new HttpClient();
    const res = await client.get("/user", { schema: UserSchema });
    expect(res.data).toEqual({ id: 1, name: "Alice" });

    // Failure case: missing field
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: "invalid-type" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );

    await expect(client.get("/user", { schema: UserSchema })).rejects.toThrow(ValidationError);
  });

  it("retries on 500 error when configured", async () => {
    let callCount = 0;
    globalThis.fetch = vi.fn().mockImplementation(() => {
      callCount++;
      if (callCount === 1) {
        return Promise.resolve(
          new Response("Server Error", { status: 500, statusText: "Internal Error" })
        );
      }
      return Promise.resolve(
        new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        })
      );
    });

    const client = new HttpClient();
    const res = await client.get("/flaky", {
      retries: { maxRetries: 2, delayMs: 10 },
    });

    expect(callCount).toBe(2);
    expect(res.data).toEqual({ success: true });
  });

  it("factory createHttpClient instantiates properly", () => {
    const custom = createHttpClient({ baseUrl: "https://auth.example.com" });
    expect(custom).toBeInstanceOf(HttpClient);
  });
});
