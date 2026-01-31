//* ==== Conditionally render sidebar based on the page ====
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalSidebar() {
  const pathname = usePathname();

  //* ==== Hide header on pages with integrated nav ====
  const isHomePage = pathname === "/";
  const isCurationsPage = pathname === "/curations";
  const isWritingPage = pathname === "/writing";

  // Don't show header on home, curations, or writing pages - they have their own integrated nav
  if (isHomePage || isCurationsPage || isWritingPage) {
    return null;
  }

  // Only render sidebar on desktop for other pages
  return (
    <div className="hidden md:block">
      <Header />
    </div>
  );
}
