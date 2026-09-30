"use client";

import { useState } from "react";
import { Copy, Check, Sparkles, SlidersHorizontal } from "lucide-react";
import { DESIGN_CATALOG, DesignSystem } from "@/modules/public/home/data/designs";
import { DesignIcon } from "@/modules/public/home/components/design-icon";

const CATEGORIES = [
  "All",
  "AI & LLM Platforms",
  "Developer Tools & Frameworks",
  "Cloud & Infrastructure",
  "Aesthetic Archetypes",
] as const;

export function DocsDesignShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState("");
  const [activePreview, setActivePreview] = useState<DesignSystem | null>(null);

  const q = searchFilter.toLowerCase().trim();

  const filteredDesigns = DESIGN_CATALOG.filter((d) => {
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    const matchesSearch =
      !q ||
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.id.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const copyCommand = (id: string) => {
    navigator.clipboard.writeText(`npx create-starter-next --design ${id}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#f5f5f5] dark:bg-[#141414] border border-[#ebebeb] dark:border-[#262626]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white dark:bg-[#222] text-[#171717] dark:text-white shadow-2xs"
                  : "text-[#666] dark:text-[#888] hover:text-[#171717] dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter 20+ themes..."
            className="w-full sm:w-48 pl-3 pr-3 py-1.5 text-xs rounded-lg border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#141414] text-[#171717] dark:text-[#ededed] placeholder:text-[#888] focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
          />
        </div>
      </div>

      {/* Grid of Design Systems */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredDesigns.map((design) => {
          const isCopied = copiedId === design.id;

          return (
            <div
              key={design.id}
              className="group relative flex flex-col justify-between p-4 rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#111111] hover:border-[#ccc] dark:hover:border-[#383838] transition-all hover:shadow-xs"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#181818]"
                      style={{
                        boxShadow: `0 0 12px ${design.brandColor}15`,
                      }}
                    >
                      <DesignIcon id={design.id} className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#171717] dark:text-white flex items-center gap-1.5">
                        {design.title}
                        {design.badge && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-[#0070f3]/10 text-[#0070f3]">
                            {design.badge}
                          </span>
                        )}
                      </h4>
                      <span className="text-[10px] font-mono text-[#888]">--design {design.id}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => copyCommand(design.id)}
                    title={`Copy: npx create-starter-next --design ${design.id}`}
                    className="p-1.5 rounded-md border border-[#ebebeb] dark:border-[#262626] text-[#666] dark:text-[#888] hover:text-[#171717] dark:hover:text-white hover:bg-[#fafafa] dark:hover:bg-[#1f1f1f] transition-colors cursor-pointer"
                  >
                    {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Description */}
                <p className="text-[11px] text-[#666] dark:text-[#999] line-clamp-2 leading-relaxed mb-3">
                  {design.description}
                </p>
              </div>

              {/* Tokens Preview Strip */}
              <div className="pt-2 border-t border-[#f0f0f0] dark:border-[#1e1e1e] flex items-center justify-between text-[10px] font-mono text-[#888]">
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-3 w-3 rounded-full border border-black/10 dark:border-white/10"
                    style={{ backgroundColor: design.brandColor }}
                    title={`Primary: ${design.primary}`}
                  />
                  <span>radius: {design.radius}</span>
                </div>

                <button
                  onClick={() => setActivePreview(activePreview?.id === design.id ? null : design)}
                  className="text-[#0070f3] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <SlidersHorizontal className="h-2.5 w-2.5" />
                  <span>{activePreview?.id === design.id ? "Hide Spec" : "View Spec"}</span>
                </button>
              </div>

              {/* Expandable Spec Detail */}
              {activePreview?.id === design.id && (
                <div className="mt-3 pt-3 border-t border-[#ebebeb] dark:border-[#262626] space-y-2 text-[10px] font-mono">
                  <div className="p-2 rounded bg-[#fafafa] dark:bg-[#181818] border border-[#ebebeb] dark:border-[#262626] space-y-1">
                    <div className="text-[#666] dark:text-[#888]">{"/* OKLCH Token Map */"}</div>
                    <div className="text-emerald-600 dark:text-emerald-400">--primary: {design.primary};</div>
                    <div className="text-sky-600 dark:text-sky-400">--accent: {design.accent};</div>
                    <div className="text-amber-600 dark:text-amber-400">--radius: {design.radius};</div>
                  </div>
                  <div className="text-[#666] dark:text-[#888] flex items-center justify-between">
                    <span>CLI flag:</span>
                    <span className="text-[#171717] dark:text-white">--design {design.id}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredDesigns.length === 0 && (
        <div className="p-8 text-center border border-dashed border-[#ebebeb] dark:border-[#262626] rounded-xl text-xs text-[#888]">
          No design systems match &quot;{searchFilter}&quot; in category &quot;{selectedCategory}&quot;.
        </div>
      )}

      {/* Quick Scaffold Callout */}
      <div className="p-4 rounded-xl border border-[#0070f3]/20 bg-[#0070f3]/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-[#0070f3]">
          <Sparkles className="h-4 w-4 shrink-0" />
          <span>All 20+ design archetypes are verified against getdesign.md specifications and generate native OKLCH tokens.</span>
        </div>
      </div>
    </div>
  );
}
