"use client";

import React, { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [cursorStyle, setCursorStyle] = useState("retro");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
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
  }, []);

  const handleMouseOut = useCallback(() => {
    setCursorStyle("retro");
  }, []);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    // Add event listeners with passive flag for better performance
    document.addEventListener("mousemove", updateCursorPosition, {
      passive: true,
    });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.style.cursor = "auto";
    };
  }, [updateCursorPosition, handleMouseOver, handleMouseOut]);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        willChange: "transform",
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
