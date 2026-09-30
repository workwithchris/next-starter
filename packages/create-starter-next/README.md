# create-starter-next

The fastest way to scaffold an enterprise-ready **Next.js 16** project with **React 19**, **Tailwind CSS v4**, **Base UI / Shadcn**, **Zod**, and **TanStack React Query**.

## Usage

You can create a new project with any of your favorite package managers:

### With `npx` / `npm`
```bash
npx create-starter-next my-app
# or
npm create starter-next my-app
```

### With `pnpm`
```bash
pnpm create starter-next my-app
```

### With `bun`
```bash
bun create starter-next my-app
```

### With `yarn`
```bash
yarn create starter-next my-app
```

## Features Included

- ⚡ **Next.js 16** with Turbopack & React 19 Compiler
- 🎨 **Tailwind CSS v4** + Geist Design tokens
- 🐻 **Zustand** client & auth state with cookie sync
- 🔄 **TanStack React Query v5** server cache & devtools
- 🛡️ **Zod** schema runtime validation & React Hook Form
- 🌐 **5 Locales i18n** (`next-intl`) with edge proxy middleware protection
- 🧪 **Vitest** test suite with JSDOM
- 🚀 Pre-configured Auth.js, Dashboard, and Marketing modules

## Publishing to NPM

To publish this package to NPM:

1. Sign in to your NPM account:
   ```bash
   npm login
   ```

2. Publish from the `packages/create-starter-next` directory:
   ```bash
   cd packages/create-starter-next
   npm publish --access public
   ```

## License

MIT © [workwithchris](https://github.com/workwithchris)
