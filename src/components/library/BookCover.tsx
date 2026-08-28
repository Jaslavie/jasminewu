"use client";

import React from "react";
import type { Book } from "@/data/libraryData";

interface BookCoverProps {
  book: Book;
  isSelected?: boolean;
  interactive?: boolean;
  className?: string;
}

// TODO: placeholder
export default function BookCover({
  book,
  isSelected = false,
  interactive = true,
  className = "",
}: BookCoverProps) {
  const { title, author, year } = book;

  return (
    <div
      className={`group relative aspect-[1/1.42] w-[95px] sm:w-[105px] md:w-[115px] lg:w-[120px] select-none rounded-[2px] transition-all duration-300 ease-out ${
        interactive ? "cursor-pointer" : "cursor-default"
      } bg-[#141517] text-neutral-200 ${className}`}
      style={{
        boxShadow: isSelected
          ? "0 16px 32px -8px rgba(0,0,0,0.8), 0 0 12px rgba(255,255,255,0.12)"
          : "0 6px 16px -4px rgba(0,0,0,0.5)",
        border: isSelected
          ? "1px solid rgba(255, 255, 255, 0.6)"
          : "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      {/* Book spine line on the left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] pointer-events-none rounded-l-[2px]"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.12), rgba(0,0,0,0.4))",
        }}
      />

      {/* Hover border effect - only shown when interactive or selected */}
      {interactive && (
        <>
          <div
            className="absolute -inset-[1px] rounded-[3px] pointer-events-none transition-all duration-200"
            style={{
              border: isSelected
                ? "1px solid rgba(255, 255, 255, 0.6)"
                : "1px solid transparent",
            }}
          />
          <div className="absolute -inset-[1px] rounded-[3px] pointer-events-none transition-all duration-200 group-hover:border-[1px] group-hover:border-[rgba(255,255,255,0.6)]" />
        </>
      )}

      {/* Book uniform cover layout */}
      <div className="relative w-full h-full p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden rounded-[2px] text-center">
        {/* Top Header */}
        <div className="space-y-0.5">
          <p
            className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.15em] text-[var(--color-text-subheading)]"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            {author}
          </p>
          <div className="w-4 h-px bg-[rgba(255,255,255,0.15)] mx-auto my-0.5" />
          <h4
            className="text-[10px] sm:text-[11.5px] font-normal leading-tight text-white line-clamp-2"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            {title}
          </h4>
        </div>

        {/* Minimalist central geometric placeholder frame */}
        <div className="my-auto py-0.5 flex items-center justify-center">
          <div className="w-6 h-6 border border-[rgba(255,255,255,0.12)] flex items-center justify-center relative">
            <div className="w-3 h-3 border border-[rgba(255,255,255,0.08)]" />
          </div>
        </div>

        {/* Bottom footer note */}
        <div className="pt-0.5 border-t border-[rgba(255,255,255,0.08)]">
          <p
            className="text-[7px] sm:text-[7.5px] uppercase tracking-wider text-[var(--color-text-subheading)]"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            {year || "2026"}
          </p>
        </div>
      </div>
    </div>
  );
}
