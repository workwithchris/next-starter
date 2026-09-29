"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/core/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "en", label: "EN", full: "English" },
    { code: "es", label: "ES", full: "Español" },
    { code: "fr", label: "FR", full: "Français" },
    { code: "de", label: "DE", full: "Deutsch" },
    { code: "ja", label: "JA", full: "日本語" },
  ] as const;

  const handleSelect = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative inline-flex items-center gap-1 rounded-[6px] border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] px-1.5 py-1 text-xs">
      <Globe className="h-3 w-3 text-[#8f8f8f] shrink-0" />
      <select
        value={locale}
        disabled={isPending}
        onChange={(e) => handleSelect(e.target.value)}
        aria-label="Select language"
        className="bg-transparent text-[11px] font-mono text-[#171717] dark:text-[#ededed] outline-none cursor-pointer pr-1"
      >
        {locales.map((item) => (
          <option
            key={item.code}
            value={item.code}
            className="bg-white dark:bg-[#141414] text-[#171717] dark:text-white"
          >
            {item.label} ({item.full})
          </option>
        ))}
      </select>
    </div>
  );
}
