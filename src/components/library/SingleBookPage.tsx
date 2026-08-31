"use client";

import React from "react";
import type { Book } from "@/data/libraryData";

interface SingleBookPageProps {
  book: Book;
  className?: string;
}

export default function SingleBookPage({
  book,
  className = "",
}: SingleBookPageProps) {
  const { title, coverImage } = book;
  const imageSrc = coverImage || "/library/coming-soon.png";

  return (
    <div
      className={`relative w-[260px] sm:w-[280px] lg:w-[290px] aspect-[1/1.48] rounded-[2px] overflow-hidden shadow-2xl select-none shrink-0 border border-[rgba(255,255,255,0.12)] bg-neutral-900 ${className}`}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover rounded-[2px]"
        draggable={false}
      />
    </div>
  );
}
