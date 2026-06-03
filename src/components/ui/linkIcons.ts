import type { CSSProperties } from "react";

type LinkIconStyle = CSSProperties & {
  "--link-icon-url"?: string;
};

export function getLinkIconProps(href: string): {
  "data-link-icon"?: "true";
  style?: LinkIconStyle;
} {
  if (!href.startsWith("http")) return {};

  try {
    const url = new URL(href);
    const faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain_url=${encodeURIComponent(
      url.origin,
    )}`;

    return {
      "data-link-icon": "true",
      style: {
        "--link-icon-url": `url("${faviconUrl}")`,
      },
    };
  } catch {
    return {};
  }
}
