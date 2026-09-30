#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { downloadTemplate } from "giget";
import prompts from "prompts";
import { blue, bold, cyan, dim, green, red, yellow } from "kolorist";

const TEMPLATE_REPO = "gh:workwithchris/next-starter";

async function main() {
  console.log(`\n${bold(cyan("▲ next-starter"))} ${dim("— Next.js 16 Production Blueprint")}\n`);

  let targetDir = process.argv[2];

  const response = await prompts(
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
        type: "select",
        name: "templateVariant",
        message: "Select template preset:",
        initial: 0,
        choices: [
          {
            title: "Fullstack (All included: Landing page + Auth + Protected Dashboard + Mock APIs)",
            value: "fullstack",
          },
          {
            title: "Minimal (Core only: Marketing site, i18n, Tailwind v4, TanStack Query, Network suite)",
            value: "minimal",
          },
        ],
      },
      {
        type: "select",
        name: "packageManager",
        message: "Select package manager:",
        initial: 0,
        choices: [
          { title: "pnpm", value: "pnpm" },
          { title: "npm", value: "npm" },
          { title: "bun", value: "bun" },
          { title: "yarn", value: "yarn" },
        ],
      },
      {
        type: "confirm",
        name: "gitInit",
        message: "Initialize a new Git repository?",
        initial: true,
      },
      {
        type: "confirm",
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

  const {
    templateVariant = "fullstack",
    packageManager = "pnpm",
    gitInit = true,
    installDeps = true,
  } = response;

  const projectPath = path.resolve(process.cwd(), targetDir);
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
  console.log(`\n${green(bold("✔ Success!"))} Created ${cyan(projectName)} (${blue(templateVariant)}) at ${dim(projectPath)}\n`);
  console.log("Inside that directory, you can run:\n");
  console.log(`  ${cyan(`${packageManager} run dev`)}`);
  console.log(`    Starts the development server with Turbopack\n`);
  console.log(`  ${cyan(`${packageManager} run build`)}`);
  console.log(`    Builds the app for production\n`);
  console.log(`  ${cyan(`${packageManager} test`)}`);
  console.log(`    Runs Vitest unit tests\n`);
  console.log("To get started:\n");
  console.log(`  ${bold(blue(`cd ${targetDir}`))}`);
  if (!installDeps) {
    console.log(`  ${bold(blue(`${packageManager} install`))}`);
  }
  console.log(`  ${bold(blue(`${packageManager} run dev`))}\n`);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
