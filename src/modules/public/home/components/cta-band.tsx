"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CtaBand() {
  const t = useTranslations("CtaBand");

  return (
    <section className="py-24 bg-[#fafafa] dark:bg-black border-t border-[#ebebeb] dark:border-[#262626] transition-colors relative overflow-hidden">
      {/* Ambient background hint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/[0.02] dark:from-white/[0.02] to-transparent"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-[#8f8f8f] font-medium">
          {t("eyebrow")}
        </span>

        {/* Display Typography */}
        <h2 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-[#171717] dark:text-[#ededed] leading-tight">
          {t("title")}
        </h2>

        <p className="mt-4 text-base text-[#4d4d4d] dark:text-[#a1a1a1] max-w-xl mx-auto">
          {t("description")}
        </p>

        {/* Dual Marketing CTA Pills */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] px-7 py-3 text-sm font-medium hover:bg-black dark:hover:bg-zinc-200 transition-all shadow-sm group"
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 76 65"
              fill="currentColor"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
            </svg>
            <span>{t("deployButton")}</span>
            <ArrowRight className="h-4 w-4 ml-0.5 opacity-75 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/workwithchris/next-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] text-[#171717] dark:text-[#ededed] px-7 py-3 text-sm font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c] transition-colors shadow-xs"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>{t("githubButton")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
