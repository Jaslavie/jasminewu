"use client";

import HomeContent from "@/components/home/HomeContent";
import { useEffect, useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    // Listen for TextReveal completion and then show video when planet appears
    const handleTextRevealComplete = () => {
      // Planet appears 700ms after text reveal completes
      setTimeout(() => setShowVideo(true), 900);
    };

    window.addEventListener("textRevealComplete", handleTextRevealComplete);

    return () => {
      window.removeEventListener(
        "textRevealComplete",
        handleTextRevealComplete
      );
    };
  }, []);

  return (
    <div className="ml-40 h-full relative">
      {/* Video Background - Only shows when planet appears */}
      {showVideo && (
        <div className="absolute top-0 left-[-80px] w-full h-full -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              opacity: showVideo ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <source src="/animation_hero.mp4" type="video/mp4" />
          </video>
          {/* Color overlay to match background */}
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.3,
              mixBlendMode: "multiply",
            }}
          />
        </div>
      )}

      <HomeContent />
    </div>
  );
}
