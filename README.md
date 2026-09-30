<div align="center">

# Next.js Production Starter Template

An enterprise-ready, high-performance foundation built on **Next.js 16**, **React 19**, **Tailwind CSS v4**, **Base UI / Shadcn**, **Zod**, and **React Hook Form** — engineered with Vercel's **Geist design system**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-v4-3068b7?style=flat&logo=zod)](https://zod.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

[**Live Demo**](http://localhost:3000) • [**GitHub Repository**](https://github.com/workwithchris/next-starter) • [**Design Spec (DESIGN.md)**](DESIGN.md) • [**Deploy to Vercel**](https://vercel.com/new)

</div>

---

## Highlights

- ⚡ **Next.js 16 & Turbopack**: Sub-second Hot Module Replacement (HMR), React Server Components (RSC), and nested layout routing.
- ⚛️ **React 19 & React Compiler**: Preconfigured with `babel-plugin-react-compiler` for automatic memoization without boilerplate `useMemo` / `useCallback`.
- 🔄 **TanStack React Query v5**: Production-grade server state management and asynchronous data fetching with isolated SSR caches, smart refetching, and React Query Devtools.
- 🐻 **Zustand State Management**: Lightweight, atomic UI state with feature-scoped slices and persistent global auth state.
- 🎨 **Tailwind CSS v4 & Nova Theme**: Pure CSS variable engine with zero JavaScript overhead, configured with Shadcn UI & accessible Base UI primitives.
- 📐 **Geist Design Language**: Strictly adheres to [DESIGN.md](DESIGN.md) — minimalist black-on-near-white canvas (`#fafafa`), deep ink (`#171717`), 1px hairlines (`#ebebeb`), dual button radius (100px marketing pills vs. 6px square app controls), and the signature hero mesh gradient.
- 🔐 **Pre-Built Auth & Dashboard Modules**: Production-grade authentication with Zod validation, session management, project workspace management, metrics cards, and modal workflows.
- 🛡️ **Type-Safe Form Sandbox**: Built-in runtime validation using **Zod** and **React Hook Form** with `@hookform/resolvers/zod`.
- 🌐 **Full i18n Suite (5 Locales)**: Powered by `next-intl` across English (`en`), Spanish (`es`), French (`fr`), German (`de`), and Japanese (`ja`).
- 🌓 **Seamless Dark Mode**: Powered by `next-themes` with zero flash-of-unstyled-content (FOUC), system preference detection, and smooth light/dark switching.
- 🔔 **Toast Notifications**: Built-in **Sonner** toaster with dark-mode support.
- 🔍 **Production SEO & PWA**: Dynamic `sitemap.ts`, `robots.ts`, and `manifest.ts` configured for localized multi-region indexing.
- 🧪 **Vitest Test Suite**: Preconfigured unit and integration testing with JSDOM and React Testing Library utilities.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) | `16.3.7` | App Router, SSR, Server Components & Turbopack |
| **UI Library** | [React](https://react.dev/) | `19.2.8` | Component model & React Compiler optimization |
| **Server State** | [TanStack Query](https://tanstack.com/query) | `^5.104.0` | Caching, deduplication, optimistic UI & Devtools |
| **Client State** | [Zustand](https://zustand.docs.pmnd.rs/) | `^5.0.3` | Lightweight, scalable client & auth store |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `v4.0` | Theme variables, utility-first CSS |
| **Primitives** | [Base UI](https://base-ui.com/) / [Shadcn](https://ui.shadcn.com/) | Latest | Accessible, unstyled UI primitives (Nova preset) |
| **Validation** | [Zod](https://zod.dev/) | `v4.6.5` | Type-safe runtime schema validation |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | `v7.89.0` | High-performance, uncontrolled form management |
| **i18n** | [next-intl](https://next-intl-docs.vercel.app/) | `^4.8.4` | App Router localized routing & translations |
| **Testing** | [Vitest](https://vitest.dev/) | `^5.0.2` | Ultra-fast unit & integration testing runner |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | `^2.0.7` | Beautiful toast notifications |
| **Icons** | [Lucide React](https://lucide.dev/) | `^1.48.0` | Clean, lightweight stroke icons |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0` | Strict type safety and inference |

---

## Project Structure

This template uses a domain-driven modular structure:

```
next-starter-template/
├── messages/                     # Translation dictionaries (5 locales)
│   ├── en.json                   # English (default)
│   ├── es.json                   # Spanish
│   ├── fr.json                   # French
│   ├── de.json                   # German
│   └── ja.json                   # Japanese
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/             # Localized root segment
│   │   │   ├── (public)/         # Public marketing route group
│   │   │   │   └── page.tsx      # Landing page (modules/public/home)
│   │   │   ├── (auth)/           # Authentication route group
│   │   │   │   └── login/page.tsx# Login & auth (modules/auth)
│   │   │   ├── (protected)/      # Protected authenticated route group
│   │   │   │   └── dashboard/page.tsx # Workspace dashboard (modules/protected/dashboard)
│   │   │   ├── layout.tsx        # Root layout (Geist font, providers, sonner toaster)
│   │   │   ├── error.tsx         # Localized error boundary
│   │   │   ├── not-found.tsx     # Localized 404 boundary
│   │   │   └── loading.tsx       # Loading skeleton suspense boundary
│   │   ├── api/                  # Next.js Route Handlers
│   │   │   ├── projects/route.ts # CRUD projects API (GET, POST, DELETE)
│   │   │   └── dashboard/metrics/route.ts # Live workspace metrics API
│   │   ├── globals.css           # Tailwind v4 theme & Geist design tokens
│   │   ├── manifest.ts           # Web App Manifest generator
│   │   ├── robots.ts             # Robots.txt generator
│   │   ├── sitemap.ts            # Multilingual dynamic sitemap
│   │   └── global-error.tsx      # Root application crash boundary
│   │
│   ├── proxy.ts                  # Next.js 16 Proxy convention for locale routing
│   │
│   ├── modules/                  # Domain-driven feature modules
│   │   ├── public/               # Public-facing domains
│   │   │   └── home/             # Marketing landing page
│   │   │       ├── home.tsx      # Composition root
│   │   │       ├── hooks/        # use-github-stars.ts
│   │   │       └── components/   # Hero, Features, Architecture, FormDemo, Navbar, etc.
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
│   ├── core/                     # Shared application infrastructure
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
│   └── components/               # Cross-cutting UI primitives
│       ├── locale-switcher.tsx   # Language selector dropdown
│       ├── theme-toggle.tsx      # Dark mode toggle
│       └── ui/                   # Shadcn / Base UI primitives (button, dialog, badge, input, ...)
│
├── DESIGN.md                     # Vercel Geist design system specification
├── components.json               # Shadcn UI configuration
└── package.json                  # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- **Node.js**: `18.18+` or `20.x` / `22.x` recommended
- **Package Manager**: `pnpm`, `npm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/workwithchris/next-starter.git
   cd next-starter
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   bun install
   ```

3. **Start the development server with Turbopack:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Form Validation Example (Zod + React Hook Form)

Forms in this starter are built with `@hookform/resolvers/zod`:

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  projectName: z.string().min(3, "Must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

export function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Validated payload:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("projectName")} placeholder="Project Name" />
      {errors.projectName && <p className="text-red-500">{errors.projectName.message}</p>}

      <input {...register("email")} type="email" placeholder="Developer Email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Internationalization (i18n / intl)

This starter is configured with [**next-intl**](https://next-intl-docs.vercel.app/) for high-performance, App Router-first internationalization:

- **Supported Locales**: `en` (English - default), `es` (Spanish), `fr` (French), `de` (German), `ja` (Japanese).
- **Localized Routing**: Routes map to `/[locale]/...` with automatic locale detection via Next.js 16 `src/proxy.ts`.
- **Locale Switcher**: Built-in `<LocaleSwitcher />` component in the navbar for seamless instant language toggling.
- **Message Dictionaries**: Located in `messages/*.json` for clean separation and localization workflows.

### Usage in Server Components

```tsx
import { getTranslations } from "next-intl/server";

export default async function ServerComponent() {
  const t = await getTranslations("Hero");
  return <h1>{t("title")}</h1>;
}
```

### Usage in Client Components

```tsx
"use client";

import { useTranslations } from "next-intl";

export function ClientComponent() {
  const t = useTranslations("Navbar");
  return <span>{t("brand")}</span>;
}
```

---

## Server State & Caching (TanStack React Query)

The template is preconfigured with `@tanstack/react-query` v5 and `@tanstack/react-query-devtools` located under `@/core/providers`.

### Features
- **App Router Singleton**: Avoids recreating query clients during client-side hydration or suspense cascades while keeping server request contexts isolated.
- **Smart Defaults**: 60s `staleTime`, 5m `gcTime`, single automatic retry, and window focus refetching disabled by default.
- **Integrated Devtools**: Floating React Query Devtools enabled in development mode.

### Usage in Components

```tsx
"use client";

import { useQuery } from "@tanstack/react-query";

export function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await fetch(`/api/users/${userId}`);
      if (!res.ok) throw new Error("Failed to fetch user");
      return res.json();
    },
  });

  if (isLoading) return <div>Loading user...</div>;
  if (error) return <div>Error loading user</div>;

  return <div>Welcome, {data.name}!</div>;
}
```

---

## Client State Management (Zustand)

Client-side UI and session state are managed using [**Zustand**](https://zustand.docs.pmnd.rs/):

- **Global Stores** (`@/core/store/`): App-wide state such as authentication (`useAuthStore`) with local storage persistence and role-based permissions.
- **Feature-Scoped Slices** (`@/modules/<feature>/store/`): Atomic, isolated client UI state (e.g. `useDashboardStore` for search query, active tier filters, and modal toggles).

```tsx
import { useAuthStore } from "@/core/store";
import { useDashboardStore } from "@/modules/protected/dashboard/store/dashboard-slice";

export function HeaderUser() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const setCreateDialogOpen = useDashboardStore((s) => s.setCreateDialogOpen);

  return (
    <div>
      {isAuthenticated && <span>{user?.name}</span>}
      <button onClick={() => setCreateDialogOpen(true)}>New Project</button>
    </div>
  );
}
```

---

## Enterprise Network Suite (`@/core/network`)

A type-safe, production-ready network layer engineered for Next.js 16 (Server Components, Route Handlers, and Client Components).

### 1. HTTP Client (`apiClient` / `createHttpClient`)

- **Automatic Content-Type Negotiation**: Encodes JSON, preserves FormData boundaries for multipart uploads, handles Blobs, ArrayBuffers, and URLSearchParams.
- **Interceptors**: Pre-configured pipelines for `onRequest`, `onResponse`, and `onError` (token injection, refresh token rotation, logging).
- **Transient Error Retries**: Built-in exponential backoff with jitter for HTTP 408, 429, and 5xx errors.
- **Zod Runtime Validation**: Optional `schema` parameter validates API responses before returning.
- **Timeout Management**: Per-request `timeoutMs` via native `AbortController`.

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
console.log(response.data.name);
```

### 2. Multipart & FormData File Uploads

Upload files or structured form data with automatic boundary management and real-time progress events:

```tsx
import { apiClient } from "@/core/network";

const formData = new FormData();
formData.append("avatar", fileInput.files[0]);
formData.append("bio", "Software Architect");

const uploadRes = await apiClient.upload("/api/upload", formData, {
  onProgress: ({ percentage, loaded, total }) => {
    console.log(`Upload progress: ${percentage}% (${loaded}/${total} bytes)`);
  },
});
```

### 3. Server-Sent Events (SSE)

Unlike browser `EventSource`, our `SSEClient` supports **POST requests**, **custom auth headers**, and **async iterators** (perfect for LLM / AI streaming and live notifications):

```tsx
import { SSEClient, useSSE } from "@/core/network";

// Option A: React Hook
export function LiveNotifications() {
  const { data, isConnected } = useSSE<{ message: string }>("/api/live/stream");
  return <div>Status: {isConnected ? "Live" : "Offline"} | Last: {data?.message}</div>;
}

// Option B: Async Streaming (React 19 / Server & Client)
for await (const chunk of SSEClient.stream("/api/ai/chat", {
  method: "POST",
  body: { prompt: "Explain Next.js 16 architecture" },
  headers: { Authorization: `Bearer ${token}` },
})) {
  console.log("Stream token:", chunk.data);
}
```

### 4. Resilient WebSockets (`SocketClient` / `useSocket`)

Includes automatic reconnection, ping-pong heartbeat, outgoing message buffering, and typed event dispatching:

```tsx
"use client";

import { useSocket } from "@/core/network";

export function RealTimeChat() {
  const { isConnected, emit, lastMessage, status } = useSocket("wss://api.example.com/ws", {
    heartbeat: true,
    heartbeatIntervalMs: 25000,
  });

  const sendMessage = () => {
    emit("chat_message", { text: "Hello team!", channel: "general" });
  };

  return (
    <div>
      <p>Connection: {status}</p>
      <button onClick={sendMessage} disabled={!isConnected}>Send</button>
    </div>
  );
}
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles an optimized production build and checks TypeScript types |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality and style issues |
| `npm test` | Runs all unit test suites using Vitest |
| `npm run test:watch` | Starts Vitest in interactive watch mode |

---

## Design System Guidelines

This project implements the design specification detailed in [DESIGN.md](DESIGN.md):

- **Palette**:
  - Canvas: `#fafafa` (light) / `#000000` (dark)
  - Card Surface: `#ffffff` (light) / `#101010` (dark)
  - Ink (Headings): `#171717` (light) / `#ededed` (dark)
  - Body: `#4d4d4d` (light) / `#a1a1a1` (dark)
  - Hairline: `1px solid #ebebeb` (light) / `#262626` (dark)
- **Buttons**:
  - **Marketing CTAs**: `rounded-full` (100px pill)
  - **App & Nav Controls**: `rounded-[6px]` (6px tight square)
- **Typography**:
  - Display XL: Geist Sans 600 with `-2.4px` letter tracking
  - Eyebrows: Geist Mono 500 uppercase

---

## Deployment

### Vercel (Recommended)

The easiest way to deploy this template is through [Vercel](https://vercel.com/new):

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project on the Vercel dashboard.
3. Deploy automatically with zero configuration.

### Docker / Self-Hosted

To build a standalone production bundle:
```bash
npm run build
npm run start
```

---

## License

This starter template is open-source software licensed under the [MIT License](LICENSE).
