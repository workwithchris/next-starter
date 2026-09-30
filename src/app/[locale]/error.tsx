"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/core/i18n/routing";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { cn } from "cn";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    // Log client boundary error for diagnostics
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl border border-destructive/30 bg-destructive/10 text-destructive shadow-sm">
        <AlertCircle className="size-7" />
      </div>

      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        500 • Internal Error
      </span>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
        {t("description")}
      </p>

      {error.digest && (
        <code className="mt-4 rounded border border-border bg-muted/50 px-2 py-1 font-mono text-xs text-muted-foreground">
          Digest: {error.digest}
        </code>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={() => reset()} variant="default" className="gap-2">
          <RotateCcw className="size-4" />
          {t("retryButton")}
        </Button>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
        >
          <Home className="size-4" />
          {t("homeButton")}
        </Link>
      </div>
    </main>
  );
}
