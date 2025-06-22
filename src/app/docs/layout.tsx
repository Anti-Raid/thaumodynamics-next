"use client";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { useEffect, useState } from "react";

async function fetchPageTree() {
  const res = await fetch("/api/get/docs/indexing");
  if (!res.ok) return { name: "root", children: [] };
  return await res.json();
}

export default function Layout({ children }: { children: ReactNode }) {
  const [tree, setTree] = useState<{ name: string; children: any[] }>({
    name: "root",
    children: [],
  });
  useEffect(() => {
    fetchPageTree().then(setTree);
  }, []);

  // @ts-ignore
  return (
    <DocsLayout tree={tree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
