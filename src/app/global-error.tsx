"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 p-6 font-sans text-zinc-100 antialiased">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">System Initialization Error</h1>
          <p className="mt-2 text-sm text-zinc-400">
            A critical error occurred while initializing the application layout.
          </p>
          {error.digest && (
            <p className="mt-3 font-mono text-xs text-zinc-500">
              Digest: {error.digest}
            </p>
          )}
          <button
            onClick={() => reset()}
            className="mt-6 inline-flex h-9 items-center justify-center rounded-lg bg-zinc-100 px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}
