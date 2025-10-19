"use client";

import { useEffect, useState } from "react";
import WritingLink from "./WritingLink";

export default function WritingContent() {
  const [showWritingList, setShowWritingList] = useState(false);

  useEffect(() => {
    // Start animation with faster delay
    const timer = setTimeout(() => setShowWritingList(true), 200);

    // Cleanup timer
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const writings = [
    {
      title: "thought engine",
      link: "https://www.notion.so/thought-engine-17574d39a483809680f8e416bab5d4dd",
      publishDate: "ongoing",
    },
    {
      title: "how to design living ecosystems",
      link: "/writing/living-ecosystems",
      publishDate: "2025-10-18",
    },
    {
      title: "principles",
      link: "/writing/principles",
      publishDate: "2025-02-18",
    },
    {
      title: "how to make outsized bets",
      link: "https://substack.com/home/post/p-156802970",
      publishDate: "2024-12-15",
    },
    {
      title: "contrary: orca security memo",
      link: "https://research.contrary.com/company/orca-security",
      publishDate: "2024-10-08",
    },
    {
      title: "contrary: saildrone memo",
      link: "https://research.contrary.com/company/saildrone",
      publishDate: "2024-09-12",
    },
    {
      title: "contrary: overland ai memo",
      link: "https://research.contrary.com/company/overland-ai",
      publishDate: "2024-08-25",
    },
    // { title: "paradigm shifts", link: "#" },
  ];

  // Sort writings by publish date (newest first), with "ongoing" at the top
  const sortedWritings = [...writings].sort((a, b) => {
    if (a.publishDate === "ongoing") return -1;
    if (b.publishDate === "ongoing") return 1;
    return (
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  });

  // Group writings by year
  const writingsByYear = sortedWritings.reduce(
    (acc, writing) => {
      let year;
      if (writing.publishDate === "ongoing") {
        year = "ongoing";
      } else {
        year = new Date(writing.publishDate).getFullYear();
      }
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(writing);
      return acc;
    },
    {} as Record<string | number, typeof writings>
  );

  // Format date for display
  const formatDate = (dateString: string) => {
    if (dateString === "ongoing") {
      return "ongoing";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="pt-[14vh] px-[4vw] max-w-full md:max-w-4xl">
      {/* Writing List */}
      <div
        className="writing-list space-y-8"
        style={{
          opacity: showWritingList ? 1 : 0,
          visibility: showWritingList ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {Object.entries(writingsByYear)
          .sort(([a], [b]) => {
            if (a === "ongoing") return -1;
            if (b === "ongoing") return 1;
            return parseInt(b) - parseInt(a);
          })
          .map(([year, yearWritings]) => (
            <div key={year} className="space-y-4">
              {year !== "ongoing" && (
                <h2
                  className="text-white font-semibold text-[24px] mb-6 pl-6"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  {year}
                </h2>
              )}
              <div className="space-y-3">
                {yearWritings.map((writing, index) => (
                  <div key={index} className="space-y-1">
                    <WritingLink href={writing.link}>
                      {writing.title}
                    </WritingLink>
                    <p
                      className="text-gray-400 text-sm pl-6"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {formatDate(writing.publishDate)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
