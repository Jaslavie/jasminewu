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
      // Planet appears 700ms after text reveal completes, video shows 200ms after planet
      setTimeout(() => {
        console.log("Setting showVideo to true - planet should be visible");
        setShowVideo(true);
      }, 900);
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
    <div className="h-full relative">
      {/* Video Background - Shows after planet appears, desktop only */}
      {showVideo && (
        <div className="hidden md:block fixed inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-[-80px] w-[calc(100%+80px)] h-full object-cover"
            style={{
              opacity: showVideo ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            onLoadedData={() => console.log("Video loaded successfully")}
            onError={(e) => console.error("Video error:", e)}
            onPlay={() => console.log("Video started playing")}
          >
            <source src="/animation_hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Color overlay to match background */}
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.3,
              mixBlendMode: "multiply",
              backgroundColor: "#000",
            }}
          />
        </div>
      )}

      <div className="relative z-10">
        <HomeContent />
      </div>
    </div>
  );
}
