import { listLocalDocs, getLocalDocFile } from "@/lib/local-docs";
import { NextResponse } from "next/server";

// Cache indexing results for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;
let cachedResult: { data: any; timestamp: number } | null = null;

async function walk(dir = "", prefix = "", depth = 0): Promise<any[]> {
  // Prevent infinite recursion
  if (depth > 10) {
    throw new Error("Maximum directory depth exceeded");
  }

  let files: any[] = [];
  try {
    const entries = await listLocalDocs(dir);
    
    for (const file of entries) {
      if (file.type === "file" && (file.name.endsWith(".md") || file.name.endsWith(".mdx"))) {
        // If the file is README.md or README.mdx, include it in the path
        const isReadme = /^readme\.(md|mdx)$/i.test(file.name);
        const url =
          "/docs/" +
          (
            prefix + (isReadme ? "README" : file.name.replace(/\.(md|mdx)$/, ""))
          ).replace(/\/+/g, "/");
        
        files.push({
          type: "page",
          name: file.name.replace(/\.(md|mdx)$/, ""),
          url,
        });
      } else if (file.type === "dir") {
        const newDir = dir
          ? `${dir.replace(/^\/+/g, "")}/${file.name}`
          : file.name;
        const newPrefix = prefix + file.name + "/";
        try {
          const children = await walk(newDir, newPrefix, depth + 1);
          if (children.length > 0) { // Only include non-empty directories
            files.push({ type: "folder", name: file.name, children });
          }
        } catch (e) {
          console.error(`Failed to process directory ${newDir}:`, e);
          // Continue processing other directories even if one fails
        }
      }
    }
  } catch (e) {
    console.error(`Failed to list directory ${dir}:`, e);
    throw new Error(`Failed to process directory: ${e instanceof Error ? e.message : String(e)}`);
  }
  return files;
}

export async function GET() {
  try {
    // Check cache
    if (cachedResult && (Date.now() - cachedResult.timestamp) < CACHE_DURATION) {
      return NextResponse.json(cachedResult.data);
    }

    const children = await walk();
    if (!children || !Array.isArray(children)) {
      throw new Error("Invalid indexing result");
    }

    const result = { type: "folder", name: "root", children };
    
    // Update cache
    cachedResult = {
      data: result,
      timestamp: Date.now()
    };

    return NextResponse.json(result);
  } catch (e: any) {
    console.error(`[GET /api/get/docs/indexing] Error:`, e);
    return NextResponse.json(
      { 
        error: "Failed to index documents",
        details: e instanceof Error ? e.message : String(e)
      }, 
      { status: 500 }
    );
  }
}