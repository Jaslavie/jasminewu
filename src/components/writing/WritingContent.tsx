"use client";

import { useEffect } from "react";
import WritingLink from "./WritingLink";

export default function WritingContent() {
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    // Dynamic import to avoid SSR issues
    import("scrollreveal").then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;

      const sr = ScrollReveal({
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        reset: false,
      });

      sr.reveal(".writing-header", {
        delay: 200,
      });

      sr.reveal(".writing-list", {
        delay: 400,
      });
    });
  }, []);

  const writings = [
    { title: "how to make outsized bets", link: "#" },
    { title: "curation and taste", link: "#" },
    { title: "contrary: orca security memo", link: "#" },
    { title: "principles", link: "#" },
    { title: "paradigm shifts", link: "#" },
  ];

  return (
    <div className="px-16 py-20 max-w-4xl">

      {/* Writing List */}
      <div className="writing-list space-y-4">
        {writings.map((writing, index) => (
          <WritingLink key={index} href={writing.link}>
            {writing.title}
          </WritingLink>
        ))}
      </div>
    </div>
  );
}
