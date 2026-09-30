<div align="center">

# Next.js 16 Production Starter Template & CLI

An enterprise-ready, high-performance foundation built on **Next.js 16**, **React 19**, **Tailwind CSS v4**, **Base UI / Shadcn**, **Auth.js v5**, **Zod**, and **React Hook Form** — engineered with the **Geist design system**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Auth.js](https://img.shields.io/badge/Auth.js-v5.0_Beta-purple?style=flat&logo=auth0)](https://authjs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![CI](https://img.shields.io/badge/CI-Passing-brightgreen?style=flat&logo=githubactions)](https://github.com/workwithchris/next-starter/actions)
[![npm version](https://img.shields.io/npm/v/create-starter-next.svg?style=flat&color=blue)](https://www.npmjs.com/package/create-starter-next)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

[**Live Demo**](http://localhost:3000) • [**NPM Package**](https://www.npmjs.com/package/create-starter-next) • [**GitHub Repository**](https://github.com/workwithchris/next-starter) • [**Design Spec (DESIGN.md)**](DESIGN.md)

</div>

---

## ⚡ Quick Scaffold via CLI

Scaffold a production-grade application in seconds using the official CLI:

```bash
# Interactive setup (prompts for preset, package manager, and git)
npx create-starter-next my-app
# or
pnpm create starter-next my-app
# or
bun create starter-next my-app
# or
npm create starter-next my-app
```

### ⚡ Non-Interactive Instant Scaffolding (Flags)
For CI/CD scripts or power users who want instant setup without prompts:

```bash
# Instant fullstack app with pnpm and git
npx create-starter-next my-app --fullstack --pnpm --git -y

# Instant minimal app with bun
bun create starter-next my-app --minimal -y
```

#### CLI Options & Flags:
| Flag | Description |
|---|---|
| `--fullstack` | Scaffolds Fullstack preset (Auth.js, Protected Dashboard, Mock APIs). |
| `--minimal` | Scaffolds Minimal preset (Clean core foundation, i18n, Tailwind v4). |
| `--preset <name>` | Select preset (`fullstack` or `minimal`). |
| `--pnpm` / `--npm` / `--bun` / `--yarn` | Select package manager. |
| `--pm <manager>` | Specify package manager (`pnpm`, `npm`, `bun`, `yarn`). |
| `--git` / `--no-git` | Initialize git repository (or skip). |
| `--install` / `--no-install` | Install dependencies immediately (or skip). |
| `-y`, `--yes` | Skip all interactive prompts and use smart defaults. |
| `-h`, `--help` | Show CLI help message and flag list. |

---

## 📊 Preset Comparison Matrix

| Feature / Architecture | Minimal Preset | Fullstack Preset |
|---|:---:|:---:|
| **Next.js 16 App Router & Turbopack** | ✅ | ✅ |
| **React 19 & React Compiler Optimizations** | ✅ | ✅ |
| **Tailwind CSS v4 & Vercel Geist Design System** | ✅ | ✅ |
| **Accessible Base UI / Shadcn Primitives** | ✅ | ✅ |
| **5-Locale i18n (`en`, `es`, `fr`, `de`, `ja`) with `next-intl`** | ✅ | ✅ |
| **TanStack React Query v5 + Devtools** | ✅ | ✅ |
| **Zod Schema & React Hook Form Engine** | ✅ | ✅ |
| **Enterprise Network Client Suite (HTTP, SSE, WebSocket)** | ✅ | ✅ |
| **Next.js 16 Edge Proxy Middleware** | ✅ | ✅ |
| **Vitest 5 Unit & Integration Testing Suite** | ✅ | ✅ |
| **Production SEO (sitemap.ts, robots.ts, manifest.ts)** | ✅ | ✅ |
| **GitHub Actions CI/CD Pipeline** | ✅ | ✅ |
| **Auth.js / NextAuth v5 (Credentials + OAuth Providers)** | ❌ *(Cleanly Pruned)* | ✅ *(Included)* |
| **Auto-Generated Cryptographic `AUTH_SECRET` in `.env.local`** | ❌ *(Cleanly Pruned)* | ✅ *(Included)* |
| **Two-Tier Protected Routes (`src/proxy.ts` + Server Layout)** | ❌ *(Cleanly Pruned)* | ✅ *(Included)* |
| **Protected `/dashboard` Workspace with Metrics & Modals** | ❌ *(Cleanly Pruned)* | ✅ *(Included)* |
| **CRUD REST API Route Handlers (`/api/...`)** | ❌ *(Cleanly Pruned)* | ✅ *(Included)* |
| **Persistent Zustand Auth Store (`auth-store.ts`)** | ❌ *(Cleanly Pruned)* | ✅ *(Included)* |

---

## 🌟 Highlights

- ⚡ **Next.js 16 & Turbopack**: Sub-second Hot Module Replacement (HMR), React Server Components (RSC), and nested layout routing.
- ⚛️ **React 19 & React Compiler**: Preconfigured with `babel-plugin-react-compiler` for automatic memoization without boilerplate `useMemo` / `useCallback`.
- 🔐 **Dedicated Auth.js (NextAuth v5)**: Complete authentication layer in `@/core/auth` supporting Credentials and OAuth (GitHub, Google), session token callbacks, and defense-in-depth route guards.
- 🔄 **TanStack React Query v5**: Production-grade server state management and asynchronous data fetching with isolated SSR caches, smart refetching, and React Query Devtools.
- 🐻 **Zustand State Management**: Lightweight, atomic UI state with feature-scoped slices and persistent global auth state.
- 🎨 **Tailwind CSS v4 & Nova Theme**: Pure CSS variable engine with zero JavaScript overhead, configured with Shadcn UI & accessible Base UI primitives.
- 📐 **Geist Design Language**: Strictly adheres to [DESIGN.md](DESIGN.md) — minimalist black-on-near-white canvas (`#fafafa`), deep ink (`#171717`), 1px hairlines (`#ebebeb`), dual button radius (100px marketing pills vs. 6px square app controls), and the signature hero mesh gradient.
- 🛡️ **Type-Safe Form Sandbox**: Built-in runtime validation using **Zod** and **React Hook Form** with `@hookform/resolvers/zod`.
- 🌐 **Full i18n Suite (5 Locales)**: Powered by `next-intl` across English (`en`), Spanish (`es`), French (`fr`), German (`de`), and Japanese (`ja`).
- 🌓 **Seamless Dark Mode**: Powered by `next-themes` with zero flash-of-unstyled-content (FOUC), system preference detection, and smooth light/dark switching.
- 🔔 **Toast Notifications**: Built-in **Sonner** toaster with dark-mode support.
- 🔍 **Production SEO & PWA**: Dynamic `sitemap.ts`, `robots.ts`, and `manifest.ts` configured for localized multi-region indexing.
- 🧪 **Vitest Test Suite**: Preconfigured unit and integration testing with JSDOM and React Testing Library utilities (66 passing tests).
- 🤖 **GitHub Actions CI**: Automated linting, test runner, and production build checks on every push and PR.

---

## 🧱 Project Structure

This template uses a domain-driven modular structure:

```
next-starter-template/
├── .github/
│   └── workflows/
│       └── ci.yml                # Automated GitHub Actions CI workflow
├── messages/                     # Translation dictionaries (5 locales)
│   ├── en.json                   # English (default)
│   ├── es.json                   # Spanish
│   ├── fr.json                   # French
│   ├── de.json                   # German
│   └── ja.json                   # Japanese
│
├── packages/
│   └── create-starter-next/      # Official NPM scaffolding CLI package
│       ├── bin/index.mjs         # CLI generator with interactive presets
│       └── package.json          # CLI package manifest
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/             # Localized root segment
│   │   │   ├── (public)/         # Public marketing route group
│   │   │   │   └── page.tsx      # Landing page (modules/public/home)
│   │   │   ├── (auth)/           # Authentication route group
│   │   │   │   └── login/page.tsx# Login & auth (modules/auth)
│   │   │   ├── (protected)/      # Protected authenticated route group
│   │   │   │   ├── layout.tsx    # Server session verification via await auth()
│   │   │   │   └── dashboard/page.tsx # Workspace dashboard (modules/protected/dashboard)
│   │   │   ├── layout.tsx        # Root layout (Geist font, providers, sonner toaster)
│   │   │   ├── error.tsx         # Localized error boundary
│   │   │   ├── not-found.tsx     # Localized 404 boundary
│   │   │   └── loading.tsx       # Loading skeleton suspense boundary
│   │   ├── api/                  # Next.js Route Handlers
│   │   │   ├── auth/[...nextauth]/route.ts # NextAuth v5 GET/POST handler
│   │   │   ├── projects/route.ts # CRUD projects API (GET, POST, DELETE)
│   │   │   └── dashboard/metrics/route.ts # Live workspace metrics API
│   │   ├── globals.css           # Tailwind v4 theme & Geist design tokens
│   │   ├── manifest.ts           # Web App Manifest generator
│   │   ├── robots.ts             # Robots.txt generator
│   │   ├── sitemap.ts            # Multilingual dynamic sitemap
│   │   └── global-error.tsx      # Root application crash boundary
│   │
│   ├── proxy.ts                  # Next.js 16 Proxy convention for locale routing & auth guard
│   │
│   ├── core/                     # Shared application infrastructure
│   │   ├── auth/                 # Auth.js / NextAuth v5 server configuration & providers
│   │   │   ├── auth.ts           # NextAuth instance & callbacks
│   │   │   └── index.ts          # Barrel exports (auth, signIn, signOut, handlers)
│   │   ├── providers/            # QueryProvider, ThemeProvider
│   │   ├── store/                # Global stores (auth-store.ts with persistence)
│   │   ├── i18n/                 # next-intl routing & request configuration
│   │   ├── constants/            # API endpoints & app constants
│   │   ├── hooks/                # Shared reusable hooks
│   │   ├── lib/                  # Utility functions (cn classnames helper)
│   │   └── network/              # Enterprise network client suite
│   │       ├── client.ts         # Type-safe fetch client (retries, timeouts, schemas)
│   │       ├── sse.ts            # Server-Sent Events stream client (POST & auth)
│   │       ├── socket.ts         # Resilient WebSocket client (heartbeat & buffer)
│   │       └── hooks/            # useSSE & useSocket React hooks
│   │
│   ├── modules/                  # Domain-driven feature modules
│   │   ├── public/               # Public-facing domains
│   │   │   └── home/             # Marketing landing page
│   │   ├── auth/                 # Authentication domain
│   │   │   ├── auth.tsx          # Auth composition root
│   │   │   ├── components/       # AuthCard, LoginForm, SocialAuthButtons
│   │   │   ├── hooks/            # use-auth-form.ts
│   │   │   ├── data/             # auth-types.ts, auth-api.ts
│   │   │   └── __tests__/        # Auth unit tests
│   │   └── protected/            # Protected domains
│   │       └── dashboard/        # Workspace dashboard domain
│   │           ├── dashboard.tsx # Dashboard composition root
│   │           ├── components/   # MetricsGrid, ProjectsTable, CreateProjectDialog, Header
│   │           ├── hooks/        # use-dashboard.ts
│   │           ├── data/         # dashboard-types.ts, dashboard-api.ts
│   │           ├── store/        # dashboard-slice.ts (Zustand)
│   │           └── __tests__/    # Dashboard store & API tests
│   │
│   └── components/               # Cross-cutting UI primitives
│       ├── locale-switcher.tsx   # Language selector dropdown
│       ├── theme-toggle.tsx      # Dark mode toggle
│       └── ui/                   # Base UI & Shadcn primitives (button, dialog, badge, input, ...)
│
├── DESIGN.md                     # Vercel Geist design system specification
├── components.json               # Shadcn UI configuration
└── package.json                  # Dependencies and scripts
```

---

## 🔐 Authentication (Auth.js / NextAuth v5)

Configured under `@/core/auth` with support for Credentials and OAuth providers:

```tsx
// 1. Server-side session verification in layouts or Server Components
import { auth } from "@/core/auth";

export default async function DashboardPage() {
  const session = await auth();
  return <h1>Welcome back, {session?.user?.name}</h1>;
}
```

```tsx
// 2. Client-side authentication trigger
"use client";

import { signIn, signOut } from "next-auth/react";

export function LoginButtons() {
  return (
    <>
      <button onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
        Sign in with GitHub
      </button>
      <button onClick={() => signOut({ callbackUrl: "/login" })}>
        Sign Out
      </button>
    </>
  );
}
```

---

## 🌐 Internationalization (i18n / intl)

This starter is configured with [**next-intl**](https://next-intl-docs.vercel.app/) for high-performance, App Router-first internationalization:

- **Supported Locales**: `en` (English - default), `es` (Spanish), `fr` (French), `de` (German), `ja` (Japanese).
- **Localized Routing**: Routes map to `/[locale]/...` with automatic locale detection via Next.js 16 `src/proxy.ts`.
- **Locale Switcher**: Built-in `<LocaleSwitcher />` component in the navbar for seamless instant language toggling.
- **Message Dictionaries**: Located in `messages/*.json` for clean separation and localization workflows.

### Usage in Components

```tsx
// Server Component
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");
  return <h1>{t("title")}</h1>;
}
```

```tsx
// Client Component
"use client";

import { useTranslations } from "next-intl";

export function Navbar() {
  const t = useTranslations("Navbar");
  return <span>{t("brand")}</span>;
}
```

---

## 🔄 Server State & Caching (TanStack React Query)

The template is preconfigured with `@tanstack/react-query` v5 and `@tanstack/react-query-devtools` located under `@/core/providers`.

```tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/core/network";

export function ProjectsList() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => apiClient.get("/api/projects").then((res) => res.data),
  });

  if (isLoading) return <div>Loading projects...</div>;
  return <div>{data?.projects?.length} active projects</div>;
}
```

---

## 🛡️ Enterprise Network Suite (`@/core/network`)

A type-safe, production-ready network layer engineered for Next.js 16:

- **HTTP Client (`apiClient`)**: Automatic JSON / FormData handling, interceptors, exponential backoff retries, and Zod runtime response schema validation.
- **Server-Sent Events (`SSEClient` / `useSSE`)**: Supports **POST requests**, **custom auth headers**, and **async iterators** for live streaming and AI/LLM token streams.
- **Resilient WebSockets (`SocketClient` / `useSocket`)**: Includes auto-reconnection, ping-pong heartbeat, and queued message buffering.

```tsx
import { apiClient } from "@/core/network";
import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

// Type-safe GET with runtime Zod parsing & automatic retries
const response = await apiClient.get("/api/users/me", {
  schema: UserSchema,
  retries: 2,
  timeoutMs: 5000,
});
```

---

## 📋 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the Next.js development server with Turbopack on `http://localhost:3000` |
| `pnpm build` | Compiles an optimized production build with Next.js Turbopack |
| `pnpm start` | Starts the production server |
| `pnpm run lint` | Runs ESLint (flat config) to check code quality |
| `pnpm test` | Runs all 66 Vitest unit and integration test suites |
| `pnpm test:watch` | Starts Vitest in interactive watch mode |

---

## 🎨 Design System Guidelines

This project implements the design specification detailed in [DESIGN.md](DESIGN.md):

- **Palette**:
  - Canvas: `#fafafa` (light) / `#000000` (dark)
  - Card Surface: `#ffffff` (light) / `#101010` (dark)
  - Ink (Headings): `#171717` (light) / `#ededed` (dark)
  - Hairline: `1px solid #ebebeb` (light) / `#262626` (dark)
- **Buttons**:
  - **Marketing CTAs**: `rounded-full` (100px pill)
  - **App & Nav Controls**: `rounded-[6px]` (6px tight square)
- **Typography**:
  - Display XL: Geist Sans 600 with `-2.4px` letter tracking
  - Eyebrows: Geist Mono 500 uppercase

---

## 🚀 Production Deployment
```bash
npm run build
npm run start
```

---

## 📄 License

This starter template and CLI are open-source software licensed under the [MIT License](LICENSE).
