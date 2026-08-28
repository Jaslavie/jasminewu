"use client";

import React from "react";
import type { Book } from "@/data/libraryData";

interface SingleBookPageProps {
  book: Book;
  className?: string;
}

export default function SingleBookPage({ book, className = "" }: SingleBookPageProps) {
  const { title, author, year, link } = book;

  return (
    <div
      className={`relative w-full max-w-[260px] sm:max-w-[280px] bg-[#141517] border border-[rgba(255,255,255,0.12)] p-4 sm:p-5 text-neutral-200 shadow-xl flex flex-col justify-between select-text shrink-0 ${className}`}
      style={{
        fontFamily: "'EB Garamond', serif",
        minHeight: "340px",
      }}
    >
      {/* Paper margin inner frame */}
      <div className="absolute inset-1.5 pointer-events-none border border-[rgba(255,255,255,0.04)]" />

      {/* Header / Running head */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-1.5 mb-5 text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-text-subheading)]">
        <span className="truncate max-w-[120px]">{title}</span>
        <span className="truncate max-w-[90px]">{author}</span>
      </div>

      {/* Center content placeholder & link */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-2.5 my-4">
        <div className="w-8 h-8 border border-[rgba(255,255,255,0.12)] flex items-center justify-center mb-1">
          <div className="w-4 h-4 border border-[rgba(255,255,255,0.08)]" />
        </div>
        <h3 className="text-[16px] sm:text-[17px] font-normal leading-snug text-white">
          {title}
        </h3>
        <p className="text-[12.5px] text-[var(--color-text-subheading)]">
          {author} {year ? `(${year})` : ""}
        </p>

        {link && (
          <div className="pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/80 hover:text-white underline underline-offset-4 decoration-[rgba(255,255,255,0.3)] hover:decoration-white transition-colors inline-flex items-center gap-1"
            >
              <span>View reference</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        )}
      </div>

      {/* Bottom footer */}
      <div className="pt-2 border-t border-[rgba(255,255,255,0.08)] flex justify-between text-[10px] text-[var(--color-text-subheading)]">
        <span>Book Page</span>
        <span>— 1 —</span>
      </div>
    </div>
  );
}
