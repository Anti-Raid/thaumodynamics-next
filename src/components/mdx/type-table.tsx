"use client";

import { Info as InfoIcon, Link as LinkIcon } from "lucide-react";
import Link from "fumadocs-core/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "fumadocs-ui/components/ui/popover";
import type { ReactNode } from "react";

export function Info({ children }: { children: ReactNode }): ReactNode {
  return (
    <Popover>
      <PopoverTrigger>
        <InfoIcon className="size-4" />
      </PopoverTrigger>
      <PopoverContent className="prose max-h-[400px] min-w-[220px] max-w-[400px] overflow-auto text-sm prose-no-margin">
        {children}
      </PopoverContent>
    </Popover>
  );
}

interface ObjectType {
  /**
   * Additional description of the field
   */
  description?: ReactNode;
  type: string;
  typeDescription?: ReactNode;
  /**
   * Optional link to the type
   */
  typeDescriptionLink?: string;
  default?: string;
  required?: boolean;
  deprecated?: boolean;
}

const field = cva("inline-flex flex-row items-center gap-1");

const code = cva(
  "rounded-md bg-fd-secondary p-1 text-fd-secondary-foreground",
  {
    variants: {
      color: {
        primary: "bg-fd-primary/10 text-fd-primary",
        deprecated: "line-through text-fd-primary/50",
      },
    },
  },
);

function parseMarkdownType(typeString: string): ReactNode {
  const parts: (string | ReactNode)[] = [typeString];

  // Markdown link parsing: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (typeof part === 'string') {
      const text = part;
      const newParts: (string | ReactNode)[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = linkRegex.exec(text)) !== null) {
        const [fullMatch, linkText, linkUrl] = match;

        if (match.index > lastIndex) {
          newParts.push(text.slice(lastIndex, match.index));
        }

        if (linkText && linkUrl) {
          newParts.push(
            <Link
              key={`link-${i}-${match.index}`}
              href={linkUrl}
              className="inline-flex items-center gap-1 text-fd-primary hover:text-fd-primary/80 transition-colors"
            >
              <code className={code({ color: "primary" })}>{linkText}</code>
              <LinkIcon className="size-3" />
            </Link>
          );
        }

        lastIndex = match.index + fullMatch.length;
      }

      if (lastIndex < text.length) {
        newParts.push(text.slice(lastIndex));
      }

      if (newParts.length > 0) {
        parts.splice(i, 1, ...newParts);
        i += newParts.length - 1;
      }
    }
  }

  // Bold: **text**
  const boldRegex = /\*\*([^*]+)\*\*/g;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (typeof part === 'string') {
      const text = part;
      const newParts: (string | ReactNode)[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = boldRegex.exec(text)) !== null) {
        const [fullMatch, boldText] = match;

        if (match.index > lastIndex) {
          newParts.push(text.slice(lastIndex, match.index));
        }

        if (boldText) {
          newParts.push(
            <strong key={`bold-${i}-${match.index}`} className="font-semibold">
              {boldText}
            </strong>
          );
        }

        lastIndex = match.index + fullMatch.length;
      }

      if (lastIndex < text.length) {
        newParts.push(text.slice(lastIndex));
      }

      if (newParts.length > 0) {
        parts.splice(i, 1, ...newParts);
        i += newParts.length - 1;
      }
    }
  }

  // Italics: *text*
  const italicRegex = /(?<!\*)\*([^*]+)\*(?!\*)/g;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (typeof part === 'string') {
      const text = part;
      const newParts: (string | ReactNode)[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;

      while ((match = italicRegex.exec(text)) !== null) {
        const [fullMatch, italicText] = match;

        if (match.index > lastIndex) {
          newParts.push(text.slice(lastIndex, match.index));
        }

        if (italicText) {
          newParts.push(
            <em key={`italic-${i}-${match.index}`} className="italic">
              {italicText}
            </em>
          );
        }

        lastIndex = match.index + fullMatch.length;
      }

      if (lastIndex < text.length) {
        newParts.push(text.slice(lastIndex));
      }

      if (newParts.length > 0) {
        parts.splice(i, 1, ...newParts);
        i += newParts.length - 1;
      }
    }
  }

  // Wrap plain strings in <code> elements
  const finalParts = parts.map((part, index) => {
    if (typeof part === 'string' && part.trim().length > 0) {
      return (
        <code key={`code-${index}`} className={code()}>
          {part}
        </code>
      );
    }
    return part;
  });

  return <>{finalParts}</>;
}

export function TypeTable({ type }: { type: Record<string, ObjectType> }) {
  return (
    <div className="prose my-6 overflow-auto prose-no-margin">
      <table className="whitespace-nowrap text-sm text-fd-muted-foreground">
        <thead>
          <tr>
            <th className="w-[45%]">Prop</th>
            <th className="w-[30%]">Type</th>
            <th className="w-1/4">Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type).map(([key, value]) => (
            <tr key={key}>
              <td>
                <div className={field()}>
                  <code
                    className={cn(
                      code({
                        color: value.deprecated ? "deprecated" : "primary",
                      }),
                    )}
                  >
                    {key}
                    {!value.required && '?'}
                  </code>
                  {value.default ? (
                    <Info>
                      <div>
                        <strong>Default:</strong> <code>{value.default}</code>
                      </div>
                    </Info>
                  ) : null}
                </div>
              </td>
              <td>
                <div className={field()}>
                  {parseMarkdownType(value.type)}
                  {value.typeDescription ? (
                    <Info>{value.typeDescription}</Info>
                  ) : null}
                  {value.typeDescriptionLink ? (
                    <Link href={value.typeDescriptionLink}>
                      <LinkIcon className="size-4 text-fd-muted-foreground" />
                    </Link>
                  ) : null}
                </div>
              </td>
              <td>
                <div className="text-sm">{value.description || "-"}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}