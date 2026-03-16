"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import planetLinks from "@/data/planetLinks.json";

interface PlanetLink {
  title: string;
  url: string;
  description: string;
  image: string | null;
}

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
  // color = "rgba(255, 255, 255, 0.506)",
  color = "rgba(255, 255, 255, 1)",
  activeColor = "#rgba(255, 255, 255, 1)",
  opacity = 0.85,
  rippleRadius = 50,
  glitchDuration = 1000,
  letterSpacing = "0.02em",
  zIndex = 10,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredLink, setHoveredLink] = useState<PlanetLink | null>(null);
  const [cardPos, setCardPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const pickRandomLink = useCallback(() => {
    return planetLinks[Math.floor(Math.random() * planetLinks.length)] as PlanetLink;
  }, []);

  const handlePlanetEnter = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    const link = pickRandomLink();
    setHoveredLink(link);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCardPos({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  }, [pickRandomLink]);

  const handlePlanetLeave = useCallback(() => {
    hoverTimeout.current = setTimeout(() => setHoveredLink(null), 150);
  }, []);

  const handlePlanetClick = useCallback(() => {
    const link = hoveredLink || pickRandomLink();
    window.open(link.url, "_blank", "noopener,noreferrer");
  }, [hoveredLink, pickRandomLink]);

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

        const wrapper = document.createElement("span");
        wrapper.className = "char-wrapper";
        wrapper.style.display = "inline-block";
        wrapper.style.width = `${Math.max(charWidth, 8)}px`;
        wrapper.style.overflow = "visible";
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

    // Gray color matching observation text dimming
    const glitchColor = "rgba(255, 255, 255, 0.35)";

    function simpleGlitch(element: HTMLSpanElement): void {
      if ((element as any).isGlitching) return;
      (element as any).isGlitching = true;

      element.style.color = glitchColor;

      const glitchChars = "ψℏ∂∇∫∞λξφπεΩΣΔμδ";
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
          element.style.color = "";
          (element as any).isGlitching = false;
        }
      }, 120);
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

    wrappedChars.forEach((char) => {
      const handleMouseEnter = () => {
        simpleGlitch(char);

        const nearbyChars = findNearbyChars(char, rippleRadius);
        nearbyChars.forEach((nearChar, index) => {
          setTimeout(() => {
            simpleGlitch(nearChar);
          }, index * 100);
        });
      };

      char.addEventListener("mouseenter", handleMouseEnter);
      (char as any)._listener = handleMouseEnter;
    });

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
    color: "rgba(255, 255, 255, 1)",
    whiteSpace: "pre",
    fontSize: `${fontSize}px`,
    lineHeight: 1,
    position: "relative",
    fontWeight: "normal",
    opacity,
    letterSpacing,
    fontFamily: "EB Garamond",
    transition: "opacity 0.5s ease-in-out",
  };

  const hoverCard = hoveredLink && mounted ? createPortal(
    <div
      className="fixed z-[10000] pointer-events-none"
      style={{
        top: cardPos.top,
        left: cardPos.left,
        transform: "translate(-50%, -110%)",
      }}
    >
      <div
        style={{
          width: 180,
          maxWidth: 180,
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
          fontFamily: "'EB Garamond', serif",
          overflow: "hidden",
        }}
      >
        {hoveredLink.image && (
          <img
            src={hoveredLink.image}
            alt=""
            style={{
              width: "100%",
              height: 72,
              maxHeight: 72,
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
        <div style={{ padding: "8px 12px" }}>
          <div
            style={{
              color: "#fff",
              fontSize: 13,
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            {hoveredLink.title}
          </div>
          {hoveredLink.description && (
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 11,
                lineHeight: 1.4,
                marginTop: 4,
              }}
            >
              {hoveredLink.description}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        ref={containerRef}
        style={styles}
        className={className}
        onClick={handlePlanetClick}
        onMouseEnter={handlePlanetEnter}
        onMouseLeave={handlePlanetLeave}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") handlePlanetClick(); }}
      >
        {art}
      </div>
      {hoverCard}
    </>
  );
};

export default ASCIIArtAnimation;
