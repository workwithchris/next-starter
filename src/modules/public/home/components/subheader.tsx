import { useTranslations } from "next-intl";
import { Link } from "@/core/i18n/routing";

export function Subheader() {
  const t = useTranslations("Navbar");

  return (
    <div className="hidden md:block border-t border-[#ebebeb] dark:border-[#262626]">
      <nav className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-[13px] text-[#4d4d4d] sm:px-6 dark:text-[#a1a1a1]">
        <div className="flex items-center gap-1">
          <a
            href="#features"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            {t("features")}
          </a>
          <a
            href="#design-systems"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            Design Systems
          </a>
          <a
            href="#stack"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            {t("techStack")}
          </a>
          <a
            href="#form-demo"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            {t("formDemo")}
          </a>
          <a
            href="#architecture"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            {t("architecture")}
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[#0070f3] font-medium transition-colors hover:text-[#0051bb] dark:hover:text-[#3291ff]"
          >
            <span>{t("docs")}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#0070f3]" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
