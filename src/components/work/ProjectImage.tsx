"use client";

import React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  type?: "img" | "mov";
}

/**
 * ProjectImage component that can display either images or videos.
 *
 * @param src - Path to the image or video file
 * @param alt - Alternative text for accessibility
 * @param caption - Optional caption text below the media
 * @param className - Additional CSS classes
 * @param width - Width class (e.g., "full", "1/2", "1/3")
 * @param height - Height class (e.g., "auto", "64", "96")
 * @param type - Media type ("img" or "mov"). If not specified, will be inferred from file extension
 *
 * @example
 * // Image usage (automatic detection)
 * <ProjectImage
 *   src="/path/to/image.jpg"
 *   alt="Description of image"
 *   caption="Optional caption"
 * />
 *
 * // Video usage with explicit type
 * <ProjectImage
 *   src="/path/to/video.mov"
 *   alt="Description of video"
 *   type="mov"
 *   caption="Video caption"
 * />
 *
 * // Video usage with automatic detection
 * <ProjectImage
 *   src="/path/to/video.mp4"
 *   alt="Description of video"
 *   caption="Video caption"
 * />
 */
export default function ProjectImage({
  src,
  alt,
  caption,
  className = "",
  width = "full",
  height = "auto",
  maxHeight,
  type = "img",
}: ProjectImageProps) {
  // Check if it's a video based on type prop or file extension
  const videoExtensions = [".mov", ".mp4", ".webm", ".avi", ".mkv", ".m4v"];
  const isVideo =
    type === "mov" ||
    videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));

  // Build style object for maxHeight if provided
  const style = maxHeight ? { maxHeight } : {};

  return (
    <div className={`my-2 ${className} w-full`}>
      <div className="mx-auto">
        {isVideo ? (
          <video
            src={src}
            className={`w-${width} h-${height} ${maxHeight ? "object-contain" : "object-cover"} shadow-lg rounded-none`}
            style={style}
            loop
            muted
            autoPlay
            aria-label={alt}
            preload="metadata"
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={src}
            alt={alt}
            className={`w-${width} h-${height} ${maxHeight ? "object-contain" : "object-cover"} shadow-lg rounded-none`}
            style={style}
            loading="lazy"
          />
        )}
        {caption && (
          <p className="text-gray-400 text-sm text-center italic">{caption}</p>
        )}
      </div>
    </div>
  );
}
