"use client";

import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top - 12, // Position above the trigger with some margin
        left: rect.left + rect.width / 2, // Center horizontally
      });
    }
  }, [isVisible]);

  return (
    <span
      ref={triggerRef}
      className="inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {/* Tooltip - fixed position relative to viewport */}
      {isVisible && (
        <div
          className="fixed z-[10000] px-4 py-3 
            bg-[#0d0d0d] border border-gray-500 
            text-white text-[15px] leading-[1.6] font-serif
            w-[260px] -translate-x-1/2 -translate-y-full"
          style={{
            top: position.top,
            left: position.left,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
}

// Citation component that uses Tooltip
interface CitationProps {
  number: number;
  content: string;
}

export function Citation({ number, content }: CitationProps) {
  return (
    <Tooltip content={content}>
      <span className="citation cursor-pointer">[{number}]</span>
    </Tooltip>
  );
}
