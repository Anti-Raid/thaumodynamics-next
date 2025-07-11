import { source, docsReady } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { NextResponse } from 'next/server';

const handler = createFromSource(source);

export async function GET(request: Request) {
  await docsReady; // Ensure docs are loaded
  return handler.GET(request);
}