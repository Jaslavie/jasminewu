"use client";

import ChaosLink from "@/components/ui/Link";
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

  return (
    <div
      className={`flex items-center group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fixed space for the diamond - always present but opacity controlled */}
      <div className="w-6 flex justify-start mr-2">
        <span
          className="text-gray-600 text-sm group-hover:text-gray-400 transition-all duration-500 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "rotate(0deg)" : "rotate(45deg)",
          }}
        >
          ◆
        </span>
      </div>
      <div className="text-gray-400 hover:text-white text-sm transition-colors">
        <ChaosLink href={href}>{children} →</ChaosLink>
      </div>
    </div>
  );
}
