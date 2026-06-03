"use client";

import { useEffect, useState } from "react";
import LivingEcosystemsBody from "@/content/notes/living-ecosystems";
import {
  WritingContainer,
  WritingHeader,
  WritingContent,
} from "@/components/writing/WritingComponents";
import { ROUTES } from "@/lib/routes";

export default function LivingEcosystems() {
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
    title: "how to design living ecosystems",
    date: "Oct 18, 2025",
    readingTime: "5",
    featuredImage: {
      url: "/writing/ecosystemThumbnail.png",
      alt: "how to design live experiences. hackathons and event design",
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
          backHref={ROUTES.writingOld}
          backText="back to writing"
        />

        {/* Content */}
        <WritingContent>
          <LivingEcosystemsBody />
        </WritingContent>
      </div>
    </WritingContainer>
  );
}
