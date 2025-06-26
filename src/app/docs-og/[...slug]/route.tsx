import { generateOGImage } from 'fumadocs-ui/og';
import { source, docsReady } from '@/lib/source';
import { notFound } from 'next/navigation';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  await docsReady; // Ensure docs are loaded before handling the request
  const { slug } = await params;
  let docSlug = slug.slice(0, -1);
  if (docSlug.length && docSlug[docSlug.length - 1] === 'README') {
    docSlug[docSlug.length - 1] = 'README.md';
  }
  const page = source.getPage(docSlug);
  if (!page) notFound();
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Anti',
  });
}

export function generateStaticParams() {
  return source.generateParams().map((page) => ({
    ...page,
    slug: [...page.slug, 'image.png'],
  }));
}
