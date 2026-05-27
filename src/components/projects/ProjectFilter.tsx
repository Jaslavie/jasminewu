"use client";

import {
  projectTagOptions,
  type ProjectTag,
} from "@/data/projectsData";
import { pageContentStyle } from "@/components/home/pageStyles";

interface ProjectFilterProps {
  selectedTags: ProjectTag[];
  onChange: (tags: ProjectTag[]) => void;
}

export default function ProjectFilter({
  selectedTags,
  onChange,
}: ProjectFilterProps) {
  const toggleTag = (tag: ProjectTag) => {
    onChange(
      selectedTags.includes(tag)
        ? selectedTags.filter((item) => item !== tag)
        : [...selectedTags, tag],
    );
  };

  return (
    <div
      className="mb-6 flex flex-wrap gap-2"
      style={{
        fontFamily: pageContentStyle.fontFamily,
        fontSize: pageContentStyle.fontSize,
        lineHeight: pageContentStyle.lineHeight,
        color: pageContentStyle.color,
      }}
    >
      {projectTagOptions.map((tag) => {
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
