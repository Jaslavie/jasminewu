"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  children: ReactNode;
  arrow?: "left" | "right" | "none";
  external?: boolean;
  className?: string;
}

const baseClassName =
  "inline-flex items-center border border-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-black transition-colors duration-200 hover:border-[#6c665f] hover:bg-black/[0.03] hover:text-[#6c665f]";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      className={direction === "left" ? "mr-1" : "ml-1"}
      aria-hidden="true"
    >
      {direction === "left" ? "\u2190" : "\u2192"}
    </span>
  );
}

export default function ActionButton({
  href,
  children,
  arrow = "none",
  external = false,
  className = "",
}: ActionButtonProps) {
  const content = (
    <>
      {arrow === "left" ? <Arrow direction="left" /> : null}
      {children}
      {arrow === "right" ? <Arrow direction="right" /> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClassName} ${className}`.trim()}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClassName} ${className}`.trim()}>
      {content}
    </Link>
  );
}
