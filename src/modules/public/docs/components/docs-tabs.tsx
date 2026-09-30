"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface DocsTabsProps {
  commands: {
    pnpm: string;
    npm: string;
    bun: string;
    yarn: string;
  };
}

export function DocsTabs({ commands }: DocsTabsProps) {
  const [activeTab, setActiveTab] = useState<"pnpm" | "npm" | "bun" | "yarn">("pnpm");
  const [copied, setCopied] = useState(false);

  const activeCommand = commands[activeTab];

  const copyCode = () => {
    navigator.clipboard.writeText(activeCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#101010] overflow-hidden shadow-2xs">
      <div className="flex items-center justify-between border-b border-[#ebebeb] dark:border-[#262626] px-3.5 py-1.5 bg-white dark:bg-[#141414]">
        <div className="flex items-center gap-1">
          {(["pnpm", "npm", "bun", "yarn"] as const).map((pm) => (
            <button
              key={pm}
              onClick={() => setActiveTab(pm)}
              className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                activeTab === pm
                  ? "bg-[#fafafa] dark:bg-[#242424] text-[#0070f3] font-semibold shadow-2xs"
                  : "text-[#888] hover:text-[#171717] dark:hover:text-white"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        <button
          onClick={copyCode}
          className="p-1.5 rounded-md text-[#888] hover:text-[#171717] dark:hover:text-white transition-colors cursor-pointer"
          title="Copy command"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-[#0070f3]" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>

      <div className="p-4 font-mono text-xs overflow-x-auto text-[#171717] dark:text-[#ededed] leading-relaxed">
        <code>{activeCommand}</code>
      </div>
    </div>
  );
}
