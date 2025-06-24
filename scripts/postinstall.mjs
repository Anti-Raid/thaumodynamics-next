import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const REPO = "Anti-Raid/antiraid";
const BRANCH = "development";
const DOCS_PATH = "docs/src";
const CACHE_DIR = path.resolve("docs-cache");
const DOCS_OUT = path.join(CACHE_DIR, "docs");
const GITHUB_API = `https://api.github.com/repos/${REPO}/commits?path=${DOCS_PATH}&sha=${BRANCH}`;

function log(msg) {
  console.log(`[postinstall] ${msg}`);
}

function checkGitAvailable() {
  try {
    execSync("git --version", { stdio: "ignore", shell: true });
  } catch (e) {
    log("Error: git is not available in PATH. Please install git.");
    process.exit(1);
  }
}

async function getLatestCommitSha() {
  const res = await fetch(GITHUB_API);
  if (!res.ok) throw new Error(`Failed to fetch latest commit: ${res.status}`);
  const data = await res.json();
  return data[0]?.sha;
}

function getLocalCommitSha() {
  try {
    return execSync("git rev-parse HEAD", { cwd: DOCS_OUT, shell: true }).toString().trim();
  } catch {
    return null;
  }
}

async function sparseCheckoutDocs() {
  checkGitAvailable();
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
  const tempDir = path.join(CACHE_DIR, "temp");
  // Check if temp exists and is a sparse checkout of only docs/src
  if (fs.existsSync(tempDir)) {
    const gitDir = path.join(tempDir, ".git");
    const sparseConfig = path.join(tempDir, ".git", "info", "sparse-checkout");
    let isSparse = false;
    if (fs.existsSync(gitDir) && fs.existsSync(sparseConfig)) {
      const configContent = fs.readFileSync(sparseConfig, "utf8");
      if (configContent.trim() === `${DOCS_PATH}`) {
        isSparse = true;
      }
    }
    if (!isSparse) {
      log("Removing existing temp directory (not a sparse checkout of docs/src)...");
      fs.rmSync(tempDir, { recursive: true, force: true });
    } else {
      log("Sparse checkout of docs/src already exists, skipping clone.");
    }
  }
  if (!fs.existsSync(tempDir)) {
    log("Cloning docs/src only (sparse checkout)...");
    execSync(
      `git clone --depth=1 --filter=blob:none --sparse https://github.com/${REPO}.git temp`,
      { cwd: CACHE_DIR, stdio: "inherit", shell: true },
    );
    execSync(`git sparse-checkout set ${DOCS_PATH}`,
      { cwd: tempDir, stdio: "inherit", shell: true },
    );
  }
  // Remove old docs and move new docs
  if (fs.existsSync(DOCS_OUT)) {
    log("Removing old docs...");
    fs.rmSync(DOCS_OUT, { recursive: true, force: true });
  }
  fs.renameSync(path.join(tempDir, DOCS_PATH), DOCS_OUT);
  fs.rmSync(tempDir, { recursive: true, force: true });
}

async function downloadOpenAPI() {
  const url = "https://splashtail-staging.antiraid.xyz/openapi";
  const outPath = path.join(CACHE_DIR, "openapi.json");
  log("Downloading OpenAPI schema...");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch OpenAPI schema: ${res.status}`);
  const data = await res.text();
  fs.writeFileSync(outPath, data);
  log("OpenAPI schema saved to " + outPath);
}

async function ensureApiReferenceFolder() {
  const apiRefDir = path.join(DOCS_OUT, "api-reference");
  if (!fs.existsSync(apiRefDir)) {
    fs.mkdirSync(apiRefDir, { recursive: true });
    log("Created docs-cache/docs/api-reference directory.");
  }
  // Copy openapi.json
  const srcOpenApi = path.join(CACHE_DIR, "openapi.json");
  const destOpenApi = path.join(apiRefDir, "openapi.json");
  if (fs.existsSync(srcOpenApi)) {
    fs.copyFileSync(srcOpenApi, destOpenApi);
    log("Copied openapi.json to docs-cache/docs/api-reference.");
  } else {
    log("Warning: openapi.json not found in docs-cache.");
  }
  // Ensure meta.json
  const metaPath = path.join(apiRefDir, "meta.json");
  if (!fs.existsSync(metaPath)) {
    fs.writeFileSync(
      metaPath,
      JSON.stringify({
        title: "API Reference",
        description: "A demo for Fumadocs OpenAPI",
        root: true,
        icon: "Rocket",
        pages: ["---API Reference---", "index"]
      }, null, 2)
    );
    log("Created meta.json in docs-cache/docs/api-reference.");
  }
}

async function ensureDocsUpToDate() {
  await sparseCheckoutDocs();
  await downloadOpenAPI();
  await ensureApiReferenceFolder();
  // Run OpenAPI MDX generation
  try {
    log("Generating MDX files from OpenAPI schema...");
    execSync('bun run scripts/generate-docs.mjs', { stdio: "inherit", shell: true });
    log("MDX files generated.");
  } catch (e) {
    log("Error running generate-docs.mjs: " + e.message);
  }
  log("Docs and OpenAPI are up to date.");
}

ensureDocsUpToDate().catch((e) => {
  log("Error: " + e.message);
  process.exit(1);
});
