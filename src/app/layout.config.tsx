import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { type LinkItemType } from "fumadocs-ui/layouts/docs";
import { FaDiscord, FaCogs, FaBook } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import styles from "./header.module.css";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const linkItems: LinkItemType[] = [
  {
    type: "icon",
    url: "https://antiraid.xyz/discord",
    text: "Support",
    icon: <FaDiscord />,
    external: true,
  },
  {
    type: "icon",
    url: "https://github.com/Anti-Raid",
    text: "Github",
    icon: <SiGithub />,
    external: true,
  },
];

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className={styles.header}>
          <Image
            src="https://antiraid.xyz/logo.webp"
            alt="Logo"
            width="32"
            height="32"
          />
          <h1>AntiRaid</h1>
        </div>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      type: "menu",
      text: "Docs",
      items: [
        {
          icon: <FaCogs />,
          text: "User Guide",
          description: "How to guide on setting up AntiRaid",
          url: "/docs/README",
          menu: {
            className: "lg:col-start-2",
          },
        },
        {
          icon: <FaBook />,
          text: "Developer's Guide",
          description: "Everything you need to know about AntiRaid's.",
          url: "/dev/go_jobs/",
        },
      ],
    },
    ...linkItems,
  ],
};
