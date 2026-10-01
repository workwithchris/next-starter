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
        <div className="mt-4 rounded-lg border border-border bg-background p-3 font-mono text-[11px] text-muted-foreground">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <span className="text-primary font-medium">
              page.tsx (Server Component)
            </span>
            <span className="text-muted-foreground">Streaming ⚡</span>
          </div>
          <div className="pt-2 pl-3 border-l-2 border-primary/40 space-y-1">
            <div className="text-foreground">
              ↳ Suspense fallback=&lt;Skeleton /&gt;
            </div>
            <div className="text-muted-foreground pl-3">
              ↳ Dynamic Data Boundary
            </div>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "DESIGN & ACCESSIBILITY",
      title: "getdesign.md & Tailwind CSS v4",
      description:
        "Select from 20+ real-world design systems (Linear, Supabase, Claude, Stripe). Powered by OKLCH CSS tokens, Base UI primitives, and 1px hairlines.",
      tag: "20+ Themes",
      illustration: (
        <div className="mt-4 flex flex-wrap gap-2 items-center p-3 rounded-lg border border-border bg-background">
          <span className="rounded-full bg-primary text-primary-foreground text-xs px-3 py-1 font-medium">
            getdesign.md
          </span>
          <span className="rounded-[6px] border border-border bg-card text-foreground text-xs px-2.5 py-1 font-medium">
            Linear / Claude
          </span>
          <span className="rounded-full border border-border bg-card text-muted-foreground text-xs px-2.5 py-1 font-mono">
            OKLCH Tokens
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
        <div className="mt-4 rounded-lg border border-border bg-background p-3 font-mono text-[11px]">
          <div className="text-accent-foreground">
            const <span className="text-primary">schema</span> =
            z.object&#40;&#123;
          </div>
          <div className="pl-3 text-muted-foreground">
            email: z.string().email(),
          </div>
          <div className="pl-3 text-muted-foreground">
            project: z.string().min(3),
          </div>
          <div className="text-accent-foreground">&#125;&#41;;</div>
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
        <div className="mt-4 rounded-lg border border-border bg-background p-3 font-mono text-[11px] text-muted-foreground space-y-1">
          <div>
            📁 <strong className="text-foreground">src/core</strong> (hooks,
            lib, network)
          </div>
          <div>
            📁 <strong className="text-foreground">src/modules</strong>{" "}
            (business domain)
          </div>
          <div>
            📁 <strong className="text-foreground">src/components</strong> (ui &
            layout)
          </div>
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
        <div className="mt-4 rounded-lg border border-border bg-background p-3 font-mono text-[11px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded bg-primary/10 text-primary px-1.5 py-0.5 font-semibold text-[10px]">
              POST
            </span>
            <span className="text-foreground">/api/v1/projects</span>
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
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-background p-3 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-[#10b981]" />
          <span className="font-mono text-[11px]">
            useMemo / useCallback automated
          </span>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-background transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">
            {t("eyebrow")}
          </span>
          <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Feature Cards Grid adhering to feature-card from DESIGN.md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card text-card-foreground p-6 shadow-[0_1px_1px_rgba(0,0,0,0.03)] hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    {feature.eyebrow}
                  </span>
                  <span className="font-mono text-[10px] rounded bg-muted text-muted-foreground px-2 py-0.5 border border-border">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
