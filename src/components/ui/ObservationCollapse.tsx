"use client";

import { useEffect } from "react";

export default function ObservationCollapse() {
  useEffect(() => {
    let activeContainer: HTMLElement | null = null;

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      const hasSelection = selection && selection.toString().length > 0;

      if (hasSelection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        // Find the nearest block-level parent (p, div, li, h1-h6, section)
        let container = range.commonAncestorContainer as HTMLElement;
        if (container.nodeType === Node.TEXT_NODE) {
          container = container.parentElement as HTMLElement;
        }
        // Walk up to a meaningful block container
        while (
          container &&
          container !== document.body &&
          getComputedStyle(container).display === "inline"
        ) {
          container = container.parentElement as HTMLElement;
        }

        if (container && container !== document.body) {
          if (activeContainer && activeContainer !== container) {
            activeContainer.classList.remove("observation-active");
          }
          activeContainer = container;
          activeContainer.classList.add("observation-active");
        }
      } else {
        if (activeContainer) {
          activeContainer.classList.remove("observation-active");
          activeContainer = null;
        }
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
      if (activeContainer) {
        activeContainer.classList.remove("observation-active");
      }
    };
  }, []);

  return null;
}
