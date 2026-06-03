"use client";

import { usePathname } from "next/navigation";
import { usesIntegratedChrome } from "@/lib/routes";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (usesIntegratedChrome(pathname)) {
    return null;
  }

  return <Footer />;
}
