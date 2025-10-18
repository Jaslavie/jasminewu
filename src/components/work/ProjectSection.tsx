"use client";

import React from "react";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ProjectSection({
  title,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <section className={`py-6 px-[22vw] ${className}`}>
      <div className="mx-auto">
        <h2 className=" text-white mb-4 font-sans">{title}</h2>
        <div className="prose prose-invert max-w-none [&>p]:text-gray-300 [&>p]:text-lg [&>p]:leading-relaxed [&>div>h2]:text-white [&>div>h2]:font-semibold [&>div>h2]:mb-4 [&>div>ul]:space-y-3 [&>div>ul>li]:flex [&>div>ul>li]:items-start [&>div>ul>li]:gap-3 [&>div>ul>li>span:last-child]:text-gray-300 space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}
