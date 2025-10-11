// animaiton for ascii art
"use client";

import React, { useEffect, useRef } from "react";

interface CascadeRevealProps {
  children: React.ReactNode;
  direction?: "left-to-right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function CascadeReveal({
  children,
  direction = "left-to-right",
  delay = 0,
  duration = 1000,
  className = "",
}: CascadeRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    // Add CSS animation to document if it doesn't exist
    if (!document.querySelector("#cascade-reveal-styles")) {
      const style = document.createElement("style");
      style.id = "cascade-reveal-styles";
      style.textContent = `
          @keyframes revealText {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .cascade-reveal-container {
            transition: filter 0.3s ease, opacity 0.3s ease;
          }
          
          .cascade-reveal-container:hover {
            filter: blur(1px);
            opacity: 0.8;
          }
        `;
      document.head.appendChild(style);
    }

    // Clear existing content
    container.innerHTML = "";

    // Convert content to string if it's ASCII art
    let text = "";
    if (typeof children === "string") {
      text = children;
    } else if (
      React.isValidElement(children) &&
      typeof children.props.children === "string"
    ) {
      text = children.props.children;
    } else {
      // Fallback: try to get text content
      const tempDiv = document.createElement("div");
      if (typeof children === "string") {
        tempDiv.textContent = children;
      }
      text = tempDiv.textContent || "";
    }

    const lines = text.split("\n");

    // Create wrapped content
    const wrappedContent = lines.map((line, lineIndex) => {
      const lineWrapper = document.createElement("div");
      lineWrapper.style.display = "block";
      lineWrapper.style.whiteSpace = "pre";
      lineWrapper.style.fontFamily = "EB Garamond";
      lineWrapper.style.fontSize = "22px";

      const chars = line.split("");
      chars.forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";

        // Calculate delay based on position
        const columnIndex =
          direction === "left-to-right" ? charIndex : lineIndex;
        const animationDelay = `${delay + columnIndex * 20}ms`;

        span.style.animation = `revealText ${duration}ms forwards`;
        span.style.animationDelay = animationDelay;

        // Ensure the animation completes and doesn't interfere with hover effects
        span.style.animationFillMode = "both";

        // Add a data attribute to identify this as cascade reveal content
        span.setAttribute("data-cascade-reveal", "true");

        lineWrapper.appendChild(span);
      });

      return lineWrapper;
    });

    wrappedContent.forEach((line) => container.appendChild(line));

    // Mark animation as complete after all animations finish
    const totalDelay =
      delay +
      (direction === "left-to-right"
        ? Math.max(...lines.map((line) => line.length)) * 20
        : lines.length * 20) +
      duration;

    setTimeout(() => {
      container.setAttribute("data-cascade-complete", "true");
    }, totalDelay);
  }, [children, direction, delay, duration]);

  return (
    <div
      ref={containerRef}
      className={`cascade-reveal-container ${className}`}
    />
  );
}
