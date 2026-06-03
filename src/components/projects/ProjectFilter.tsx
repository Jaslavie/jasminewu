"use client";

import MetadataFilter from "@/components/ui/MetadataFilter";
import {
  projectTagOptions,
  type ProjectTag,
} from "@/data/projectsData";

interface ProjectFilterProps {
  selectedTags: ProjectTag[];
  onChange: (tags: ProjectTag[]) => void;
}

export default function ProjectFilter({
  selectedTags,
  onChange,
}: ProjectFilterProps) {
  return (
    <MetadataFilter
      options={projectTagOptions}
      selectedTags={selectedTags}
      onChange={onChange}
    />
  );
}
