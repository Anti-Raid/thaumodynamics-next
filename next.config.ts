import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const config = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BUILD_ENV: process.env.NODE_ENV || "development",
  },
  serverExternalPackages: ["shiki"],
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

export default withMDX(config);
