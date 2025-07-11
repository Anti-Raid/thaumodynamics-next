import { FiGithub } from "react-icons/fi";

interface EditLinkProps {
  path: string;
}

export function EditLink({ path }: EditLinkProps) {
  const editUrl = `https://github.com/Anti-Raid/antiraid/blob/development/docs/src/${path}.md`;
  
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
    >
      <FiGithub className="w-4 h-4" />
      Edit this page on GitHub
    </a>
  );
} 