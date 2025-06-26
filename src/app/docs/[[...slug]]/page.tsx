import { getCompiledDoc } from "@/lib/remote-docs";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { openapi, source } from '../../../lib/source';
import defaultComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { APIPage } from 'fumadocs-openapi/ui';

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const doc = await getCompiledDoc(slug);

  if (!doc) notFound();

  const { content: Mdx, frontmatter, toc } = doc;

  return (
    <DocsPage 
      toc={toc}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
      editOnGithub={{
        repo: 'AntiRaid',
        owner: 'Anti-Raid',
        sha: 'development',
        path: `/docs/${slug.join('/')}`,
      }}>
      <DocsTitle>
        {String(frontmatter.title || slug[slug.length - 1] || "Docs")}
      </DocsTitle>
      <DocsDescription>
        {frontmatter.description ? String(frontmatter.description) : undefined}
      </DocsDescription>
      <DocsBody>
        <Mdx
          components={{
            ...defaultComponents,
            Tabs,
            Tab,
            TypeTable,
            Accordion,
            Accordions,
             APIPage: (props) => (
                <APIPage {...openapi.getAPIPageProps(props)} />
              ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export const dynamic = "force-dynamic";

// Add Open Graph image metadata for docs pages
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const doc = await getCompiledDoc(slug);
  if (!doc) notFound();
  const { frontmatter } = doc;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.antiraid.xyz'; // <-- Set your real domain here
  const image = `${baseUrl}/docs-og/${slug.join('/')}/image.png`;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      images: [image],
    },
  };
}
