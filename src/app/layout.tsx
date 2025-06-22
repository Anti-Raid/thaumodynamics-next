import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | AntiRaid",
    default: "AntiRaid - Easily Protect Your Discord Server with AntiRaid",
  },
  icons: {
    icon: "https://antiraid.xyz/logo.webp",
    shortcut: "https://antiraid.xyz/logo.webp",
    apple: "https://antiraid.xyz/logo.webp",
  },
  keywords: [
    "AntiRaid",
    "Discord",
    "AntiRaid Bot",
    "Discord Bot",
    "Discord Security",
    "Discord Moderation",
    "Discord Protection",
    "AntiRaid Documentation",
    "AntiRaid Guide",
    "AntiRaid Setup",
    "AntiRaid Features",
    "AntiRaid Installation",
    "AntiRaid Configuration",
    "AntiRaid Support",
    "AntiRaid Community",
    "AntiRaid Features",
    "AntiRaid Bot Setup",
    "AntiRaid Bot Configuration",
    "AntiRaid Bot Features",
    "AntiRaid Bot Installation",
    "AntiRaid Bot Guide",
    "AntiRaid Bot Documentation",
  ],
  openGraph: {
    title: "AntiRaid - Easily Protect Your Discord Server with AntiRaid",
    url: "https://docs.antiraid.xyz",
    siteName: "AntiRaid | Docs",
    images: {
      url: "https://antiraid.xyz/og_image.webp",
      width: 1200,
      height: 630,
      alt: "AntiRaid - Easily Protect Your Discord Server with AntiRaid",
    },
  },
  description:
    "AntiRaid offers powerful, automated protection for your Discord server. Designed to combat spam, harmful bots, and disruptive behavior, our advanced moderation technology ensures a safe and welcoming environment. With AntiRaid, you can focus on engaging with your community while we handle the security, providing real-time defense against potential threats...",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
