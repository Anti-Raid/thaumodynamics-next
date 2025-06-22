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

async function getLatestCommitSha() {
  const res = await fetch(GITHUB_API);
  if (!res.ok) throw new Error(`Failed to fetch latest commit: ${res.status}`);
  const data = await res.json();
  return data[0]?.sha;
}

function getLocalCommitSha() {
  try {
    return execSync("git rev-parse HEAD", { cwd: DOCS_OUT }).toString().trim();
  } catch {
    return null;
  }
}

async function sparseCheckoutDocs() {
  if (fs.existsSync(DOCS_OUT)) {
    log("Removing old docs...");
    fs.rmSync(DOCS_OUT, { recursive: true, force: true });
  }
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR);
  log("Cloning docs/src only (sparse checkout)...");
  execSync(
    `git clone --depth=1 --filter=blob:none --sparse https://github.com/${REPO}.git temp`,
    { cwd: CACHE_DIR, stdio: "inherit" },
  );
  execSync(`git sparse-checkout set ${DOCS_PATH}`, {
    cwd: path.join(CACHE_DIR, "temp"),
    stdio: "inherit",
  });
  fs.renameSync(path.join(CACHE_DIR, "temp", DOCS_PATH), DOCS_OUT);
  fs.rmSync(path.join(CACHE_DIR, "temp"), { recursive: true, force: true });
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

async function ensureDocsUpToDate() {
  await sparseCheckoutDocs();
  await downloadOpenAPI();
  log("Docs and OpenAPI are up to date.");
}

ensureDocsUpToDate().catch((e) => {
  log("Error: " + e.message);
  process.exit(1);
});
