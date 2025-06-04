"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/work", label: "work" },
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-40 border-r border-gray-700 flex flex-col p-8 z-10 ">
      {/* Title */}
      <div className="mb-12 font-serif italic text-2xl font-thin text-decoration-none outline-none border-none">
        <Link href="/">J.W.</Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
