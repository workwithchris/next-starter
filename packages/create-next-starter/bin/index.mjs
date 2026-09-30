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

  const { packageManager = "pnpm", gitInit = true, installDeps = true } = response;
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

  // Update package.json name
  const pkgJsonPath = path.join(projectPath, "package.json");
  if (fs.existsSync(pkgJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
      pkg.name = projectName;
      pkg.version = "0.1.0";
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
  console.log(`\n${green(bold("✔ Success!"))} Created ${cyan(projectName)} at ${dim(projectPath)}\n`);
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
