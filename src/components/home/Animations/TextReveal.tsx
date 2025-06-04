"use client";

import { useEffect, useRef } from "react";

export default function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing content
    container.innerHTML = "";

    const text = "Jasmine designs interfaces for human-AI collaboration.";
    const words = text.split(" ");

    // Calculate total animation duration
    const totalChars = text.replace(/\s/g, "").length;
    const totalDuration = totalChars * 40 + 100; // 40ms per char + 1s animation duration

    words.forEach((word, wordIndex) => {
      const wordWrapper = document.createElement("span");
      wordWrapper.style.display = "inline-block";
      wordWrapper.style.whiteSpace = "nowrap";
      wordWrapper.style.marginRight = "0.2em";
      wordWrapper.style.fontSize = "26px";
      wordWrapper.style.fontWeight = "light";

      const characters = word.split("");
      const isSpecialWord =
        word === "human-AI" ||
        word === "interfaces" ||
        word === "for" ||
        word === "collaboration.";

      characters.forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char;

        if (isSpecialWord) {
          span.classList.add(
            "text-gradient",
            "font-serif",
            "italic",
            "text-[32px]",
            "font-light"
          );
        }

        const totalIndex =
          words.slice(0, wordIndex).join("").length + charIndex;
        span.style.opacity = "0";
        span.style.animation = "revealText 1s forwards";
        span.style.animationDelay = `${totalIndex * 40}ms`;
        wordWrapper.appendChild(span);
      });

      container.appendChild(wordWrapper);
    });

    // Emit custom event when TextReveal is complete
    setTimeout(() => {
      const event = new CustomEvent("textRevealComplete");
      window.dispatchEvent(event);
    }, totalDuration);
  }, []);

  return (
    <h1
      ref={containerRef}
      className="font-light"
    />
  );
}
