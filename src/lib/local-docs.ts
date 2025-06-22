import fs from "fs/promises";
import path from "path";

const DOCS_ROOT = path.resolve(process.cwd(), "docs-cache", "docs");

export async function getLocalDocFile(file: string): Promise<string> {
  // Remove double .md/.mdx extensions if present
  file = file.replace(/\.(md|mdx)\.(md|mdx)$/i, ".$1");
  const filePath = path.join(DOCS_ROOT, file);
  let content: string;
  try {
    content = await fs.readFile(filePath, "utf8");
  } catch (e: any) {
    throw new Error(`Local doc not found: ${file}`);
  }
  if (!content.startsWith("---")) {
    const title = path.basename(file, path.extname(file));
    // Remove top-level markdown title ONLY if it matches the folder name
    const parentDir = path.basename(path.dirname(file));
    const titleRegex = new RegExp(
      `^#\\s+${parentDir.replace(/[-_.]/g, "[ -_.]")}\\s*\\n+`,
      "i",
    );
    if (title.toLowerCase() === parentDir.toLowerCase()) {
      content = content.replace(titleRegex, "");
    }
    content = `---\ntitle: ${title}\ndescription: \n---\n\n` + content;
  }
  return content;
}

export async function listLocalDocs(
  dir = "",
): Promise<{ name: string; path: string; type: "file" | "dir" }[]> {
  const absDir = path.join(DOCS_ROOT, dir);
  let entries: any[] = [];
  try {
    entries = await fs.readdir(absDir, { withFileTypes: true });
  } catch (e: any) {
    throw new Error(`Local docs directory not found: ${dir}`);
  }
  return entries.map((entry) => ({
    name: entry.name,
    path: path.join(dir, entry.name).replace(/\\/g, "/"),
    type: entry.isDirectory() ? "dir" : "file",
  }));
}
