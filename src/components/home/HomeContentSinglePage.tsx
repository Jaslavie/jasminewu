"use client";

import { useEffect, useState } from "react";
import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
import HomeLeftNav from "./HomeLeftNav";
import {
  CitationProvider,
  Citation,
  CitationParagraph,
} from "@/components/writing/CitationSystem";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "./pageStyles";

// Define sidenotes for the home page
const homeSidenotes: Record<number, string> = {
  1: "Primarily worked on red teaming and other predictive models for wargames",
  2: "Exposing chain of thought reasoning behind said prediction models",
};

export default function HomeContentSinglePage() {
  const [time, setTime] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);

  // Live time in Los Angeles
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/Los_Angeles",
      };
      setTime(now.toLocaleTimeString("en-US", options));
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Fade in animation - content first, then planet
  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 100);
    const planetTimer = setTimeout(() => setShowPlanet(true), 300);
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(planetTimer);
    };
  }, []);

  return (
    <CitationProvider sidenotes={homeSidenotes}>
      <div className={pageLayoutClasses.screenSpace}>
        <div className={`flex flex-col ${pageLayoutClasses.screenPadding}`}>
          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center min-h-0">
            {/* Centered Container - nav + divider + content + planet */}
            <div className={`${pageLayoutClasses.innerWrapper} my-auto`}>
              {/* Left Nav - Aligned to top of content */}
              <div className={pageLayoutClasses.navWidth}>
                <HomeLeftNav />
              </div>

              {/* Vertical Divider */}
              <div className={pageLayoutClasses.divider} />

              {/* Content */}
              <div
                className={`max-w-[29vw] ${pageLayoutClasses.contentContainer}`}
                style={{
                  ...pageContentStyle,
                  opacity: showContent ? 1 : 0,
                  filter: showContent ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 600ms ease-out, filter 600ms ease-out",
                }}
              >
                {/* Header section - Time + Headline */}
                <div className="flex flex-col gap-0 mb-0">
                  {/* Time Display */}
                  <p>it's {time} in Los Angeles</p>

                  {/* Headline with typing cursor */}
                  <h3>
                    &gt; Currently: engineering ML systems for battlefield
                    simulations @{" "}
                    <Link href="https://www.gallatin.ai/" marginBottom="-10px">
                      Gallatin
                    </Link>
                    <span
                      className="inline-block w-[2px] h-[0.9em] bg-white ml-1 align-middle"
                      style={{ opacity: showCursor ? 1 : 0 }}
                    />
                  </h3>
                </div>

                <CitationParagraph citations={[1, 2]}>
                  <p>
                    I design simulations for humans and machines to co-reason in
                    uncertain environments. My main focus is in adversarial
                    attack modeling
                    <Citation num={1} href="#" /> and explainability
                    <Citation num={2} href="#" />. I also study CS &
                    computational neuroscience at UCI.
                  </p>
                </CitationParagraph>

                <p>
                  I am an experimentalist at heart and think by building.
                  Recently:
                </p>
                <ul className="list-disc space-y-1 ml-5">
                  <li>
                    Designed a system for analyzing military intel at{" "}
                    <Link href="https://time.com/6691662/ai-ukraine-war-palantir/">
                      Palantir
                    </Link>
                  </li>
                  <li>
                    Built spacesuit interfaces with{" "}
                    <Link href="https://www.nasa.gov/suits-and-rovers/">
                      NASA
                    </Link>
                  </li>
                  <li>
                    Built 911 dispatch agents at{" "}
                    <Link href="/projects/dispatch-ai">Berkeley Skydeck</Link>
                  </li>
                  <li>
                    Won 15 national{" "}
                    <Link href="https://devpost.com/jaslavie">hackathons</Link>
                  </li>
                  <li>
                    Presented{" "}
                    <Link href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25">
                      research
                    </Link>{" "}
                    at the European Space Agency
                  </li>
                </ul>
                <p>
                  I'm interested in emergent intelligence, adaptive systems, and
                  evolution. You will usually find me sampling cortados at new
                  coffee shops.
                </p>
                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 font-serif">
                  <p>Elsewhere &nbsp; / &nbsp;</p>
                  <p className="flex flex-col sm:flex-row gap-4">
                    <Link href="mailto:jasminqw@uci.edu">Mail</Link>
                    <Link href="https://linkedin.com/in/jaslavie">
                      Linkedin
                    </Link>
                    <Link href="https://x.com/jaslavie">X</Link>
                    <Link href="https://github.com/jaslavie">Github</Link>
                  </p>
                </div>
              </div>

              {/* Right Side - ASCII Art - aligned with content row */}
              <div
                className="flex items-center justify-center"
                style={{
                  opacity: showPlanet ? 1 : 0,
                  filter: showPlanet ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 600ms ease-out, filter 600ms ease-out",
                }}
              >
                <Planet fontSize={14} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </CitationProvider>
  );
}
