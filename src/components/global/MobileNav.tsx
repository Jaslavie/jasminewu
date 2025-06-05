"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  //* ==== Add all future writing pages here ====
  const isWritingPage = pathname.includes("/principles");

  // Hide on writing pages (same pattern as sidebar and footer)
  if (isWritingPage) {
    return null;
  }

  const navItems = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
  ];

  return (
    <nav className="md:hidden fixed top-0 left-0 right-0 bg-background border-b border-gray-800 z-30">
      <div className="flex justify-start items-center py-4 px-6">
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
