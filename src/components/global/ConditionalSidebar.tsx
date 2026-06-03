"use client";

import { usePathname } from "next/navigation";
import { usesIntegratedChrome } from "@/lib/routes";
import Header from "./Header";

export default function ConditionalSidebar() {
  const pathname = usePathname();

  if (usesIntegratedChrome(pathname)) {
    return null;
  }

  return (
    <div className="hidden lg:block">
      <Header />
    </div>
  );
}
