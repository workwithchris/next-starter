/**
 * Utility to check if a body is FormData
 */
export function isFormData(body: unknown): body is FormData {
  return typeof FormData !== "undefined" && body instanceof FormData;
}

/**
 * Utility to check if a body is a binary or stream payload
 */
export function isBinaryOrStream(body: unknown): boolean {
  if (typeof Blob !== "undefined" && body instanceof Blob) return true;
  if (typeof ArrayBuffer !== "undefined" && body instanceof ArrayBuffer) return true;
  if (typeof URLSearchParams !== "undefined" && body instanceof URLSearchParams) return true;
  if (typeof ReadableStream !== "undefined" && body instanceof ReadableStream) return true;
  return false;
}

/**
 * Converts a plain object containing files, blobs, or primitives into FormData
 */
export function toFormData(data: Record<string, unknown>): FormData {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    if (value === undefined || value === null) continue;

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (item instanceof Blob || item instanceof File) {
          formData.append(key, item);
        } else if (typeof item === "object") {
          formData.append(key, JSON.stringify(item));
        } else {
          formData.append(key, String(item));
        }
      }
    } else if (value instanceof Blob || value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  }

  return formData;
}
