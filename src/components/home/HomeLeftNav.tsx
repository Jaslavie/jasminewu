"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeLeftNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
  ];

  const isHomePage = pathname === "/";

  return (
    <nav className="hidden md:flex md:flex-col md:space-y-1 md:h-full">
      {/* Name/Logo */}
      <p>
        <Link
            href="/"
            className={`transition-colors mb-2 ${
              isHomePage ? "text-white" : "text-[var(--color-text-muted)] hover:text-white"
            }`}
        >
            Jasmine Wu
        </Link>
      </p>

      {/* Navigation Links */}
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
            <p key={item.href}>
                <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive ? "text-white" : "text-[var(--color-text-muted)] hover:text-white"
                    }`}
                >
                    {item.label}
                </Link>
            </p>
        );
      })}
    </nav>
  );
}
