"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ListBox, ListNavHint, useListHover } from "@/components/ui/ListBox";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "@/components/home/pageStyles";
import NoteArticle from "@/components/notes/NoteArticle";
import NoteListItem from "@/components/notes/NoteListItem";
import { notes } from "@/data/notesData";
import { getNoteContent } from "@/content/notes";

function NotePreviewPanel({
  selectedIndex,
  onClose,
  panelRef,
}: {
  selectedIndex: number | null;
  onClose: () => void;
  panelRef: RefObject<HTMLDivElement>;
}) {
  const { focusedIndex } = useListHover();
  const displayIndex =
    selectedIndex !== null ? selectedIndex : focusedIndex;
  const isPreview = selectedIndex === null && focusedIndex !== null;
  const isSelected = selectedIndex !== null && displayIndex === selectedIndex;
  const activeNote = displayIndex === null ? null : notes[displayIndex];
  const NoteContent = activeNote ? getNoteContent(activeNote.id) : null;

  return (
    <div
      ref={panelRef}
      className="w-full lg:w-1/2 min-h-[260px] lg:min-h-0 lg:max-h-full overflow-y-auto overscroll-none pr-1"
      style={{
        opacity: activeNote && NoteContent ? 1 : 0,
        transition: "opacity 200ms ease-out",
      }}
    >
      {activeNote && NoteContent ? (
        <div
          key={`${activeNote.id}-${isPreview ? "preview" : "selected"}`}
          className="relative"
          style={{ animation: "noteFadeIn 280ms ease-out" }}
        >
          {isSelected ? (
            <button
              type="button"
              aria-label="Close note"
              onClick={onClose}
              className="absolute top-0 right-0 flex h-6 w-6 cursor-pointer items-center justify-center border border-transparent bg-transparent text-[18px] leading-none transition-colors duration-200 text-[rgba(255,255,255,0.5)] hover:border-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.95)]"
            >
              ×
            </button>
          ) : null}
          <NoteArticle
            title={activeNote.title}
            subtitle={activeNote.subtitle}
            muted={isPreview}
          >
            <NoteContent />
          </NoteArticle>
        </div>
      ) : null}
      <style jsx>{`
        @keyframes noteFadeIn {
          from {
            opacity: 0;
            filter: blur(6px);
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function NotesContent() {
  const [showList, setShowList] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const listColumnRef = useRef<HTMLDivElement>(null);
  const notePanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowList(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (notePanelRef.current?.contains(target)) return;
      if (listColumnRef.current?.contains(target)) return;
      setSelectedIndex(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [selectedIndex]);

  const itemsForNavigation = notes.map((note) => ({ href: `/notes#${note.id}` }));

  const handleSelect = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  const handleClose = () => {
    setSelectedIndex(null);
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

            <div style={pageContentStyle} className="h-full w-full">
              <ListBox
                className="flex h-full w-full"
                items={itemsForNavigation}
                selectionMode
                selectedIndex={selectedIndex}
                onSelect={handleSelect}
                onEscape={handleClose}
              >
                <ListNavHint alsoObserving={selectedIndex !== null} />
                <div
                  className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-start"
                  style={{
                    opacity: showList ? 1 : 0,
                    filter: showList ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                >
                  <div ref={listColumnRef} className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-3">
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
                    onClose={handleClose}
                    panelRef={notePanelRef}
                  />
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
