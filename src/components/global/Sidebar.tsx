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
    <aside className="fixed left-0 top-0 h-screen w-40 border-r border-gray-700 flex flex-col p-[2%] z-10 ">
      {/* Title */}
      <div className="mb-5 font-['EB_Garamond'] italic text-2xl font-light text-decoration-none outline-none border-none">
        <Link href="/">J.W.</Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
