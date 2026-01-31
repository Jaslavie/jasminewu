//* ==== Conditionally render objects based on the page ====
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  //* ==== Page-specific layout logic ====
  const isHomePage = pathname === "/";
  const isWritingPage = pathname.startsWith("/writing");

  // Home page has its own integrated layout - no padding needed
  if (isHomePage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div
      className={` ${
        isWritingPage
          ? "py-[8vh] pt-16 md:pt-0" // Writing pages
          : "py-[8vh] pt-16 md:pt-0" // Other pages
      }`}
    >
      {children}
    </div>
  );
}
