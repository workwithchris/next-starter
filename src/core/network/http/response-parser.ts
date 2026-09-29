import type { ResponseType } from "../types";

/**
 * Parses fetch response into the requested type (json, text, blob, arrayBuffer, formData)
 */
export async function parseResponseBody<T>(
  res: Response,
  responseType: ResponseType = "json"
): Promise<T> {
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
