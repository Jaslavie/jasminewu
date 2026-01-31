"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  //* ==== Page-specific footer visibility ====
  const isHomePage = pathname === "/";
  const isCurationsPage = pathname === "/curations";
  const isWritingPage = pathname === "/writing";

  // Home, curations, and writing pages have their own integrated footer
  if (isHomePage || isCurationsPage || isWritingPage) {
    return null;
  }

  return <Footer />;
}
