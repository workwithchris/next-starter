"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/core/i18n/routing";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { BookOpen, ArrowLeft, Terminal } from "lucide-react";

export function DocsHeader() {
  const t = useTranslations("Docs");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#ebebeb] dark:border-[#262626] bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#666] dark:text-[#888] hover:text-[#171717] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>

          <span className="text-[#ebebeb] dark:text-[#262626]">|</span>

          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#0070f3]" />
            <span className="font-semibold text-sm tracking-tight text-[#171717] dark:text-[#ededed]">
              {t("headerTitle")}
            </span>
            <span className="rounded-full bg-[#0070f3]/10 dark:bg-[#0070f3]/20 px-2 py-0.5 text-[10px] font-mono text-[#0070f3] font-medium">
              v1.0.1
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#fafafa] dark:bg-[#121212] border border-[#ebebeb] dark:border-[#262626] font-mono text-xs text-[#666] dark:text-[#888]">
            <Terminal className="h-3 w-3 text-[#0070f3]" />
            <span>npx create-starter-next</span>
          </div>

          <LocaleSwitcher />
          <ThemeToggle />

          <a
            href="https://github.com/workwithchris/next-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#171717] dark:bg-white text-white dark:text-[#171717] px-3 py-1 text-xs font-medium hover:bg-black dark:hover:bg-zinc-200 transition-colors shadow-xs"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
