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

export async function generateDocs() {
  await removeGeneratedDocs("./content/docs/api-reference/(generated)");

  await Promise.all([
    OpenAPI.generateFiles({
      input: ["./content/docs/api-reference/openapi.json"],
      output: "./content/docs/api-reference/(generated)",
      per: "operation",
      includeDescription: true,
      groupBy: "tag",
    }),
  ]);
}
