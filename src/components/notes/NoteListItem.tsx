"use client";

import { useListHover } from "@/components/ui/ListBox";

interface NoteListItemProps {
  title: string;
  subtitle: string;
  index: number;
  isSelected: boolean;
  isPinned?: boolean;
  onSelect: (index: number) => void;
}

function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block shrink-0 text-white/40 group-hover:text-white/70 transition-colors rotate-45 translate-y-[-1px]"
      aria-label="Pinned note"
    >
      <line x1="12" y1="17" x2="12" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

export default function NoteListItem({
  title,
  subtitle,
  index,
  isSelected,
  isPinned = false,
  onSelect,
}: NoteListItemProps) {
  const { focusedIndex, setFocusedIndex } = useListHover();
  const isFocused = focusedIndex === index;
  const isOtherFocused = focusedIndex !== null && focusedIndex !== index;

  const isActive = isFocused || isSelected;

  return (
    <button
      type="button"
      className="group block w-full cursor-pointer px-3 py-1 text-left outline-none transition-all duration-200 focus:outline-none focus-visible:outline-none"
      style={{
        border: isActive
          ? "1px solid rgba(255, 255, 255, 0.6)"
          : "1px solid transparent",
        opacity: isOtherFocused && !isSelected ? 0.6 : 1,
      }}
      onMouseEnter={() => setFocusedIndex(index)}
      onMouseLeave={() => setFocusedIndex(null)}
      onClick={() => onSelect(index)}
    >
      <div
        className="flex flex-col gap-[1px]"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        <span className="flex items-center gap-1.5 text-[16px] text-white">
          <span>{title}</span>
          {isPinned ? <PinIcon /> : null}
        </span>
        <span
          className="text-sm leading-tight"
          style={{
            color: isActive
              ? "var(--color-text-body)"
              : "var(--color-text-subheading)",
          }}
        >
          {subtitle}
        </span>
      </div>
    </button>
  );
}
