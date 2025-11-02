"use client";

import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
import ProjectsList from "@/components/home/ProjectsList";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import React, { useEffect, useState } from "react";

// Wrapper component for header links
const StyledLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <span
    style={{
      fontFamily: "Times New Roman, serif",
      fontStyle: "italic",
      marginBottom: "-2rem",
    }}
  >
    <Link href={href}>{children}</Link>
  </span>
);

export default function HomeContent() {
  const [showVideo, setShowVideo] = useState(false);
  const heroFade = useFadeInOnScroll({ delay: 0 });
  const planetFade = useFadeInOnScroll({ delay: 200 });

  useEffect(() => {
    // Automatically show video after the planet appears (1400ms + 200ms buffer)
    setTimeout(() => {
      console.log("Setting showVideo to true - planet should be visible");
      setShowVideo(true);
    }, 1600);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-[60vh] sm:h-[65vh] lg:h-[75vh] px-4 sm:px-6 lg:px-0 pt-0">
        {/* left content Area */}
        <div
          className="flex-1 flex flex-col justify-center max-w-full lg:pb-0 lg:space-y-10"
          style={{ marginTop: 0 }}
        >
          {/* Thesis Content */}
          <div
            ref={heroFade.elementRef}
            className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-6 max-w-full lg:max-w-2xl w-full lg:w-[40vw] text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-lg px-2 sm:px-4 lg:px-6"
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
              lineHeight: "clamp(1.4, 1.6, 1.7)",
              ...heroFade.fadeInStyle,
            }}
          >
            <h2>
              simulating the future & building software for the battlefield at{" "}
              <StyledLink href="https://www.gallatin.ai/">
                Gallatin AI
              </StyledLink>
              . previously {" "}@
              <StyledLink href="https://www.palantir.com/platforms/gotham/">
                Palantir
              </StyledLink>{" "}@
              <StyledLink href="https://www.nasa.gov/">NASA</StyledLink>.
            </h2>
          </div>
        </div>
        {/* Right Side ASCII Art */}
        <div
          ref={planetFade.elementRef}
          className="hidden lg:flex items-center justify-center lg:pr-[8%] relative"
          style={{ marginTop: 0, ...planetFade.fadeInStyle }}
        >
          <div id="Planet" className="relative z-10">
            {/* Video Background - Shows after planet appears, desktop only */}
            {showVideo && (
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
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
              </div>
            )}
            <Planet />
          </div>
        </div>
      </div>

      <hr style={{ border: "1px solid #222" }} />
      {/* Projects Section - Responsive padding */}
      <div className="px-2 sm:px-4 lg:px-6 pt-4 sm:pt-6 pb-[8vh] sm:pb-[10vh] lg:pb-[12vh]">
        <ProjectsList />
      </div>
    </div>
  );
}
