"use client";

import { useEffect, useState } from "react";
import ChaosLink from "@/components/ui/Link";
import {
  WritingContainer,
  WritingHeader,
  WritingContent,
  WritingSection,
} from "@/components/writing/WritingComponents";

export default function Rehearsal() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start animation with delay
    const timer = setTimeout(() => setShowContent(true), 200);

    // Cleanup timer
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const postData = {
    title: "the art of rehearsal",
    date: "Oct 30, 2025",
    readingTime: "-",
    featuredImage: {
      url: "/writing/HenryV_Painting.jpg",
      alt: "'Henry V', Act II, Scene 2, Discovering the Conspirators, Henry Fuseli",
    },
  };

  return (
    <WritingContainer>
      <div
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Header with integrated back navigation */}
        <WritingHeader
          title={postData.title}
          date={postData.date}
          readingTime={postData.readingTime}
          featuredImage={postData.featuredImage}
          backHref="/writing"
          backText="back to writing"
        />

        {/* Content */}
      </div>
    </WritingContainer>
  );
}
