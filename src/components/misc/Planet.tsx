"use client";

import React, { useEffect, useRef } from "react";

interface ASCIIArtAnimationProps {
  className?: string;
  fontSize?: number;
  color?: string;
  activeColor?: string;
  opacity?: number;
  rippleRadius?: number;
  glitchDuration?: number;
  letterSpacing?: string;
  zIndex?: number;
}

const ASCIIArtAnimation: React.FC<ASCIIArtAnimationProps> = ({
  className = "",
  fontSize = 18,
  color = "rgba(255, 255, 255, 0.506)",
  activeColor = "#fff",
  opacity = 0.85,
  rippleRadius = 50,
  glitchDuration = 1000,
  letterSpacing = "0.02em",
  zIndex = 10,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const art = `                                                                                       _.oo.
                                      _ .u [[/;:,.                     _.odMMM'
                                .o888uu[[[ / ;:  -.      _.@p^       MM.
                             oN8888uu[[[ /; -:: - .                 dp^
                           dNMMN8u[[[ [/; : - - .         .o@p
                        MMMN888uu[[/; : : - .    o@^
                        NNMN888uu[[[ / ~ .o@^
                         88888888uu[ [ [/o@^-. .
                       oI8888uu[ [ /o@P^:- - . .
                .@^    YUU[[/o@^; : :- - - . .
           OMP        ^/o@p: ; ; : - - - . .
      .dMM         o@   ^;:  : - - - . . .
   dMMM@^                    ^^^
 YMUP^
   ^^`;

  //*----- animation for the ripple effect -------
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Split the art into individual characters and wrap each in a span
    const wrappedArt = art
      .split("\n")
      .map((line) =>
        line
          .split("")
          .map((char) =>
            char === " "
              ? " "
              : `<span class="char" data-original="${char}">${char}</span>`
          )
          .join("")
      )
      .join("\n");

    container.innerHTML = wrappedArt;

    // Get all character spans and wrap them in fixed-width containers
    const chars = container.querySelectorAll(
      ".char"
    ) as NodeListOf<HTMLSpanElement>;

    // Create a canvas to measure character widths
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      context.font = `${fontSize}px "EB Garamond"`;

      chars.forEach((char) => {
        const originalChar = char.getAttribute("data-original") || "";

        // Measure the original character width
        const charWidth = context.measureText(originalChar).width;

        // Create a wrapper with fixed width
        const wrapper = document.createElement("span");
        wrapper.className = "char-wrapper";
        wrapper.style.display = "inline-block";
        wrapper.style.width = `${Math.max(charWidth, 8)}px`; // Minimum 8px width
        wrapper.style.overflow = "hidden";
        wrapper.style.textAlign = "center";
        wrapper.style.position = "relative";

        // Move the character into the wrapper
        if (char.parentNode) {
          char.parentNode.insertBefore(wrapper, char);
          wrapper.appendChild(char);
        }

        // Style the character span
        char.style.display = "inline-block";
        char.style.width = "100%";
        char.style.textAlign = "center";
      });
    }

    // Re-query to get the wrapped characters
    const wrappedChars = container.querySelectorAll(
      ".char"
    ) as NodeListOf<HTMLSpanElement>;

    function simpleGlitch(element: HTMLSpanElement): void {
      if ((element as any).isGlitching) return;
      (element as any).isGlitching = true;

      // Turn text white on hover
      element.style.color = "#ffffff";

      const glitchChars = "!@#$%^&*()_+:,.";
      const originalChar = element.getAttribute("data-original") || "";
      let iterations = 0;
      const maxIterations = 4;

      const interval = setInterval(() => {
        element.textContent = originalChar
          .split("")
          .map((char) =>
            char === " "
              ? char
              : glitchChars[Math.floor(Math.random() * glitchChars.length)]
          )
          .join("");
        iterations++;

        if (iterations >= maxIterations) {
          clearInterval(interval);
          element.textContent = originalChar;
          // Reset color after glitch
          element.style.color = "";
          (element as any).isGlitching = false;
        }
      }, 120); // speed of the glitch
    }

    function findNearbyChars(
      sourceChar: HTMLSpanElement,
      radius: number
    ): HTMLSpanElement[] {
      const sourceRect = sourceChar.getBoundingClientRect();
      const sourceCenter = {
        x: sourceRect.left + sourceRect.width / 2,
        y: sourceRect.top + sourceRect.height / 2,
      };

      return Array.from(wrappedChars).filter((char) => {
        if (char === sourceChar) return false;
        const rect = char.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        const distance = Math.sqrt(
          Math.pow(center.x - sourceCenter.x, 2) +
            Math.pow(center.y - sourceCenter.y, 2)
        );
        return distance <= radius;
      }) as HTMLSpanElement[];
    }

    // Add event listeners to each character
    wrappedChars.forEach((char) => {
      const handleMouseEnter = () => {
        // Glitch the hovered character
        simpleGlitch(char);

        // Glitch nearby characters with delay
        const nearbyChars = findNearbyChars(char, rippleRadius);
        nearbyChars.forEach((nearChar, index) => {
          setTimeout(() => {
            simpleGlitch(nearChar);
          }, index * 100);
        });
      };

      char.addEventListener("mouseenter", handleMouseEnter);

      // Store the listener for cleanup
      (char as any)._listener = handleMouseEnter;
    });

    // Cleanup function
    return () => {
      wrappedChars.forEach((char) => {
        if ((char as any)._listener) {
          char.removeEventListener("mouseenter", (char as any)._listener);
        }
      });
    };
  }, [rippleRadius, glitchDuration, fontSize]);

  //*----- styling for the hover effect -------
  const styles: React.CSSProperties = {
    color: "rgba(255, 255, 255, 0.506)",
    whiteSpace: "pre",
    fontSize: `${fontSize}px`,
    lineHeight: 1,
    cursor: "pointer",
    position: "relative",
    fontWeight: "normal",
    opacity,
    letterSpacing,
    fontFamily: "EB Garamond",
    transition: "opacity 0.5s ease-in-out",
  };

  return (
    <div ref={containerRef} style={styles} className={className}>
      {art}
    </div>
  );
};

export default ASCIIArtAnimation;
