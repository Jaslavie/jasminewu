"use client";

import { useListHover } from "@/components/ui/ListBox";

interface NoteListItemProps {
  title: string;
  subtitle: string;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}

export default function NoteListItem({
  title,
  subtitle,
  index,
  isSelected,
  onSelect,
}: NoteListItemProps) {
  const { focusedIndex, setFocusedIndex } = useListHover();
  const isFocused = focusedIndex === index;
  const isOtherFocused = focusedIndex !== null && focusedIndex !== index;

  return (
    <button
      type="button"
      className="block w-full px-3 py-2 text-left transition-all duration-200 cursor-pointer"
      style={{
        border: isSelected
          ? "1px solid rgba(255, 255, 255, 0.5)"
          : isFocused
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
        <span className="text-[16px] text-white">{title}</span>
        <span
          className="text-sm leading-tight"
          style={{
            color: isFocused || isSelected
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
