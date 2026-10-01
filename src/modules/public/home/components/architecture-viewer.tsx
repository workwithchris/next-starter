"use client";

import { useState } from "react";
import { Folder, FileCode, Check, Layers, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export function ArchitectureViewer() {
  const t = useTranslations("Architecture");
  const [selectedPath, setSelectedPath] = useState<string>("src/core");

  const structureDetails: Record<
    string,
    { title: string; description: string; files: string[]; badge: string }
  > = {
    "src/core": {
      title: "Core Infrastructure & Shared Utilities",
      description:
        "Houses enterprise shared primitives: HTTP fetch wrappers, network clients, custom hooks, and shared TypeScript helper definitions. Agnostic of business features.",
      badge: "Shared Foundation",
      files: [
        "src/core/auth/ (Auth.js server configuration & providers)",
        "src/core/network/ (type-safe HTTP, SSE, & WebSocket suite)",
        "src/core/store/ (Zustand state slices & persistence)",
        "src/core/lib/utils.ts (cn classnames resolver)",
      ],
    },
    "src/modules": {
      title: "Domain-Driven Feature Modules",
      description:
        "Self-contained business modules. Each module bundles its domain models, API queries/mutations, schemas, and UI components together for loose coupling.",
      badge: "Domain Driven",
      files: [
        "src/modules/home/home.tsx (SSR Home View Entrypoint)",
        "src/modules/home/components/ (Domain UI components)",
        "src/modules/auth/ (authentication flows & session)",
      ],
    },
    "src/components": {
      title: "Design System & UI Primitives",
      description:
        "Global UI components following Base UI & Shadcn Nova presets. Styled with Tailwind CSS v4 variables and strict keyboard accessibility.",
      badge: "Design Tokens",
      files: [
        "src/components/ui/button.tsx (cva & Base UI button)",
        "src/components/layouts/ (cross-app structural shells)",
      ],
    },
    "src/app": {
      title: "Next.js App Router (File-System Routing)",
      description:
        "Next.js 16 layouts, streaming page components, error boundaries, loading skeletons, and API route handlers.",
      badge: "App Router",
      files: [
        "src/app/layout.tsx (Root layout & Geist font variables)",
        "src/app/page.tsx (SSR Server Component delegating to modules/home)",
        "src/app/globals.css (Tailwind v4 theme & Geist tokens)",
        "src/app/api/ (Edge Route Handlers & Microservices)",
      ],
    },
    "DESIGN.md": {
      title: "Geist Design System Specification",
      description:
        "The machine-readable and human-readable design system manifest. Defines colors (#171717 ink on #fafafa canvas), Geist typography, 1px hairlines, and dual button radius rules.",
      badge: "Design Spec",
      files: [
        "Color Tokens: Ink #171717, Canvas #fafafa, Hairline #ebebeb",
        "Typography: Geist Sans Display (-2.4px tracking), Geist Mono Eyebrows",
        "Buttons: 100px Marketing Pills vs. 6px App Squares",
      ],
    },
  };

  const current =
    structureDetails[selectedPath] || structureDetails["src/core"];

  return (
    <section
      id="architecture"
      className="py-20 border-t border-border bg-card transition-colors"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        {/* Interactive Explorer Card */}
        <div className="rounded-xl border border-border bg-background/50 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Directory Tree Selector */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border p-4 bg-card">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-border text-xs font-mono text-muted-foreground">
                <Layers className="h-3.5 w-3.5" />
                <span>PROJECT TREE EXPLORER</span>
              </div>

              <div className="space-y-1 font-mono text-xs">
                {Object.keys(structureDetails).map((path) => {
                  const isSelected = selectedPath === path;
                  return (
                    <button
                      key={path}
                      onClick={() => setSelectedPath(path)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-[6px] transition-colors text-left cursor-pointer ${
                        isSelected
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {path.endsWith(".md") ? (
                          <FileCode className="h-3.5 w-3.5 shrink-0" />
                        ) : (
                          <Folder className="h-3.5 w-3.5 shrink-0" />
                        )}
                        <span className="truncate">{path}</span>
                      </div>
                      <span className="text-[10px] opacity-75 font-sans">
                        select
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Deep-dive Detail */}
            <div className="lg:col-span-8 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-primary font-medium">
                    {current.badge}
                  </span>
                  <span className="font-mono text-xs rounded bg-card border border-border px-2 py-0.5 text-muted-foreground">
                    {selectedPath}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {current.description}
                </p>

                <div className="mt-6">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                    Key File Manifest
                  </span>
                  <div className="space-y-2">
                    {current.files.map((file) => (
                      <div
                        key={file}
                        className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-2.5 text-xs font-mono text-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-[#10b981] mt-0.5 shrink-0" />
                        <span>{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-primary" />
                  <span>
                    Configured with Next.js 16 tsconfig path aliases (@/*)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
