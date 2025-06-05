//* ==== Conditionally render objects based on the page ====
"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import SocialLinks from "./SocialLinks";

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  //* ==== Add all future writing pages here ====
  const isWritingPage = pathname.includes("/principles");

  return (
    <main className={`flex-1 relative z-10 ${isWritingPage ? "ml-0" : ""}`}>
      {children}
      {isWritingPage && <SocialLinks />}
    </main>
  );
}
