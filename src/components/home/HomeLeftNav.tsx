"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavActive, NAV_ITEMS, ROUTES } from "@/lib/routes";

export default function HomeLeftNav() {
  const pathname = usePathname();

  const navItems = NAV_ITEMS.filter((item) => item.href !== ROUTES.home);

  const isHomePage = pathname === ROUTES.home;

  return (
    <nav className="hidden lg:flex lg:flex-col lg:space-y-1 h-full items-start justify-start">
      {/* Name/Logo */}
      <p>
        <Link
          href={ROUTES.home}
          className={`transition-colors mb-2 ${
            isHomePage
              ? "text-white"
              : "text-[var(--color-text-muted)] hover:text-white"
          }`}
        >
          Jasmine Wu
        </Link>
      </p>

      {/* Navigation Links */}
      {navItems.map((item) => {
        const isActive = isNavActive(pathname, item.href);
        return (
          <p key={item.href}>
            <Link
              href={item.href}
              className={`transition-colors ${
                isActive
                  ? "text-white"
                  : "text-[var(--color-text-muted)] hover:text-white"
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
