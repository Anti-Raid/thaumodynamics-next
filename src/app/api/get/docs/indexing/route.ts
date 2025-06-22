import { z } from "zod";
import { listLocalDocs } from "@/lib/local-docs";
import { NextRequest } from "next/server";

// Recursively build a Fumadocs-compatible page tree from local docs
async function walk(dir = "", prefix = "") {
  const files = await listLocalDocs(dir);
  let out: any[] = [];
  for (const file of files) {
    if (file.type === "file" && file.name.endsWith(".md")) {
      // If the file is README.md, include it in the path
      const isReadme = file.name.toLowerCase() === "readme.md";
      const url =
        "/docs/" +
        (
          prefix + (isReadme ? file.name : file.name.replace(/\.mdx?$/, ""))
        ).replace(/\/+/g, "/");
      out.push({
        type: "page",
        name: file.name.replace(/\.(md|mdx)$/, ""),
        url,
      });
    } else if (file.type === "dir") {
      const newDir = dir
        ? `${dir.replace(/^\/+/, "")}/${file.name}`
        : file.name;
      const newPrefix = prefix + file.name + "/";
      const children = await walk(newDir, newPrefix);
      out.push({ type: "folder", name: file.name, children });
    }
  }
  return out;
}

export async function GET() {
  try {
    const children = await walk();
    return Response.json({ type: "folder", name: "root", children });
  } catch (e: any) {
    console.error(`[GET /api/get/docs/indexing] Error:`, e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
