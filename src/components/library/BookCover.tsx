"use client";

import React from "react";
import type { Book } from "@/data/libraryData";

interface BookCoverProps {
  book: Book;
  isSelected?: boolean;
  interactive?: boolean;
  overlayOpacity?: number;
  className?: string;
}

export default function BookCover({
  book,
  isSelected = false,
  interactive = true,
  overlayOpacity = 0,
  className = "",
}: BookCoverProps) {
  const { title, coverImage } = book;
  const imageSrc = coverImage || "/library/coming-soon.png";

  return (
    <div
      className={`group relative aspect-[1/1.48] w-[95px] sm:w-[105px] md:w-[115px] lg:w-[120px] select-none rounded-[2px] transition-all duration-300 ease-out ${
        interactive ? "cursor-pointer" : "cursor-default"
      } bg-[#141517] text-neutral-200 ${className}`}
      style={{
        boxShadow: isSelected
          ? "0 16px 32px -8px rgba(0,0,0,0.8), 0 0 12px rgba(255,255,255,0.12)"
          : "0 6px 16px -4px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      {/* Book spine line on the left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] pointer-events-none rounded-l-[2px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.12), rgba(0,0,0,0.4))",
        }}
      />

      {/* Hover border effect - offset with inner padding around the book */}
      {interactive && (
        <>
          <div
            className="absolute -inset-[3px] rounded-[3px] pointer-events-none transition-all duration-200 z-20"
            style={{
              border: isSelected
                ? "1px solid rgba(255, 255, 255, 0.6)"
                : "1px solid transparent",
            }}
          />
          <div className="absolute -inset-[3px] rounded-[3px] pointer-events-none transition-all duration-200 group-hover:border-[1px] group-hover:border-[rgba(255,255,255,0.6)] z-20" />
        </>
      )}

      {/* Book cover image */}
      <div className="relative w-full h-full overflow-hidden rounded-[2px] bg-neutral-900 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-[2px]"
          draggable={false}
        />
        {/* Top-level dimming overlay (prevents see-through transparency, strictly dims image) */}
        <div
          className="absolute inset-0 bg-black pointer-events-none rounded-[2px] transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    </div>
  );
}
