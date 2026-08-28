"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import BookCover from "./BookCover";
import { books, type Book } from "@/data/libraryData";
import {
  pageContentStyle,
  pageLayoutClasses,
} from "@/components/home/pageStyles";

export default function LibraryContent() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);
  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleBookClick = (book: Book) => {
    if (!book.isActive) return;
    router.push(`/library/${book.id}`);
  };

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

            {/* Main Library Content Area */}
            <div
              style={pageContentStyle}
              className={`${pageLayoutClasses.mainContent} w-full self-stretch flex flex-col h-full relative`}
            >
              <div
                className="flex-1 w-full relative flex flex-col justify-between overflow-hidden"
                style={{
                  opacity: showContent ? 1 : 0,
                  filter: showContent ? "blur(0px)" : "blur(4px)",
                  transition: "opacity 600ms ease-out, filter 600ms ease-out",
                }}
              >
                {/* Floating Books Field - Desktop / Tablet View */}
                <div className="hidden md:block relative w-full flex-1 min-h-[460px] lg:min-h-0 overflow-visible">
                  {books.map((book) => {
                    const isMock = !!book.isActive;
                    const isHovered = hoveredBookId === book.id;
                    const isOtherHovered = hoveredBookId !== null && !isHovered;
                    const { x, y, rotation, scale = 1, floatDelay, floatDuration, floatVariant } = book.layout;

                    // Base opacity: 1.0 for active book, 0.45 for unlinked placeholder books
                    const baseOpacity = isMock ? 1 : 0.45;
                    const displayOpacity = isOtherHovered ? 0.12 : baseOpacity;
                    const displayFilter = isOtherHovered ? "blur(1.5px)" : "blur(0px)";

                    return (
                      <div
                        key={book.id}
                        className={`absolute ${isMock ? "cursor-pointer" : "cursor-default pointer-events-none"}`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          zIndex: isHovered ? 30 : 10,
                          opacity: displayOpacity,
                          filter: displayFilter,
                          transform: "translate(-50%, -50%)",
                          transition:
                            "opacity 300ms ease, filter 300ms ease, z-index 300ms ease",
                        }}
                        onMouseEnter={() => {
                          if (isMock) setHoveredBookId(book.id);
                        }}
                        onMouseLeave={() => {
                          if (isMock) setHoveredBookId(null);
                        }}
                        onClick={() => handleBookClick(book)}
                      >
                        {/* Floating translation container: handles drift only */}
                        <div
                          className={`floating-book float-var-${floatVariant}`}
                          style={{
                            animationDelay: `${floatDelay}s`,
                            animationDuration: `${floatDuration}s`,
                            animationPlayState: isHovered ? "paused" : "running",
                          }}
                        >
                          {/* Static rotation wrapper: no scale changes on hover to preserve size */}
                          <div
                            style={{
                              transform: `rotate(${rotation}deg) scale(${scale})`,
                              transformOrigin: "center center",
                            }}
                          >
                            <BookCover
                              book={book}
                              isSelected={isHovered}
                              interactive={isMock}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile List View - exact same UX & UI as Writing page */}
                <div className="md:hidden flex-1 overflow-y-auto overscroll-none py-2 scrollbar-none">
                  <div className="flex w-full flex-col gap-2">
                    {books.map((book) => {
                      const isMock = !!book.isActive;
                      const isHovered = hoveredBookId === book.id;
                      const isOtherHovered = hoveredBookId !== null && !isHovered;

                      const baseOpacity = isMock ? 1 : 0.45;
                      const displayOpacity = isOtherHovered ? (isMock ? 0.6 : 0.25) : baseOpacity;

                      return (
                        <button
                          key={book.id}
                          type="button"
                          className={`block w-full px-3 py-1 text-left outline-none transition-all duration-200 focus:outline-none ${
                            isMock ? "cursor-pointer" : "cursor-default pointer-events-none"
                          }`}
                          style={{
                            border:
                              isHovered && isMock
                                ? "1px solid rgba(255, 255, 255, 0.6)"
                                : "1px solid transparent",
                            opacity: displayOpacity,
                          }}
                          onMouseEnter={() => {
                            if (isMock) setHoveredBookId(book.id);
                          }}
                          onMouseLeave={() => {
                            if (isMock) setHoveredBookId(null);
                          }}
                          onClick={() => handleBookClick(book)}
                        >
                          <div
                            className="flex flex-col gap-[1px]"
                            style={{ fontFamily: "'EB Garamond', serif" }}
                          >
                            <span className="text-[16px] text-white">
                              {book.title}
                            </span>
                            <span
                              className="text-sm leading-tight"
                              style={{
                                color:
                                  isHovered && isMock
                                    ? "var(--color-text-body)"
                                    : "var(--color-text-subheading)",
                              }}
                            >
                              {book.subtitle}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Subtitle */}
                <div className="shrink-0 pt-2 pb-1 text-center select-none">
                  <p
                    className="text-[12px] leading-[1.45] text-[var(--color-text-subheading)]"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                  >
                    inspired by{" "}
                    <a
                      href="https://www.ando.so/library"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-white transition-colors"
                    >
                      https://www.ando.so/library
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Floating keyframes operating with limited drift */}
      <style jsx global>{`
        @keyframes floatAnim1 {
          0% {
            transform: translate3d(0px, 0px, 0);
          }
          50% {
            transform: translate3d(3px, -5px, 0);
          }
          100% {
            transform: translate3d(-2px, 4px, 0);
          }
        }

        @keyframes floatAnim2 {
          0% {
            transform: translate3d(0px, 0px, 0);
          }
          50% {
            transform: translate3d(-4px, 5px, 0);
          }
          100% {
            transform: translate3d(2px, -4px, 0);
          }
        }

        @keyframes floatAnim3 {
          0% {
            transform: translate3d(0px, 0px, 0);
          }
          50% {
            transform: translate3d(-2px, -6px, 0);
          }
          100% {
            transform: translate3d(3px, 3px, 0);
          }
        }

        @keyframes floatAnim4 {
          0% {
            transform: translate3d(0px, 0px, 0);
          }
          50% {
            transform: translate3d(3px, 5px, 0);
          }
          100% {
            transform: translate3d(-3px, -4px, 0);
          }
        }

        .floating-book.float-var-1 {
          animation: floatAnim1 7.5s ease-in-out infinite alternate;
        }
        .floating-book.float-var-2 {
          animation: floatAnim2 8.2s ease-in-out infinite alternate;
        }
        .floating-book.float-var-3 {
          animation: floatAnim3 7.0s ease-in-out infinite alternate;
        }
        .floating-book.float-var-4 {
          animation: floatAnim4 8.6s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
