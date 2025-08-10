"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorStyle, setCursorStyle] = useState("retro");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over text elements
      if (
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "P" ||
        target.tagName === "LI"
      ) {
        setCursorStyle("text");
      } else {
        setCursorStyle("retro");
      }
    };

    const handleMouseOut = () => {
      setCursorStyle("retro");
    };

    // Hide default cursor
    document.body.style.cursor = "none";

    // Add event listeners
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-all duration-100"
      style={{
        left: position.x,
        top: position.y,
        // transform: "translate(-50%, -50%)",
      }}
    >
      {/* normal cursor */}
      {cursorStyle === "retro" ? (
        <div className="w-6 h-6">
          <img
            src="/cursorRetro.svg"
            alt="cursor"
            className="w-[25px] h-[25px]"
          />
        </div>
      ) : (
        // text cursor
        <div className="w-0.5 h-5 bg-white shadow-lg" />
      )}
    </div>
  );
}
