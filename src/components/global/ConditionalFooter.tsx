"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  //* ==== Page-specific footer visibility ====
  const isHomePage = pathname === "/";
  const isProjectsPage = pathname === "/projects";
  const isProjectDetailPage = pathname.startsWith("/projects/");
  const isCurationsPage = pathname === "/curations";
  const isWritingPage = pathname === "/writing";

  // Pages with their own integrated footer
  if (
    isHomePage ||
    isProjectsPage ||
    isProjectDetailPage ||
    isCurationsPage ||
    isWritingPage
  ) {
    return null;
  }

  return <Footer />;
}
