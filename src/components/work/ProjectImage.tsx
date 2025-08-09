"use client";

import React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: string;
  height?: string;
}

export default function ProjectImage({
  src,
  alt,
  caption,
  className = "",
  width = "full",
  height = "auto",
}: ProjectImageProps) {
  return (
    <div className={`my-2 ${className} w-full`}>
      <div className=" mx-auto">
        <img
          src={src}
          alt={alt}
          className={`w-${width} h-${height} object-cover shadow-lg rounded-none`}
        />
        {caption && (
          <p className="text-gray-400 text-sm text-center italic">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
