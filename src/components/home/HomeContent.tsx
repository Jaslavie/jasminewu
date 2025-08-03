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
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-[75vh] px-4 sm:px-6 lg:px-0 pt-0">
        {/* left content Area */}
        <div
          className="flex-1 flex flex-col justify-center max-w-full lg:pb-0 lg:space-y-10"
          style={{ marginTop: 0 }}
        >
          {/* Thesis Content */}
          <div
            className="space-y-4 sm:space-y-5 lg:space-y-4 xl:space-y-6 max-w-full lg:max-w-2xl w-full lg:w-[40vw] text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-lg px-4 sm:px-6 lg:px-6"
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
          className="hidden lg:flex items-center justify-center lg:pr-[8%]"
          style={{ marginTop: 0 }}
        >
          <div id="Planet">
            <Planet />
          </div>
        </div>
      </div>

      <hr style={{ border: "1px solid #222" }} />
      {/* Projects Section - Reduced padding */}
      <div className="px-4 sm:px-6 lg:px-6 py-6 sm:py-8">
        <ProjectsList />
      </div>
    </div>
  );
}
