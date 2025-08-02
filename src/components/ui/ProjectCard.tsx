"use client";

import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  number: string;
  imageBefore: string;
  imageAfter: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  number,
  imageBefore,
  imageAfter,
  className = "",
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div>
        {/* Title and Number */}
        <div className="flex justify-between items-start flex-col">
          <span className="text-gray-400 text-sm font-serif">{number}</span>
          <h3 className="text-white font-serif text-xl">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-[1.2] mt-2 font-body">
          {description}
        </p>
      </div>
      {/* Image Container */}
      <div className="relative w-full mb-4 overflow-hidden rounded-sm">
        <img
          src={isHovered ? imageAfter : imageBefore}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
