"use client";

import { useTranslations } from "next-intl";

export function FeaturesGrid() {
  const t = useTranslations("Features");
  const features = [
    {
      eyebrow: "NEXT.JS 16 & REACT 19",
      title: "App Router & Turbopack Ready",
      description:
        "Instant compilation times, React Server Components (RSC), and nested layout routing built on Next.js 16 with React 19.",
      tag: "Turbopack",
      illustration: (
        <div className="mt-4 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212] p-3 font-mono text-[11px] text-[#4d4d4d] dark:text-[#a1a1a1]">
          <div className="flex items-center justify-between pb-2 border-b border-[#ebebeb] dark:border-[#262626]">
            <span className="text-[#0070f3] font-medium">page.tsx (Server Component)</span>
            <span className="text-[#8f8f8f]">Streaming ⚡</span>
          </div>
          <div className="pt-2 pl-3 border-l-2 border-[#0070f3]/40 space-y-1">
            <div className="text-[#171717] dark:text-[#ededed]">↳ Suspense fallback=&lt;Skeleton /&gt;</div>
            <div className="text-[#8f8f8f] pl-3">↳ Dynamic Data Boundary</div>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "DESIGN & ACCESSIBILITY",
      title: "Tailwind CSS v4 & Base UI",
      description:
        "Modern CSS variable architecture without JavaScript overhead. Powered by Shadcn UI and accessible Base UI primitives.",
      tag: "Nova Preset",
      illustration: (
        <div className="mt-4 flex flex-wrap gap-2 items-center p-3 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212]">
          <span className="rounded-full bg-[#171717] dark:bg-white text-white dark:text-black text-xs px-3 py-1 font-medium">
            Primary Pill
          </span>
          <span className="rounded-[6px] border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#1e1e1e] text-[#171717] dark:text-[#ededed] text-xs px-2.5 py-1 font-medium">
            6px Nav Square
          </span>
          <span className="rounded-full border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#1e1e1e] text-[#8f8f8f] text-xs px-2.5 py-1 font-mono">
            border: 1px hairline
          </span>
        </div>
      ),
    },
    {
      eyebrow: "DATA & FORM VALIDATION",
      title: "Zod Schema & React Hook Form",
      description:
        "Type-safe form handling out-of-the-box. Instant client-side validation, error handling, and runtime schema coercion.",
      tag: "Strict Schema",
      illustration: (
        <div className="mt-4 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212] p-3 font-mono text-[11px]">
          <div className="text-[#7928ca] dark:text-[#a78bfa]">
            const <span className="text-[#0070f3]">schema</span> = z.object&#40;&#123;
          </div>
          <div className="pl-3 text-[#4d4d4d] dark:text-[#a1a1a1]">
            email: z.string().email(),
          </div>
          <div className="pl-3 text-[#4d4d4d] dark:text-[#a1a1a1]">
            project: z.string().min(3),
          </div>
          <div className="text-[#7928ca] dark:text-[#a78bfa]">&#125;&#41;;</div>
        </div>
      ),
    },
    {
      eyebrow: "SCALABLE ARCHITECTURE",
      title: "Domain-Driven Folder Layout",
      description:
        "Modular structure segregating core utilities, feature modules, and UI primitives for effortless multi-team collaboration.",
      tag: "Enterprise Pattern",
      illustration: (
        <div className="mt-4 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212] p-3 font-mono text-[11px] text-[#4d4d4d] dark:text-[#a1a1a1] space-y-1">
          <div>📁 <strong className="text-[#171717] dark:text-white">src/core</strong> (hooks, lib, network)</div>
          <div>📁 <strong className="text-[#171717] dark:text-white">src/modules</strong> (business domain)</div>
          <div>📁 <strong className="text-[#171717] dark:text-white">src/components</strong> (ui & layout)</div>
        </div>
      ),
    },
    {
      eyebrow: "FULLSTACK & BACKEND READY",
      title: "API Proxy & NestJS / Next Handlers",
      description:
        "Seamless fullstack integration. Ready for Next.js App Router route handlers, server actions, or a connected NestJS microservice.",
      tag: "Fullstack Ready",
      illustration: (
        <div className="mt-4 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212] p-3 font-mono text-[11px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#0070f3]/10 text-[#0070f3] px-1.5 py-0.5 font-semibold text-[10px]">
              POST
            </span>
            <span className="text-[#171717] dark:text-white">/api/v1/projects</span>
          </div>
          <span className="text-[#10b981] font-medium">200 OK • 14ms</span>
        </div>
      ),
    },
    {
      eyebrow: "PRODUCTION TOOLING",
      title: "TypeScript 5 & React Compiler",
      description:
        "Babel React Compiler plugin pre-configured for automatic memoization, accompanied by ESLint 9 and strict type safety.",
      tag: "Zero-Config",
      illustration: (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212] p-3 text-xs text-[#4d4d4d] dark:text-[#a1a1a1]">
          <span className="h-2 w-2 rounded-full bg-[#10b981]" />
          <span className="font-mono text-[11px]">useMemo / useCallback automated</span>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#fafafa] dark:bg-black transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
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

        {/* Feature Cards Grid adhering to feature-card from DESIGN.md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#0f0f0f] p-6 shadow-[0_1px_1px_rgba(0,0,0,0.03)] hover:border-[#d4d4d4] dark:hover:border-[#383838] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-medium text-[#8f8f8f] uppercase tracking-wider">
                    {feature.eyebrow}
                  </span>
                  <span className="font-mono text-[10px] rounded bg-[#f4f4f4] dark:bg-[#1c1c1c] text-[#4d4d4d] dark:text-[#a1a1a1] px-2 py-0.5 border border-[#ebebeb] dark:border-[#2c2c2c]">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#171717] dark:text-[#ededed]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#4d4d4d] dark:text-[#a1a1a1] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {feature.illustration}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
