"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

interface DocsSidebarProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export function DocsSidebar({ activeSection, onSelectSection }: DocsSidebarProps) {
  const t = useTranslations("Docs");
  const [filterQuery, setFilterQuery] = useState("");

  const navGroups = [
    {
      title: t("gettingStartedGroup"),
      items: [
        { id: "quickstart", label: t("quickstartItem") },
        { id: "cli-options", label: t("cliOptionsItem") },
        { id: "presets", label: t("presetsItem") },
        { id: "design-systems", label: t("designSystemsItem") },
      ],
    },
    {
      title: t("architectureGroup"),
      items: [
        { id: "folder-structure", label: t("folderStructureItem") },
        { id: "auth", label: t("authItem") },
        { id: "network-suite", label: t("networkSuiteItem") },
        { id: "i18n", label: t("i18nItem") },
        { id: "state-management", label: t("stateManagementItem") },
      ],
    },
    {
      title: t("productionGroup"),
      items: [
        { id: "testing", label: t("testingItem") },
        { id: "deployment", label: t("deploymentItem") },
      ],
    },
  ];

  const q = filterQuery.toLowerCase().trim();

  return (
    <aside className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-[#ebebeb] dark:border-[#262626] p-4 md:p-6 bg-[#fafafa]/50 dark:bg-[#0c0c0c]/50 md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:overflow-y-auto">
      {/* Search Input */}
      <div className="relative mb-5">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#888]" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder="Filter docs..."
          className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#141414] text-[#171717] dark:text-[#ededed] placeholder:text-[#888] focus:outline-none focus:ring-1 focus:ring-[#0070f3]"
        />
      </div>

      <div className="space-y-6">
        {navGroups.map((group) => {
          const filteredItems = group.items.filter(
            (item) => !q || item.label.toLowerCase().includes(q) || item.id.includes(q)
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={group.title}>
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#888] dark:text-[#666] mb-2 font-semibold">
                {group.title}
              </h4>
              <ul className="space-y-1">
                {filteredItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => onSelectSection(item.id)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer flex items-center justify-between ${
                          isActive
                            ? "bg-white dark:bg-[#1a1a1a] text-[#0070f3] font-medium shadow-2xs border border-[#ebebeb] dark:border-[#262626]"
                            : "text-[#666] dark:text-[#888] hover:text-[#171717] dark:hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
