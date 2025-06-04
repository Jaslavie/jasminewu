"use client";

import ChaosLink from "@/components/ui/Link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/work", label: "work" },
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-40 border-r border-gray-700 flex flex-col p-6">
      {/* Title */}
      <div className="mb-12">
        <ChaosLink href="/">Jasmine Wu</ChaosLink>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <div key={item.href}>
            <ChaosLink href={item.href}>{item.label}</ChaosLink>
          </div>
        ))}
      </nav>
    </aside>
  );
}
