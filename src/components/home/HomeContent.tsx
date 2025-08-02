"use client";

import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
import ProjectsList from "@/components/home/ProjectsList";
import React from "react";

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
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Background animation contained here */}
      <div className="flex flex-col md:flex-row h-[75vh] px-4 md:px-6 pt-0">
        {/* left content Area */}
        <div
          className="flex-1 flex flex-col justify-center max-w-full md:pb-0 md:space-y-10"
          style={{ marginTop: 0 }}
        >
          {/* Thesis Content */}
          <div
            className="space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-6 max-w-full md:max-w-2xl w-full md:w-[40vw] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg"
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
              lineHeight: "clamp(1.4, 1.6, 1.7)",
            }}
          >
            <h2>
              Jasmine Wu designs human-AI interfaces for decision-making on
              spacewalks and the battlefield. Currently at{" "}
              <StyledLink href="https://www.palantir.com/platforms/gotham/">
                Palantir
              </StyledLink>{" "}
              &{" "}
              <StyledLink href="https://www.gallatin.ai/">
                Gallatin AI
              </StyledLink>
              . Previously built navigation tools for astronauts with{" "}
              <StyledLink href="https://www.nasa.gov/">NASA</StyledLink>.
            </h2>
          </div>
        </div>
        {/* Right Side ASCII Art */}
        <div
          className="hidden md:flex items-center justify-center md:pr-[8%]"
          style={{ marginTop: 0 }}
        >
          <div id="Planet">
            <Planet />
          </div>
        </div>
      </div>

      {/* Projects Section - Reduced padding */}
      <div className="px-4 md:px-6 py-8">
        <ProjectsList />
      </div>
    </div>
  );
}
