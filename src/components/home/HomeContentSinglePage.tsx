"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
import HomeLeftNav from "./HomeLeftNav";
import { Citation } from "@/components/ui/Tooltip";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "./pageStyles";
import NavHint from "@/components/ui/NavHint";

const NAME_LEAVE_DELAY_MS = 1500;
const mutedTextClass = "text-[var(--color-text-muted)]";
const tabHoverClass =
  "transition-colors duration-300 hover:text-[rgba(255,255,255,0.85)]";

function NameHoverSwap() {
  const [showAlt, setShowAlt] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setShowAlt(true);
  };

  const handleLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setShowAlt(false);
      leaveTimerRef.current = null;
    }, NAME_LEAVE_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  return (
    <span
      className="inline-grid cursor-default [grid-template-areas:'stack']"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        className={`[grid-area:stack] transition-[opacity,filter] duration-[1000ms] ease-in-out ${
          showAlt ? "opacity-0 blur-[2px]" : "opacity-100 blur-0"
        }`}
        aria-hidden={showAlt}
      >
        Jasmine.
      </span>
      <span
        className={`[grid-area:stack] ${mutedTextClass} transition-[opacity,filter] duration-[800ms] ease-in-out ${
          showAlt ? "opacity-100 blur-0" : "opacity-0 blur-[2px]"
        }`}
        aria-hidden={!showAlt}
      >
        吴其圆 (harmony)
      </span>
    </span>
  );
}

function RecentSectionTabs({
  showPast,
  onSelect,
}: {
  showPast: boolean;
  onSelect: (past: boolean) => void;
}) {
  const tabOptionClass = (active: boolean) =>
    `cursor-pointer border-0 bg-transparent p-0 font-inherit ${tabHoverClass} ${
      active
        ? "text-text-body underline underline-offset-4 decoration-1 decoration-[var(--color-text-muted)]"
        : `${mutedTextClass} no-underline`
    }`;

  return (
    <p className="flex flex-wrap items-baseline gap-x-1">
      <button
        type="button"
        aria-pressed={!showPast}
        className={tabOptionClass(!showPast)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(false);
        }}
      >
        Recently
      </button>
      <span className={`${mutedTextClass} ${tabHoverClass}`}>or</span>
      <button
        type="button"
        aria-pressed={showPast}
        className={tabOptionClass(showPast)}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(true);
        }}
      >
        in the distant past
      </button>
    </p>
  );
}

export default function HomeContentSinglePage() {
  const [time, setTime] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);
  const [showPast, setShowPast] = useState(false);

  // Live time in Los Angeles
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
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

  // Hidden paragraph navigation via arrow keys
  const contentRef = useRef<HTMLDivElement>(null);
  const [focusedParagraph, setFocusedParagraph] = useState<number | null>(null);

  const getParagraphs = useCallback(() => {
    if (!contentRef.current) return [];
    return Array.from(
      contentRef.current.querySelectorAll<HTMLElement>(
        ":scope > p, :scope > h3, :scope > ul, :scope > div.flex",
      ),
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const paragraphs = getParagraphs();
      if (paragraphs.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedParagraph((prev) =>
          prev === null ? 0 : (prev + 1) % paragraphs.length,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedParagraph((prev) =>
          prev === null
            ? paragraphs.length - 1
            : (prev - 1 + paragraphs.length) % paragraphs.length,
        );
      } else if (e.key === "Escape") {
        setFocusedParagraph(null);
      }
    };

    const handleClick = () => {
      setFocusedParagraph(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
    };
  }, [getParagraphs]);

  useEffect(() => {
    const paragraphs = getParagraphs();
    paragraphs.forEach((el, i) => {
      const allChildren = el.querySelectorAll<HTMLElement>("*");
      if (focusedParagraph === null) {
        el.style.opacity = "";
        el.style.filter = "";
        el.style.transition = "opacity 0.3s ease, filter 0.3s ease";
        allChildren.forEach((child) => {
          child.style.opacity = "";
        });
      } else if (i === focusedParagraph) {
        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
        el.style.transition = "opacity 0.3s ease, filter 0.3s ease";
        allChildren.forEach((child) => {
          child.style.opacity = "";
        });
      } else {
        el.style.opacity = "0.15";
        el.style.filter = "blur(1.5px)";
        el.style.transition = "opacity 0.3s ease, filter 0.3s ease";
        allChildren.forEach((child) => {
          child.style.opacity = "0.15";
        });
      }
    });
  }, [focusedParagraph, getParagraphs]);

  const isObserving = focusedParagraph !== null;

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <NavHint isObserving={isObserving} />

      <div className={`flex flex-col ${pageLayoutClasses.screenPadding}`}>
        {/* Main Content Area */}
        <div className="flex-1 flex items-start lg:items-center justify-center min-h-0 overflow-hidden">
          {/* Centered Container - nav + divider + content + planet */}
          <div className={`${pageLayoutClasses.innerWrapper}`}>
            {/* Left Nav - Aligned to top of content */}
            <div className={pageLayoutClasses.navWidth}>
              <HomeLeftNav />
            </div>

            {/* Vertical Divider */}
            <div className={pageLayoutClasses.divider} />

            {/* Content */}
            <div
              ref={contentRef}
              className={`w-full lg:max-w-[29vw] ${pageLayoutClasses.contentContainer}`}
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
                <p className={mutedTextClass}>it&apos;s {time} in NYC</p>

                {/* Headline with typing cursor */}
                <h3>
                  &gt; Hi, I&apos;m <NameHoverSwap />
                  {/* <span
                    className="inline-block w-[2px] h-[0.9em] bg-white ml-1 align-middle"
                    style={{ opacity: showCursor ? 1 : 0 }}
                  /> */}
                </h3>
              </div>

              <p>
                I work on research & product for humans & agents to act in
                partially-observable worlds, particularly in adversarial domains
                <Citation
                  number={1}
                  content={
                    <>
                      I believe the hardest problems are solved in the most high
                      pressure environments. I'm a strong believer in the ethos
                      of wartime resolve. I'm deeply drawn to WW2 — which
                      revealed to us the impossible magnitude of human
                      potential. See{" "}
                      <a
                        href="https://www.npr.org/2016/11/04/500548745/the-real-hacksaw-ridge-soldier-saved-75-souls-without-ever-carrying-a-gun"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [1]
                      </a>
                      <a
                        href="https://www.iwm.org.uk/history/second-world-war/intelligence/how-alan-turing-cracked-the-enigma-code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [2]
                      </a>{" "}
                      <a
                        href="https://www.nationalww2museum.org/war/articles/making-the-atomic-bomb-trinity-test"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [3]
                      </a>
                    </>
                  }
                />
                . Currently I'm{" "}
                <Link href="https://robotics.eng.uci.edu/">researching</Link>{" "}
                VLA models for dexterous robotic manipulation and studying CS & neuroscience at
                UCI. I am in NYC this summer working on applied cryptography at <Link href="https://hoth.com/">Hoth</Link>.
              </p>

              <RecentSectionTabs showPast={showPast} onSelect={setShowPast} />
              {showPast ? (
                <p>
                  I attended a {" "}
                  <Link href="https://devpost.com/jaslavie">hackathon</Link>{" "}
                  every weekend of freshman year as my only source of income and
                  wrote about deep tech at{" "}
                  <Link href="https://research.contrary.com/">Contrary</Link>. I
                  was a devout Minecraft kid and spent my childhood building
                  neighborhoods and exploiting bed wars games.
                </p>
              ) : (
                <ul className="list-disc space-y-1 ml-5">
                  <li>
                    Spent 6 months deploying models to optimize battlefield
                    logistics at{" "}
                    <Link href="https://www.gallatin.ai/">Gallatin</Link>
                  </li>
                  <li>
                    Created a framework for analyzing military intel at{" "}
                    <Link href="https://time.com/6691662/ai-ukraine-war-palantir/">
                      Palantir
                    </Link>
                  </li>
                  <li>
                    Presented{" "}
                    <Link href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25">
                      research
                    </Link>{" "}
                    on lunar navigation tooling at the European Space Agency
                  </li>
                  <li>
                    Programmed spacesuit interfaces with{" "}
                    <Link href="https://www.nasa.gov/suits-and-rovers/">
                      NASA JSC
                    </Link>
                  </li>
                </ul>
              )}
              <p>
                You'll find me sampling cortados and{" "}
                <Link href="https://www.notion.so/bookshelf-31274d39a48380c1a3edf6d3eeab9f50?showMoveTo=true&saveParent=true">
                  rabbit-holing
                </Link>{" "}
                down life's infinite puzzles.
              </p>
              {/* Social Links */}
              <div className="flex flex-row items-center gap-2 font-serif">
                <p>Elsewhere &nbsp; / &nbsp;</p>
                <p className="flex flex-row gap-4">
                  <Link href="mailto:jasminqw@uci.edu">Mail</Link>
                  <Link href="https://linkedin.com/in/jaslavie">Linkedin</Link>
                  <Link href="https://x.com/jaslavie">X</Link>
                  <Link href="https://github.com/jaslavie">Github</Link>
                  {/* <Link href="https://drive.google.com/file/d/1GwnN269vEkCpKu3ZGxNPWhVRkGVzbMxZ/view?usp=sharing">
                    Resume
                    </Link> */}
                </p>
              </div>
            </div>

            {/* Right Side - ASCII Art - aligned with content row, hidden on mobile */}
            <div
              className="hidden lg:flex items-center justify-center"
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
  );
}
