"use client";

import { useTranslations } from "next-intl";

export function TechStackStrip() {
  const t = useTranslations("TechStack");

  const technologies = [
    {
      name: "Next.js 16",
      role: "App Router & Turbopack",
      badge: "Core Framework",
      version: "v16.3",
    },
    {
      name: "React 19",
      role: "React Compiler & Server Actions",
      badge: "Runtime",
      version: "v19.2",
    },
    {
      name: "Tailwind CSS v4",
      role: "CSS Theme Engine & Zero-runtime",
      badge: "Styling",
      version: "v4.0",
    },
    {
      name: "Base UI / Shadcn",
      role: "Accessible UI Primitive Architecture",
      badge: "Design System",
      version: "Nova",
    },
    {
      name: "Zod Schema",
      role: "Runtime Type-safe Validation",
      badge: "Validation",
      version: "v4.6",
    },
    {
      name: "React Hook Form",
      role: "Performant Form State Management",
      badge: "Forms",
      version: "v7.89",
    },
    {
      name: "TypeScript 5",
      role: "Strict Type Inference & Safety",
      badge: "Language",
      version: "v5.8",
    },
    {
      name: "Modular Core",
      role: "Clean Architecture (App/Core/Modules)",
      badge: "Pattern",
      version: "Production",
    },
  ];

  return (
    <section
      id="stack"
      className="border-y border-border bg-card py-12 transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-medium">
              {t("eyebrow")}
            </span>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">
              {t("title")}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            {t("description")}
          </p>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-xl border border-border bg-background/60 p-4 transition-all hover:bg-card hover:border-primary/40 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  {tech.badge}
                </span>
                <span className="font-mono text-[11px] rounded bg-card border border-border px-1.5 py-0.2 text-muted-foreground">
                  {tech.version}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-snug line-clamp-2">
                {tech.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
