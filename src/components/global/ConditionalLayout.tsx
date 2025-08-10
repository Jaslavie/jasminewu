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
    <div
      className={`min-h-screen md:h-full ${
        isWritingPage
          ? "ml-0" // Writing pages: no mobile nav, no sidebar on any device
          : "py-[8vh] px-[5vw] pt-16 md:pt-0" // Other pages: mobile nav padding on mobile, sidebar margin on desktop
      }`}
    >
      {children}
      {isWritingPage && <SocialLinks />}
    </div>
  );
}
