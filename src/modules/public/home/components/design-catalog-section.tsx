"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  Search,
  Check,
  Copy,
  Sparkles,
  Palette,
  ExternalLink,
} from "lucide-react";
import { DESIGN_CATALOG } from "../data/designs";
import { DesignIcon } from "./design-icon";

type CategoryFilter =
  | "all"
  | "AI & LLM Platforms"
  | "Developer Tools & Frameworks"
  | "Cloud & Infrastructure"
  | "Aesthetic Archetypes";

export function DesignCatalogSection() {
  const t = useTranslations("DesignCatalog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDesigns = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return DESIGN_CATALOG.filter((design) => {
      const matchesCategory =
        selectedCategory === "all" || design.category === selectedCategory;
      const matchesQuery =
        !q ||
        design.title.toLowerCase().includes(q) ||
        design.id.toLowerCase().includes(q) ||
        design.description.toLowerCase().includes(q) ||
        design.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const copyCliCommand = (designId: string) => {
    const cmd = `npx create-starter-next my-app --design=${designId}`;
    navigator.clipboard.writeText(cmd);
    setCopiedId(designId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: t("allTab") },
    { id: "AI & LLM Platforms", label: t("aiTab") },
    { id: "Developer Tools & Frameworks", label: t("devToolsTab") },
    { id: "Cloud & Infrastructure", label: t("cloudTab") },
    { id: "Aesthetic Archetypes", label: t("archetypesTab") },
  ];

  return (
    <section
      id="design-systems"
      className="relative border-b border-border py-20 sm:py-28 bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1 text-xs font-mono text-muted-foreground mb-4">
            <Palette className="h-3.5 w-3.5 text-primary" />
            <span className="tracking-wider uppercase font-semibold text-[11px] text-foreground">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-foreground">
            {t("title")}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Verified compatibility with Google Stitch &amp;</span>
            <a
              href="https://getdesign.md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline inline-flex items-center gap-0.5"
            >
              getdesign.md
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 bg-background rounded-lg border border-border scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-card text-foreground shadow-2xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Design Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDesigns.map((design) => {
              const isCopied = copiedId === design.id;
              return (
                <div
                  key={design.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-border bg-background/50 p-5 hover:border-primary/40 transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  <div>
                    {/* Top Row: Icon, Title, Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-8 w-8 rounded-lg border border-border bg-card shadow-2xs shrink-0">
                          <DesignIcon id={design.id} className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm text-foreground leading-snug">
                            {design.title}
                          </h3>
                          <span className="text-[11px] text-muted-foreground font-mono">
                            {design.id}
                          </span>
                        </div>
                      </div>

                      {design.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-primary/10 text-primary shrink-0">
                          {design.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {design.description}
                    </p>

                    {/* Token specs metadata */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground mb-4">
                      <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5">
                        radius: {design.radius}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5">
                        id: {design.id}
                      </span>
                    </div>
                  </div>

                  {/* Copy CLI Flag Button */}
                  <button
                    onClick={() => copyCliCommand(design.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all cursor-pointer group/btn"
                  >
                    <span className="truncate pr-2 select-all">
                      --design={design.id}
                    </span>
                    <span className="shrink-0 flex items-center gap-1 font-sans text-[11px] font-medium text-primary">
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>{t("copied")}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                          <span className="hidden sm:inline text-muted-foreground group-hover/btn:text-primary">
                            {t("copyCommand")}
                          </span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-border rounded-xl">
            <Sparkles className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">{t("emptyResults")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
