"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ListBox, ListNavHint, useListHover } from "@/components/ui/ListBox";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "@/components/home/pageStyles";
import NoteArticle from "@/components/notes/NoteArticle";
import NoteListItem from "@/components/notes/NoteListItem";
import NotePanelToolbar from "@/components/notes/NotePanelToolbar";
import { notes } from "@/data/notesData";
import { getNoteContent } from "@/content/notes";

const SCROLL_EDGE_THRESHOLD_PX = 96;

function NotePreviewPanel({
  selectedIndex,
  isExpanded,
  onToggleExpand,
  onClose,
  containerRef,
  panelRef,
}: {
  selectedIndex: number | null;
  isExpanded: boolean;
  onToggleExpand: (index: number) => void;
  onClose: () => void;
  containerRef: RefObject<HTMLDivElement>;
  panelRef: RefObject<HTMLDivElement>;
}) {
  const { focusedIndex, setFocusedIndex } = useListHover();
  const displayIndex =
    selectedIndex !== null ? selectedIndex : focusedIndex;
  const isPreview = selectedIndex === null && focusedIndex !== null;
  const activeNote = displayIndex === null ? null : notes[displayIndex];
  const NoteContent = activeNote ? getNoteContent(activeNote.id) : null;
  const [fadeEdges, setFadeEdges] = useState({ top: false, bottom: false });

  const handleClose = () => {
    setFocusedIndex(null);
    onClose();
  };

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !activeNote) {
      setFadeEdges({ top: false, bottom: false });
      return;
    }

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
  }, [activeNote?.id, panelRef]);

  return (
    <div
      ref={containerRef}
      className={`relative flex min-h-0 flex-1 overflow-hidden transition-[width,max-width,margin,opacity,filter] duration-300 ease-out ${
        isExpanded ? "w-full" : "w-full lg:w-1/2 lg:max-h-full"
      }`}
      style={{
        opacity: activeNote && NoteContent ? 1 : 0,
        transition:
          "opacity 200ms ease-out, width 300ms ease-out, max-width 300ms ease-out, margin 300ms ease-out",
      }}
    >
      <div className="relative flex h-full min-h-0 w-full flex-col">
        {displayIndex !== null && activeNote && NoteContent ? (
          <div
            key={`${activeNote.id}-toolbar`}
            className="note-content-fade-in pointer-events-none z-30 flex shrink-0 justify-start pb-5 pr-1 transition-[filter,transform] duration-300 ease-out lg:justify-end"
          >
            <div
              className={[
                "transition-opacity duration-200",
                isPreview ? "opacity-[0.15]" : "opacity-100",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="pointer-events-auto lg:hidden">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                >
                  ← back to writing
                </button>
              </div>
              <div className="hidden lg:block">
                <NotePanelToolbar
                  isExpanded={isExpanded}
                  onToggleExpand={() => onToggleExpand(displayIndex)}
                  onClose={handleClose}
                />
              </div>
            </div>
          </div>
        ) : null}
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
          {activeNote && NoteContent ? (
            <div
              key={`${activeNote.id}-${isPreview ? "preview" : "selected"}`}
            className={[
              "note-content-fade-in relative",
              isExpanded ? "lg:mx-auto lg:max-w-2xl" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            >
              <NoteArticle
                title={activeNote.title}
                subtitle={activeNote.subtitle}
                readingTime={activeNote.readingTime}
                featuredImage={activeNote.featuredImage}
                muted={isPreview}
              >
                <NoteContent />
              </NoteArticle>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function NotesContent() {
  const [showList, setShowList] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const listColumnRef = useRef<HTMLDivElement>(null);
  const notePanelContainerRef = useRef<HTMLDivElement>(null);
  const notePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowList(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      setIsExpanded(false);
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (notePanelContainerRef.current?.contains(target)) return;
      if (listColumnRef.current?.contains(target)) return;
      setSelectedIndex(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [selectedIndex]);

  const itemsForNavigation = notes.map((note) => ({
    href: note.externalUrl ?? `/writing#${note.id}`,
  }));

  const handleSelect = (index: number) => {
    const note = notes[index];
    if (note?.externalUrl) {
      window.open(note.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }

    const shouldOpenExpanded =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1023px)").matches;

    setSelectedIndex((prev) => (prev === index ? null : index));
    if (shouldOpenExpanded) {
      setIsExpanded(true);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setIsExpanded(false);
  };

  const handleToggleExpand = (index: number) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
      setIsExpanded(true);
      return;
    }

    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <div className={`flex-1 flex flex-col ${pageLayoutClasses.screenPadding}`}>
        <div className="flex-1 flex items-start lg:items-center justify-center min-h-0 overflow-hidden">
          <div className={`${pageLayoutClasses.innerWrapper}`}>
            <div className={pageLayoutClasses.navWidth}>
              <HomeLeftNav />
            </div>

            <div className={pageLayoutClasses.divider} />

            <div style={pageContentStyle} className={pageLayoutClasses.mainContent}>
              <ListBox
                className="flex h-full w-full"
                items={itemsForNavigation}
                selectionMode
                selectedIndex={selectedIndex}
                onSelect={handleSelect}
                onNavigate={setSelectedIndex}
                onEscape={handleClose}
              >
                <ListNavHint alsoObserving={selectedIndex !== null} />
                <div
                  style={{
                    opacity: showList ? 1 : 0,
                    filter: showList ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                  className="flex h-full min-h-0 w-full"
                >
                  <div
                    className={[
                      "flex h-full min-h-0 w-full flex-col overflow-hidden transition-[gap] duration-300 ease-out lg:flex-row lg:items-stretch",
                      isExpanded ? "gap-0 lg:justify-center" : "gap-8",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div
                      ref={listColumnRef}
                      className={[
                        "w-full shrink-0 overflow-hidden transition-[width,max-height,opacity,filter] duration-300 ease-out",
                        isExpanded
                          ? "pointer-events-none max-h-0 opacity-0 blur-[4px] lg:w-0 lg:max-h-none"
                          : "max-h-[40vh] opacity-100 blur-0 lg:w-1/2 lg:max-h-none",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <div className="flex w-full flex-col gap-2">
                        {notes.map((note, index) => (
                          <NoteListItem
                            key={note.id}
                            title={note.title}
                            subtitle={note.subtitle}
                            index={index}
                            isSelected={selectedIndex === index}
                            onSelect={handleSelect}
                          />
                        ))}
                      </div>
                    </div>

                    <NotePreviewPanel
                      selectedIndex={selectedIndex}
                      isExpanded={isExpanded}
                      onToggleExpand={handleToggleExpand}
                      onClose={handleClose}
                      containerRef={notePanelContainerRef}
                      panelRef={notePanelRef}
                    />
                  </div>
                </div>
              </ListBox>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
