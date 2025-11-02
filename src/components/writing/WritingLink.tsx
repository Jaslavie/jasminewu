"use client";

import Link from "next/link";
import { useState } from "react";

interface WritingLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function WritingLink({
  href,
  children,
  className = "",
}: WritingLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <div
      className={`flex items-center group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* square animation */}
      <div className="w-6 flex justify-start">
        <span
          className="text-gray-500 text-[16px] group-hover:text-gray-400 transition-all duration-500 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          ■
        </span>
      </div>
      <div className="text-gray-400 hover:text-white text-[18px] transition-colors">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link no-underline hover:no-underline"
          >
            {children} 
            {/* → */}
          </a>
        ) : (
          <Link href={href} className="link no-underline hover:no-underline">
            {children} 
            {/* → */}
          </Link>
        )}
      </div>
    </div>
  );
}
