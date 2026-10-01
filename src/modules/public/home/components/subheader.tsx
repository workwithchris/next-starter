import { useTranslations } from "next-intl";
import { Link } from "@/core/i18n/routing";

export function Subheader() {
  const t = useTranslations("Navbar");

  return (
    <div className="hidden md:block border-t border-border">
      <nav className="mx-auto flex h-10 max-w-6xl items-center justify-between px-4 text-[13px] text-muted-foreground sm:px-6">
        <div className="flex items-center gap-1">
          <a
            href="#features"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground"
          >
            {t("features")}
          </a>
          <a
            href="#design-systems"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground"
          >
            Design Systems
          </a>
          <a
            href="#stack"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground"
          >
            {t("techStack")}
          </a>
          <a
            href="#form-demo"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground"
          >
            {t("formDemo")}
          </a>
          <a
            href="#architecture"
            className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground"
          >
            {t("architecture")}
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-primary font-medium transition-colors hover:text-primary/80"
          >
            <span>{t("docs")}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
