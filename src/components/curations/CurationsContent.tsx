"use client";

import ChaosLink from "@/components/ui/Link";
import { useEffect, useState } from "react";
import { curationsData, CurationItem } from "../../data/curationsData";

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
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <h2 className="text-white font-serif italic text-[22px] mb-8">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-[14px]"
            style={{ color: "rgba(255, 255, 255, 0.65)" }}
          >
            <ChaosLink href={item.link}>{item.title.toLowerCase()} →</ChaosLink>
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
    <div className="p-[6%] w-full flex flex-row justify-between">
      {/* Description */}
      <div
        className="curations-description w-[22vw] mr-12 space-y-4 flex-shrink-0"
        style={{
          opacity: showDescription ? 1 : 0,
          visibility: showDescription ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <p>
          I like to think of things like a scrapbook: nodes of artifacts to be
          observed, collected, then organized into a network.
        </p>
        <p>
          I enjoy curating experiences the most — be it places traveled, historical
          documents, or 1940s era photographs.
        </p>
        <p>
          I like things that are slightly out of our attention, stripped to its
          essence, and raw.
        </p>
        <p>This is a collection of artifacts that resonate with me.</p>
      </div>

      {/* Four Column Layout */}
      <div className="flex flex-row gap-12 flex-1">
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
  );
}
