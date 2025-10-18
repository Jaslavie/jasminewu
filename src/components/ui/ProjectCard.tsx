"use client";

import React, { useState, forwardRef } from "react";
import Link from "@/components/ui/Link";

interface CardProps {
  title: string;
  description: string;
  number: string;
  imageBefore: string;
  imageAfter: string;
  link?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      description,
      number,
      imageBefore,
      imageAfter,
      link,
      className = "",
      style,
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={ref}
        style={style}
        className={`relative flex flex-col gap-3 sm:gap-4 transition-all duration-300 h-full ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Content */}
        <div>
          {/* Title and Number */}
          <div className="flex justify-between items-start flex-col">
            <span className="text-[rgba(255, 255, 255, 0.50)] text-[16px] sm:text-[18px] font-serif">
              {number}
            </span>
            <div className="text-white font-body text-[16px] sm:text-[18px] group">
              <div className="flex items-center gap-2">
                <Link href={link || ""}>{title}</Link>
                <span
                  className={`transition-transform duration-300 ease-in-out ${
                    isHovered ? "translate-x-1" : "translate-x-0"
                  }`}
                >
                  →
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[rgba(255, 255, 255, 0.75)] text-[14px] sm:text-[16px] leading-[1.25] mt-[0.5vh] sm:mt-[1vh] font-body">
            {description}
          </p>
        </div>
        {/* Image Container */}
        <div className="relative w-full mb-2 sm:mb-4 overflow-hidden rounded-sm">
          <a href={link || ""}>
            <img
              src={isHovered ? imageAfter : imageBefore}
              alt={title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
