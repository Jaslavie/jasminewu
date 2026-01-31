"use client";

import ChaosLink from "@/components/ui/Link";
import { useEffect, useState } from "react";
import { curationsData, CurationItem } from "../../data/curationsData";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "@/components/home/pageStyles";

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

  // Get all categories from the data
  const categories = Object.keys(
    curationsData
  ) as (keyof typeof curationsData)[];

  useEffect(() => {
    // Initialize show states for columns
    setShowColumns(new Array(categories.length).fill(false));

    // Start animations with faster delays
    const timer1 = setTimeout(() => setShowDescription(true), 100);

    // Stagger column reveals with faster timing
    categories.forEach((_, index) => {
      const timer = setTimeout(
        () => {
          setShowColumns((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        },
        250 + index * 75
      );
    });

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
    };
  }, [categories.length]);

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <div className={`flex-1 flex flex-col ${pageLayoutClasses.screenPadding}`}>
        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          {/* Centered Container - nav + divider + content */}
          <div className={`${pageLayoutClasses.innerWrapper} my-auto`}>
            {/* Left Nav */}
            <div className={pageLayoutClasses.navWidth}>
              <HomeLeftNav />
            </div>

            {/* Vertical Divider */}
            <div className={pageLayoutClasses.divider} />

            {/* Main Content */}
            <div
              className="flex-1 flex flex-col md:flex-row gap-12 overflow-y-auto h-full"
              style={pageContentStyle}
            >
              {/* Description */}
              <div
                className="curations-description w-[18vw] flex flex-col gap-3 flex-shrink-0"
                style={{
                  opacity: showDescription ? 1 : 0,
                  filter: showDescription ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 600ms ease-out, filter 600ms ease-out",
                }}
              >
                <p>
                  I like to think of things like a scrapbook: nodes of artifacts to be
                  observed, collected, then organized into a network.
                </p>
                <p>
                  I like things that are slightly out of our attention, stripped to its
                  essence, and mechanically raw.
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
                  </a>.
                </p>
                <p>This is a [growing] collection of artifacts that resonate with me.</p>
              </div>

              {/* Four Column Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-auto flex-1 w-full">
                {categories.map((category, index) => (
                  <CurationColumn
                    key={category}
                    title={category}
                    items={curationsData[category]}
                    isVisible={showColumns[index] || false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
