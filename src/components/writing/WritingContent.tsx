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
    { title: "how to make outsized bets", link: "#" },
    { title: "curation and taste", link: "#" },
    { title: "contrary: orca security memo", link: "#" },
    { title: "principles", link: "#" },
    { title: "paradigm shifts", link: "#" },
  ];

  return (
    <div className="p-[8%] max-w-4xl">
      {/* Writing List */}
      <div
        className="writing-list space-y-2"
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
