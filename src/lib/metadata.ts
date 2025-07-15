import type { Metadata } from "next/types";

const title = "AntiRaid | Docs";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://docs.antiraid.xyz",
      images: "/banner.png",
      siteName: title,
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@ranveersoni98",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development" ||
  !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL("https://docs.antiraid.xyz")
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
