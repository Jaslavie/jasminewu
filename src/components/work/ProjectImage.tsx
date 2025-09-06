"use client";

import React, { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: string;
  height?: string;
  maxHeight?: string;
  type?: "img" | "mov";
  gridSpan?: "full" | "2/3" | "1/3";
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
 * @param gridSpan - Grid span for layout positioning ("full", "2/3", "1/3")
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
 *   gridSpan="2/3"
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
  gridSpan = "full",
}: ProjectImageProps) {
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Check if it's a video based on type prop or file extension
  const videoExtensions = [".mov", ".mp4", ".webm", ".avi", ".mkv", ".m4v"];
  const isVideo =
    type === "mov" ||
    videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));

  // Build style object for maxHeight if provided
  const style = maxHeight ? { maxHeight } : {};

  // Determine grid classes based on gridSpan prop
  const getGridClasses = () => {
    switch (gridSpan) {
      case "2/3":
        return "lg:col-span-2";
      case "1/3":
        return "lg:col-span-1";
      case "full":
      default:
        return "lg:col-span-3";
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setIsVideoLoading(false);
    console.error(`Failed to load video: ${src}`);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <div className={`my-4 ${className} w-full ${getGridClasses()}`}>
      <div className="mx-auto w-full">
        {isVideo && !videoError ? (
          <div className="relative w-full">
            {/* {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-gray-500">Loading video...</div>
              </div>
            )} */}
            <video
              src={src}
              className={`w-full h-${height} ${maxHeight ? "object-contain" : "object-cover"} shadow-lg rounded-none`}
              style={style}
              loop
              muted
              autoPlay
              aria-label={alt}
              preload="metadata"
              onError={handleVideoError}
              onLoadedData={handleVideoLoad}
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={`w-full h-${height} ${maxHeight ? "object-contain" : "object-cover"} shadow-lg rounded-none`}
            style={style}
            loading="lazy"
          />
        )}
        {videoError && (
          <div className="text-red-500 text-sm mt-2 text-center">
            Video failed to load. Please check the file path and format.
          </div>
        )}
        {caption && (
          <p className="text-gray-400 text-sm mt-3 text-center italic">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
