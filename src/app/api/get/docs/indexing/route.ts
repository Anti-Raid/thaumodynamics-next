import { listLocalDocs, getLocalDocFile } from "@/lib/local-docs";

async function walk(dir = "", prefix = "") {
  const files = await listLocalDocs(dir);
  let out: any[] = [];
  for (const file of files) {
    if (file.type === "file" && (file.name.endsWith(".md") || file.name.endsWith(".mdx"))) {
      // If the file is README.md or README.mdx, include it in the path
      const isReadme = /^readme\.(md|mdx)$/i.test(file.name);
      const url =
        "/docs/" +
        (
          prefix + (isReadme ? file.name : file.name.replace(/\.(md|mdx)$/, ""))
        ).replace(/\/+/g, "/");
      let content = null;
      try {
        content = await getLocalDocFile(file.path);
      } catch (e) {
        content = null;
      }
      out.push({
        type: "page",
        name: file.name.replace(/\.(md|mdx)$/, ""),
        url,
        content,
      });
    } else if (file.type === "dir") {
      const newDir = dir
        ? `${dir.replace(/^\/+/g, "")}/${file.name}`
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