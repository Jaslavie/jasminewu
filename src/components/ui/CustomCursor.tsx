"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [shown, setShown] = useState(false);
  const [mode, setMode] = useState<"retro" | "text">("retro");
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = typeof window !== "undefined" && matchMedia("(pointer: fine)").matches;
    const reduced = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const prev = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";
    return () => {
      document.documentElement.style.cursor = prev || "auto";
    };
  }, []);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    const el = ref.current;
    let seeded = false;

    const move = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!seeded) {
        setShown(true);
        seeded = true;
      }
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const vis = () => {
      if (document.visibilityState !== "visible") seeded = false;
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("visibilitychange", vis);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", vis);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const next: "retro" | "text" = t.closest("p,li,h1,h2,h3,h4,h5,h6") ? "text" : "retro";
      if (next !== mode) setMode(next);
    };
    window.addEventListener("pointerover", over, { passive: true });
    return () => window.removeEventListener("pointerover", over);
  }, [enabled, mode]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-[2147483647]"
      style={{
        visibility: shown ? "visible" : "hidden",
        transform: "translate3d(-100vw,-100vh,0)",
        willChange: "transform",
        contain: "layout style paint",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative">
        <img
          src="/cursorRetro.svg"
          alt=""
          className={mode === "retro" ? "block w-[25px] h-[25px]" : "hidden"}
          style={{ mixBlendMode: "difference" }}
        />
        <div
          className={mode === "text" ? "block" : "hidden"}
          style={{
            width: 2,
            height: 20,
            background: "white",
            boxShadow: "0 0 8px rgba(0,0,0,0.35)",
            mixBlendMode: "difference",
          }}
        />
      </div>
    </div>
  );
}
