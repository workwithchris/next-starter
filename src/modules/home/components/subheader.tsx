import { useTranslations } from "next-intl";

const navItems = [
  { href: "#features", key: "features" },
  { href: "#stack", key: "techStack" },
  { href: "#form-demo", key: "formDemo" },
  { href: "#architecture", key: "architecture" },
  { href: "#quickstart", key: "quickstart" },
] as const;

export function Subheader() {
  const t = useTranslations("Navbar");

  return (
    <div className="hidden md:block border-t border-[#ebebeb] dark:border-[#262626]">
      <nav className="mx-auto flex h-10 max-w-6xl items-center gap-1 px-4 text-[13px] text-[#4d4d4d] sm:px-6 dark:text-[#a1a1a1]">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1.5 transition-colors hover:text-[#171717] dark:hover:text-white"
          >
            {t(item.key)}
          </a>
        ))}
      </nav>
    </div>
  );
}
