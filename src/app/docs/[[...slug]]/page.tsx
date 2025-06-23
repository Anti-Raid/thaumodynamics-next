import { getCompiledDoc } from "@/lib/remote-docs";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { getGithubLastEdit } from "fumadocs-core/server";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const doc = await getCompiledDoc(slug);
  if (!doc) notFound();
  const { content: MdxContent, frontmatter, toc } = doc;

  return (
    <DocsPage toc={toc}>
      <DocsTitle>
        {String(frontmatter.title || slug[slug.length - 1] || "Docs")}
      </DocsTitle>
      <DocsDescription>
        {frontmatter.description ? String(frontmatter.description) : undefined}
      </DocsDescription>
      <DocsBody>{MdxContent && <MdxContent />}</DocsBody>
    </DocsPage>
  );
}

export const dynamic = "force-dynamic";
