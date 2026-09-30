"use client";

import { useState } from "react";
import { Check, Copy, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activePm, setActivePm] = useState<"pnpm" | "npm" | "bun" | "yarn">("pnpm");
  const t = useTranslations("Hero");

  const commands = {
    pnpm: "git clone https://github.com/workwithchris/next-starter.git my-app",
    npm: "git clone https://github.com/workwithchris/next-starter.git my-app",
    bun: "git clone https://github.com/workwithchris/next-starter.git my-app",
    yarn: "git clone https://github.com/workwithchris/next-starter.git my-app",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commands[activePm]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Vercel Ambient Multi-Stop Mesh Gradient from DESIGN.md */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-4xl vercel-mesh-gradient"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Geist Mono Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-white/90 dark:bg-[#121212]/90 backdrop-blur-sm px-3.5 py-1 text-xs font-mono text-[#4d4d4d] dark:text-[#a1a1a1] mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0070f3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0070f3]"></span>
          </span>
          <span className="tracking-wider uppercase font-semibold text-[11px] text-[#171717] dark:text-[#ededed]">
            {t("eyebrow")}
          </span>
          <span className="text-[#ebebeb] dark:text-[#333]">|</span>
          <span className="text-[11px]">{t("subEyebrow")}</span>
        </div>

        {/* Display XL Headline with tight -2.4px tracking as specified in DESIGN.md */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-[#171717] dark:text-[#ededed] leading-[1.08] max-w-3xl mx-auto">
          {t("title")}
        </h1>

        {/* Body Lead Paragraph */}
        <p className="mt-5 text-base sm:text-lg text-[#4d4d4d] dark:text-[#a1a1a1] max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        {/* Marketing CTA Pill Buttons (button-primary & button-secondary rounded-[100px]) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] px-6 py-2.5 text-sm font-medium hover:bg-black dark:hover:bg-zinc-200 transition-all shadow-sm group"
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
            href="#form-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] text-[#171717] dark:text-[#ededed] px-6 py-2.5 text-sm font-medium hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c] transition-colors shadow-xs"
          >
            <Sparkles className="h-4 w-4 text-[#0070f3]" />
            <span>{t("formDemoButton")}</span>
          </a>
        </div>

        {/* Interactive CLI Terminal Block adhering to code-block in DESIGN.md */}
        <div className="mt-10 max-w-xl mx-auto text-left">
          <div className="rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#101010] shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-[#ebebeb] dark:border-[#262626] px-3.5 py-2 bg-[#fafafa] dark:bg-[#141414]">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-[#8f8f8f]" />
                <span className="font-mono text-xs text-[#8f8f8f] font-medium">{t("quickScaffold")}</span>
              </div>

              {/* Package Manager Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#f0f0f0] dark:bg-[#1f1f1f] p-0.5 rounded-[6px]">
                {(["pnpm", "npm", "bun", "yarn"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setActivePm(pm)}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded-[4px] transition-colors ${
                      activePm === pm
                        ? "bg-white dark:bg-[#2c2c2c] text-[#171717] dark:text-white font-medium shadow-2xs"
                        : "text-[#8f8f8f] hover:text-[#171717] dark:hover:text-zinc-200"
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Command Line */}
            <div className="flex items-center justify-between p-3.5 gap-3">
              <div className="flex items-center gap-2.5 overflow-x-auto font-mono text-xs text-[#171717] dark:text-[#ededed] scrollbar-none">
                <span className="text-[#8f8f8f] select-none">$</span>
                <span className="whitespace-nowrap">{commands[activePm]}</span>
              </div>

              <button
                onClick={copyToClipboard}
                title={t("copySuccess")}
                className="shrink-0 p-1.5 rounded-[6px] border border-[#ebebeb] dark:border-[#262626] text-[#4d4d4d] dark:text-[#a1a1a1] hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c] transition-colors cursor-pointer"
                aria-label="Copy command to clipboard"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[#0070f3]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
