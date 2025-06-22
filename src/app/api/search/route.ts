import { NextRequest } from "next/server";

const GITHUB_API = "https://api.github.com/repos/Anti-Raid/antiraid/contents/docs/src";
const RAW_BASE = "https://raw.githubusercontent.com/Anti-Raid/antiraid/development/docs/src";

async function fetchDocsList(dir = "") {
  const url = dir ? `${GITHUB_API}/${dir}` : GITHUB_API;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

async function fetchDocFile(path: string) {
  const rawUrl = `${RAW_BASE}/${path}`;
  const res = await fetch(rawUrl);
  if (!res.ok) throw new Error(`Failed to fetch ${rawUrl}`);
  return await res.text();
}

async function getAllDocs() {
  async function walk(dir = "", prefix = "") {
    const files = await fetchDocsList(dir);
    let out: any[] = [];
    for (const file of files) {
      if (file.type === "file" && file.name.endsWith(".md")) {
        out.push(prefix + file.name);
      } else if (file.type === "dir") {
        out = out.concat(await walk(file.name, prefix + file.name + "/"));
      }
    }
    return out;
  }
  const allFiles = await walk();
  const docs = [];
  for (const file of allFiles) {
    const content = await fetchDocFile(file);
    docs.push({ path: file, content });
  }
  return docs;
}

// Fallback: simple search implementation using includes
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  if (!q) return Response.json([]);
  try {
    const docs = await getAllDocs();
    const results = docs
      .filter(doc => doc.content.toLowerCase().includes(q.toLowerCase()))
      .map(doc => ({
        url: `/docs/${doc.path.replace(/\\/g, "/").replace(/\.md$/, "")}`,
        title: doc.path.split("/").pop()?.replace(/\.md$/, "") || "",
        snippet: doc.content.slice(0, 200),
      }));
    return Response.json(results);
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
}
