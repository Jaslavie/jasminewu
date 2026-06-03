"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isNavActive, NAV_ITEMS, shouldHideMobileNav } from "@/lib/routes";

export default function MobileNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHideMobileNav(pathname)) {
    return null;
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-30 border-b border-[var(--color-card-border)] transition-all duration-300 lg:hidden ${
        isScrolled ? "bg-background/90 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="flex items-center justify-start px-6 py-4">
        <div className="flex space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = isNavActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[var(--color-text-subheading)] hover:text-white"
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
