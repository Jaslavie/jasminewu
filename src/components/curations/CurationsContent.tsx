"use client";

import ChaosLink from "@/components/ui/Link";
import { useEffect, useState } from "react";
import { curationsData, CurationItem } from "../../data/curationsData";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import {
  pageContentStyle,
  pageLayoutClasses,
} from "@/components/home/pageStyles";
import { Citation } from "../ui/Tooltip";

//* ========== Curation Column Interface ==========
interface CurationColumnProps {
  title: string;
  items: CurationItem[];
  isVisible: boolean;
}

function CurationColumn({ title, items, isVisible }: CurationColumnProps) {
  return (
    <div
      className="curations-column w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : "blur(4px)",
        transition: "opacity 600ms ease-out, filter 600ms ease-out",
      }}
    >
      <h2 className="text-white font-serif italic text-[22px] mb-8">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
            style={{ color: "#B7B7B7" }}
          >
            <ChaosLink href={item.link}>{item.title.toLowerCase()}</ChaosLink>
          </div>
        ))}
      </div>
    </div>
  );
}

//* ========== Main Content ==========
export default function CurationsContent() {
  const [showDescription, setShowDescription] = useState(false);
  const [showColumns, setShowColumns] = useState<boolean[]>([]);
  const [showNames, setShowNames] = useState(false);

  // Get all categories from the data
  const categories = Object.keys(
    curationsData,
  ) as (keyof typeof curationsData)[];

  useEffect(() => {
    // Initialize show states for columns
    setShowColumns(new Array(categories.length).fill(false));

    // Start animations with faster delays
    const timer1 = setTimeout(() => setShowDescription(true), 100);

    // Stagger column reveals with faster timing
    const columnTimers = categories.map((_, index) =>
      setTimeout(
        () => {
          setShowColumns((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        },
        250 + index * 75,
      ),
    );

    // Names fade in after the last column
    const namesTimer = setTimeout(
      () => setShowNames(true),
      250 + categories.length * 75 + 200,
    );

    return () => {
      clearTimeout(timer1);
      columnTimers.forEach(clearTimeout);
      clearTimeout(namesTimer);
    };
  }, [categories.length]);

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <div
        className={`flex-1 flex flex-col ${pageLayoutClasses.screenPadding}`}
      >
        {/* Main Content Area */}
        <div className="flex-1 flex items-start lg:items-center justify-center min-h-0 overflow-hidden">
          {/* Centered Container - nav + divider + content */}
          <div className={`${pageLayoutClasses.innerWrapper}`}>
            {/* Left Nav */}
            <div className={pageLayoutClasses.navWidth}>
              <HomeLeftNav />
            </div>

            {/* Vertical Divider */}
            <div className={pageLayoutClasses.divider} />

            {/* Main Content */}
            <div
              className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12 overflow-hidden h-full"
              style={pageContentStyle}
            >
              {/* Description */}
              <div
                className="curations-description w-full lg:w-[18vw] flex flex-col gap-3 flex-shrink-0"
                style={{
                  opacity: showDescription ? 1 : 0,
                  filter: showDescription ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 600ms ease-out, filter 600ms ease-out",
                }}
              >
                <p>
                  I like to think of things like a scrapbook: nodes of artifacts
                  to be observed, collected, then organized into a network.
                </p>
                <p>
                  I like things that are slightly out of our attention, stripped
                  to its essence, and mechanically raw.
                </p>
                <p>
                  Recently have been obsessed with sci-fi terminals and other
                  analog/primitive systems
                  <a
                    href="https://www.pinterest.com/Jaslavie/curations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="citation"
                  >
                    [1]
                  </a>
                  .
                </p>
                <p>
                  This is a [growing] collection of artifacts that resonate with
                  me.
                </p>
              </div>

              {/* Right side: curations + names stacked vertically */}
              <div className="flex-1 flex flex-col gap-8 min-w-0 overflow-y-auto">
                {/* Curations columns */}
                <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:gap-auto w-full">
                  {categories.map((category, index) => (
                    <CurationColumn
                      key={category}
                      title={category}
                      items={curationsData[category]}
                      isVisible={showColumns[index] || false}
                    />
                  ))}
                </div>

                <div
                  className="border-t border-[var(--color-card-border)] w-full"
                  style={{
                    opacity: showNames ? 1 : 0,
                    filter: showNames ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 800ms ease-out, filter 600ms ease-out",
                  }}
                />

                {/* Names Section */}
                <div
                  className="w-full grid grid-cols-3 gap-x-4 [&_a]:text-inherit [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-700 [&_a:hover]:text-white/75"
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "22px",
                    fontWeight: "100",
                    letterSpacing: "-1px",
                    lineHeight: 1.45,
                    color: "rgba(255, 255, 255, 0.20)",
                    opacity: showNames ? 1 : 0,
                    filter: showNames ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                >
                  <div className="flex flex-col">
                    <a
                      href="https://www.americanscientist.org/article/random-paths-to-frequency-hopping"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hedy lamarr
                    </a>
                    <a
                      href="https://www.truemichaeljackson.com/art/on-production-and-work/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      michael jackson
                    </a>
                    <a
                      href="https://www.nationalww2museum.org/war/articles/private-first-class-desmond-thomas-doss-medal-of-honor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      desmond doss
                    </a>
                    <a
                      href="https://www3.nhk.or.jp/nhkworld/en/shows/10yearshayaomiyazaki/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hayao miyazaki{" "}
                    </a>
                    {/* <a href="https://en.wikipedia.org/wiki/Alexander_Hamilton" target="_blank" rel="noopener noreferrer">alexander hamilton</a> */}
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://thefutureofsocial.co/mrbeast"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jimmy donaldson
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      style={{ pointerEvents: "none" }}
                      rel="noopener noreferrer"
                    >
                      alexander hamilton
                    </a>
                    {/* <a href="https://en.wikipedia.org/wiki/Jane_Austen" target="_blank" rel="noopener noreferrer">jane austen</a> */}
                    <a
                      href="#"
                      target="_blank"
                      style={{ pointerEvents: "none" }}
                      rel="noopener noreferrer"
                    >
                      alan turing
                    </a>{" "}
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://www.jneurosci.org/content/27/52/14365"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demis hassabis
                    </a>
                    <a
                      href="https://www.nobelprize.org/stories/women-who-changed-science/barbara-mcclintock/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      barbara mcclintock
                    </a>
                    <a
                      href="https://www.motionpictures.org/2025/10/how-k-pop-demon-hunters-songwriter-ejae-turned-rejection-into-her-golden-success/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ejae
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
