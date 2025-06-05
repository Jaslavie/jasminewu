"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  //* ==== Add all future writing pages here ====
  const isWritingPage = pathname.includes("/principles");

  if (isWritingPage) {
    return null;
  }

  return <Footer />;
}
