"use client";

import { useState } from "react";
import { Check, Copy, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [activePm, setActivePm] = useState<"pnpm" | "npm" | "bun" | "yarn">(
    "pnpm",
  );
  const t = useTranslations("Hero");

  const commands = {
    pnpm: "pnpm create starter-next my-app",
    npm: "npx create-starter-next my-app",
    bun: "bun create starter-next my-app",
    yarn: "yarn create starter-next my-app",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commands[activePm]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Ambient Multi-Stop Mesh Gradient from DESIGN.md */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-4xl hero-mesh-gradient"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Geist Mono Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur-sm px-3.5 py-1 text-xs font-mono text-muted-foreground mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="tracking-wider uppercase font-semibold text-[11px] text-foreground">
            {t("eyebrow")}
          </span>
          <span className="text-border">|</span>
          <span className="text-[11px]">{t("subEyebrow")}</span>
        </div>

        {/* Display XL Headline with tight -2.4px tracking as specified in DESIGN.md */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1.08] max-w-3xl mx-auto">
          {t("title")}
        </h1>

        {/* Body Lead Paragraph */}
        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        {/* Marketing CTA Pill Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://github.com/workwithchris/next-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-all shadow-sm group"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Star on GitHub</span>
            <ArrowRight className="h-4 w-4 ml-0.5 opacity-75 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#form-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card text-foreground px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors shadow-xs"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{t("formDemoButton")}</span>
          </a>
        </div>

        {/* Interactive CLI Terminal Block adhering to code-block in DESIGN.md */}
        <div className="mt-10 max-w-xl mx-auto text-left">
          <div className="rounded-xl border border-border bg-card shadow-[0_1px_3px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between border-b border-border px-3.5 py-2 bg-muted">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground font-medium">
                  {t("quickScaffold")}
                </span>
              </div>

              {/* Package Manager Switcher Tabs */}
              <div className="flex items-center gap-1 bg-secondary p-0.5 rounded-[6px]">
                {(["pnpm", "npm", "bun", "yarn"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setActivePm(pm)}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded-[4px] transition-colors ${
                      activePm === pm
                        ? "bg-card text-foreground font-medium shadow-2xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Command Line */}
            <div className="flex items-center justify-between p-3.5 gap-3">
              <div className="flex items-center gap-2.5 overflow-x-auto font-mono text-xs text-foreground scrollbar-none">
                <span className="text-muted-foreground select-none">$</span>
                <span className="whitespace-nowrap">{commands[activePm]}</span>
              </div>

              <button
                onClick={copyToClipboard}
                title={t("copySuccess")}
                className="shrink-0 p-1.5 rounded-[6px] border border-border text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
                aria-label="Copy command to clipboard"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-primary" />
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
