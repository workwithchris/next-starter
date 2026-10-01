"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border bg-background py-16 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-5 w-5 items-center justify-center bg-primary text-primary-foreground rounded-sm">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 76 65"
                  fill="currentColor"
                  className="translate-y-[-0.5px]"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
              </div>
              <span className="font-semibold text-sm tracking-tight text-foreground">
                next-starter-template
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              {t("description")}
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#10b981]" />
              <span className="text-[11px] font-mono text-muted-foreground">
                {t("status")}
              </span>
            </div>
          </div>

          {/* Links Column 1: Framework */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Framework
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Next.js Docs
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  React 19
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Tailwind CSS v4
                </a>
              </li>
              <li>
                <a
                  href="https://turbopack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Turbopack
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Libraries
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Base UI & Shadcn
                </a>
              </li>
              <li>
                <a
                  href="https://zod.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Zod Validation
                </a>
              </li>
              <li>
                <a
                  href="https://react-hook-form.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  React Hook Form
                </a>
              </li>
              <li>
                <a
                  href="https://lucide.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Lucide Icons
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://www.npmjs.com/package/create-starter-next"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  NPM CLI Package
                </a>
              </li>
              <li>
                <a
                  href="https://authjs.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Auth.js Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/workwithchris/next-starter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/workwithchris/next-starter/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Issues & Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Hairline Divider */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>
            © {new Date().getFullYear()} Next.js Starter Template. Open-source
            under MIT.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>DESIGN.md Spec: Alpha</span>
            <span>•</span>
            <span>Geist Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
