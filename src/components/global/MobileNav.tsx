"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  //* ==== Page-specific visibility ====
  const isHomePage = pathname === "/";
  const isCurationsPage = pathname === "/curations";
  const isWritingListPage = pathname === "/writing";
  const isPrinciplesPage = pathname.includes("/principles");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on home, curations, writing list pages (have integrated nav) and principles page
  if (isHomePage || isCurationsPage || isWritingListPage || isPrinciplesPage) {
    return null;
  }

  const navItems = [
    { href: "/", label: "home" },
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
    // { href: "/about", label: "about" },
  ];

  return (
    <nav
      className={`md:hidden fixed top-0 left-0 right-0 border-b border-gray-800 z-30 transition-all duration-300 ${
        isScrolled ? "bg-blue-900/20 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
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
