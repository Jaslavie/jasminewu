"use client";

import { useEffect, useState } from "react";
import WritingLink from "./WritingLink";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "@/components/home/pageStyles";

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
            <div style={pageContentStyle}>
              {/* Writing List */}
              <div
                className="writing-list flex flex-col gap-3"
                style={{
                  opacity: showWritingList ? 1 : 0,
                  filter: showWritingList ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 600ms ease-out, filter 600ms ease-out",
                }}
              >
                {Object.entries(writingsByYear)
                  .sort(([a], [b]) => {
                    if (a === "ongoing") return -1;
                    if (b === "ongoing") return 1;
                    return parseInt(b) - parseInt(a);
                  })
                  .map(([year, yearWritings]) => (
                    <div key={year} className="flex flex-col gap-3">
                      {year !== "ongoing" && (
                        <h3 style={{ color: "var(--color-text-muted)" }}>{year}</h3>
                      )}
                      <div className="flex flex-col gap-2 ml-4">
                        {yearWritings.map((writing, index) => (
                          <div key={index} className="flex flex-col gap-1">
                            <WritingLink href={writing.link}>
                              {writing.title}
                            </WritingLink>
                            <p className="text-sm ml-5" style={{ color: "#9A9A9A" }}>
                              {formatDate(writing.publishDate)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
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
