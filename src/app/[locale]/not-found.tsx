"use client";

import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/core/i18n/routing";
import { FileQuestion, Home } from "lucide-react";
import { cn } from "cn";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl border border-border bg-muted/50 text-foreground shadow-sm">
        <FileQuestion className="size-7 text-muted-foreground" />
      </div>

      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        404 • Page Not Found
      </span>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
        {t("description")}
      </p>

      <div className="mt-8 flex items-center justify-center">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "default" }), "gap-2")}
        >
          <Home className="size-4" />
          {t("homeButton")}
        </Link>
      </div>
    </main>
  );
}
