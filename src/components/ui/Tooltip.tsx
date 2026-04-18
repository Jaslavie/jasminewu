"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const openTooltip = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsVisible(true);
  };

  const closeTooltip = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      closeTimerRef.current = null;
    }, 120);
  };

  // Ensure we only render portal on client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (triggerRef.current) {
      setIsLightTheme(Boolean(triggerRef.current.closest(".theme-light")));
    }
  }, [mounted]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipWidth = 260; // matches w-[260px]
      
      // Calculate left position, centered above trigger
      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      
      // Keep tooltip within viewport bounds
      const padding = 8;
      if (left < padding) {
        left = padding;
      } else if (left + tooltipWidth > window.innerWidth - padding) {
        left = window.innerWidth - tooltipWidth - padding;
      }
      
      setPosition({
        top: rect.top - 8, // 8px gap above the trigger
        left: left,
      });
    }
  }, [isVisible]);

  const tooltipElement = isVisible && mounted ? (
    <div
      ref={tooltipRef}
      className={`fixed z-[10000] w-[260px] px-4 py-3 text-[15px] leading-[1.6] font-serif ${
        isLightTheme
          ? "theme-light bg-[#f8f7f4] border border-[rgba(0,0,0,0.18)] text-black"
          : "bg-[#0d0d0d] border border-[var(--color-card-border)] text-white"
      }`}
      style={{
        top: position.top,
        left: position.left,
        transform: "translateY(-100%)",
        boxShadow: isLightTheme
          ? "0 8px 30px rgba(0, 0, 0, 0.12)"
          : "0 4px 20px rgba(0, 0, 0, 0.5)",
      }}
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
    >
      {content}
    </div>
  ) : null;

  return (
    <span
      ref={triggerRef}
      className="inline-block"
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
    >
      {children}
      {mounted && tooltipElement && createPortal(tooltipElement, document.body)}
    </span>
  );
}

// Citation component that uses Tooltip
interface CitationProps {
  number: number;
  content: React.ReactNode;
}

export function Citation({ number, content }: CitationProps) {
  return (
    <Tooltip content={content}>
      <span className="citation cursor-pointer">[{number}]</span>
    </Tooltip>
  );
}
