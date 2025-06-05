//* ==== Conditionally render sidebar based on the page ====
"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function ConditionalSidebar() {
  const pathname = usePathname();

  //* ==== Add all future writing pages here ====
  const isWritingPage = pathname.includes("/principles");

  // Hide on writing pages (all devices) or on mobile (all pages)
  if (isWritingPage) {
    return null;
  }

  // Only render sidebar on desktop
  return (
    <div className="hidden md:block">
      <Sidebar />
    </div>
  );
}
