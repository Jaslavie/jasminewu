//* ==== Conditionally render sidebar based on the page ====
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalSidebar() {
  const pathname = usePathname();

  //* ==== Hide header on pages with integrated nav ====
  const isHomePage = pathname === "/";
  const isProjectsPage = pathname === "/projects";
  const isProjectDetailPage = pathname.startsWith("/projects/");
  const isCurationsPage = pathname === "/curations";
  const isWritingPage = pathname === "/writing";

  // Don't show header on pages that have their own integrated nav
  if (
    isHomePage ||
    isProjectsPage ||
    isProjectDetailPage ||
    isCurationsPage ||
    isWritingPage
  ) {
    return null;
  }

  // Only render sidebar on desktop for other pages
  return (
    <div className="hidden lg:block">
      <Header />
    </div>
  );
}
