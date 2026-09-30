"use client";

import { useTranslations } from "next-intl";
import { DocsCodeBlock } from "./docs-code-block";
import { DocsTabs } from "./docs-tabs";
import { DocsCallout } from "./docs-callout";
import { DocsDesignShowcase } from "./docs-design-showcase";
import {
  Terminal,
  ShieldCheck,
  Layers,
  Globe,
  Code2,
  Cpu,
  TestTube2,
  Server,
  Palette,
  ArrowRight,
} from "lucide-react";

export function DocsContent() {
  const t = useTranslations("Docs");

  return (
    <div className="flex-1 min-w-0 w-full p-6 md:p-10 space-y-16">
      {/* 1. Quickstart */}
      <section id="quickstart" className="space-y-4 scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Terminal className="h-3.5 w-3.5" />
          <span>{t("quickstartBadge")}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("quickstartTitle")}
        </h1>

        <p className="text-sm sm:text-base text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("quickstartDesc")}
        </p>

        <DocsTabs
          commands={{
            pnpm: "pnpm create starter-next my-app",
            npm: "npx create-starter-next my-app",
            bun: "bun create starter-next my-app",
            yarn: "yarn create starter-next my-app",
          }}
        />

        <DocsCallout type="tip" title="Interactive vs Automated">
          Running the command without flags opens the interactive terminal wizard where you can search through 20+ design systems, select your preset, and pick your preferred package manager.
        </DocsCallout>

        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold text-[#171717] dark:text-white">Next Steps:</h3>
          <ol className="list-decimal list-inside text-xs text-[#666] dark:text-[#888] space-y-1.5 font-mono">
            <li>cd my-app</li>
            <li>pnpm run dev # Starts Turbopack at http://localhost:3000</li>
            <li>pnpm test # Runs Vitest test suite</li>
          </ol>
        </div>
      </section>

      {/* 2. CLI Options */}
      <section id="cli-options" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("cliOptionsTitle")}
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("cliOptionsDesc")}
        </p>

        <DocsCodeBlock
          code={`# Scaffold fullstack preset with Supabase dark theme
npx create-starter-next my-app --fullstack --design=supabase

# Scaffold minimal preset with Linear design
npx create-starter-next my-app --minimal --design=linear --pm=pnpm

# Non-interactive CI scaffolding with default options
npx create-starter-next my-app -y`}
          language="bash"
        />

        <div className="overflow-x-auto rounded-xl border border-[#ebebeb] dark:border-[#262626] mt-4">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#fafafa] dark:bg-[#141414] border-b border-[#ebebeb] dark:border-[#262626] text-[#888]">
              <tr>
                <th className="p-3">Flag</th>
                <th className="p-3">Description</th>
                <th className="p-3">Options / Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ebebeb] dark:divide-[#262626] text-[#4d4d4d] dark:text-[#a1a1a1]">
              <tr>
                <td className="p-3 text-[#0070f3] font-semibold">--preset &lt;name&gt;</td>
                <td className="p-3">Choose template blueprint architecture</td>
                <td className="p-3">fullstack | minimal</td>
              </tr>
              <tr>
                <td className="p-3 text-[#0070f3] font-semibold">--design &lt;id&gt;</td>
                <td className="p-3">Inject getdesign.md design token archetype</td>
                <td className="p-3">geist, linear, supabase, claude, etc.</td>
              </tr>
              <tr>
                <td className="p-3 text-[#0070f3] font-semibold">--pm &lt;manager&gt;</td>
                <td className="p-3">Package manager for installation</td>
                <td className="p-3">pnpm | npm | bun | yarn</td>
              </tr>
              <tr>
                <td className="p-3 text-[#0070f3] font-semibold">-y, --yes</td>
                <td className="p-3">Skip all interactive prompts</td>
                <td className="p-3">defaults</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Presets */}
      <section id="presets" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Layers className="h-3.5 w-3.5" />
          <span>Preset Comparison</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          Minimal vs Fullstack Presets
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          The starter ships in two specialized configurations to avoid shipping code you don&apos;t need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
          <div className="p-5 rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa]/50 dark:bg-[#111111]/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-[#171717] dark:text-white">Minimal Preset</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-mono text-[10px]">Pure Core</span>
            </div>
            <p className="text-[#666] dark:text-[#888] leading-relaxed">
              Designed for public marketing sites, documentation portals, and lightweight tools that don&apos;t require auth or protected user accounts.
            </p>
            <ul className="space-y-1.5 text-[#4d4d4d] dark:text-[#a1a1a1]">
              <li className="flex items-center gap-2">✓ Next.js 16 App Router + React 19</li>
              <li className="flex items-center gap-2">✓ Tailwind CSS v4 + Base UI primitives</li>
              <li className="flex items-center gap-2">✓ 5-locale next-intl i18n routing</li>
              <li className="flex items-center gap-2">✓ Type-safe Network Client (apiClient, SSE, WS)</li>
              <li className="flex items-center gap-2">✓ Vitest unit tests &amp; GitHub Actions CI</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa]/50 dark:bg-[#111111]/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-[#171717] dark:text-white">Fullstack Preset</span>
              <span className="px-2 py-0.5 rounded bg-[#0070f3]/10 text-[#0070f3] font-mono text-[10px]">All-Inclusive</span>
            </div>
            <p className="text-[#666] dark:text-[#888] leading-relaxed">
              Everything in Minimal, plus dedicated authentication, protected route guards, mock APIs, and a dashboard workspace.
            </p>
            <ul className="space-y-1.5 text-[#4d4d4d] dark:text-[#a1a1a1]">
              <li className="flex items-center gap-2">✓ Everything in Minimal</li>
              <li className="flex items-center gap-2">✓ Auth.js (NextAuth v5) server config in src/core/auth/</li>
              <li className="flex items-center gap-2">✓ Protected route groups /(protected)/dashboard</li>
              <li className="flex items-center gap-2">✓ Client session guards &amp; sign-in forms with Zod</li>
              <li className="flex items-center gap-2">✓ Mock API routes with auto AUTH_SECRET generation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Design System & getdesign.md */}
      <section id="design-systems" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Palette className="h-3.5 w-3.5" />
          <span>getdesign.md Spec</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("designSystemsTitle")}
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("designSystemsDesc")}
        </p>

        {/* Interactive Showcase of All 20+ Themes */}
        <DocsDesignShowcase />

        <DocsCodeBlock
          filename="src/app/globals.css"
          language="css"
          code={`:root {
  --background: oklch(0.99 0.005 155);
  --foreground: oklch(0.15 0.01 155);
  --primary: oklch(0.6 0.18 155);
  --accent: oklch(0.92 0.03 155);
  --radius: 0.5rem;
}

.dark {
  --background: oklch(0.12 0.01 155);
  --foreground: oklch(0.96 0.01 155);
  --primary: oklch(0.75 0.18 155);
  --border: oklch(0.24 0.02 155);
}`}
        />

        <DocsCallout type="note" title="AI Agent Design Grounding">
          The selected theme is also recorded in <code>DESIGN.md</code> at the root of your project. When coding assistants like Claude Code, Cursor, or Gemini read your project, they generate UI matching your exact visual tokens.
        </DocsCallout>
      </section>

      {/* 5. Folder Structure */}
      <section id="folder-structure" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Cpu className="h-3.5 w-3.5" />
          <span>Project Conventions</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("folderStructureTitle")}
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("folderStructureDesc")}
        </p>

        <DocsCodeBlock
          filename="Project File Tree"
          language="text"
          code={`src/
├── app/[locale]/             # Thin route files (params -> setRequestLocale -> module)
│   ├── (public)/             # Public marketing routes (/, /docs)
│   ├── (auth)/               # Auth routes (/login)
│   └── (protected)/          # Session-protected routes (/dashboard)
├── modules/<feature>/        # Isolated domain feature folders
│   ├── components/           # Presentational sub-components (<100 lines each)
│   ├── hooks/                # Custom hooks (use-login.ts, use-auth.ts)
│   ├── data/                 # API calls, TanStack Query hooks, Zod schemas
│   ├── store/                # Feature-private Zustand stores
│   ├── __tests__/            # Colocated Vitest tests
│   └── <feature>.tsx         # Composition root exporting the module
├── components/ui/            # Shadcn UI / Base UI primitives
├── core/                     # App-wide infrastructure
│   ├── auth/                 # Auth.js v5 handlers, auth() server helper
│   ├── i18n/                 # next-intl routing, Link, useRouter
│   ├── network/              # Type-safe apiClient, SSE, WebSockets
│   └── store/                # Global UI state stores
└── messages/                 # i18n JSON translations (en, es, fr, de, ja)`}
        />
      </section>

      {/* 6. Auth.js v5 */}
      <section id="auth" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Server &amp; Edge Auth</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("authTitle")}
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("authDesc")}
        </p>

        <DocsCodeBlock
          filename="src/app/[locale]/(protected)/layout.tsx"
          language="tsx"
          code={`import { redirect } from "next/navigation";
import { auth } from "@/core/auth";

export default async function ProtectedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await auth();

  if (!session) {
    redirect(\`/\${locale}/login\`);
  }

  return <>{children}</>;
}`}
        />
      </section>

      {/* 7. Network Suite */}
      <section id="network-suite" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Code2 className="h-3.5 w-3.5" />
          <span>Network Suite</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("networkSuiteTitle")}
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("networkSuiteDesc")}
        </p>

        <DocsCodeBlock
          filename="src/modules/dashboard/data/api.ts"
          language="typescript"
          code={`import { apiClient } from "@/core/network";
import type { MetricsResponse } from "./types";

export async function fetchMetrics() {
  return await apiClient.get<MetricsResponse>("/api/dashboard/metrics", {
    timeoutMs: 5000,
    retry: { maxAttempts: 3, delayMs: 500 },
  });
}`}
        />
      </section>

      {/* 8. Internationalization */}
      <section id="i18n" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Globe className="h-3.5 w-3.5" />
          <span>Multilingual i18n</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          {t("i18nTitle")}
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          {t("i18nDesc")}
        </p>

        <DocsCallout type="important" title="Always use @/core/i18n/routing">
          Import <code>Link</code>, <code>useRouter</code>, and <code>usePathname</code> from <code>@/core/i18n/routing</code> instead of <code>next/link</code> to preserve locale subpaths automatically.
        </DocsCallout>
      </section>

      {/* 9. State Management */}
      <section id="state-management" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          State Management with Zustand
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          Zustand handles client and UI state. Server state is managed by TanStack Query.
        </p>

        <DocsCodeBlock
          filename="src/core/store/ui-store.ts"
          language="typescript"
          code={`import { create } from "zustand";

interface UiState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));`}
        />
      </section>

      {/* 10. Testing */}
      <section id="testing" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <TestTube2 className="h-3.5 w-3.5" />
          <span>Vitest &amp; CI/CD</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          Testing &amp; Automated Validation
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          Every feature ships with unit tests covering custom hooks, API clients, and Zustand stores.
        </p>

        <DocsCodeBlock
          code={`# Run tests with Vitest
pnpm test

# Run tests in interactive watch mode
pnpm run test:watch

# Run ESLint flat config validation
pnpm run lint`}
          language="bash"
        />
      </section>

      {/* 11. Production Deployment */}
      <section id="deployment" className="space-y-4 pt-8 border-t border-[#ebebeb] dark:border-[#262626] scroll-mt-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#141414] px-3 py-1 text-xs font-mono text-[#0070f3]">
          <Server className="h-3.5 w-3.5" />
          <span>Zero-Lock-in Deployment</span>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight text-[#171717] dark:text-[#ededed]">
          Production Deployment
        </h2>

        <p className="text-sm text-[#666] dark:text-[#a1a1a1] leading-relaxed">
          The starter produces a standardized Next.js 16 build deployable to any provider: Node.js server, Docker, Cloudflare, Netlify, or AWS.
        </p>

        <DocsCodeBlock
          code={`# Build for production
pnpm run build

# Start production server
pnpm start`}
          language="bash"
        />

        <div className="mt-8 flex items-center justify-between p-6 rounded-xl border border-[#ebebeb] dark:border-[#262626] bg-[#fafafa] dark:bg-[#121212]">
          <div>
            <h4 className="font-semibold text-sm text-[#171717] dark:text-white">Ready to scaffold your app?</h4>
            <p className="text-xs text-[#666] dark:text-[#888] mt-0.5">Run create-starter-next with your favorite design system.</p>
          </div>
          <a
            href="https://github.com/workwithchris/next-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-xs font-medium hover:bg-black dark:hover:bg-zinc-200 transition-colors shadow-xs"
          >
            <span>Star on GitHub</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
