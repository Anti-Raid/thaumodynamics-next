import { z } from "zod";
import { getLocalDocFile } from "@/lib/local-docs";
import { NextRequest } from "next/server";

const fileParamSchema = z.object({
  file: z.string().min(1, "File parameter is required"),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");
  // Validate query param
  const parsed = fileParamSchema.safeParse({ file });
  if (!parsed.success) {
    console.error(`[GET /api/get/docs/content] Invalid query:`, parsed.error);
    return new Response(parsed.error.message, { status: 400 });
  }
  try {
    const content = await getLocalDocFile(parsed.data.file);
    return new Response(content, {
      status: 200,
      headers: { "Content-Type": "text/markdown" },
    });
  } catch (e: any) {
    console.error(`[GET /api/get/docs/content] Error:`, e);
    return new Response(e.message, { status: 404 });
  }
}
