#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";
import { downloadTemplate } from "giget";
import prompts from "prompts";
import { blue, bold, cyan, dim, green, magenta, red, yellow } from "kolorist";
import { DESIGN_CATALOG } from "./designs.mjs";

const TEMPLATE_REPO = "gh:workwithchris/next-starter";

function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent || "";
  if (userAgent.startsWith("pnpm")) return "pnpm";
  if (userAgent.startsWith("bun")) return "bun";
  if (userAgent.startsWith("yarn")) return "yarn";
  if (userAgent.startsWith("npm")) return "npm";
  return "pnpm";
}

function parseArgs(rawArgs) {
  const options = {
    targetDir: null,
    preset: null,
    design: null,
    pm: null,
    git: null,
    install: null,
    yes: false,
    help: false,
  };

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === "-y" || arg === "--yes") options.yes = true;
    else if (arg === "-h" || arg === "--help") options.help = true;
    else if (arg === "--minimal") options.preset = "minimal";
    else if (arg === "--fullstack") options.preset = "fullstack";
    else if (arg.startsWith("--preset=")) options.preset = arg.split("=")[1];
    else if (arg === "--preset" && rawArgs[i + 1]) options.preset = rawArgs[++i];
    else if (arg.startsWith("--design=")) options.design = arg.split("=")[1];
    else if (arg === "--design" && rawArgs[i + 1]) options.design = rawArgs[++i];
    else if (["--pnpm", "--npm", "--bun", "--yarn"].includes(arg)) options.pm = arg.slice(2);
    else if (arg.startsWith("--pm=")) options.pm = arg.split("=")[1];
    else if (arg === "--pm" && rawArgs[i + 1]) options.pm = rawArgs[++i];
    else if (arg === "--git") options.git = true;
    else if (arg === "--no-git") options.git = false;
    else if (arg === "--install") options.install = true;
    else if (arg === "--no-install") options.install = false;
    else if (!arg.startsWith("-") && !options.targetDir) options.targetDir = arg;
  }
  return options;
}

function showHelp() {
  console.log(`
${bold(cyan("create-starter-next"))} — Next.js 16 Production Blueprint with getdesign.md Design Systems

${bold("Usage:")}
  npx create-starter-next [project-name] [options]

${bold("Options:")}
  --fullstack              Scaffold fullstack preset (Auth.js, Dashboard, APIs)
  --minimal                Scaffold minimal preset (Clean Core, i18n, Tailwind v4)
  --preset <name>          Specify preset ('fullstack' or 'minimal')
  --design <name>          Specify design system (${DESIGN_CATALOG.map((d) => d.id).join(", ")})
  --pnpm / --npm / --bun   Set preferred package manager
  --pm <manager>           Specify package manager ('pnpm', 'npm', 'bun', 'yarn')
  --git / --no-git         Initialize git repository (or skip)
  --install / --no-install Install dependencies immediately (or skip)
  -y, --yes                Skip interactive prompts and use defaults
  -h, --help               Show this help message
`);
}

function applyDesignSystem(projectPath, designId) {
  const design = DESIGN_CATALOG.find((d) => d.id === designId) || DESIGN_CATALOG[0];
  const globalsCssPath = path.join(projectPath, "src/app/globals.css");

  if (fs.existsSync(globalsCssPath)) {
    try {
      let css = fs.readFileSync(globalsCssPath, "utf8");
      css = css.replace(/:root\s*\{[\s\S]*?\n\}/, `:root {${design.cssRoot}}`);
      css = css.replace(/\.dark\s*\{[\s\S]*?\n\}/, `.dark {${design.cssDark}}`);
      if (design.meshGradient) {
        css = css.replace(
          /(\.hero-mesh-gradient,\s*\.vercel-mesh-gradient\s*\{[\s\S]*?)(filter:)/,
          `.hero-mesh-gradient,\n.vercel-mesh-gradient {${design.meshGradient}  $2`
        );
      }
      fs.writeFileSync(globalsCssPath, css);
    } catch {
      // ignore css rewrite error
    }
  }

  // Update DESIGN.md description with selected aesthetic
  const designMdPath = path.join(projectPath, "DESIGN.md");
  if (fs.existsSync(designMdPath)) {
    try {
      let designDoc = fs.readFileSync(designMdPath, "utf8");
      designDoc = designDoc.replace(
        /name: .*/,
        `name: ${design.title}\ndescription: Selected from getdesign.md catalog (${design.title} — ${design.description}).`
      );
      fs.writeFileSync(designMdPath, designDoc);
    } catch {
      // ignore
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    showHelp();
    process.exit(0);
  }

  console.log(`\n${bold(cyan("▲ next-starter"))} ${dim("— Next.js 16 Production Blueprint with getdesign.md")}\n`);

  const detectedPm = detectPackageManager();
  let targetDir = args.targetDir || (args.yes ? "my-next-app" : null);

  let response = {};

  if (!args.yes) {
    response = await prompts(
      [
        {
          type: targetDir ? null : "text",
          name: "projectName",
          message: "Project name:",
          initial: "my-next-app",
          onState: (state) => {
            targetDir = String(state.value).trim() || "my-next-app";
          },
        },
        {
          type: () => (!fs.existsSync(targetDir) || fs.readdirSync(targetDir).length === 0 ? null : "confirm"),
          name: "overwrite",
          message: () => `Target directory "${targetDir}" is not empty. Remove existing files and continue?`,
          initial: false,
        },
        {
          type: (_, { overwrite }) => {
            if (overwrite === false) {
              throw new Error(red("✖ Operation cancelled"));
            }
            return null;
          },
          name: "overwriteCheck",
        },
        {
          type: args.preset ? null : "select",
          name: "templateVariant",
          message: "Select template preset:",
          initial: 0,
          choices: [
            {
              title: "Fullstack (All included: Landing page + Auth.js + Protected Dashboard + Mock APIs)",
              value: "fullstack",
            },
            {
              title: "Minimal (Core only: Marketing site, i18n, Tailwind v4, TanStack Query, Network suite)",
              value: "minimal",
            },
          ],
        },
        {
          type: args.design ? null : "autocomplete",
          name: "designSystem",
          message: "Search & select design system (type to filter from getdesign.md):",
          limit: 12,
          fallback: "No matching design found",
          choices: DESIGN_CATALOG.map((d) => ({
            title: `${d.title} — ${d.description}`,
            value: d.id,
            description: `${d.id} ${d.title} ${d.description}`,
          })),
          suggest: (input, choices) => {
            const query = (input || "").toLowerCase().trim();
            if (!query) return Promise.resolve(choices);
            return Promise.resolve(
              choices.filter(
                (choice) =>
                  choice.title.toLowerCase().includes(query) ||
                  (choice.description && choice.description.toLowerCase().includes(query)) ||
                  choice.value.toLowerCase().includes(query)
              )
            );
          },
        },
        {
          type: args.pm ? null : "select",
          name: "packageManager",
          message: "Select package manager:",
          initial: ["pnpm", "npm", "bun", "yarn"].indexOf(detectedPm) >= 0 ? ["pnpm", "npm", "bun", "yarn"].indexOf(detectedPm) : 0,
          choices: [
            { title: "pnpm", value: "pnpm" },
            { title: "npm", value: "npm" },
            { title: "bun", value: "bun" },
            { title: "yarn", value: "yarn" },
          ],
        },
        {
          type: args.git !== null ? null : "confirm",
          name: "gitInit",
          message: "Initialize a new Git repository?",
          initial: true,
        },
        {
          type: args.install !== null ? null : "confirm",
          name: "installDeps",
          message: "Install dependencies immediately?",
          initial: true,
        },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      }
    );
  }

  const templateVariant = args.preset || response.templateVariant || "fullstack";
  const designSystem = args.design || response.designSystem || "geist";
  const packageManager = args.pm || response.packageManager || detectedPm || "pnpm";
  const gitInit = args.git !== null ? args.git : response.gitInit !== undefined ? response.gitInit : true;
  const installDeps = args.install !== null ? args.install : response.installDeps !== undefined ? response.installDeps : true;

  const projectPath = path.resolve(process.cwd(), targetDir || "my-next-app");
  const projectName = path.basename(projectPath);

  console.log(`\n${dim("Downloading template from")} ${cyan(TEMPLATE_REPO)}...`);

  try {
    await downloadTemplate(TEMPLATE_REPO, {
      dir: projectPath,
      force: true,
    });
  } catch (err) {
    console.error(red(`\nFailed to download template: ${err.message}`));
    process.exit(1);
  }

  // Clean up any packages folder if copied
  const nestedPackagesDir = path.join(projectPath, "packages");
  if (fs.existsSync(nestedPackagesDir)) {
    fs.rmSync(nestedPackagesDir, { recursive: true, force: true });
  }

  // Prune website-only documentation pages and modules from starter projects
  const websiteOnlyPaths = [
    path.join(projectPath, "src/app/[locale]/(public)/docs"),
    path.join(projectPath, "src/modules/public/docs"),
  ];
  for (const p of websiteOnlyPaths) {
    if (fs.existsSync(p)) {
      fs.rmSync(p, { recursive: true, force: true });
    }
  }

  // Prune Docs link from subheader in starter projects
  const subheaderPath = path.join(projectPath, "src/modules/public/home/components/subheader.tsx");
  if (fs.existsSync(subheaderPath)) {
    try {
      let subheader = fs.readFileSync(subheaderPath, "utf8");
      subheader = subheader.replace(/<Link\s+href="\/docs"[\s\S]*?<\/Link>/g, "");
      fs.writeFileSync(subheaderPath, subheader);
    } catch {
      // ignore
    }
  }

  // Clean up Docs namespace from translation files
  const messagesDir = path.join(projectPath, "messages");
  if (fs.existsSync(messagesDir)) {
    const localeFiles = ["en.json", "es.json", "fr.json", "de.json", "ja.json"];
    for (const file of localeFiles) {
      const filePath = path.join(messagesDir, file);
      if (fs.existsSync(filePath)) {
        try {
          const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
          delete data.Docs;
          if (data.Navbar) delete data.Navbar.docs;
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
        } catch {
          // ignore
        }
      }
    }
  }

  // Apply chosen design system tokens
  console.log(`${dim("Applying design system:")} ${magenta(designSystem)}...`);
  applyDesignSystem(projectPath, designSystem);

  // Generate .env.local with secure random AUTH_SECRET
  const envExamplePath = path.join(projectPath, ".env.example");
  const envLocalPath = path.join(projectPath, ".env.local");
  if (fs.existsSync(envExamplePath)) {
    try {
      let content = fs.readFileSync(envExamplePath, "utf8");
      const randomSecret = crypto.randomBytes(32).toString("hex");
      content = content.replace(/AUTH_SECRET=.*/g, `AUTH_SECRET="${randomSecret}"`);
      fs.writeFileSync(envLocalPath, content);
    } catch {
      // ignore
    }
  }

  // If Minimal preset selected: prune Auth, Protected Dashboard, and APIs
  if (templateVariant === "minimal") {
    console.log(dim("Configuring Minimal preset (pruning auth, protected routes, and mock apis)..."));

    const pathsToPrune = [
      path.join(projectPath, "src/app/[locale]/(auth)"),
      path.join(projectPath, "src/app/[locale]/(protected)"),
      path.join(projectPath, "src/modules/auth"),
      path.join(projectPath, "src/modules/protected"),
      path.join(projectPath, "src/app/api"),
      path.join(projectPath, "src/core/store/auth-store.ts"),
      path.join(projectPath, "src/core/auth"),
      path.join(projectPath, "src/auth.ts"),
    ];

    for (const p of pathsToPrune) {
      if (fs.existsSync(p)) {
        fs.rmSync(p, { recursive: true, force: true });
      }
    }

    // Replace proxy.ts with clean i18n middleware without auth redirects
    const proxyPath = path.join(projectPath, "src/proxy.ts");
    if (fs.existsSync(proxyPath)) {
      const minimalProxy = `import createMiddleware from "next-intl/middleware";
import { routing } from "./core/i18n/routing";

export const proxy = createMiddleware(routing);

export default proxy;

export const config = {
  // Match all pathnames except for internal Next.js assets, API routes, and static files
  matcher: ["/((?!api|_next|_vercel|.*\\\\..*).*)"],
};
`;
      fs.writeFileSync(proxyPath, minimalProxy);
    }

    // Reset endpoints to clean starter state
    const endpointsPath = path.join(projectPath, "src/core/constants/endpoints.ts");
    if (fs.existsSync(endpointsPath)) {
      fs.writeFileSync(
        endpointsPath,
        `export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;\n\nexport const endpoints = {} as const;\n`
      );
    }

    // Reset core store index
    const storeIndexPath = path.join(projectPath, "src/core/store/index.ts");
    if (fs.existsSync(storeIndexPath)) {
      fs.writeFileSync(storeIndexPath, `export * from "./ui-store";\n`);
    }

    // Clean up Auth and Dashboard keys from messages
    const messagesDir = path.join(projectPath, "messages");
    if (fs.existsSync(messagesDir)) {
      const localeFiles = ["en.json", "es.json", "fr.json", "de.json", "ja.json"];
      for (const file of localeFiles) {
        const filePath = path.join(messagesDir, file);
        if (fs.existsSync(filePath)) {
          try {
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
            delete data.Auth;
            delete data.Dashboard;
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
          } catch {
            // ignore
          }
        }
      }
    }
  }

  // Update package.json name
  const pkgJsonPath = path.join(projectPath, "package.json");
  if (fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
      pkg.name = projectName;
      if (templateVariant === "minimal" && pkg.dependencies) {
        delete pkg.dependencies["next-auth"];
      }
      fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + "\n");
    } catch {
      // ignore json parse error
    }
  }

  // Git Initialization
  if (gitInit) {
    try {
      execSync("git init", { cwd: projectPath, stdio: "ignore" });
    } catch {
      console.log(dim("Could not initialize git repository"));
    }
  }

  // Install dependencies
  if (installDeps) {
    console.log(`\n${dim("Installing dependencies with")} ${blue(packageManager)}...`);
    try {
      execSync(`${packageManager} install`, { cwd: projectPath, stdio: "inherit" });
    } catch {
      console.warn(yellow(`\nAutomatic installation failed. Please run "${packageManager} install" manually.`));
    }
  }

  // Success summary
  console.log(`\n${green(bold("✔ Success!"))} Created ${cyan(projectName)} (${blue(templateVariant)}, ${magenta(designSystem)}) at ${dim(projectPath)}\n`);
  console.log("Inside that directory, you can run:\n");
  console.log(`  ${cyan(`${packageManager} run dev`)}`);
  console.log(`    Starts the development server with Turbopack\n`);
  console.log(`  ${cyan(`${packageManager} run build`)}`);
  console.log(`    Builds the app for production\n`);
  console.log(`  ${cyan(`${packageManager} test`)}`);
  console.log(`    Runs Vitest unit tests\n`);
  console.log("To get started:\n");
  console.log(`  ${bold(blue(`cd ${targetDir || "my-next-app"}`))}`);
  if (!installDeps) {
    console.log(`  ${bold(blue(`${packageManager} install`))}`);
  }
  console.log(`  ${bold(blue(`${packageManager} run dev`))}\n`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
