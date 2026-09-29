import { HttpError, NetworkError, TimeoutError } from "../errors";
import type { ApiResponse, MultipartUploadOptions } from "../types";
import { buildQueryString, resolveUrl } from "./url-builder";
import { isFormData, toFormData } from "./form-data";

/**
 * Uploads multipart form data with optional progress callback
 */
export async function uploadMultipart<T = unknown>(
  path: string,
  data: FormData | Record<string, unknown>,
  options: MultipartUploadOptions = {},
  fallbackPost: (path: string, body: FormData, opts: MultipartUploadOptions) => Promise<ApiResponse<T>>
): Promise<ApiResponse<T>> {
  const formData = isFormData(data) ? data : toFormData(data);

  // If onProgress is supplied and running in browser, use XMLHttpRequest for accurate upload progress
  if (options.onProgress && typeof window !== "undefined" && typeof XMLHttpRequest !== "undefined") {
    return new Promise<ApiResponse<T>>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const fullUrl = resolveUrl(path, options.baseUrl) + buildQueryString(options.params);

      xhr.open(options.method || "POST", fullUrl, true);

      // Set custom headers (excluding Content-Type so browser sets boundary)
      if (options.headers) {
        const headers =
          options.headers instanceof Headers
            ? Object.fromEntries(options.headers.entries())
            : options.headers;

        for (const [k, v] of Object.entries(headers)) {
          if (k.toLowerCase() !== "content-type" && v) {
            xhr.setRequestHeader(k, v);
          }
        }
      }

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && options.onProgress) {
          options.onProgress({
            loaded: event.loaded,
            total: event.total,
            percentage: Math.round((event.loaded / event.total) * 100),
          });
        }
      };

      xhr.onload = () => {
        const responseHeaders = new Headers();
        const rawHeaders = xhr.getAllResponseHeaders();
        rawHeaders
          .trim()
          .split(/[\r\n]+/)
          .forEach((line) => {
            const parts = line.split(": ");
            const header = parts.shift();
            const value = parts.join(": ");
            if (header) responseHeaders.set(header, value);
          });

        let parsedData: unknown = xhr.responseText;
        try {
          parsedData = JSON.parse(xhr.responseText);
        } catch {
          // Keep as string
        }

        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            data: parsedData as T,
            status: xhr.status,
            statusText: xhr.statusText,
            headers: responseHeaders,
            raw: new Response(xhr.responseText, {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: responseHeaders,
            }),
          });
        } else {
          reject(
            new HttpError(
              `Upload failed: ${xhr.status} ${xhr.statusText}`,
              xhr.status,
              xhr.statusText,
              parsedData,
              responseHeaders
            )
          );
        }
      };

      xhr.onerror = () => reject(new NetworkError("Upload network failure"));
      xhr.ontimeout = () => reject(new TimeoutError("Upload timed out"));

      xhr.send(formData);
    });
  }

  return fallbackPost(path, formData, options);
}
