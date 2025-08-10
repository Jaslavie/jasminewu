"use client";

import React from "react";

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  layout?: "column" | "row";
}

export default function ProjectSection({
  title,
  children,
  className = "",
  layout = "column",
}: ProjectSectionProps) {
  // Helper function to check if a child is a ProjectImage
  const isProjectImage = (child: React.ReactElement) => {
    return (
      child.type &&
      typeof child.type === "function" &&
      (child.type.name === "ProjectImage" ||
        (child.type as any).displayName === "ProjectImage")
    );
  };

  // Separate text content and images
  const textContent: React.ReactNode[] = [];
  const imageContent: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (isProjectImage(child)) {
        imageContent.push(child);
      } else {
        textContent.push(child);
      }
    } else {
      textContent.push(child);
    }
  });

  return (
    <section
      className={`py-6 ${layout === "row" ? "px-[8vw]" : "px-[18vw]"} ${className}`}
    >
      <div className="mx-auto">
        {layout === "row" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 items-center min-h-[60vh]">
            {/* Left Container - Title + Text Content (1/3 width) */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              {/* Section Title */}
              <h2 className="text-[20px] text-white mb-6 font-sans font-light tracking-wide">
                {title}
              </h2>

              {/* Section Content */}
              <div className="prose prose-invert max-w-none [&>p]:text-sm [&>p]:leading-relaxed [&>p]:mb-4  [&>div>h2]:font-semibold [&>div>h2]:mb-4 [&>div>ul]:space-y-3 [&>div>ul>li]:flex [&>div>ul>li]:items-start [&>div>ul>li]:gap-3">
                {textContent}
              </div>
            </div>

            {/* Right Container - Project Images (2/3 width) */}
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="w-full max-w-4xl">{imageContent}</div>
            </div>
          </div>
        ) : (
          <>
            {/* Section Title */}
            <h2 className="text-[20px] text-white mb-4 font-sans">{title}</h2>

            {/* Section Content */}
            <div className="prose prose-invert max-w-none [&>p]:text-gray-300 [&>p]:text-lg [&>p]:leading-relaxed [&>div>h2]:text-white [&>div>h2]:font-semibold [&>div>h2]:mb-4 [&>div>ul]:space-y-3 [&>div>ul>li]:flex [&>div>ul>li]:items-start [&>div>ul>li]:gap-3 [&>div>ul>li>span:last-child]:text-gray-300 space-y-6">
              {children}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
