"use client";

import { useEffect, useState } from "react";

interface NavHintProps {
  isObserving?: boolean;
  label?: { normal: string; observing: string };
}

export default function NavHint({
  isObserving = false,
  label = { normal: "to focus", observing: "to escape" },
}: NavHintProps) {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Escape") {
        setPressedKey(e.key);
      }
    };
    const onUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Escape") {
        setPressedKey(null);
      }
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);

  return (
    <div
      className="fixed top-4 left-4 z-50 hidden lg:flex items-center gap-1.5"
      style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: "13px",
        color: "rgba(255, 255, 255, 0.5)",
        letterSpacing: "0.04em",
      }}
    >
      <span>{isObserving ? label.observing : label.normal}</span>
      {isObserving ? (
        <span
          className="border px-2 py-0.5 text-[11px] transition-all duration-75"
          style={{
            borderColor: pressedKey === "Escape" ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
            color: pressedKey === "Escape" ? "#fff" : "rgba(255,255,255,0.7)",
            background: pressedKey === "Escape" ? "rgba(255,255,255,0.1)" : "transparent",
          }}
        >
          esc
        </span>
      ) : (
        <span className="flex gap-1">
          <span
            className="w-5 h-5 flex items-center justify-center text-[10px] border transition-all duration-75"
            style={{
              borderColor: pressedKey === "ArrowUp" ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
              color: pressedKey === "ArrowUp" ? "#fff" : "rgba(255,255,255,0.7)",
              background: pressedKey === "ArrowUp" ? "rgba(255,255,255,0.1)" : "transparent",
            }}
          >
            ↑
          </span>
          <span
            className="w-5 h-5 flex items-center justify-center text-[10px] border transition-all duration-75"
            style={{
              borderColor: pressedKey === "ArrowDown" ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)",
              color: pressedKey === "ArrowDown" ? "#fff" : "rgba(255,255,255,0.7)",
              background: pressedKey === "ArrowDown" ? "rgba(255,255,255,0.1)" : "transparent",
            }}
          >
            ↓
          </span>
        </span>
      )}
    </div>
  );
}
