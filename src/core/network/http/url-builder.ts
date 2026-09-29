import type { QueryParams } from "../types";

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
