import * as OpenAPI from "fumadocs-openapi";
import { promises as fs } from "fs";
import { join } from "path";

async function removeGeneratedDocs(dir: string) {
  let entries: { name: string; path: string; isDirectory: boolean }[] = [];
  try {
    entries = (await fs.readdir(dir, { withFileTypes: true })).map((entry) => ({
      name: entry.name,
      path: join(dir, entry.name),
      isDirectory: entry.isDirectory(),
    }));
  } catch {
    return; // Directory doesn't exist, nothing to do
  }
  for (const entry of entries) {
    if (entry.isDirectory) {
      await removeGeneratedDocs(entry.path);
      // Remove the directory if it's empty
      try {
        await fs.rmdir(entry.path);
      } catch {}
    } else if (!entry.name.endsWith("meta.json")) {
      await fs.unlink(entry.path);
    }
  }
}

// Map HTTP methods to directory names matching the current API reference structure
function getMethodGroup(method: string, path: string): string {
  const upperMethod = method.toUpperCase();
  
  // Check if it's a POST request that should go to "execute" or "create"
  if (upperMethod === "POST") {
    // Check path patterns to determine if it's an execute or create operation
    if (path.includes("/execute") || (path.includes("/settings") && path.includes("/guilds"))) {
      return "execute";
    }
    // Default POST operations go to "create"
    return "create";
  }
  
  // Map other HTTP methods
  switch (upperMethod) {
    case "GET":
      return "get";
    case "DELETE":
      return "delete";
    case "PUT":
    case "PATCH":
      // PUT/PATCH could go to execute or create, defaulting to execute
      return "execute";
    default:
      // Everything else goes to misc
      return "misc";
  }
}

// Extract HTTP method and path from generated file content
async function extractOperationInfo(filePath: string): Promise<{ method: string; path: string } | null> {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    // Look for _openapi frontmatter - match method and route
    const methodMatch = content.match(/method:\s*(\w+)/);
    const routeMatch = content.match(/route:\s*(.+?)(?:\s|$)/);
    if (methodMatch && routeMatch) {
      return {
        method: methodMatch[1],
        path: routeMatch[1].trim(),
      };
    }
  } catch {
    // File might not exist or be readable
  }
  return null;
}

// Reorganize generated files by HTTP method
async function reorganizeByMethod(generatedDir: string) {
  const methodDirs = ["get", "create", "execute", "delete", "misc"];
  
  // Ensure method directories exist
  for (const methodDir of methodDirs) {
    const dirPath = join(generatedDir, methodDir);
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch {
      // Directory might already exist
    }
  }
  
  // Process all files in the generated directory
  async function processDirectory(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip method directories we just created
        if (!methodDirs.includes(entry.name)) {
          await processDirectory(fullPath);
          // Try to remove empty directory
          try {
            await fs.rmdir(fullPath);
          } catch {
            // Directory not empty or doesn't exist
          }
        }
      } else if (entry.name.endsWith(".mdx") && !entry.name.endsWith("meta.json")) {
        // Extract operation info from file
        const opInfo = await extractOperationInfo(fullPath);
        if (opInfo) {
          const targetDir = getMethodGroup(opInfo.method, opInfo.path);
          const targetPath = join(generatedDir, targetDir, entry.name);
          
          // Move file to appropriate directory
          try {
            await fs.rename(fullPath, targetPath);
          } catch (error) {
            console.warn(`Failed to move ${fullPath} to ${targetPath}:`, error);
          }
        }
      }
    }
  }
  
  await processDirectory(generatedDir);
}

export async function generateDocs() {
  await removeGeneratedDocs("./content/docs/api-reference");

  // Generate files (will be organized by tag initially)
  await Promise.all([
    OpenAPI.generateFiles({
      input: ["https://splashtail-staging.antiraid.xyz/openapi"],
      output: "./content/docs/api-reference",
      per: "operation",
      includeDescription: true,
      groupBy: "tag", // Generate with tag grouping first, then reorganize
    }),
  ]);
  
  // Reorganize files by HTTP method to match current API reference structure
  await reorganizeByMethod("./content/docs/api-reference");
}
