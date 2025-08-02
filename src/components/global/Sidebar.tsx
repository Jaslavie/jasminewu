"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [dcTime, setDcTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      // Convert to Washington, DC time (America/New_York)
      const options = {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
        hour12: true,
        timeZone: "America/New_York",
      };
      setDcTime(now.toLocaleTimeString("en-US", options));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "/about", label: "about" },
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
  ];

  return (
    <header className="w-full flex flex-row items-center justify-between border-b border-gray-700 px-6 py-3 z-20 fixed top-0 left-0 font-subheading">
      {/* Left: Name and time */}
      <div className="flex flex-row items-center space-x-4">
        <div className="font-serif text-1xl font-light text-white">
          <Link href="/">Jasmine Wu</Link>
        </div>
        <div className="h-6 border-r border-gray-700"></div>
        <div className="text-sm text-gray-300 font-serif">
          currently it's {dcTime} in Washington, DC
        </div>
        <div className="h-6 border-r border-gray-700"></div>
      </div>
      {/* Right page links */}

      <nav className="flex flex-row space-x-8">
        <div className="h-6 border-r border-gray-700"></div>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-serif transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
