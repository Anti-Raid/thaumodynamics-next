import { NextRequest } from "next/server";

const GITHUB_API =
  "https://api.github.com/repos/Anti-Raid/antiraid/contents/docs/src";
const RAW_BASE =
  "https://raw.githubusercontent.com/Anti-Raid/antiraid/development/docs/src";
const GITHUB_REF = "development";

async function fetchDocsList(dir = "") {
  const url = dir
    ? `${GITHUB_API}/${dir}?ref=${GITHUB_REF}`
    : `${GITHUB_API}?ref=${GITHUB_REF}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

// Recursively build a tree with folders and files
async function walk(dir = "", prefix = "") {
  const files = await fetchDocsList(dir);
  let out: any[] = [];
  for (const file of files) {
    if (file.type === "file" && file.name.endsWith(".md")) {
      out.push({ type: "file", path: prefix + file.name, name: file.name });
    } else if (file.type === "dir") {
      const newDir = dir ? `${dir}/${file.name}` : file.name;
      const newPrefix = prefix + file.name + "/";
      const children = await walk(newDir, newPrefix);
      out.push({ type: "dir", path: newPrefix, name: file.name, children });
    }
  }
  return out;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");
  if (file) {
    const rawUrl = `${RAW_BASE}/${file}`;
    const res = await fetch(rawUrl);
    if (!res.ok) return new Response("Not found", { status: 404 });
    let content = await res.text();
    if (!content.startsWith("---")) {
      const title =
        file
          .split("/")
          .pop()
          ?.replace(/\.[^/.]+$/, "") || "";
      content = `---\ntitle: ${title}\ndescription: \n---\n\n` + content;
    }
    return new Response(content, {
      status: 200,
      headers: { "Content-Type": "text/markdown" },
    });
  }
  // Return the full tree for sidebar/navigation
  const tree = await walk();
  return Response.json(tree);
}
