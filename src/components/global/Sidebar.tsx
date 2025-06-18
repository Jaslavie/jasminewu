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
    { href: "/work", label: "work" },
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
  ];

  return (
    <header className="w-full flex flex-row items-center justify-between border-b border-gray-700 h-12 z-20 fixed top-0 left-0 font-subheading">
      {/* Left: Name and time */}
      <div className="flex flex-row items-stretch h-full">
        <div className="flex items-center px-6 font-['EB_Garamond'] text-1xl font-light text-white h-full">
          <Link href="/">Jasmine Wu</Link>
        </div>
        <div className="w-px bg-gray-700 h-full" />
        <div className="flex items-center px-6 text-sm text-gray-400 font-subheading h-full">
          currently it's {dcTime} in Washington, DC
        </div>
        <div className="w-px bg-gray-700 h-full" />
      </div>
      {/* Right: Nav */}
      <nav className="flex flex-row items-stretch h-full">
        <div className="w-px bg-gray-700 h-full" />
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href} className="flex items-center h-full">
              <Link
                href={item.href}
                className={`px-6 text-base font-subheading transition-colors h-full flex items-center ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {item.label}
              </Link>
              {idx !== navItems.length - 1 && (
                <div className="w-px bg-gray-700 h-full" />
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
