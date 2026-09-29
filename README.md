<div align="center">

# Next.js Production Starter Template

An enterprise-ready, high-performance foundation built on **Next.js 16**, **React 19**, **Tailwind CSS v4**, **Base UI / Shadcn**, **Zod**, and **React Hook Form** — engineered with Vercel's **Geist design system**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-v4-3068b7?style=flat&logo=zod)](https://zod.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

[**Live Demo**](http://localhost:3000) • [**Design Spec (DESIGN.md)**](DESIGN.md) • [**Deploy to Vercel**](https://vercel.com/new)

</div>

---

## Highlights

- ⚡ **Next.js 16 & Turbopack**: Sub-second Hot Module Replacement (HMR), React Server Components (RSC), and nested layout routing.
- ⚛️ **React 19 & React Compiler**: Preconfigured with `babel-plugin-react-compiler` for automatic memoization without boilerplate `useMemo` / `useCallback`.
- 🎨 **Tailwind CSS v4 & Nova Theme**: Pure CSS variable engine with zero JavaScript overhead, configured with Shadcn UI & accessible Base UI primitives.
- 📐 **Geist Design Language**: Strictly adheres to [DESIGN.md](DESIGN.md) — minimalist black-on-near-white canvas (`#fafafa`), deep ink (`#171717`), 1px hairlines (`#ebebeb`), dual button radius (100px marketing pills vs. 6px square app controls), and the signature hero mesh gradient.
- 🛡️ **Type-Safe Form Sandbox**: Built-in runtime validation using **Zod** and **React Hook Form** with `@hookform/resolvers/zod`.
- 📁 **Domain-Driven Modular Architecture**: Clean separation between routes (`app/`), domain features (`modules/`), shared infrastructure (`core/`), and UI primitives (`components/`).
- 🔌 **Fullstack & Microservices Ready**: Optimized for Next.js App Router route handlers, server actions, or a companion NestJS backend.

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) | `16.3.7` | App Router, SSR, Server Components & Turbopack |
| **UI Library** | [React](https://react.dev/) | `19.2.8` | Component model & React Compiler optimization |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `v4.0` | Theme variables, utility-first CSS |
| **Primitives** | [Base UI](https://base-ui.com/) / [Shadcn](https://ui.shadcn.com/) | Latest | Accessible, unstyled UI primitives (Nova preset) |
| **Validation** | [Zod](https://zod.dev/) | `v4.6.5` | Type-safe runtime schema validation |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | `v7.89.0` | High-performance, uncontrolled form management |
| **Icons** | [Lucide React](https://lucide.dev/) | `^1.48.0` | Clean, lightweight stroke icons |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0` | Strict type safety and inference |

---

## Project Structure

This template uses a domain-driven modular structure:

```
next-starter-template/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── globals.css           # Tailwind v4 theme & Geist tokens
│   │   ├── layout.tsx            # Root layout with Geist font loading
│   │   └── page.tsx              # Asynchronous SSR entrypoint calling modules/home
│   │
│   ├── modules/                  # Domain-driven feature modules
│   │   └── home/                 # Home domain
│   │       ├── home.tsx          # Main Home view orchestrator
│   │       └── components/       # Domain-specific UI sections
│   │           ├── navbar.tsx
│   │           ├── hero-section.tsx
│   │           ├── tech-stack-strip.tsx
│   │           ├── features-grid.tsx
│   │           ├── form-demo.tsx
│   │           ├── architecture-viewer.tsx
│   │           ├── vercel-triad.tsx
│   │           ├── cta-band.tsx
│   │           └── footer.tsx
│   │
│   ├── core/                     # Shared application core (feature-agnostic)
│   │   ├── hooks/                # Reusable React hooks
│   │   ├── lib/                  # Utility functions (cn classnames helper)
│   │   └── network/              # API clients & HTTP wrappers
│   │
│   └── components/               # Cross-cutting UI primitives
│       ├── layouts/              # Global layout shells
│       └── ui/                   # Shadcn / Base UI components (e.g. Button)
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
   git clone https://github.com/your-org/next-starter-template.git
   cd next-starter-template
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

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles an optimized production build and checks TypeScript types |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

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
