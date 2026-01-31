"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Context to track which item is hovered/focused
interface WritingHoverContextType {
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  totalItems: number;
  items: { href: string }[];
}

const WritingHoverContext = createContext<WritingHoverContextType>({
  focusedIndex: null,
  setFocusedIndex: () => {},
  totalItems: 0,
  items: [],
});

// Provider component for the writing list
interface WritingListBoxProps {
  children: ReactNode;
  className?: string;
  items: { href: string }[];
}

export function WritingListBox({ children, className = "", items }: WritingListBoxProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const router = useRouter();

  // Handle arrow key navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => {
          if (prev === null) return 0;
          // Wrap around to start when reaching end
          return prev >= items.length - 1 ? 0 : prev + 1;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => {
          if (prev === null) return items.length - 1;
          // Wrap around to end when reaching start
          return prev <= 0 ? items.length - 1 : prev - 1;
        });
      } else if (e.key === "Enter" && focusedIndex !== null) {
        e.preventDefault();
        const item = items[focusedIndex];
        if (item) {
          if (item.href.startsWith("http")) {
            window.open(item.href, "_blank");
          } else {
            router.push(item.href);
          }
        }
      } else if (e.key === "Escape") {
        setFocusedIndex(null);
      }
    },
    [focusedIndex, items, router]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <WritingHoverContext.Provider
      value={{ focusedIndex, setFocusedIndex, totalItems: items.length, items }}
    >
      <div className={className}>{children}</div>
    </WritingHoverContext.Provider>
  );
}

// Individual writing item with box effect
interface WritingItemBoxProps {
  href: string;
  title: string;
  date: string;
  index: number;
}

export function WritingItemBox({ href, title, date, index }: WritingItemBoxProps) {
  const { focusedIndex, setFocusedIndex } = useContext(WritingHoverContext);
  const isExternal = href.startsWith("http") || href.startsWith("https");

  const isFocused = focusedIndex === index;
  const isOtherFocused = focusedIndex !== null && focusedIndex !== index;

  const content = (
    <div
      className="flex flex-col gap-0"
      style={{
        fontFamily: "'EB Garamond', serif",
        color: isFocused ? "#ffffff" : "#9ca3af",
      }}
    >
      <span className="text-[16px]">{title}</span>
      <span className="text-sm" style={{ color: isFocused ? "#d1d5db" : "#6b7280" }}>
        {date}
      </span>
    </div>
  );

  const linkElement = isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline hover:no-underline"
    >
      {content}
    </a>
  ) : (
    <Link href={href} className="block no-underline hover:no-underline">
      {content}
    </Link>
  );

  return (
    <div
      className="px-3 py-2 transition-all duration-200 cursor-pointer"
      style={{
        border: isFocused ? "1px solid rgba(255, 255, 255, 0.6)" : "1px solid transparent",
        opacity: isOtherFocused ? 0.6 : 1,
      }}
      onMouseEnter={() => setFocusedIndex(index)}
      onMouseLeave={() => setFocusedIndex(null)}
    >
      {linkElement}
    </div>
  );
}
