"use client";

import { useEffect, useRef, useState } from "react";

interface UseFadeInOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  delay?: number;
}

export const useFadeInOnScroll = (options: UseFadeInOnScrollOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    duration = 600,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
            setIsAnimating(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay, isVisible]);

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    filter: isVisible ? "blur(0px)" : "blur(8px)",
    transition: isAnimating
      ? `opacity ${duration}ms ease-out, filter ${duration}ms ease-out`
      : "none",
  };

  return { elementRef, fadeInStyle, isVisible };
};
