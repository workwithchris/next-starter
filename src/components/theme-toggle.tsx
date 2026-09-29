"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-7 w-7 rounded-[6px] border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] border border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] text-[#4d4d4d] dark:text-[#a1a1a1] hover:text-[#171717] dark:hover:text-white hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c] transition-colors cursor-pointer"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label="Toggle color theme"
    >
      {isDark ? (
        <Sun className="h-3.5 w-3.5 transition-transform" />
      ) : (
        <Moon className="h-3.5 w-3.5 transition-transform" />
      )}
    </button>
  );
}
