"use client";

import { DocsHeader } from "./components/docs-header";
import { DocsSidebar } from "./components/docs-sidebar";
import { DocsContent } from "./components/docs-content";
import { useDocsScrollSpy } from "./hooks/use-docs-scroll-spy";

const DOCS_SECTIONS = [
  "quickstart",
  "cli-options",
  "presets",
  "design-systems",
  "folder-structure",
  "auth",
  "network-suite",
  "i18n",
  "state-management",
  "testing",
  "deployment",
];

export function Docs() {
  const { activeSection, scrollToSection } = useDocsScrollSpy(DOCS_SECTIONS, "quickstart");

  return (
    <div className="min-h-screen bg-white dark:bg-black text-[#171717] dark:text-[#ededed] font-sans antialiased">
      {/* Fixed Documentation Header */}
      <DocsHeader />

      {/* Main Documentation Layout */}
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-start min-h-[calc(100vh-3.5rem)]">
        {/* Navigation Sidebar */}
        <DocsSidebar
          activeSection={activeSection}
          onSelectSection={scrollToSection}
        />

        {/* Dynamic Content */}
        <DocsContent />
      </div>
    </div>
  );
}

export default Docs;
