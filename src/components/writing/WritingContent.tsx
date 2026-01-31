"use client";

import { useEffect, useState } from "react";
import { WritingListBox, WritingItemBox } from "./WritingListBox";
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
    // {
    //   title: "how to design living ecosystems",
    //   link: "/writing/living-ecosystems",
    //   publishDate: "2025-10-18",
    // },
    // {
    //   title: "principles",
    //   link: "/writing/principles",
    //   publishDate: "2025-02-18",
    // },
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

  // Prepare items for arrow key navigation
  const itemsForNavigation = sortedWritings.map((w) => ({ href: w.link }));

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
            <div style={pageContentStyle} className="h-full">
              {/* Writing List with box hover effect */}
              <WritingListBox
                className="writing-list flex flex-col h-full"
                items={itemsForNavigation}
              >
                <div
                  className="flex flex-col gap-3"
                  style={{
                  opacity: showWritingList ? 1 : 0,
                    filter: showWritingList ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                >
                  {sortedWritings.map((writing, index) => (
                    <WritingItemBox
                      key={index}
                      href={writing.link}
                      title={writing.title}
                      date={formatDate(writing.publishDate)}
                      index={index}
                    />
                  ))}
                </div>
              </WritingListBox>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
