"use client";

import React from "react";

interface ProjectSectionRowProps {
  title: string;
  children: React.ReactNode;
  image: React.ReactNode;
  className?: string;
}

export default function ProjectSectionRow({
  title,
  children,
  image,
  className = "",
}: ProjectSectionRowProps) {
  return (
    <section className={`py-6 px-6 md:px-[8vw] ${className}`}>
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left Container - Title + Text Content (1/3 width on desktop) */}
          <div className="w-full md:w-1/3">
            <h2 className="text-white mb-4 md:mb-6 font-sans font-light tracking-wide">
              {title}
            </h2>
            <div className="prose prose-invert max-w-none [&>p]:mb-4 [&>div>h2]:font-semibold [&>div>h2]:mb-4 [&>div>ul]:space-y-3 [&>div>ul>li]:flex [&>div>ul>li]:items-start [&>div>ul>li]:gap-3">
              {children}
            </div>
          </div>

          {/* Right Container - Image/Video (2/3 width on desktop) */}
          <div className="w-full md:w-2/3">{image}</div>
        </div>
      </div>
    </section>
  );
}
