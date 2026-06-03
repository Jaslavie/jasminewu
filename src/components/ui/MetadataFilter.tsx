"use client";

import { pageContentStyle } from "@/components/home/pageStyles";

type FilterOption<T extends string> = {
  id: T;
  label: string;
};

interface MetadataFilterProps<T extends string> {
  options: FilterOption<T>[];
  selectedTags: T[];
  onChange: (tags: T[]) => void;
  className?: string;
}

export default function MetadataFilter<T extends string>({
  options,
  selectedTags,
  onChange,
  className = "mb-6",
}: MetadataFilterProps<T>) {
  const toggleTag = (tag: T) => {
    onChange(
      selectedTags.includes(tag)
        ? selectedTags.filter((item) => item !== tag)
        : [...selectedTags, tag],
    );
  };

  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      style={{
        fontFamily: pageContentStyle.fontFamily,
        fontSize: pageContentStyle.fontSize,
        lineHeight: pageContentStyle.lineHeight,
        color: pageContentStyle.color,
      }}
    >
      {options.map((tag) => {
        const isSelected = selectedTags.includes(tag.id);

        return (
          <button
            key={tag.id}
            type="button"
            role="checkbox"
            aria-checked={isSelected}
            onClick={() => toggleTag(tag.id)}
            className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-inherit"
          >
            <span
              className="flex h-4 w-4 shrink-0 items-center justify-center border text-[11px] leading-none"
              style={{
                borderColor: "rgba(255, 255, 255, 0.4)",
                color: isSelected ? "rgba(255, 255, 255, 0.8)" : "transparent",
              }}
            >
              {isSelected ? "✓" : null}
            </span>
            {tag.label}
          </button>
        );
      })}
    </div>
  );
}
