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
    { title: "principles", link: "/writing/principles" },
    {
      title: "how to make outsized bets",
      link: "https://substack.com/home/post/p-156802970",
    },
    {
      title: "curation and taste",
      link: "https://www.notion.so/thought-engine-17574d39a483809680f8e416bab5d4dd",
    },
    {
      title: "contrary: orca security memo",
      link: "https://research.contrary.com/company/orca-security",
    },
    {
      title: "contrary: saildrone memo",
      link: "https://research.contrary.com/company/saildrone",
    },
    {
      title: "contrary: overland ai memo",
      link: "https://research.contrary.com/company/overland-ai",
    },
    // { title: "paradigm shifts", link: "#" },
  ];

  return (
    <div className="pt-[14vh] px-[4vw] max-w-full md:max-w-4xl">
      {/* Writing List */}
      <div
        className="writing-list space-y-3"
        style={{
          opacity: showWritingList ? 1 : 0,
          visibility: showWritingList ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {writings.map((writing, index) => (
          <WritingLink key={index} href={writing.link}>
            {writing.title}
          </WritingLink>
        ))}
      </div>
    </div>
  );
}