export function Footer() {
  return (
    <footer className="border-t border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-black py-16 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-5 w-5 items-center justify-center bg-[#171717] dark:bg-white text-white dark:text-black rounded-sm">
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
              <span className="font-semibold text-sm tracking-tight text-[#171717] dark:text-[#ededed]">
                next-starter-template
              </span>
            </div>
            <p className="text-xs text-[#8f8f8f] max-w-sm leading-relaxed">
              Designed with the Vercel Geist design system — a stark black-on-near-white developer platform aesthetic, 1px hairlines, and strict typography.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#10b981]" />
              <span className="text-[11px] font-mono text-[#4d4d4d] dark:text-[#a1a1a1]">
                All Systems Operational • Turbopack v16.3
              </span>
            </div>
          </div>

          {/* Links Column 1: Framework */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#ededed] mb-3">
              Framework
            </h4>
            <ul className="space-y-2 text-xs text-[#4d4d4d] dark:text-[#a1a1a1]">
              <li>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Next.js Docs
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  React 19
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Tailwind CSS v4
                </a>
              </li>
              <li>
                <a
                  href="https://turbopack.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Turbopack
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Ecosystem */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#ededed] mb-3">
              Libraries
            </h4>
            <ul className="space-y-2 text-xs text-[#4d4d4d] dark:text-[#a1a1a1]">
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Base UI & Shadcn
                </a>
              </li>
              <li>
                <a
                  href="https://zod.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Zod Validation
                </a>
              </li>
              <li>
                <a
                  href="https://react-hook-form.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  React Hook Form
                </a>
              </li>
              <li>
                <a
                  href="https://lucide.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Lucide Icons
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#ededed] mb-3">
              Deployment
            </h4>
            <ul className="space-y-2 text-xs text-[#4d4d4d] dark:text-[#a1a1a1]">
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Vercel Platform
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Template Marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  Speed Insights
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vercel/next.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#171717] dark:hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Hairline Divider */}
        <div className="pt-8 border-t border-[#ebebeb] dark:border-[#262626] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8f8f8f] gap-4">
          <p>© {new Date().getFullYear()} Next.js Starter Template. Open-source under MIT.</p>
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
