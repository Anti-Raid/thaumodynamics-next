import { cache } from "react";
import { compileMDX } from "@fumadocs/mdx-remote";
import { getMDXComponents } from "@/mdx-components";

function getApiBase() {
  if (typeof window !== "undefined") return ""; // browser: relative path
  // server: absolute URL
  return process.env.NEXT_PUBLIC_DOCS_API || "http://localhost:3000";
}

export async function fetchDoc(slug: string[]) {
  const file = slug.length ? slug.join("/") + ".md" : "README.md";
  const apiBase = getApiBase();
  const url = `${apiBase}/api/get/docs/content?file=${encodeURIComponent(file)}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  const mdx = await res.text();
  return mdx;
}

export const getCompiledDoc = cache(async (slug: string[]) => {
  const mdx = await fetchDoc(slug);
  if (!mdx) return null;
  const compiled = await compileMDX({
    source: mdx,
    components: getMDXComponents(),
  });
  return {
    content: compiled.body,
    frontmatter: compiled.frontmatter || {},
    toc: compiled.toc || [],
  };
});
