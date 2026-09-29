import type { ApiResponse, RequestOptions } from "../types";

/**
 * Downloads a file as a Blob and triggers browser download if filename is provided
 */
export async function downloadBlob(
  path: string,
  filename?: string,
  options?: RequestOptions,
  getBlob?: (path: string, opts?: RequestOptions) => Promise<ApiResponse<Blob>>
): Promise<Blob> {
  if (!getBlob) {
    throw new Error("getBlob executor function is required");
  }

  const res = await getBlob(path, { ...options, responseType: "blob" });
  const blob = res.data;

  if (filename && typeof window !== "undefined" && typeof document !== "undefined") {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  return blob;
}
