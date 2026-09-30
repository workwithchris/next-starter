"use client";

import { Code2, GitPullRequest, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export function VercelTriad() {
  const t = useTranslations("VercelTriad");
  const pillars = [
    {
      step: "01",
      name: "Develop",
      tagline: "Instant feedback loop with Next.js 16 & Turbopack",
      description:
        "Code with zero-lag Hot Module Replacement (HMR). Strict TypeScript compiler checking and React 19 compiler optimization without boilerplate.",
      gradientBar: "from-[#007cf0] to-[#00dfd8]",
      icon: Code2,
      specs: ["Turbopack dev server", "React 19 Server Actions", "Strict TypeScript 5"],
    },
    {
      step: "02",
      name: "Preview",
      tagline: "Collaborative preview environments on every branch",
      description:
        "Every push generates an isolated preview URL with automated Lighthouse performance scoring, accessibility audits, and team feedback threads.",
      gradientBar: "from-[#7928ca] to-[#ff0080]",
      icon: GitPullRequest,
      specs: ["Automatic branch deploy", "Instant cache invalidation", "Visual regression check"],
    },
    {
      step: "03",
      name: "Ship",
      tagline: "Global edge CDN distribution with zero cold starts",
      description:
        "Deploy globally in seconds. Route Handlers, static assets, and incremental cache updates delivered across 300+ edge points of presence.",
      gradientBar: "from-[#ff4d4d] to-[#f9cb28]",
      icon: Rocket,
      specs: ["Global edge network", "Automated SSL & DNS", "99.99% uptime guarantee"],
    },
  ];

  return (
    <section className="py-20 bg-[#fafafa] dark:bg-black transition-colors border-t border-[#ebebeb] dark:border-[#262626]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8f8f8f] font-medium">
            {t("eyebrow")}
          </span>
          <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-[#171717] dark:text-[#ededed]">
            {t("title")}
          </h2>
          <p className="mt-2 text-base text-[#4d4d4d] dark:text-[#a1a1a1]">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className="group relative rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#0f0f0f] p-6 shadow-xs hover:border-[#d4d4d4] dark:hover:border-[#383838] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Distinctive Top 2-stop Gradient Line from DESIGN.md */}
                  <div
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${pillar.gradientBar} mb-4 transition-all group-hover:w-20`}
                  />

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-[#8f8f8f] font-medium">
                      PHASE {pillar.step}
                    </span>
                    <Icon className="h-4 w-4 text-[#8f8f8f] group-hover:text-[#171717] dark:group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
                    {pillar.name}
                  </h3>
                  <p className="mt-1 font-medium text-xs text-[#171717]/80 dark:text-zinc-300">
                    {pillar.tagline}
                  </p>
                  <p className="mt-3 text-xs text-[#4d4d4d] dark:text-[#a1a1a1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#ebebeb] dark:border-[#262626] space-y-1.5">
                  {pillar.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-[11px] font-mono text-[#8f8f8f]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#171717] dark:bg-zinc-400" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
