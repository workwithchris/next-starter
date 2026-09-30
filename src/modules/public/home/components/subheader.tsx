import { useTranslations } from "next-intl";
import { Link } from "@/core/i18n/routing";

const navSections = [
  { href: "#features", key: "features", isExternalAnchor: true },
  { href: "#stack", key: "techStack", isExternalAnchor: true },
  { href: "#form-demo", key: "formDemo", isExternalAnchor: true },
  { href: "#architecture", key: "architecture", isExternalAnchor: true },
  { href: "#quickstart", key: "quickstart", isExternalAnchor: true },
] as const;

export function Subheader() {
  const t = useTranslations("Navbar");

  return (
    <div className="hidden md:block border-t border-[#ebebeb] dark:border-[#262626]">
      <nav className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-[13px] text-[#4d4d4d] sm:px-6 dark:text-[#a1a1a1]">
        <div className="flex items-center gap-1">
          {navSections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="rounded-md px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          >
            {t("dashboard")}
          </Link>
          <Link
            href="/login"
            className="rounded-md px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          >
            {t("login")}
          </Link>
        </div>
      </nav>
    </div>
  );
}
