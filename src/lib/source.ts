import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
import { loader } from 'fumadocs-core/source';
import { getLocalDocFile, listLocalDocs } from './local-docs';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';

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
    attachFile,
  },
});

export const openapi = createOpenAPI({
  shikiOptions: {
    themes: {
      dark: 'purple',
      light: 'purple-light',
    },
  },
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;