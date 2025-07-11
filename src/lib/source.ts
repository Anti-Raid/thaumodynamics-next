import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
import { loader } from 'fumadocs-core/source';
import { getLocalDocFile, listLocalDocs } from './local-docs';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';

// Cache with size limit to prevent memory leaks
const MAX_CACHE_SIZE = 100; // Maximum number of docs to keep in memory
let docCache = new Map<string, { content: string; lastAccessed: number }>();

function addToCache(path: string, content: string) {
  if (docCache.size >= MAX_CACHE_SIZE) {
    // Remove least recently used entry
    let oldestTime = Date.now();
    let oldestKey = '';
    for (const [key, value] of docCache.entries()) {
      if (value.lastAccessed < oldestTime) {
        oldestTime = value.lastAccessed;
        oldestKey = key;
      }
    }
    if (oldestKey) docCache.delete(oldestKey);
  }
  docCache.set(path, { content, lastAccessed: Date.now() });
}

// Helper to load all docs as virtual files
async function getAllDocs(dir = ''): Promise<{ path: string; type: 'page'; data: { content: string } }[]> {
  const entries = await listLocalDocs(dir);
  let files: { path: string; type: 'page'; data: { content: string } }[] = [];
  for (const entry of entries) {
    if (entry.type === 'file' && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      let docPath = entry.path;
      if (docPath.endsWith('.md')) docPath = docPath.slice(0, -3);
      else if (docPath.endsWith('.mdx')) docPath = docPath.slice(0, -4);
      
      // Check cache first
      const cached = docCache.get(docPath);
      let content;
      if (cached) {
        content = cached.content;
        cached.lastAccessed = Date.now();
      } else {
        content = await getLocalDocFile(entry.path);
        addToCache(docPath, content);
      }
      
      files.push({
        path: docPath,
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
export const docsReady = (async () => {
  allDocs = await getAllDocs();
})();

// Periodically clean up old cache entries
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of docCache.entries()) {
    if (now - value.lastAccessed > 1000 * 60 * 60) { // 1 hour
      docCache.delete(key);
    }
  }
}, 1000 * 60 * 15); // Check every 15 minutes

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