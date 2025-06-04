"use client";

import ChaosLink from "@/components/ui/Link";
import { useState } from 'react';

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
    <div className={`flex items-center group ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* when the user hovers over the element, display the rhombus */}
      {isHovered && (
        <span className="text-gray-600 text-sm mr-4 group-hover:text-gray-400 transform rotate-45 duration-500 ease-in-out">
          ◆
        </span>
      )}
      <div className="text-gray-400 hover:text-white text-sm transition-colors">
        <ChaosLink href={href}>{children} →</ChaosLink>
      </div>
    </div>
  );
}
