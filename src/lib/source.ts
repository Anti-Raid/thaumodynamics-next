import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
import { loader } from 'fumadocs-core/source';
import { getLocalDocFile, listLocalDocs } from './local-docs';
import path from 'path';
import fs from 'fs/promises';

// Helper to load all docs as virtual files
async function getAllDocs(dir = ''): Promise<{ path: string; type: 'page'; data: { content: string } }[]> {
  const entries = await listLocalDocs(dir);
  let files: { path: string; type: 'page'; data: { content: string } }[] = [];
  for (const entry of entries) {
    if (entry.type === 'file' && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      const content = await getLocalDocFile(entry.path);
      files.push({
        path: entry.path,
        type: 'page',
        data: { content },
      });
    } else if (entry.type === 'dir') {
      files = files.concat(await getAllDocs(entry.path));
    }
  }
  return files;
}

// Synchronous wrapper for loader (loader expects sync files or array, not async)
let allDocs: { path: string; type: 'page'; data: { content: string } }[] = [];
(async () => {
  allDocs = await getAllDocs();
})();

export const source = loader({
  baseUrl: '/docs',
  source: {
    files: () => allDocs,
  },
  pageTree: {
    // adds a badge to each page item in page tree
    attachFile,
  },
});

let openapiSpec: any = null;
try {
  const specRaw = await fs.readFile(path.resolve(process.cwd(), 'docs-cache', 'openapi.json'), 'utf8');
  openapiSpec = JSON.parse(specRaw);
} catch (e) {
  openapiSpec = null;
}

export const openapi = createOpenAPI({
  hasHead: true,
  // You must provide the OpenAPI spec to the APIPage component, not here
});