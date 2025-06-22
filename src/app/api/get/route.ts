import { NextRequest } from "next/server";

const RAW_BASE =
  "https://raw.githubusercontent.com/Anti-Raid/antiraid/development/docs/src";

async function fetchDocFile(path: string) {
  const rawUrl = `${RAW_BASE}/${path}`;
  const res = await fetch(rawUrl);
  if (!res.ok) throw new Error(`Failed to fetch ${rawUrl}`);
  let content = await res.text();
  if (!content.startsWith("---")) {
    const title =
      path
        .split("/")
        .pop()
        ?.replace(/\.[^/.]+$/, "") || "";
    content = `---\ntitle: ${title}\ndescription: \n---\n\n` + content;
  }
  return content;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");
  if (!file) return new Response("Missing file parameter", { status: 400 });
  try {
    const content = await fetchDocFile(file);
    return new Response(content, {
      status: 200,
      headers: { "Content-Type": "text/markdown" },
    });
  } catch (e: any) {
    return new Response(e.message, { status: 404 });
  }
}
