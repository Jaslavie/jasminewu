"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [Time, setTime] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      // Convert to current time 
      const options = {
        hour: "2-digit" as const,
        minute: "2-digit" as const,
        second: "2-digit" as const,
        hour12: true,
        timeZone: "America/Los_Angeles",
      };
      setTime(now.toLocaleTimeString("en-US", options));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show sidebar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and not at the top
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/curations", label: "curations" },
    { href: "/writing", label: "writing" },
    { href: "/about", label: "about" },
  ];

  return (
    <header
      className={`w-full flex flex-row items-center justify-between border-b border-gray-700 px-6 py-3 z-20 fixed top-0 left-0 font-subheading transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left: Name and time */}
      <div className="flex flex-row items-center space-x-4">
        <div className="font-serif text-1xl font-light text-white">
          <Link href="/">Jasmine Wu</Link>
        </div>
        <div className="h-6 border-r border-gray-700"></div>
        <div className="text-sm text-[rgba(255,255,255,0.75)] font-serif">
          it's currently {Time} in Los Angeles
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
