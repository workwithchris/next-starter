# Project conventions

Next.js 16 App Router + React 19 + TypeScript (strict) + Tailwind v4. These rules apply to every task in this repo.

## Commands
- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config). Run this before finishing any task.
- `npm test` / `npm run test:watch` — Vitest. Run tests before finishing any task that touches logic.

## Where code goes
- `src/app/[locale]/` — routes only. Pages stay thin: `await params`, `setRequestLocale(locale)`, render a module. No business logic or markup here.
- `src/modules/<feature>/` — one folder per page/feature, always split into the same subfolders (create the ones you need, skip empty ones):

  ```
  src/modules/<feature>/
  ├── components/    # small presentational components (one component per file)
  ├── hooks/         # feature hooks: use-login.ts, use-cart.ts, …
  ├── data/          # API calls, TanStack Query hooks, mappers, feature types
  ├── store/         # Zustand slices for this feature
  ├── __tests__/     # tests for this feature's hooks/data/store/components
  └── <feature>.tsx  # composition root — composes components/, exports the module
  ```

  Feature-private code lives here. NOTHING in this folder may be imported by another module — if something is reused elsewhere, promote it (see "Components — small and reusable" below).
- `src/components/ui/` — shadcn/ui primitives (Base UI + CVA). Add new ones with `npx shadcn add <component>`; do not hand-roll buttons/inputs/cards.
- `src/components/` — components shared across features (locale-switcher, theme-toggle).
- `src/core/` — app-wide infrastructure: `lib/` (utils), `hooks/` (shared hooks, same `use-*.ts` naming), `i18n/`, `network/` (HTTP/SSE/WebSocket client), `providers/`, `constants/`, `store/` (global Zustand stores only).
- `messages/<locale>.json` — all user-facing strings, one file per locale.
- `DESIGN.md` — design tokens (colors, type, spacing, component specs). Follow it for landing/marketing UI; use shadcn CSS variables (`bg-background`, `border-border`) for app chrome.
- i18n middleware lives in `src/proxy.ts` (Next 16 renamed `middleware` → `proxy`).

## Components — small and reusable
- **Every component does one thing and stays small.** If a component exceeds ~100 lines or contains several distinct UI sections, split it into child components in the same `components/` folder.
- One component per file, named export, PascalCase file name matches the component (`user-avatar.tsx` → `export function UserAvatar()`).
- **Extract on reuse:** the moment a piece of UI appears (or is about to appear) in a second place, extract it — into the module's `components/` first; into `src/components/` only if a second module needs it. Never copy-paste JSX.
- Composition over configuration: prefer passing `children`/small props over mega-components with 10+ props.
- Components own only their own markup + styling. Data fetching and state logic live in `hooks/`, `data/`, or `store/` — components call hooks, they don't contain them inline (a 3-line `useState` is fine).

## Hooks — naming and placement
- File name is the hook name in kebab-case with the `use-` prefix: `use-login.ts`, `use-user-preferences.ts`, `use-booking-flow.ts`. One hook per file. Exports: named (`export function useLogin()`).
- Feature hooks → `src/modules/<feature>/hooks/`. Reusable across features → `src/core/hooks/`.
- Hooks contain the logic (state, effects, handlers); components stay presentational.

## State — Zustand
- Feature state → `src/modules/<feature>/store/`, one slice per concern (`auth-slice.ts`, or a single `store.ts` for small features), created with `create`.
- App-wide state shared by many modules → `src/core/store/`.
- Server state (fetching, caching) is NOT Zustand — that's TanStack Query. Zustand is for client/UI state only.

## Performance — always
- Keep components server-rendered; add `"use client"` only when the file uses hooks/events/state, and push it down to the smallest possible subtree.
- Prevent re-render chains: pass primitive props, avoid creating objects/functions in props inline for list children; extract inline arrow functions in JSX passed to memoized children.
- Use `React.memo` / `useMemo` / `useCallback` **only where a real hotspot exists** (large lists, expensive computation) — the React Compiler (`reactCompiler: true`) already handles most memoization; don't add it blindly.
- Lists: stable `key`s (never index), virtualize long lists, avoid rendering everything when a small example is enough.
- Assets: `next/image` with explicit `width`/`height` or `fill`; lazy-load below-the-fold/heavy components with `next/dynamic`; no large client-only libraries in Server Components.
- Data: fetch server-side when possible, reuse via React cache/`use cache`, never water-fetch (client fetch → child fetches again).

## Naming & code style
- Files: kebab-case (`hero-section.tsx`). Components: PascalCase with a **named export** (`export function Navbar()`). Hooks: `use-*.ts` (`use-login.ts` → `export function useLogin()`). Default export only in Next entry files (`page.tsx`, `layout.tsx`, `route.ts`, `proxy.ts`).
- Imports: use the `@/*` alias (`@/core/network`), never deep relative paths across layers.
- Class names: `cn()` from `"cn"` + Tailwind utilities only. No inline `style` objects, no CSS modules.
- Dark mode via `dark:` variants (next-themes toggles the class on `<html>`).

## Tests — every feature
- Every feature ships with tests in its `__tests__/` folder: cover the hooks (`renderHook` or pure-logic tests), `data/` mappers/query functions, Zustand store actions/selectors, and component behavior (render + key interactions). File naming: `<subject>.test.ts(x)` (e.g. `use-login.test.ts`, `store.test.ts`).
- Core utilities in `src/core/**/__tests__/` follow the same pattern — existing network suite is the reference.
- Test behavior, not implementation: what the user sees/does, error paths included (failed fetch, validation error, empty state), not snapshots of internals.
- A feature is not "done" until `npm run lint` and `npm test` pass.
- Note: Vitest currently runs in `node` environment — component tests that need DOM require adding `jsdom` + `@testing-library/react` (ask before installing).

## i18n (next-intl) — mandatory
- Every user-visible string goes through `useTranslations("<Namespace>")`. Never hardcode UI copy in components.
- Namespaces are PascalCase and match the section (`Navbar`, `Hero`, `FormDemo`…).
- **When adding a key, add it to all 5 locale files**: `en`, `es`, `fr`, `de`, `ja`.
- New routes go under `src/app/[locale]/` and keep the `[locale]` segment.
- Navigation: import `Link`, `useRouter`, `usePathname` from `@/core/i18n/routing` — not from `next/link` / `next/navigation` — so locale prefixes are preserved. Plain external URLs are the exception.
- `params` is a Promise in Next 16 — always `const { locale } = await params`.

## Data & forms
- API calls: `apiClient` from `@/core/network`. Base URL comes from `NEXT_PUBLIC_API_URL`; route paths live in `src/core/constants/endpoints.ts`. Do not write raw `fetch` in components.
- Client-side server state: TanStack Query (`QueryProvider` is already mounted in the root layout).
- WebSockets/SSE: `useSocket` / `useSSE` from `@/core/network`.
- Forms: react-hook-form + `zodResolver`, Zod schema colocated with the form, `mode: "onChange"`.

## Do not
- Edit anything between `BEGIN:nextjs-agent-rules` and `END:nextjs-agent-rules` below — `next dev` regenerates that block and will revert changes.
- Add dependencies, top-level folders, or config files without being asked.
- Create parallel infrastructure (extra fetch wrappers, duplicate providers) — reuse what is in `src/core`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
