# create-starter-next

The ultimate CLI to scaffold production-ready **Next.js 16 (App Router)** projects with **React 19**, **Tailwind CSS v4**, **Base UI / Shadcn**, **5-Locale i18n (`next-intl`)**, **Type-Safe Network Suite**, and **20+ Design System Archetypes** from [getdesign.md](https://getdesign.md).

[![npm version](https://img.shields.io/npm/v/create-starter-next.svg?color=0070f3)](https://www.npmjs.com/package/create-starter-next)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ Quickstart

Scaffold a new project in seconds with your favorite package manager:

```bash
# With npx
npx create-starter-next my-app

# With pnpm
pnpm create starter-next my-app

# With bun
bun create starter-next my-app

# With yarn
yarn create starter-next my-app
```

Running without flags launches an interactive terminal wizard allowing you to select your template preset, search through 20+ design systems, and choose your package manager.

---

## 🛠️ CLI Flags & Options

Automate scaffolding or customize options directly from the command line:

```bash
# Fullstack preset with Supabase design system
npx create-starter-next my-app --fullstack --design=supabase

# Minimal preset with Linear aesthetic and pnpm
npx create-starter-next my-app --minimal --design=linear --pm=pnpm

# Non-interactive CI scaffolding with default options
npx create-starter-next my-app -y
```

### Supported Flags

| Flag | Description | Options / Defaults |
| :--- | :--- | :--- |
| `--preset <type>` | Blueprint architecture preset | `fullstack` \| `minimal` (default: `fullstack`) |
| `--design <id>` | [getdesign.md](https://getdesign.md) design system token archetype | `geist`, `linear`, `supabase`, `claude`, etc. (default: `geist`) |
| `--pm <manager>` | Package manager for installation | `pnpm` \| `npm` \| `bun` \| `yarn` (auto-detected) |
| `-y`, `--yes` | Skip all interactive prompts and use defaults | `false` |
| `--git` / `--no-git` | Explicitly initialize a Git repository | `true` |
| `--install` / `--no-install` | Explicitly install dependencies | `true` |

---

## 🎨 20+ Authentic Design Archetypes

Every design archetype injects calibrated OKLCH CSS variables, button radius tokens, and visual rules directly into `src/app/globals.css` and `DESIGN.md`.

### 1. AI & LLM Platforms
- `--design=claude` — **Claude (Anthropic)**: Warm Terracotta `#d97757`, clean editorial canvas
- `--design=openai` — **OpenAI / ChatGPT**: Subtle Emerald `#10a37f`, clean dark slate `#202123`
- `--design=gemini` — **Google Gemini**: Sparkling Blue `#1a73e8`, Cosmic Deep `#131314`
- `--design=cohere` — **Cohere**: Enterprise Coral `#ff6f61` & Emerald data aesthetic
- `--design=elevenlabs` — **ElevenLabs**: Dark cinematic audio-waveform, obsidian canvas
- `--design=mistral` — **Mistral AI**: French engineered minimalism, flame orange `#f54e00`
- `--design=ollama` — **Ollama**: Terminal-first monochrome, pitch black `#000000`
- `--design=runway` — **Runway ML**: Film-festival editorial, cinematic dark & pill radius
- `--design=together` — **Together AI**: Technical blueprint, electric cyan `#00f2fe`
- `--design=xai` — **xAI (Grok)**: Stark monochrome, futuristic hyper-minimalism

### 2. Developer Tools & Frameworks
- `--design=geist` — **Geist Minimal (Vercel)**: Stark ink on canvas, 1px hairlines *(Default)*
- `--design=linear` — **Linear**: Deep Carbon `#121212`, Electric Indigo `#5e6ad2`
- `--design=cursor` — **Cursor**: Sleek IDE dark chrome, royal gradient blue `#3b82f6`
- `--design=raycast` — **Raycast**: Modern Glassmorphism, Crimson `#ff6363` & rounded pill tokens
- `--design=resend` — **Resend**: Jet Black `#000`, Bright Orange-Red `#f5564a`
- `--design=warp` — **Warp**: Modern terminal aesthetic, cyan block prompt UI `#00d8d6`
- `--design=superhuman` — **Superhuman**: Keyboard-first UX, deep violet glow `#6b46c1`

### 3. Cloud & Infrastructure
- `--design=supabase` — **Supabase**: Deep Obsidian `#09090b`, Emerald Green `#3ecf8e` glow
- `--design=stripe` — **Stripe**: Clean Slate `#0a2540`, Vibrant Indigo `#635bff` & ribbons
- `--design=clickhouse` — **ClickHouse**: High-voltage Yellow `#facc15`, analytics carbon
- `--design=planetscale` — **PlanetScale**: Database mesh, dark `#0a0a0a` & electric orange `#ff6e00`
- `--design=cloudflare` — **Cloudflare**: Internet edge infrastructure, energetic orange `#f38020`

### 4. Aesthetic Archetypes
- `--design=tokyo-night` — **Tokyo Night**: Navy Slate `#1a1b26`, Neon Sky `#7aa2f7`
- `--design=brutalist` — **Brutalist Sharp**: 0px Sharp Corners, Thick Hairlines, Pure Pitch Black
- `--design=nord` — **Nord**: Arctic Frost Polar Night `#2e3440`, Cyan `#88c0d0`, Aurora Emerald
- `--design=catppuccin` — **Catppuccin Mocha**: Crust `#11111b`, Mauve `#cba6f7`, Sapphire `#74c7ec`
- `--design=cyberpunk` — **Cyberpunk Neon**: Pure Onyx `#050505`, Neon Yellow `#facc15`, Hot Pink
- `--design=sunset` — **Sunset Horizon**: Deep Wine Noir, Coral Pink `#ff6b6b`, Violet `#845ec2`
- `--design=dracula` — **Dracula Pro**: Dark Gothic `#282a36`, Neon Purple `#bd93f9`
- `--design=github` — **GitHub Primer**: GitHub dark dimmed `#22272e`, classic blue & green
- `--design=tailwind` — **Tailwind Slate**: Modern SaaS blueprint, clean slate `#0f172a`, Sky Blue

---

## 📦 Presets Comparison

| Feature | `minimal` | `fullstack` |
| :--- | :---: | :---: |
| **Next.js 16 App Router + React 19** | ✅ | ✅ |
| **Tailwind CSS v4 + Base UI** | ✅ | ✅ |
| **Multilingual i18n (5 locales: `en`, `es`, `fr`, `de`, `ja`)** | ✅ | ✅ |
| **Type-Safe Network Suite (`apiClient`, `useSSE`, `useSocket`)** | ✅ | ✅ |
| **TanStack React Query v5** | ✅ | ✅ |
| **Zustand State Management** | ✅ | ✅ |
| **Vitest Unit Test Suite** | ✅ | ✅ |
| **Auth.js (NextAuth v5) Edge & Server Authentication** | ❌ *(Pruned)* | ✅ |
| **Protected Dashboard Workspace & Guard Middleware** | ❌ *(Pruned)* | ✅ |
| **Mock API Endpoints & Dynamic `AUTH_SECRET` Generation** | ❌ *(Pruned)* | ✅ |

---

## 🏗️ Architecture & Project Structure

Projects generated by `create-starter-next` follow a strict **Feature-First Domain Architecture**:

```text
src/
├── app/[locale]/             # Thin route files (params -> setRequestLocale -> module)
│   ├── (public)/             # Public marketing routes (/)
│   ├── (auth)/               # Auth routes (/login) [fullstack]
│   └── (protected)/          # Protected routes (/dashboard) [fullstack]
├── modules/<feature>/        # Isolated domain feature modules
│   ├── components/           # Presentational sub-components (<100 lines each)
│   ├── hooks/                # Custom hooks (e.g. use-login.ts)
│   ├── data/                 # API calls, TanStack Query hooks, Zod schemas
│   ├── store/                # Feature-private Zustand stores
│   ├── __tests__/            # Colocated Vitest tests
│   └── <feature>.tsx         # Composition root exporting the module
├── components/ui/            # Base UI / Shadcn primitives
├── core/                     # App-wide infrastructure
│   ├── auth/                 # Auth.js server config & auth() helper [fullstack]
│   ├── i18n/                 # next-intl routing (Link, useRouter, usePathname)
│   ├── network/              # Type-safe apiClient, SSE client, WebSocket client
│   └── store/                # Global UI state stores
└── messages/                 # i18n JSON translations (en, es, fr, de, ja)
```

---

## 🤖 AI Agent Grounding (`DESIGN.md` & `AGENTS.md`)

Scaffolded projects include built-in AI configuration files:
- **`DESIGN.md`**: Captures the exact color variables, radius tokens, typography scales, and component specs of your chosen theme. When assistants like **Claude Code**, **Cursor**, or **Gemini** build new features, they produce UI matching your visual design system.
- **`AGENTS.md`**: Enforces strict code conventions (sub-100-line components, kebab-case naming, type safety, test colocation, next-intl routing).

---

## 🚀 Development Scripts

Once your project is created:

```bash
# Start development server with Turbopack
pnpm run dev

# Run Vitest test suite
pnpm test

# Run tests in interactive watch mode
pnpm run test:watch

# Run ESLint validation
pnpm run lint

# Build for production
pnpm run build
```

---

## 📄 License

MIT © [workwithchris](https://github.com/workwithchris)
