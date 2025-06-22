import fs from "fs/promises";
import path from "path";

const GITHUB_API =
  "https://api.github.com/repos/Anti-Raid/antiraid/contents/docs/src";
const RAW_BASE =
  "https://raw.githubusercontent.com/Anti-Raid/antiraid/development/docs/src";

async function fetchDocsList(dir = "") {
  const url = dir ? `${GITHUB_API}/${dir}` : GITHUB_API;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

async function fetchAndSaveFile(file, localBase) {
  const rawUrl = `${RAW_BASE}/${file.path}`;
  const res = await fetch(rawUrl);
  if (!res.ok) throw new Error(`Failed to fetch ${rawUrl}`);
  let content = await res.text();

  // Add frontmatter if not present
  if (!content.startsWith("---")) {
    const title = path.basename(file.name, path.extname(file.name));
    content = `---\ntitle: ${title}\ndescription: \n---\n\n` + content;
  }

  const localPath = path.join(localBase, file.path);
  await fs.mkdir(path.dirname(localPath), { recursive: true });
  await fs.writeFile(localPath, content, "utf8");
}

async function syncDocs(localBase = path.resolve("content/docs"), dir = "") {
  const files = await fetchDocsList(dir);
  for (const file of files) {
    if (file.type === "file" && file.name.endsWith(".md")) {
      await fetchAndSaveFile(file, localBase);
    } else if (file.type === "dir") {
      await syncDocs(localBase, file.path);
    }
  }
}

// Run if called directly
if (require.main === module) {
  syncDocs().then(() => console.log("Docs synced!"));
}

export { syncDocs };
