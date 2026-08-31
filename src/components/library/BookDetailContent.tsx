"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import SingleBookPage from "./SingleBookPage";
import NoteArticle from "@/components/notes/NoteArticle";
import NotePanelToolbar from "@/components/notes/NotePanelToolbar";
import { getLibraryBookContent } from "@/content/library";
import type { Book } from "@/data/libraryData";
import {
  pageContentStyle,
  pageLayoutClasses,
} from "@/components/home/pageStyles";

const SCROLL_EDGE_THRESHOLD_PX = 96;

interface BookDetailContentProps {
  book: Book;
}

export default function BookDetailContent({ book }: BookDetailContentProps) {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fadeEdges, setFadeEdges] = useState({ top: false, bottom: false });
  const panelRef = useRef<HTMLDivElement>(null);

  const BookNoteContent = getLibraryBookContent(book.id);

  const handleClose = () => {
    setShowContent(false);
    setTimeout(() => {
      router.push("/library");
    }, 200);
  };

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Escape key to close/return to library
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    panel.scrollTop = 0;

    const updateScrollEdges = () => {
      const { scrollTop, scrollHeight, clientHeight } = panel;
      const canScroll = scrollHeight > clientHeight + 1;
      const pastThreshold = scrollTop >= SCROLL_EDGE_THRESHOLD_PX;

      const next =
        !canScroll || !pastThreshold
          ? { top: false, bottom: false }
          : {
              top: true,
              bottom: scrollTop + clientHeight < scrollHeight - 1,
            };

      setFadeEdges((prev) =>
        prev.top === next.top && prev.bottom === next.bottom ? prev : next
      );
    };

    updateScrollEdges();

    panel.addEventListener("scroll", updateScrollEdges, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollEdges);
    resizeObserver.observe(panel);
    if (panel.firstElementChild instanceof HTMLElement) {
      resizeObserver.observe(panel.firstElementChild);
    }

    return () => {
      panel.removeEventListener("scroll", updateScrollEdges);
      resizeObserver.disconnect();
    };
  }, [book.id]);

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <div
        className={`flex-1 flex flex-col ${pageLayoutClasses.screenPadding}`}
      >
        {/* Main Content Area */}
        <div className="flex-1 flex items-start lg:items-center justify-center min-h-0 overflow-hidden">
          {/* Centered Container - nav + divider + content */}
          <div className={pageLayoutClasses.innerWrapper}>
            {/* Left Nav */}
            <div className={pageLayoutClasses.navWidth}>
              <HomeLeftNav />
            </div>

            {/* Vertical Divider */}
            <div className={pageLayoutClasses.divider} />

            {/* Content Area */}
            <div
              style={pageContentStyle}
              className={`${pageLayoutClasses.mainContent} w-full self-stretch flex h-full min-h-0 overflow-hidden`}
            >
              <div
                className="flex h-full min-h-0 w-full"
                style={{
                  opacity: showContent ? 1 : 0,
                  filter: showContent ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 500ms ease-out, filter 500ms ease-out",
                }}
              >
                <div
                  className={[
                    "flex h-full min-h-0 w-full flex-col overflow-hidden transition-[gap] duration-300 ease-out lg:flex-row lg:items-stretch",
                    isExpanded ? "gap-0 lg:justify-center" : "gap-8",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* Left Column (50% on desktop, hidden on mobile): Centered Book Page */}
                  <div
                    className={[
                      "hidden lg:flex shrink-0 overflow-hidden transition-[width,opacity,filter] duration-300 ease-out items-center justify-center",
                      isExpanded
                        ? "pointer-events-none lg:w-0 opacity-0 blur-[4px]"
                        : "opacity-100 blur-0 lg:w-1/2 h-full",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="w-[290px] shrink-0 flex items-center justify-center">
                      <SingleBookPage book={book} />
                    </div>
                  </div>

                  {/* Right Column (50%): Writing / Note preview panel with toolbar & scroll */}
                  <div
                    className={`relative flex min-h-0 flex-1 overflow-hidden transition-[width,max-width,margin] duration-300 ease-out ${
                      isExpanded ? "w-full" : "w-full lg:w-1/2 lg:max-h-full"
                    }`}
                  >
                    <div className="relative flex h-full min-h-0 w-full flex-col">
                      {/* Top Toolbar matching Writing Page */}
                      <div
                        key={`${book.id}-toolbar`}
                        className="note-content-fade-in pointer-events-none z-30 flex shrink-0 justify-start pb-5 pr-1 transition-[filter,transform] duration-300 ease-out lg:justify-end"
                      >
                        <div className="transition-opacity duration-200 opacity-100">
                          <div className="pointer-events-auto lg:hidden">
                            <button
                              type="button"
                              onClick={handleClose}
                              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                            >
                              ← back to library
                            </button>
                          </div>
                          <div className="hidden lg:block">
                            <NotePanelToolbar
                              isExpanded={isExpanded}
                              onToggleExpand={handleToggleExpand}
                              onClose={handleClose}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Scrollable Note Content */}
                      <div
                        ref={panelRef}
                        className={[
                          "note-scroll-panel relative min-h-0 flex-1 pr-1",
                          fadeEdges.top ? "note-fade-top-on" : "",
                          fadeEdges.bottom ? "note-fade-bottom-on" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <div
                          key={`${book.id}-selected`}
                          className={[
                            "note-content-fade-in relative",
                            isExpanded ? "lg:mx-auto lg:max-w-2xl" : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          <NoteArticle
                            title={book.noteTitle || book.title}
                            subtitle={book.subtitle}
                            readingTime={book.readingTime}
                          >
                            <BookNoteContent />
                          </NoteArticle>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
