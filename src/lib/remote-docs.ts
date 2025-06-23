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

function sanitizeLinks(mdx: string): string {
  // Replace links like [text](./dev/hosting/) or [text](dev/hosting/) with [text](/docs/dev/hosting/)
  mdx = mdx.replace(/\]\((\.?\/?dev\/[^)]+)\)/g, (_match, path) => {
    // Remove leading ./ or /
    const cleanPath = path.replace(/^\.?\/?/, "");
    return `](/docs/${cleanPath})`;
  });
  // Replace links like [text](./user/...) or [text](user/...) with [text](/docs/user/...)
  mdx = mdx.replace(/\]\((\.?\/?user\/[^)]+)\)/g, (_match, path) => {
    // Remove leading ./ or /
    const cleanPath = path.replace(/^\.?\/?/, "");
    return `](/docs/${cleanPath})`;
  });
  return mdx;
}

function sanitizeMarkdown(mdx: string): string {
  // Convert callout markdown (e.g., > [!info] Title) to <Callout type="info" title="Title">...</Callout>
  mdx = mdx.replace(
    /^> \[!(info|warn|warning|error|success)] ?(.*?)\n([\s\S]*?)(?=^\s*\n|^> \[!|^#|^\w|\Z)/gim,
    (_match, type, title, content) => {
      const calloutType = type === 'warning' ? 'warn' : type;
      const titleAttr = title ? ` title=\"${title.trim()}\"` : '';
      return `<Callout type=\"${calloutType}\"${titleAttr}>\n${content.trim()}\n</Callout>\n`;
    }
  );

  // Detect Luau type definition code blocks and inject a TypeTable after them
  mdx = mdx.replace(
    /```luau\s+type (\w+) = {([\s\S]*?)}\s*```/g,
    (match, typeName, body) => {
      // Parse fields
      const fieldRegex = /--- @field ([^:]+): ([^\n]+)\n\s*([^,]+): ([^,]+),/g;
      const fields: Record<string, any> = {};
      let m;
      while ((m = fieldRegex.exec(body))) {
        fields[m[1].trim()] = {
          description: m[2].trim(),
          type: m[4].trim(),
        };
      }
      // Fallback: if no fields, just return code block
      if (Object.keys(fields).length === 0) return match;
      // Inject both code block and TypeTable
      return `${match}\n\n<TypeTable type={${JSON.stringify(fields, null, 2)}} />`;
    }
  );

  // Sanitize links to add /docs/ prefix
  mdx = sanitizeLinks(mdx);

  // Remove or escape raw HTML blocks except <table> and </table>
  return mdx
    .replace(/<(?!table|\/table)[a-zA-Z][^>]*>([\s\S]*?)<\/(?!table)[a-zA-Z][^>]*>/g, '')
    // Remove inline HTML tags except <table>, <tr>, <td>, <th>, <thead>, <tbody>, <tfoot>
    .replace(/<(?!\/?(table|tr|td|th|thead|tbody|tfoot)\b)[^>]+>/g, '')
    // Remove unescaped curly braces (basic, not perfect)
    .replace(/(?<!\\)[{}]/g, '');
}

export const getCompiledDoc = cache(async (slug: string[]) => {
  const mdx = await fetchDoc(slug);
  if (!mdx) return null;
  const sanitized = sanitizeMarkdown(mdx);
  const compiled = await compileMDX({
    source: sanitized,
    components: getMDXComponents(),
  });
  return {
    content: compiled.body,
    frontmatter: compiled.frontmatter || {},
    toc: compiled.toc || [],
  };
});
