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

  // Get last updated time from GitHub
  const githubPath = slug.length ? slug.join("/") + ".md" : "README.md";
  const lastEdit = await getGithubLastEdit({
    owner: "AntiRaid",
    repo: "antiraid",
    path: `development/docs/src/${githubPath}`,
  });

  return (
    <DocsPage toc={toc} lastUpdate={lastEdit ? new Date(lastEdit) : undefined}>
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
