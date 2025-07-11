import { getCompiledDoc } from "@/lib/remote-docs";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { EditLink } from "@/components/EditLink";

interface Props {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const doc = await getCompiledDoc(resolvedParams.slug || []);

  if (!doc) {
    notFound();
  }

  const { content: Mdx, frontmatter, toc } = doc;
  const docPath = (resolvedParams.slug || []).join("/");

  return (
    <DocsPage
      toc={toc}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
    >
      <DocsTitle>
        {String(frontmatter.title || resolvedParams.slug?.[resolvedParams.slug.length - 1] || "Docs")}
      </DocsTitle>
      <DocsDescription>
        {frontmatter.description ? String(frontmatter.description) : undefined}
      </DocsDescription>
      <DocsBody>
        <Mdx />
        <div className="mt-8 pt-4 border-t border-fd-border">
          <EditLink path={docPath} />
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const doc = await getCompiledDoc(resolvedParams.slug || []);

  if (!doc) {
    return {};
  }

  const { frontmatter } = doc;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.antiraid.xyz";
  const docPath = (resolvedParams.slug || []).join("/");
  const image = `${baseUrl}/docs-og/${docPath}/image.png`;

  return {
    title: typeof frontmatter.title === 'string' ? frontmatter.title : undefined,
    description: typeof frontmatter.description === 'string' ? frontmatter.description : undefined,
    openGraph: {
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      images: [image],
    },
  };
}
