export const DESIGN_CATALOG = [
  // --- AI & LLM Platforms (getdesign.md) ---
  {
    id: "claude",
    category: "AI & LLM Platforms",
    title: "Claude (Anthropic)",
    description: "Warm Terracotta #d97757, clean editorial canvas, humanist typography",
    primary: "oklch(0.62 0.17 40)",
    accent: "oklch(0.7 0.14 45)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 60);
  --foreground: oklch(0.18 0.02 50);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.02 50);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.02 50);
  --primary: oklch(0.58 0.18 40);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.96 0.01 60);
  --secondary-foreground: oklch(0.2 0.02 50);
  --muted: oklch(0.95 0.01 60);
  --muted-foreground: oklch(0.5 0.02 50);
  --accent: oklch(0.93 0.03 40);
  --accent-foreground: oklch(0.5 0.16 40);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 60);
  --input: oklch(0.9 0.01 60);
  --ring: oklch(0.58 0.18 40);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.14 0.015 50);
  --foreground: oklch(0.96 0.005 60);
  --card: oklch(0.18 0.02 50);
  --card-foreground: oklch(0.96 0.005 60);
  --popover: oklch(0.18 0.02 50);
  --popover-foreground: oklch(0.96 0.005 60);
  --primary: oklch(0.7 0.16 40);
  --primary-foreground: oklch(0.12 0.02 50);
  --secondary: oklch(0.24 0.02 50);
  --secondary-foreground: oklch(0.96 0.005 60);
  --muted: oklch(0.24 0.02 50);
  --muted-foreground: oklch(0.65 0.01 50);
  --accent: oklch(0.25 0.03 40);
  --accent-foreground: oklch(0.85 0.12 40);
  --border: oklch(0.25 0.015 50);
  --input: oklch(0.25 0.015 50);
  --ring: oklch(0.7 0.16 40);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #d97757 0px, transparent 50%),
    radial-gradient(at 85% 25%, #e89874 0px, transparent 50%),
    radial-gradient(at 50% 80%, #c45d3b 0px, transparent 55%);
`,
  },
  {
    id: "openai",
    category: "AI & LLM Platforms",
    title: "OpenAI / ChatGPT",
    description: "Subtle Emerald #10a37f, clean dark slate #202123, calm focus",
    primary: "oklch(0.65 0.16 160)",
    accent: "oklch(0.7 0.14 165)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0.15 0.01 200);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.01 200);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.01 200);
  --primary: oklch(0.55 0.15 160);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.96 0.005 200);
  --secondary-foreground: oklch(0.2 0.01 200);
  --muted: oklch(0.96 0.005 200);
  --muted-foreground: oklch(0.5 0.01 200);
  --accent: oklch(0.92 0.03 160);
  --accent-foreground: oklch(0.45 0.15 160);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.005 200);
  --input: oklch(0.9 0.005 200);
  --ring: oklch(0.55 0.15 160);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.15 0.01 200);
  --foreground: oklch(0.96 0.005 200);
  --card: oklch(0.19 0.015 200);
  --card-foreground: oklch(0.96 0.005 200);
  --popover: oklch(0.19 0.015 200);
  --popover-foreground: oklch(0.96 0.005 200);
  --primary: oklch(0.68 0.16 160);
  --primary-foreground: oklch(0.1 0.01 200);
  --secondary: oklch(0.25 0.015 200);
  --secondary-foreground: oklch(0.96 0.005 200);
  --muted: oklch(0.25 0.015 200);
  --muted-foreground: oklch(0.65 0.01 200);
  --accent: oklch(0.25 0.03 160);
  --accent-foreground: oklch(0.85 0.12 160);
  --border: oklch(0.26 0.01 200);
  --input: oklch(0.26 0.01 200);
  --ring: oklch(0.68 0.16 160);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #10a37f 0px, transparent 50%),
    radial-gradient(at 85% 25%, #1a7f64 0px, transparent 50%),
    radial-gradient(at 50% 80%, #0d5f49 0px, transparent 55%);
`,
  },
  {
    id: "gemini",
    category: "AI & LLM Platforms",
    title: "Google Gemini",
    description: "Sparkling Blue #1a73e8, Cosmic Deep #131314, Iridescent Aura",
    primary: "oklch(0.6 0.22 250)",
    accent: "oklch(0.75 0.18 190)",
    radius: "0.625rem",
    cssRoot: `
  --background: oklch(0.99 0.005 250);
  --foreground: oklch(0.15 0.01 250);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.01 250);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.01 250);
  --primary: oklch(0.55 0.22 250);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 250);
  --secondary-foreground: oklch(0.15 0.01 250);
  --muted: oklch(0.95 0.01 250);
  --muted-foreground: oklch(0.5 0.01 250);
  --accent: oklch(0.92 0.03 250);
  --accent-foreground: oklch(0.45 0.2 250);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 250);
  --input: oklch(0.9 0.01 250);
  --ring: oklch(0.55 0.22 250);
  --radius: 0.625rem;
`,
    cssDark: `
  --background: oklch(0.12 0.01 260);
  --foreground: oklch(0.95 0.01 250);
  --card: oklch(0.16 0.015 260);
  --card-foreground: oklch(0.95 0.01 250);
  --popover: oklch(0.16 0.015 260);
  --popover-foreground: oklch(0.95 0.01 250);
  --primary: oklch(0.68 0.2 250);
  --primary-foreground: oklch(0.1 0.01 260);
  --secondary: oklch(0.22 0.02 260);
  --secondary-foreground: oklch(0.95 0.01 250);
  --muted: oklch(0.22 0.02 260);
  --muted-foreground: oklch(0.65 0.01 260);
  --accent: oklch(0.24 0.03 250);
  --accent-foreground: oklch(0.85 0.12 250);
  --border: oklch(0.24 0.015 260);
  --input: oklch(0.24 0.015 260);
  --ring: oklch(0.68 0.2 250);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #1a73e8 0px, transparent 50%),
    radial-gradient(at 85% 25%, #8ab4f8 0px, transparent 50%),
    radial-gradient(at 50% 80%, #d93025 0px, transparent 55%);
`,
  },
  {
    id: "cohere",
    category: "AI & LLM Platforms",
    title: "Cohere",
    description: "Enterprise Coral #ff6f61 & Emerald, data-rich dashboard aesthetic",
    primary: "oklch(0.68 0.2 30)",
    accent: "oklch(0.7 0.18 150)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 40);
  --foreground: oklch(0.16 0.02 40);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.02 40);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.02 40);
  --primary: oklch(0.62 0.2 30);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 40);
  --secondary-foreground: oklch(0.2 0.02 40);
  --muted: oklch(0.95 0.01 40);
  --muted-foreground: oklch(0.5 0.02 40);
  --accent: oklch(0.93 0.03 30);
  --accent-foreground: oklch(0.5 0.18 30);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 40);
  --input: oklch(0.9 0.01 40);
  --ring: oklch(0.62 0.2 30);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.13 0.015 40);
  --foreground: oklch(0.95 0.01 40);
  --card: oklch(0.17 0.02 40);
  --card-foreground: oklch(0.95 0.01 40);
  --popover: oklch(0.17 0.02 40);
  --popover-foreground: oklch(0.95 0.01 40);
  --primary: oklch(0.72 0.2 30);
  --primary-foreground: oklch(0.1 0.01 40);
  --secondary: oklch(0.23 0.02 40);
  --secondary-foreground: oklch(0.95 0.01 40);
  --muted: oklch(0.23 0.02 40);
  --muted-foreground: oklch(0.65 0.01 40);
  --accent: oklch(0.25 0.04 30);
  --accent-foreground: oklch(0.85 0.15 30);
  --border: oklch(0.25 0.015 40);
  --input: oklch(0.25 0.015 40);
  --ring: oklch(0.72 0.2 30);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #ff6f61 0px, transparent 50%),
    radial-gradient(at 85% 25%, #39a0ed 0px, transparent 50%),
    radial-gradient(at 50% 80%, #38b000 0px, transparent 55%);
`,
  },
  {
    id: "elevenlabs",
    category: "AI & LLM Platforms",
    title: "ElevenLabs",
    description: "Dark cinematic audio-waveform, obsidian canvas #0c0d0e, electric glow",
    primary: "oklch(0.95 0 0)",
    accent: "oklch(0.65 0.22 260)",
    radius: "0.625rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0.12 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.12 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.12 0 0);
  --primary: oklch(0.15 0 0);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  --muted: oklch(0.95 0 0);
  --muted-foreground: oklch(0.5 0 0);
  --accent: oklch(0.93 0 0);
  --accent-foreground: oklch(0.15 0 0);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0 0);
  --input: oklch(0.9 0 0);
  --ring: oklch(0.2 0 0);
  --radius: 0.625rem;
`,
    cssDark: `
  --background: oklch(0.1 0.005 260);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.14 0.01 260);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.14 0.01 260);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.98 0 0);
  --primary-foreground: oklch(0.1 0 0);
  --secondary: oklch(0.2 0.01 260);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.2 0.01 260);
  --muted-foreground: oklch(0.65 0 0);
  --accent: oklch(0.24 0.02 260);
  --accent-foreground: oklch(0.98 0 0);
  --border: oklch(0.22 0.01 260);
  --input: oklch(0.22 0.01 260);
  --ring: oklch(0.98 0 0);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #4a00e0 0px, transparent 50%),
    radial-gradient(at 85% 25%, #8e2de2 0px, transparent 50%),
    radial-gradient(at 50% 80%, #00f2fe 0px, transparent 55%);
`,
  },
  {
    id: "mistral",
    category: "AI & LLM Platforms",
    title: "Mistral AI",
    description: "French engineered minimalism, warm flame orange #f54e00 & deep ink",
    primary: "oklch(0.62 0.24 35)",
    accent: "oklch(0.7 0.2 45)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(0.99 0.005 40);
  --foreground: oklch(0.15 0.01 40);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.01 40);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.01 40);
  --primary: oklch(0.6 0.24 35);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 40);
  --secondary-foreground: oklch(0.2 0.01 40);
  --muted: oklch(0.95 0.01 40);
  --muted-foreground: oklch(0.5 0.01 40);
  --accent: oklch(0.93 0.03 35);
  --accent-foreground: oklch(0.5 0.22 35);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 40);
  --input: oklch(0.9 0.01 40);
  --ring: oklch(0.6 0.24 35);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.12 0.01 40);
  --foreground: oklch(0.96 0.005 40);
  --card: oklch(0.16 0.015 40);
  --card-foreground: oklch(0.96 0.005 40);
  --popover: oklch(0.16 0.015 40);
  --popover-foreground: oklch(0.96 0.005 40);
  --primary: oklch(0.68 0.24 35);
  --primary-foreground: oklch(0.1 0.01 40);
  --secondary: oklch(0.22 0.015 40);
  --secondary-foreground: oklch(0.96 0.005 40);
  --muted: oklch(0.22 0.015 40);
  --muted-foreground: oklch(0.65 0.01 40);
  --accent: oklch(0.24 0.04 35);
  --accent-foreground: oklch(0.85 0.18 35);
  --border: oklch(0.24 0.01 40);
  --input: oklch(0.24 0.01 40);
  --ring: oklch(0.68 0.24 35);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #f54e00 0px, transparent 50%),
    radial-gradient(at 85% 25%, #ff7033 0px, transparent 50%),
    radial-gradient(at 50% 80%, #d43800 0px, transparent 55%);
`,
  },
  {
    id: "ollama",
    category: "AI & LLM Platforms",
    title: "Ollama",
    description: "Terminal-first monochrome, clean pitch black #000000 & high density",
    primary: "oklch(0 0 0)",
    accent: "oklch(0.6 0 0)",
    radius: "0.25rem",
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
  --muted-foreground: oklch(0.45 0 0);
  --accent: oklch(0.9 0 0);
  --accent-foreground: oklch(0 0 0);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.85 0 0);
  --input: oklch(0.85 0 0);
  --ring: oklch(0 0 0);
  --radius: 0.25rem;
`,
    cssDark: `
  --background: oklch(0.08 0 0);
  --foreground: oklch(1 0 0);
  --card: oklch(0.12 0 0);
  --card-foreground: oklch(1 0 0);
  --popover: oklch(0.12 0 0);
  --popover-foreground: oklch(1 0 0);
  --primary: oklch(1 0 0);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.2 0 0);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.2 0 0);
  --muted-foreground: oklch(0.7 0 0);
  --accent: oklch(0.22 0 0);
  --accent-foreground: oklch(1 0 0);
  --border: oklch(0.25 0 0);
  --input: oklch(0.25 0 0);
  --ring: oklch(1 0 0);
`,
    meshGradient: `
  background: 
    radial-gradient(at 20% 20%, #ffffff 0px, transparent 40%),
    radial-gradient(at 80% 80%, #777777 0px, transparent 50%);
`,
  },
  {
    id: "runway",
    category: "AI & LLM Platforms",
    title: "Runway ML",
    description: "Film-festival editorial, cinematic dark heroes & paper-white bands",
    primary: "oklch(0.95 0 0)",
    accent: "oklch(0.7 0.15 280)",
    radius: "9999px",
    cssRoot: `
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.1 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.1 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.1 0 0);
  --primary: oklch(0.1 0 0);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.94 0 0);
  --secondary-foreground: oklch(0.1 0 0);
  --muted: oklch(0.94 0 0);
  --muted-foreground: oklch(0.5 0 0);
  --accent: oklch(0.92 0 0);
  --accent-foreground: oklch(0.1 0 0);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.88 0 0);
  --input: oklch(0.88 0 0);
  --ring: oklch(0.1 0 0);
  --radius: 9999px;
`,
    cssDark: `
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.12 0 0);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.12 0 0);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.98 0 0);
  --primary-foreground: oklch(0.08 0 0);
  --secondary: oklch(0.18 0 0);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.18 0 0);
  --muted-foreground: oklch(0.65 0 0);
  --accent: oklch(0.22 0 0);
  --accent-foreground: oklch(0.98 0 0);
  --border: oklch(0.22 0 0);
  --input: oklch(0.22 0 0);
  --ring: oklch(0.98 0 0);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #ff3366 0px, transparent 50%),
    radial-gradient(at 85% 25%, #6e00ff 0px, transparent 50%),
    radial-gradient(at 50% 80%, #00d4ff 0px, transparent 55%);
`,
  },
  {
    id: "together",
    category: "AI & LLM Platforms",
    title: "Together AI",
    description: "Technical blueprint, electric cyan #00f2fe & gridlines",
    primary: "oklch(0.68 0.2 220)",
    accent: "oklch(0.75 0.18 200)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(0.99 0.005 220);
  --foreground: oklch(0.16 0.02 220);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.02 220);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.02 220);
  --primary: oklch(0.55 0.2 220);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 220);
  --secondary-foreground: oklch(0.2 0.02 220);
  --muted: oklch(0.95 0.01 220);
  --muted-foreground: oklch(0.5 0.02 220);
  --accent: oklch(0.92 0.03 220);
  --accent-foreground: oklch(0.45 0.2 220);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 220);
  --input: oklch(0.9 0.01 220);
  --ring: oklch(0.55 0.2 220);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.12 0.02 230);
  --foreground: oklch(0.96 0.01 220);
  --card: oklch(0.16 0.025 230);
  --card-foreground: oklch(0.96 0.01 220);
  --popover: oklch(0.16 0.025 230);
  --popover-foreground: oklch(0.96 0.01 220);
  --primary: oklch(0.72 0.2 220);
  --primary-foreground: oklch(0.1 0.02 230);
  --secondary: oklch(0.22 0.025 230);
  --secondary-foreground: oklch(0.96 0.01 220);
  --muted: oklch(0.22 0.025 230);
  --muted-foreground: oklch(0.65 0.02 220);
  --accent: oklch(0.25 0.04 220);
  --accent-foreground: oklch(0.85 0.15 220);
  --border: oklch(0.25 0.02 230);
  --input: oklch(0.25 0.02 230);
  --ring: oklch(0.72 0.2 220);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #00f2fe 0px, transparent 50%),
    radial-gradient(at 85% 25%, #4facfe 0px, transparent 50%),
    radial-gradient(at 50% 80%, #0052d4 0px, transparent 55%);
`,
  },
  {
    id: "xai",
    category: "AI & LLM Platforms",
    title: "xAI (Grok)",
    description: "Stark monochrome, futuristic hyper-minimalism, aerospace precision",
    primary: "oklch(1 0 0)",
    accent: "oklch(0.65 0 0)",
    radius: "0.25rem",
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
  --radius: 0.25rem;
`,
    cssDark: `
  --background: oklch(0 0 0);
  --foreground: oklch(1 0 0);
  --card: oklch(0.08 0 0);
  --card-foreground: oklch(1 0 0);
  --popover: oklch(0.08 0 0);
  --popover-foreground: oklch(1 0 0);
  --primary: oklch(1 0 0);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.18 0 0);
  --secondary-foreground: oklch(1 0 0);
  --muted: oklch(0.18 0 0);
  --muted-foreground: oklch(0.7 0 0);
  --accent: oklch(0.2 0 0);
  --accent-foreground: oklch(1 0 0);
  --border: oklch(0.25 0 0);
  --input: oklch(0.25 0 0);
  --ring: oklch(1 0 0);
`,
    meshGradient: `
  background: 
    radial-gradient(at 20% 20%, #ffffff 0px, transparent 35%),
    radial-gradient(at 80% 80%, #666666 0px, transparent 50%);
`,
  },

  // --- Developer Tools & Frameworks ---
  {
    id: "geist",
    category: "Developer Tools & Frameworks",
    title: "Geist Minimal (Vercel)",
    description: "Stark Ink on Canvas, 1px Hairlines, dual button radius, Geist typography",
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
    category: "Developer Tools & Frameworks",
    title: "Linear (Issue Tracker)",
    description: "Deep Carbon #121212, Electric Indigo #5e6ad2 & Gold amber accents",
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
    id: "cursor",
    category: "Developer Tools & Frameworks",
    title: "Cursor (AI Code Editor)",
    description: "Sleek IDE dark chrome, royal gradient blue #3b82f6 & high-density layout",
    primary: "oklch(0.6 0.22 260)",
    accent: "oklch(0.7 0.18 240)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 260);
  --foreground: oklch(0.16 0.02 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.02 260);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.02 260);
  --primary: oklch(0.55 0.22 260);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 260);
  --secondary-foreground: oklch(0.18 0.02 260);
  --muted: oklch(0.95 0.01 260);
  --muted-foreground: oklch(0.5 0.01 260);
  --accent: oklch(0.92 0.03 260);
  --accent-foreground: oklch(0.45 0.2 260);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 260);
  --input: oklch(0.9 0.01 260);
  --ring: oklch(0.55 0.22 260);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.015 260);
  --foreground: oklch(0.96 0.01 260);
  --card: oklch(0.16 0.02 260);
  --card-foreground: oklch(0.96 0.01 260);
  --popover: oklch(0.16 0.02 260);
  --popover-foreground: oklch(0.96 0.01 260);
  --primary: oklch(0.68 0.2 260);
  --primary-foreground: oklch(0.1 0.01 260);
  --secondary: oklch(0.22 0.02 260);
  --secondary-foreground: oklch(0.96 0.01 260);
  --muted: oklch(0.22 0.02 260);
  --muted-foreground: oklch(0.65 0.01 260);
  --accent: oklch(0.24 0.03 260);
  --accent-foreground: oklch(0.85 0.12 260);
  --border: oklch(0.24 0.015 260);
  --input: oklch(0.24 0.015 260);
  --ring: oklch(0.68 0.2 260);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #3b82f6 0px, transparent 50%),
    radial-gradient(at 85% 25%, #6366f1 0px, transparent 50%),
    radial-gradient(at 50% 80%, #06b6d4 0px, transparent 55%);
`,
  },
  {
    id: "raycast",
    category: "Developer Tools & Frameworks",
    title: "Raycast",
    description: "Modern Glassmorphism, Crimson #ff6363 & rounded pill tokens",
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
    category: "Developer Tools & Frameworks",
    title: "Resend",
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
    id: "warp",
    category: "Developer Tools & Frameworks",
    title: "Warp (Modern Terminal)",
    description: "IDE terminal aesthetic, cyan block prompt UI #00d8d6, deep charcoal",
    primary: "oklch(0.72 0.18 195)",
    accent: "oklch(0.7 0.16 260)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 200);
  --foreground: oklch(0.16 0.01 200);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.01 200);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.01 200);
  --primary: oklch(0.55 0.18 195);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 200);
  --secondary-foreground: oklch(0.18 0.01 200);
  --muted: oklch(0.95 0.01 200);
  --muted-foreground: oklch(0.5 0.01 200);
  --accent: oklch(0.92 0.03 195);
  --accent-foreground: oklch(0.45 0.18 195);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 200);
  --input: oklch(0.9 0.01 200);
  --ring: oklch(0.55 0.18 195);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.015 220);
  --foreground: oklch(0.96 0.01 200);
  --card: oklch(0.16 0.02 220);
  --card-foreground: oklch(0.96 0.01 200);
  --popover: oklch(0.16 0.02 220);
  --popover-foreground: oklch(0.96 0.01 200);
  --primary: oklch(0.72 0.18 195);
  --primary-foreground: oklch(0.1 0.01 220);
  --secondary: oklch(0.22 0.02 220);
  --secondary-foreground: oklch(0.96 0.01 200);
  --muted: oklch(0.22 0.02 220);
  --muted-foreground: oklch(0.65 0.01 200);
  --accent: oklch(0.24 0.03 195);
  --accent-foreground: oklch(0.85 0.15 195);
  --border: oklch(0.24 0.015 220);
  --input: oklch(0.24 0.015 220);
  --ring: oklch(0.72 0.18 195);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #00d8d6 0px, transparent 50%),
    radial-gradient(at 85% 25%, #05c46b 0px, transparent 50%),
    radial-gradient(at 50% 80%, #3c40c6 0px, transparent 55%);
`,
  },
  {
    id: "superhuman",
    category: "Developer Tools & Frameworks",
    title: "Superhuman",
    description: "Fast keyboard-first UX, deep plum/violet #6b46c1 glow & high velocity",
    primary: "oklch(0.62 0.22 290)",
    accent: "oklch(0.75 0.18 310)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 290);
  --foreground: oklch(0.16 0.02 290);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.02 290);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.02 290);
  --primary: oklch(0.55 0.22 290);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 290);
  --secondary-foreground: oklch(0.18 0.02 290);
  --muted: oklch(0.95 0.01 290);
  --muted-foreground: oklch(0.5 0.01 290);
  --accent: oklch(0.92 0.03 290);
  --accent-foreground: oklch(0.45 0.2 290);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 290);
  --input: oklch(0.9 0.01 290);
  --ring: oklch(0.55 0.22 290);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.02 290);
  --foreground: oklch(0.96 0.01 290);
  --card: oklch(0.16 0.03 290);
  --card-foreground: oklch(0.96 0.01 290);
  --popover: oklch(0.16 0.03 290);
  --popover-foreground: oklch(0.96 0.01 290);
  --primary: oklch(0.68 0.22 290);
  --primary-foreground: oklch(0.1 0.01 290);
  --secondary: oklch(0.22 0.03 290);
  --secondary-foreground: oklch(0.96 0.01 290);
  --muted: oklch(0.22 0.03 290);
  --muted-foreground: oklch(0.65 0.01 290);
  --accent: oklch(0.25 0.04 290);
  --accent-foreground: oklch(0.85 0.15 290);
  --border: oklch(0.24 0.025 290);
  --input: oklch(0.24 0.025 290);
  --ring: oklch(0.68 0.22 290);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #6b46c1 0px, transparent 50%),
    radial-gradient(at 85% 25%, #9f7aea 0px, transparent 50%),
    radial-gradient(at 50% 80%, #44337a 0px, transparent 55%);
`,
  },

  // --- Cloud, Database & Infrastructure ---
  {
    id: "supabase",
    category: "Cloud & Infrastructure",
    title: "Supabase (Developer Cloud)",
    description: "Deep Obsidian #09090b, Emerald Green #3ecf8e glow & clean matrix",
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
    category: "Cloud & Infrastructure",
    title: "Stripe (Financial Infrastructure)",
    description: "Clean Slate #0a2540, Vibrant Indigo #635bff & Cyan ribbons",
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
    id: "clickhouse",
    category: "Cloud & Infrastructure",
    title: "ClickHouse",
    description: "High-voltage Yellow #facc15, analytics carbon & dense telemetry",
    primary: "oklch(0.85 0.2 95)",
    accent: "oklch(0.7 0.18 140)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(0.99 0.01 95);
  --foreground: oklch(0.15 0.02 95);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.02 95);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.02 95);
  --primary: oklch(0.7 0.2 95);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.95 0.02 95);
  --secondary-foreground: oklch(0.15 0.02 95);
  --muted: oklch(0.95 0.02 95);
  --muted-foreground: oklch(0.5 0.02 95);
  --accent: oklch(0.92 0.04 95);
  --accent-foreground: oklch(0.4 0.2 95);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.02 95);
  --input: oklch(0.9 0.02 95);
  --ring: oklch(0.7 0.2 95);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.1 0.01 95);
  --foreground: oklch(0.96 0.01 95);
  --card: oklch(0.15 0.02 95);
  --card-foreground: oklch(0.96 0.01 95);
  --popover: oklch(0.15 0.02 95);
  --popover-foreground: oklch(0.96 0.01 95);
  --primary: oklch(0.85 0.2 95);
  --primary-foreground: oklch(0 0 0);
  --secondary: oklch(0.2 0.02 95);
  --secondary-foreground: oklch(0.96 0.01 95);
  --muted: oklch(0.2 0.02 95);
  --muted-foreground: oklch(0.65 0.02 95);
  --accent: oklch(0.24 0.04 95);
  --accent-foreground: oklch(0.85 0.18 95);
  --border: oklch(0.24 0.02 95);
  --input: oklch(0.24 0.02 95);
  --ring: oklch(0.85 0.2 95);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #facc15 0px, transparent 50%),
    radial-gradient(at 85% 25%, #eab308 0px, transparent 50%),
    radial-gradient(at 50% 80%, #ca8a04 0px, transparent 55%);
`,
  },
  {
    id: "planetscale",
    category: "Cloud & Infrastructure",
    title: "PlanetScale",
    description: "Database mesh, pure pitch dark #0a0a0a & electric orange #ff6e00",
    primary: "oklch(0.68 0.24 45)",
    accent: "oklch(0.7 0.22 65)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0.12 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.12 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.12 0 0);
  --primary: oklch(0.62 0.24 45);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.96 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.5 0 0);
  --accent: oklch(0.93 0.03 45);
  --accent-foreground: oklch(0.5 0.22 45);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0 0);
  --input: oklch(0.9 0 0);
  --ring: oklch(0.62 0.24 45);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.1 0 0);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.14 0 0);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.14 0 0);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.7 0.24 45);
  --primary-foreground: oklch(0.1 0 0);
  --secondary: oklch(0.2 0 0);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.2 0 0);
  --muted-foreground: oklch(0.65 0 0);
  --accent: oklch(0.22 0.04 45);
  --accent-foreground: oklch(0.85 0.18 45);
  --border: oklch(0.22 0 0);
  --input: oklch(0.22 0 0);
  --ring: oklch(0.7 0.24 45);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #ff6e00 0px, transparent 50%),
    radial-gradient(at 85% 25%, #ff9e00 0px, transparent 50%),
    radial-gradient(at 50% 80%, #d45b00 0px, transparent 55%);
`,
  },
  {
    id: "cloudflare",
    category: "Cloud & Infrastructure",
    title: "Cloudflare",
    description: "Internet edge infrastructure, energetic orange #f38020 & dark zinc",
    primary: "oklch(0.68 0.22 45)",
    accent: "oklch(0.72 0.2 60)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(0.99 0.005 50);
  --foreground: oklch(0.15 0.01 50);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.01 50);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.01 50);
  --primary: oklch(0.62 0.22 45);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 50);
  --secondary-foreground: oklch(0.18 0.01 50);
  --muted: oklch(0.95 0.01 50);
  --muted-foreground: oklch(0.5 0.01 50);
  --accent: oklch(0.93 0.03 45);
  --accent-foreground: oklch(0.5 0.2 45);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 50);
  --input: oklch(0.9 0.01 50);
  --ring: oklch(0.62 0.22 45);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.12 0.01 50);
  --foreground: oklch(0.96 0.005 50);
  --card: oklch(0.16 0.015 50);
  --card-foreground: oklch(0.96 0.005 50);
  --popover: oklch(0.16 0.015 50);
  --popover-foreground: oklch(0.96 0.005 50);
  --primary: oklch(0.7 0.22 45);
  --primary-foreground: oklch(0.1 0.01 50);
  --secondary: oklch(0.22 0.015 50);
  --secondary-foreground: oklch(0.96 0.005 50);
  --muted: oklch(0.22 0.015 50);
  --muted-foreground: oklch(0.65 0.01 50);
  --accent: oklch(0.24 0.04 45);
  --accent-foreground: oklch(0.85 0.16 45);
  --border: oklch(0.24 0.01 50);
  --input: oklch(0.24 0.01 50);
  --ring: oklch(0.7 0.22 45);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #f38020 0px, transparent 50%),
    radial-gradient(at 85% 25%, #faad3f 0px, transparent 50%),
    radial-gradient(at 50% 80%, #d96300 0px, transparent 55%);
`,
  },

  // --- Developer Themes & Pro Archetypes ---
  {
    id: "tokyo-night",
    category: "Aesthetic Archetypes",
    title: "Tokyo Night",
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
    category: "Aesthetic Archetypes",
    title: "Brutalist Sharp",
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
    category: "Aesthetic Archetypes",
    title: "Nord (Arctic Frost)",
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
    category: "Aesthetic Archetypes",
    title: "Catppuccin Mocha",
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
    category: "Aesthetic Archetypes",
    title: "Cyberpunk Neon",
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
    category: "Aesthetic Archetypes",
    title: "Sunset Horizon",
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
  {
    id: "dracula",
    category: "Aesthetic Archetypes",
    title: "Dracula Pro",
    description: "Dark Gothic #282a36, Neon Purple #bd93f9 & Pink #ff79c6",
    primary: "oklch(0.75 0.2 300)",
    accent: "oklch(0.78 0.22 350)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.01 290);
  --foreground: oklch(0.2 0.03 290);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.2 0.03 290);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.2 0.03 290);
  --primary: oklch(0.6 0.22 300);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.02 290);
  --secondary-foreground: oklch(0.2 0.03 290);
  --muted: oklch(0.95 0.02 290);
  --muted-foreground: oklch(0.5 0.02 290);
  --accent: oklch(0.93 0.03 350);
  --accent-foreground: oklch(0.5 0.22 350);
  --destructive: oklch(0.6 0.22 25);
  --border: oklch(0.9 0.01 290);
  --input: oklch(0.9 0.01 290);
  --ring: oklch(0.6 0.22 300);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.18 0.03 285);
  --foreground: oklch(0.95 0.01 290);
  --card: oklch(0.22 0.035 285);
  --card-foreground: oklch(0.95 0.01 290);
  --popover: oklch(0.22 0.035 285);
  --popover-foreground: oklch(0.95 0.01 290);
  --primary: oklch(0.75 0.2 300);
  --primary-foreground: oklch(0.12 0.03 285);
  --secondary: oklch(0.28 0.035 285);
  --secondary-foreground: oklch(0.95 0.01 290);
  --muted: oklch(0.28 0.035 285);
  --muted-foreground: oklch(0.65 0.02 290);
  --accent: oklch(0.3 0.05 350);
  --accent-foreground: oklch(0.85 0.18 350);
  --border: oklch(0.28 0.03 285);
  --input: oklch(0.28 0.03 285);
  --ring: oklch(0.75 0.2 300);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #bd93f9 0px, transparent 50%),
    radial-gradient(at 85% 25%, #ff79c6 0px, transparent 50%),
    radial-gradient(at 50% 80%, #50fa7b 0px, transparent 55%);
`,
  },
  {
    id: "github",
    category: "Aesthetic Archetypes",
    title: "GitHub Primer",
    description: "GitHub dark dimmed #22272e, classic blue #58a6ff & green #3fb950",
    primary: "oklch(0.65 0.18 250)",
    accent: "oklch(0.7 0.18 145)",
    radius: "0.375rem",
    cssRoot: `
  --background: oklch(1 0 0);
  --foreground: oklch(0.18 0.01 250);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.01 250);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.01 250);
  --primary: oklch(0.55 0.18 250);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.96 0.005 250);
  --secondary-foreground: oklch(0.18 0.01 250);
  --muted: oklch(0.96 0.005 250);
  --muted-foreground: oklch(0.5 0.01 250);
  --accent: oklch(0.93 0.02 250);
  --accent-foreground: oklch(0.45 0.18 250);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.88 0.01 250);
  --input: oklch(0.88 0.01 250);
  --ring: oklch(0.55 0.18 250);
  --radius: 0.375rem;
`,
    cssDark: `
  --background: oklch(0.18 0.015 250);
  --foreground: oklch(0.92 0.01 250);
  --card: oklch(0.22 0.02 250);
  --card-foreground: oklch(0.92 0.01 250);
  --popover: oklch(0.22 0.02 250);
  --popover-foreground: oklch(0.92 0.01 250);
  --primary: oklch(0.7 0.16 250);
  --primary-foreground: oklch(0.12 0.01 250);
  --secondary: oklch(0.26 0.02 250);
  --secondary-foreground: oklch(0.92 0.01 250);
  --muted: oklch(0.26 0.02 250);
  --muted-foreground: oklch(0.65 0.01 250);
  --accent: oklch(0.28 0.03 250);
  --accent-foreground: oklch(0.85 0.12 250);
  --border: oklch(0.28 0.015 250);
  --input: oklch(0.28 0.015 250);
  --ring: oklch(0.7 0.16 250);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #58a6ff 0px, transparent 50%),
    radial-gradient(at 85% 25%, #3fb950 0px, transparent 50%),
    radial-gradient(at 50% 80%, #bc8cff 0px, transparent 55%);
`,
  },
  {
    id: "tailwind",
    category: "Aesthetic Archetypes",
    title: "Tailwind Slate",
    description: "Modern SaaS blueprint, clean slate #0f172a, Sky Blue #38bdf8 & Indigo",
    primary: "oklch(0.65 0.2 240)",
    accent: "oklch(0.75 0.18 200)",
    radius: "0.5rem",
    cssRoot: `
  --background: oklch(0.99 0.005 240);
  --foreground: oklch(0.15 0.02 240);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.02 240);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.02 240);
  --primary: oklch(0.55 0.22 240);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.01 240);
  --secondary-foreground: oklch(0.2 0.02 240);
  --muted: oklch(0.95 0.01 240);
  --muted-foreground: oklch(0.5 0.02 240);
  --accent: oklch(0.93 0.03 240);
  --accent-foreground: oklch(0.45 0.2 240);
  --destructive: oklch(0.55 0.25 25);
  --border: oklch(0.9 0.01 240);
  --input: oklch(0.9 0.01 240);
  --ring: oklch(0.55 0.22 240);
  --radius: 0.5rem;
`,
    cssDark: `
  --background: oklch(0.12 0.02 240);
  --foreground: oklch(0.96 0.01 240);
  --card: oklch(0.16 0.025 240);
  --card-foreground: oklch(0.96 0.01 240);
  --popover: oklch(0.16 0.025 240);
  --popover-foreground: oklch(0.96 0.01 240);
  --primary: oklch(0.7 0.2 240);
  --primary-foreground: oklch(0.1 0.02 240);
  --secondary: oklch(0.22 0.025 240);
  --secondary-foreground: oklch(0.96 0.01 240);
  --muted: oklch(0.22 0.025 240);
  --muted-foreground: oklch(0.65 0.02 240);
  --accent: oklch(0.25 0.04 240);
  --accent-foreground: oklch(0.85 0.15 240);
  --border: oklch(0.24 0.02 240);
  --input: oklch(0.24 0.02 240);
  --ring: oklch(0.7 0.2 240);
`,
    meshGradient: `
  background: 
    radial-gradient(at 15% 20%, #38bdf8 0px, transparent 50%),
    radial-gradient(at 85% 25%, #6366f1 0px, transparent 50%),
    radial-gradient(at 50% 80%, #0284c7 0px, transparent 55%);
`,
  },
];
