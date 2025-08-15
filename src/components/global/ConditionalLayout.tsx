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
  const isWritingPage = pathname.startsWith("/writing");

  return (
    <div
      className={`min-h-screen md:h-full ${
        isWritingPage
          ? "py-[8vh] px-[5vw] pt-16 md:pt-0" // Writing pages: same layout as other pages with header/footer
          : "py-[8vh] px-[5vw] pt-16 md:pt-0" // Other pages: mobile nav padding on mobile, sidebar margin on desktop
      }`}
    >
      {children}
      {isWritingPage}
    </div>
  );
}
