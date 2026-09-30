"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface DocsCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function DocsCodeBlock({ code, language = "bash", filename }: DocsCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#101010] overflow-hidden shadow-2xs font-mono text-xs">
      {filename && (
        <div className="flex items-center justify-between border-b border-[#ebebeb] dark:border-[#262626] px-4 py-2 bg-white dark:bg-[#141414] text-[#666] dark:text-[#888]">
          <span>{filename}</span>
          <span className="text-[10px] uppercase text-[#888]">{language}</span>
        </div>
      )}

      <div className="relative flex items-center justify-between p-4 overflow-x-auto">
        <pre className="text-[#171717] dark:text-[#ededed] leading-relaxed">
          <code>{code.trim()}</code>
        </pre>

        <button
          onClick={copyCode}
          className="absolute right-3 top-3 p-1.5 rounded-md border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#1a1a1a] text-[#666] dark:text-[#888] hover:text-[#171717] dark:hover:text-white transition-colors cursor-pointer shadow-2xs"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-[#0070f3]" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
