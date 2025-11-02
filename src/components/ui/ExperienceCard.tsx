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
    <div className={`flex flex-col lg:flex-row gap-4 lg:gap-8 ${className}`}>
      {/* Left side - Title and Date */}
      <div className="flex-1 lg:flex-none lg:w-1/3">
        <h2 className="mb-1 text-[16px] sm:text-[18px] lg:text-[20px]">
          {title.includes(",") ? (
            <>
              <span className="text-gray-300">
                {title.substring(0, title.indexOf(",") + 1)}
              </span>
              <span className="text-white ml-1">
                {title.substring(title.indexOf(",") + 1).trim()}
              </span>
            </>
          ) : (
            <span className="text-white">{title}</span>
          )}
        </h2>
        <p className="sm:text-[14px] lg:text-[14px]">{date}</p>
      </div>

      {/* Right side - Description */}
      <div className="flex-1 lg:w-2/3">
        <p>{description}</p>
      </div>
    </div>
  );
}
