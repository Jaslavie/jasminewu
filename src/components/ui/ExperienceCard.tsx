"use client";

import React from "react";

interface ExperienceCardProps {
  title: string;
  date: string;
  description: string;
  className?: string;
}

export default function ExperienceCard({
  title,
  date,
  description,
  className = "",
}: ExperienceCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${className}`}>
      {/* Left side - Title and Date */}
      <div className="flex-1 md:flex-none md:w-1/3">
        <h2 className="text-white mb-1">{title}</h2>
        <p className="text-gray-500 text-[12px] md:text-base">{date}</p>
      </div>

      {/* Right side - Description */}
      <div className="flex-1 md:w-2/3">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
