import NextLink from "next/link";
import type { ReactNode } from "react";
import { getLinkIconProps } from "@/components/ui/linkIcons";

export default function NoteLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("https") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    const iconProps = getLinkIconProps(href);

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
        style={iconProps.style}
        data-link-icon={iconProps["data-link-icon"]}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className="link">
      {children}
    </NextLink>
  );
}
