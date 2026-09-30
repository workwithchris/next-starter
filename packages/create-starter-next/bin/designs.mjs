export const DESIGN_CATALOG = [
  {
    id: "geist",
    title: "Geist Minimal (Default)",
    description: "Stark Ink on Canvas, 1px Hairlines, dual button radius",
    primary: "oklch(0.205 0 0)",
    accent: "oklch(0.97 0 0)",
    radius: "0.625rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
`,
    cssDark: `
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.556 0 0);
`,
    meshGradient: `
  background: 
    radial-gradient(at 18% 28%, #50e3c2 0px, transparent 50%),
    radial-gradient(at 82% 20%, #007cf0 0px, transparent 50%),
    radial-gradient(at 35% 75%, #7928ca 0px, transparent 50%),
    radial-gradient(at 80% 80%, #eb367f 0px, transparent 50%),
    radial-gradient(at 50% 50%, #f5a623 0px, transparent 55%);
`,
  },
  {
    id: "linear",
    title: "Linear (Issue Tracker Aesthetic)",
    description: "Deep Carbon #121212, Electric Indigo #5e6ad2 & Gold",
    primary: "oklch(0.55 0.22 275)",
    accent: "oklch(0.75 0.18 75)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(0.98 0.005 270);
  --foreground: oklch(0.18 0.02 270);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.02 270);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.02 270);
  --primary: oklch(0.55 0.22 275);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 270);
  --secondary-foreground: oklch(0.2 0.02 270);
  --muted: oklch(0.95 0.01 270);
  --muted-foreground: oklch(0.5 0.02 270);
  --accent: oklch(0.93 0.02 275);
  --accent-foreground: oklch(0.55 0.22 275);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 270);
  --input: oklch(0.9 0.01 270);
  --ring: oklch(0.55 0.22 275);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.13 0.01 270);
  --foreground: oklch(0.95 0.01 270);
  --card: oklch(0.17 0.015 270);
  --card-foreground: oklch(0.95 0.01 270);
  --popover: oklch(0.17 0.015 270);
  --popover-foreground: oklch(0.95 0.01 270);
  --primary: oklch(0.62 0.22 275);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.22 0.02 270);
  --secondary-foreground: oklch(0.95 0.01 270);
  --muted: oklch(0.22 0.02 270);
  --muted-foreground: oklch(0.65 0.02 270);
  --accent: oklch(0.24 0.03 275);
  --accent-foreground: oklch(0.85 0.1 275);
  --border: oklch(0.25 0.02 270);
  --input: oklch(0.25 0.02 270);
  --ring: oklch(0.62 0.22 275);
`,
    meshGradient: `
  background: 
    radial-gradient(at 20% 20%, #5e6ad2 0px, transparent 50%),
    radial-gradient(at 80% 25%, #8a63d2 0px, transparent 50%),
    radial-gradient(at 40% 80%, #f5a623 0px, transparent 50%);
`,
  },
  {
    id: "supabase",
    title: "Supabase (Developer Cloud)",
    description: "Deep Obsidian #09090b, Emerald Green #3ecf8e glows",
    primary: "oklch(0.75 0.18 155)",
    accent: "oklch(0.65 0.2 155)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 155);
  --foreground: oklch(0.15 0.01 155);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.01 155);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.01 155);
  --primary: oklch(0.6 0.18 155);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 155);
  --secondary-foreground: oklch(0.2 0.02 155);
  --muted: oklch(0.95 0.01 155);
  --muted-foreground: oklch(0.5 0.02 155);
  --accent: oklch(0.92 0.03 155);
  --accent-foreground: oklch(0.4 0.15 155);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 155);
  --input: oklch(0.9 0.01 155);
  --ring: oklch(0.6 0.18 155);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.01 155);
  --foreground: oklch(0.96 0.01 155);
  --card: oklch(0.16 0.015 155);
  --card-foreground: oklch(0.96 0.01 155);
  --popover: oklch(0.16 0.015 155);
  --popover-foreground: oklch(0.96 0.01 155);
  --primary: oklch(0.75 0.18 155);
  --primary-foreground: oklch(0.1 0.02 155);
  --secondary: oklch(0.22 0.02 155);
  --secondary-foreground: oklch(0.95 0.01 155);
  --muted: oklch(0.22 0.02 155);
  --muted-foreground: oklch(0.65 0.02 155);
  --accent: oklch(0.24 0.03 155);
  --accent-foreground: oklch(0.85 0.15 155);
  --border: oklch(0.24 0.02 155);
  --input: oklch(0.24 0.02 155);
  --ring: oklch(0.75 0.18 155);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 25%, #3ecf8e 0px, transparent 50%),
    radial-gradient(at 85% 20%, #24b47e 0px, transparent 50%),
    radial-gradient(at 50% 80%, #006239 0px, transparent 55%);
`,
  },
  {
    id: "stripe",
    title: "Stripe (Financial Infrastructure)",
    description: "Clean Slate #0a2540, Vibrant Indigo #635bff & Cyan",
    primary: "oklch(0.55 0.24 280)",
    accent: "oklch(0.75 0.18 200)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 250);
  --foreground: oklch(0.18 0.03 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.03 260);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.03 260);
  --primary: oklch(0.55 0.24 280);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 260);
  --secondary-foreground: oklch(0.2 0.03 260);
  --muted: oklch(0.95 0.01 260);
  --muted-foreground: oklch(0.5 0.02 260);
  --accent: oklch(0.93 0.03 280);
  --accent-foreground: oklch(0.45 0.2 280);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 260);
  --input: oklch(0.9 0.01 260);
  --ring: oklch(0.55 0.24 280);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.02 260);
  --foreground: oklch(0.96 0.01 260);
  --card: oklch(0.16 0.025 260);
  --card-foreground: oklch(0.96 0.01 260);
  --popover: oklch(0.16 0.025 260);
  --popover-foreground: oklch(0.96 0.01 260);
  --primary: oklch(0.65 0.22 280);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.22 0.025 260);
  --secondary-foreground: oklch(0.95 0.01 260);
  --muted: oklch(0.22 0.025 260);
  --muted-foreground: oklch(0.65 0.02 260);
  --accent: oklch(0.25 0.04 280);
  --accent-foreground: oklch(0.85 0.15 280);
  --border: oklch(0.24 0.02 260);
  --input: oklch(0.24 0.02 260);
  --ring: oklch(0.65 0.22 280);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #635bff 0px, transparent 50%),
    radial-gradient(at 85% 25%, #00d4ff 0px, transparent 50%),
    radial-gradient(at 50% 80%, #7a73ff 0px, transparent 55%);
`,
  },
  {
    id: "raycast",
    title: "Raycast (Productivity & Extensions)",
    description: "Modern Glass, Crimson #ff6363, Rounded Pills",
    primary: "oklch(0.62 0.24 25)",
    accent: "oklch(0.7 0.22 40)",
    radius: "0.75rem",
    cssRoot: `
  --background: oklch(0.99 0.005 20);
  --foreground: oklch(0.16 0.01 20);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.01 20);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.01 20);
  --primary: oklch(0.62 0.24 25);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 20);
  --secondary-foreground: oklch(0.2 0.01 20);
  --muted: oklch(0.95 0.01 20);
  --muted-foreground: oklch(0.5 0.01 20);
  --accent: oklch(0.93 0.03 25);
  --accent-foreground: oklch(0.55 0.22 25);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 20);
  --input: oklch(0.9 0.01 20);
  --ring: oklch(0.62 0.24 25);
  --radius: 0.75rem;
`,
    cssDark: `
  --background: oklch(0.12 0.01 20);
  --foreground: oklch(0.96 0.01 20);
  --card: oklch(0.16 0.015 20);
  --card-foreground: oklch(0.96 0.01 20);
  --popover: oklch(0.16 0.015 20);
  --popover-foreground: oklch(0.96 0.01 20);
  --primary: oklch(0.65 0.24 25);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.22 0.015 20);
  --secondary-foreground: oklch(0.95 0.01 20);
  --muted: oklch(0.22 0.015 20);
  --muted-foreground: oklch(0.65 0.01 20);
  --accent: oklch(0.25 0.04 25);
  --accent-foreground: oklch(0.85 0.15 25);
  --border: oklch(0.25 0.015 20);
  --input: oklch(0.25 0.015 20);
  --ring: oklch(0.65 0.24 25);
`,
    meshGradient: `
  background: 
    radial-gradient(at 20% 25%, #ff6363 0px, transparent 50%),
    radial-gradient(at 80% 20%, #ff4757 0px, transparent 50%),
    radial-gradient(at 50% 75%, #ff9f43 0px, transparent 55%);
`,
  },
  {
    id: "resend",
    title: "Resend (Email for Developers)",
    description: "Jet Black #000, Bright Orange-Red #f5564a, High Contrast",
    primary: "oklch(0.65 0.22 35)",
    accent: "oklch(0.7 0.2 45)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0.12 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.12 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.12 0 0);
  --primary: oklch(0.62 0.22 35);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.96 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.5 0 0);
  --accent: oklch(0.94 0.02 35);
  --accent-foreground: oklch(0.55 0.2 35);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0 0);
  --input: oklch(0.9 0 0);
  --ring: oklch(0.62 0.22 35);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.1 0 0);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.14 0 0);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.14 0 0);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.68 0.22 35);
  --primary-foreground: oklch(0.1 0 0);
  --secondary: oklch(0.2 0 0);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.2 0 0);
  --muted-foreground: oklch(0.65 0 0);
  --accent: oklch(0.22 0.03 35);
  --accent-foreground: oklch(0.88 0.15 35);
  --border: oklch(0.22 0 0);
  --input: oklch(0.22 0 0);
  --ring: oklch(0.68 0.22 35);
`,
    meshGradient: `
  background: 
    radial-gradient(at 20% 20%, #f5564a 0px, transparent 50%),
    radial-gradient(at 80% 25%, #ff7961 0px, transparent 50%),
    radial-gradient(at 50% 80%, #d32f2f 0px, transparent 55%);
`,
  },
  {
    id: "tokyo-night",
    title: "Tokyo Night (Developer Theme)",
    description: "Navy Slate #1a1b26, Neon Sky #7aa2f7 & Magenta #bb9af7",
    primary: "oklch(0.7 0.16 250)",
    accent: "oklch(0.75 0.18 310)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.98 0.01 250);
  --foreground: oklch(0.16 0.03 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.03 260);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.03 260);
  --primary: oklch(0.55 0.18 250);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.94 0.02 250);
  --secondary-foreground: oklch(0.2 0.03 260);
  --muted: oklch(0.94 0.02 250);
  --muted-foreground: oklch(0.5 0.02 260);
  --accent: oklch(0.92 0.03 310);
  --accent-foreground: oklch(0.5 0.2 310);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 250);
  --input: oklch(0.9 0.01 250);
  --ring: oklch(0.55 0.18 250);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.14 0.03 265);
  --foreground: oklch(0.92 0.02 260);
  --card: oklch(0.18 0.035 265);
  --card-foreground: oklch(0.92 0.02 260);
  --popover: oklch(0.18 0.035 265);
  --popover-foreground: oklch(0.92 0.02 260);
  --primary: oklch(0.7 0.16 250);
  --primary-foreground: oklch(0.12 0.03 265);
  --secondary: oklch(0.24 0.035 265);
  --secondary-foreground: oklch(0.92 0.02 260);
  --muted: oklch(0.24 0.035 265);
  --muted-foreground: oklch(0.65 0.02 260);
  --accent: oklch(0.26 0.04 310);
  --accent-foreground: oklch(0.85 0.15 310);
  --border: oklch(0.26 0.03 265);
  --input: oklch(0.26 0.03 265);
  --ring: oklch(0.7 0.16 250);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #7aa2f7 0px, transparent 50%),
    radial-gradient(at 85% 25%, #bb9af7 0px, transparent 50%),
    radial-gradient(at 50% 80%, #7dcfff 0px, transparent 55%);
`,
  },
  {
    id: "brutalist",
    title: "Brutalist Sharp (High Contrast)",
    description: "0px Sharp Corners, Thick Hairlines, Pure Pitch Black",
    primary: "oklch(0 0 0)",
    accent: "oklch(0.5 0 0)",
    radius: "0rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0 0 0);
  --primary: oklch(0 0 0);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.94 0 0);
  --secondary-foreground: oklch(0 0 0);
  --muted: oklch(0.94 0 0);
  --muted-foreground: oklch(0.4 0 0);
  --accent: oklch(0.9 0 0);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.8 0 0);
  --input: oklch(0.8 0 0);
  --ring: oklch(0 0 0);
  --radius: 0rem;
`,
    cssDark: `
  --background: oklch(0 0 0);
  --foreground: oklch(1 0 0);
  --card: oklch(0.1 0 0);
  --card-foreground: oklch(1 0 0);
  --popover: oklch(0.1 0 0);
  --popover-foreground: oklch(1 0 0);
  --primary: oklch(1 0 0);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.2 0 0);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.2 0 0);
  --muted-foreground: oklch(0.7 0 0);
  --accent: oklch(0.2 0 0);
  --accent-foreground: oklch(1 0 0);
  --border: oklch(0.3 0 0);
  --input: oklch(0.3 0 0);
  --ring: oklch(1 0 0);
`,
    meshGradient: `
  background: 
    radial-gradient(at 20% 20%, #ffffff 0px, transparent 40%),
    radial-gradient(at 80% 80%, #888888 0px, transparent 50%);
`,
  },
  {
    id: "nord",
    title: "Nord (Arctic Frost & Polar Night)",
    description: "Polar Night #2e3440, Frost Cyan #88c0d0, Aurora Emerald",
    primary: "oklch(0.75 0.12 210)",
    accent: "oklch(0.7 0.14 180)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.98 0.01 220);
  --foreground: oklch(0.25 0.03 240);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.25 0.03 240);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.25 0.03 240);
  --primary: oklch(0.6 0.14 210);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.94 0.02 220);
  --secondary-foreground: oklch(0.25 0.03 240);
  --muted: oklch(0.94 0.02 220);
  --muted-foreground: oklch(0.5 0.02 230);
  --accent: oklch(0.92 0.03 210);
  --accent-foreground: oklch(0.5 0.15 210);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 220);
  --input: oklch(0.9 0.01 220);
  --ring: oklch(0.6 0.14 210);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.22 0.025 240);
  --foreground: oklch(0.94 0.01 220);
  --card: oklch(0.26 0.03 240);
  --card-foreground: oklch(0.94 0.01 220);
  --popover: oklch(0.26 0.03 240);
  --popover-foreground: oklch(0.94 0.01 220);
  --primary: oklch(0.75 0.12 210);
  --primary-foreground: oklch(0.18 0.03 240);
  --secondary: oklch(0.3 0.03 240);
  --secondary-foreground: oklch(0.94 0.01 220);
  --muted: oklch(0.3 0.03 240);
  --muted-foreground: oklch(0.65 0.02 230);
  --accent: oklch(0.32 0.04 210);
  --accent-foreground: oklch(0.85 0.1 210);
  --border: oklch(0.32 0.03 240);
  --input: oklch(0.32 0.03 240);
  --ring: oklch(0.75 0.12 210);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #88c0d0 0px, transparent 50%),
    radial-gradient(at 85% 25%, #81a1c1 0px, transparent 50%),
    radial-gradient(at 50% 80%, #5e81ac 0px, transparent 55%);
`,
  },
  {
    id: "catppuccin",
    title: "Catppuccin Mocha (Soothing Pastel)",
    description: "Crust #11111b, Mauve #cba6f7 & Sapphire #74c7ec, Rounded",
    primary: "oklch(0.75 0.16 300)",
    accent: "oklch(0.78 0.14 230)",
    radius: "0.625rem",
    cssRoot: `
  --background: oklch(0.98 0.01 280);
  --foreground: oklch(0.22 0.03 280);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.22 0.03 280);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.22 0.03 280);
  --primary: oklch(0.6 0.18 300);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.94 0.02 280);
  --secondary-foreground: oklch(0.22 0.03 280);
  --muted: oklch(0.94 0.02 280);
  --muted-foreground: oklch(0.5 0.02 280);
  --accent: oklch(0.92 0.03 300);
  --accent-foreground: oklch(0.5 0.18 300);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 280);
  --input: oklch(0.9 0.01 280);
  --ring: oklch(0.6 0.18 300);
  --radius: 0.625rem;
`,
    cssDark: `
  --background: oklch(0.14 0.02 280);
  --foreground: oklch(0.92 0.015 280);
  --card: oklch(0.18 0.025 280);
  --card-foreground: oklch(0.92 0.015 280);
  --popover: oklch(0.18 0.025 280);
  --popover-foreground: oklch(0.92 0.015 280);
  --primary: oklch(0.75 0.16 300);
  --primary-foreground: oklch(0.12 0.02 280);
  --secondary: oklch(0.24 0.03 280);
  --secondary-foreground: oklch(0.92 0.015 280);
  --muted: oklch(0.24 0.03 280);
  --muted-foreground: oklch(0.65 0.02 280);
  --accent: oklch(0.26 0.04 300);
  --accent-foreground: oklch(0.85 0.15 300);
  --border: oklch(0.26 0.025 280);
  --input: oklch(0.26 0.025 280);
  --ring: oklch(0.75 0.16 300);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #cba6f7 0px, transparent 50%),
    radial-gradient(at 85% 25%, #74c7ec 0px, transparent 50%),
    radial-gradient(at 50% 80%, #f38ba8 0px, transparent 55%);
`,
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk (Neon Synthwave)",
    description: "Pure Onyx #050505, Neon Electric Yellow #facc15 & Hot Pink #f43f5e",
    primary: "oklch(0.85 0.22 95)",
    accent: "oklch(0.65 0.28 15)",
    radius: "0.25rem",
    cssRoot: `
  --background: oklch(0.99 0.01 95);
  --foreground: oklch(0.1 0.01 95);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.1 0.01 95);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.1 0.01 95);
  --primary: oklch(0.7 0.22 95);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.94 0.03 95);
  --secondary-foreground: oklch(0.1 0.01 95);
  --muted: oklch(0.94 0.03 95);
  --muted-foreground: oklch(0.45 0.02 95);
  --accent: oklch(0.9 0.05 95);
  --accent-foreground: oklch(0.4 0.2 95);
  --destructive: oklch(0.6 0.28 15);
  --border: oklch(0.88 0.02 95);
  --input: oklch(0.88 0.02 95);
  --ring: oklch(0.7 0.22 95);
  --radius: 0.25rem;
`,
    cssDark: `
  --background: oklch(0.08 0.01 95);
  --foreground: oklch(0.96 0.01 95);
  --card: oklch(0.12 0.02 95);
  --card-foreground: oklch(0.96 0.01 95);
  --popover: oklch(0.12 0.02 95);
  --popover-foreground: oklch(0.96 0.01 95);
  --primary: oklch(0.85 0.22 95);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.18 0.03 95);
  --secondary-foreground: oklch(0.96 0.01 95);
  --muted: oklch(0.18 0.03 95);
  --muted-foreground: oklch(0.65 0.02 95);
  --accent: oklch(0.22 0.05 15);
  --accent-foreground: oklch(0.8 0.25 15);
  --border: oklch(0.24 0.03 95);
  --input: oklch(0.24 0.03 95);
  --ring: oklch(0.85 0.22 95);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #facc15 0px, transparent 50%),
    radial-gradient(at 85% 25%, #f43f5e 0px, transparent 50%),
    radial-gradient(at 50% 80%, #a855f7 0px, transparent 55%);
`,
  },
  {
    id: "sunset",
    title: "Sunset Horizon (Warm Peach & Violet)",
    description: "Deep Wine Noir, Coral Pink #ff6b6b & Violet #845ec2",
    primary: "oklch(0.72 0.22 35)",
    accent: "oklch(0.65 0.24 320)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.01 35);
  --foreground: oklch(0.16 0.02 35);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.02 35);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.02 35);
  --primary: oklch(0.65 0.22 35);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.02 35);
  --secondary-foreground: oklch(0.16 0.02 35);
  --muted: oklch(0.95 0.02 35);
  --muted-foreground: oklch(0.5 0.02 35);
  --accent: oklch(0.93 0.03 320);
  --accent-foreground: oklch(0.5 0.2 320);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 35);
  --input: oklch(0.9 0.01 35);
  --ring: oklch(0.65 0.22 35);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.02 320);
  --foreground: oklch(0.95 0.01 35);
  --card: oklch(0.16 0.025 320);
  --card-foreground: oklch(0.95 0.01 35);
  --popover: oklch(0.16 0.025 320);
  --popover-foreground: oklch(0.95 0.01 35);
  --primary: oklch(0.72 0.22 35);
  --primary-foreground: oklch(0.1 0.02 35);
  --secondary: oklch(0.22 0.025 320);
  --secondary-foreground: oklch(0.95 0.01 35);
  --muted: oklch(0.22 0.025 320);
  --muted-foreground: oklch(0.65 0.02 35);
  --accent: oklch(0.25 0.04 320);
  --accent-foreground: oklch(0.85 0.15 320);
  --border: oklch(0.24 0.02 320);
  --input: oklch(0.24 0.02 320);
  --ring: oklch(0.72 0.22 35);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #ff6b6b 0px, transparent 50%),
    radial-gradient(at 85% 25%, #845ec2 0px, transparent 50%),
    radial-gradient(at 50% 80%, #ffc75f 0px, transparent 55%);
`,
  },
];
