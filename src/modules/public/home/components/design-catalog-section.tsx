"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Search, Check, Copy, Sparkles, Palette, ExternalLink } from "lucide-react";
import { DESIGN_CATALOG } from "../data/designs";
import { DesignIcon } from "./design-icon";

type CategoryFilter = "all" | "AI & LLM Platforms" | "Developer Tools & Frameworks" | "Cloud & Infrastructure" | "Aesthetic Archetypes";

export function DesignCatalogSection() {
  const t = useTranslations("DesignCatalog");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDesigns = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return DESIGN_CATALOG.filter((design) => {
      const matchesCategory = selectedCategory === "all" || design.category === selectedCategory;
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
    <section id="design-systems" className="relative border-b border-[#ebebeb] dark:border-[#262626] py-20 sm:py-28 bg-white dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3.5 py-1 text-xs font-mono text-[#666] dark:text-[#a1a1a1] mb-4">
            <Palette className="h-3.5 w-3.5 text-[#0070f3]" />
            <span className="tracking-wider uppercase font-semibold text-[11px] text-[#171717] dark:text-[#ededed]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#171717] dark:text-[#ededed]">
            {t("title")}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#666] dark:text-[#a1a1a1] leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#888] dark:text-[#777]">
            <span>Verified compatibility with Google Stitch &amp;</span>
            <a
              href="https://getdesign.md"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#0070f3] hover:underline inline-flex items-center gap-0.5"
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
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212] text-[#171717] dark:text-[#ededed] placeholder:text-[#888] focus:outline-none focus:ring-1 focus:ring-[#0070f3] transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 bg-[#fafafa] dark:bg-[#141414] rounded-lg border border-[#ebebeb] dark:border-[#262626] scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-white dark:bg-[#262626] text-[#171717] dark:text-white shadow-2xs font-semibold"
                    : "text-[#666] dark:text-[#888] hover:text-[#171717] dark:hover:text-[#ededed]"
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
                  className="group relative flex flex-col justify-between rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa]/50 dark:bg-[#111111]/50 p-5 hover:border-[#d4d4d4] dark:hover:border-[#383838] transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  <div>
                    {/* Top Row: Icon, Title, Badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-8 w-8 rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#181818] shadow-2xs shrink-0">
                          <DesignIcon id={design.id} className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm text-[#171717] dark:text-[#ededed] leading-snug">
                            {design.title}
                          </h3>
                          <span className="text-[11px] text-[#888] dark:text-[#666] font-mono">
                            {design.id}
                          </span>
                        </div>
                      </div>

                      {design.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#0070f3]/10 text-[#0070f3] dark:bg-[#0070f3]/20 shrink-0">
                          {design.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#666] dark:text-[#888] leading-relaxed mb-4">
                      {design.description}
                    </p>

                    {/* Token specs metadata */}
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#888] dark:text-[#666] mb-4">
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
                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#161616] text-[#444] dark:text-[#aaa] hover:text-[#171717] dark:hover:text-white hover:border-[#d4d4d4] dark:hover:border-[#404040] transition-all cursor-pointer group/btn"
                  >
                    <span className="truncate pr-2 select-all">
                      --design={design.id}
                    </span>
                    <span className="shrink-0 flex items-center gap-1 font-sans text-[11px] font-medium text-[#0070f3]">
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>{t("copied")}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-[#888] group-hover/btn:text-[#0070f3] transition-colors" />
                          <span className="hidden sm:inline text-[#666] dark:text-[#888] group-hover/btn:text-[#0070f3]">
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
          <div className="text-center py-16 border border-dashed border-[#ebebeb] dark:border-[#262626] rounded-xl">
            <Sparkles className="h-6 w-6 text-[#888] mx-auto mb-2" />
            <p className="text-sm text-[#666] dark:text-[#888]">{t("emptyResults")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
