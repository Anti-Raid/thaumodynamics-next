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


async function copyImagesToPublic() {
  const exts = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"];
  const rootDir = path.resolve(".");
  const publicDir = path.join(rootDir, "public");

  function isImage(file) {
    return exts.includes(path.extname(file).toLowerCase());
  }

  function walk(dir, callback) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath, callback);
      } else if (entry.isFile() && isImage(entry.name)) {
        callback(fullPath);
      }
    }
  }

  // Clean public
  if (fs.existsSync(publicDir)) {
    fs.rmSync(publicDir, { recursive: true, force: true });
  }
  fs.mkdirSync(publicDir, { recursive: true });

  const usedNames = new Set();
  walk(rootDir, (imgPath) => {
    // Don't copy from node_modules, .git, public itself, or docs-cache/temp
    if (imgPath.includes("node_modules") || imgPath.includes(".git") || imgPath.startsWith(publicDir) || imgPath.includes("docs-cache/temp")) return;
    let base = path.basename(imgPath);
    let dest = path.join(publicDir, base);
    let count = 1;
    // Prevent filename collisions
    while (usedNames.has(dest) || fs.existsSync(dest)) {
      const ext = path.extname(base);
      const name = path.basename(base, ext);
      dest = path.join(publicDir, `${name}_${count}${ext}`);
      count++;
    }
    usedNames.add(dest);
    fs.copyFileSync(imgPath, dest);
    log(`Copied image: ${base}`);
  });
  log("All images copied to public.");
}

async function fixNextImagePaths() {
  const exts = ['.tsx', '.jsx', '.ts', '.js'];
  const rootDir = path.resolve(process.cwd(), 'src');

  function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(walk(filePath));
      } else if (exts.includes(path.extname(file))) {
        results.push(filePath);
      }
    });
    return results;
  }

  function fixImageSrcs(filePath) {
    let changed = false;
    let code = fs.readFileSync(filePath, 'utf8');
    // Regex to match <Image ... src="something" ...>
    code = code.replace(/(<Image[^>]*src=\s*["'])(?![\/]|https?:\/\/)([^"'>]+)/g, (match, p1, p2) => {
      changed = true;
      return p1 + '/' + p2;
    });
    if (changed) {
      fs.writeFileSync(filePath, code, 'utf8');
      log(`Fixed: ${filePath}`);
    }
  }

  const files = walk(rootDir);
  files.forEach(fixImageSrcs);
  log('next/image src paths fixed.');
}

async function ensureDocsUpToDate() {
  await sparseCheckoutDocs();
  await copyImagesToPublic();
  await fixNextImagePaths();
}

ensureDocsUpToDate().catch((e) => {
  log("Error: " + e.message);
  process.exit(1);
});
