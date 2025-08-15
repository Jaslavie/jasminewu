//* ==== Conditionally render sidebar based on the page ====
"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function ConditionalSidebar() {
  const pathname = usePathname();

  //* ==== Add all future writing pages here ====
  const isWritingPage = pathname.startsWith("/writing");

  // Show sidebar on all pages including writing pages (desktop only)
  // Mobile navigation is handled separately

  // Only render sidebar on desktop
  return (
    <div className="hidden md:block">
      <Sidebar />
    </div>
  );
}
