export type ProjectTag =
  | "ai-research"
  | "product-design"
  | "software-engineering";

export const projectTagOptions: { id: ProjectTag; label: string }[] = [
  { id: "ai-research", label: "AI Research" },
  { id: "product-design", label: "Product Design" },
  { id: "software-engineering", label: "Software Engineering" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  hoverImage: string;
  hoverCaption: string;
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    id: "pltr",
    title: "Military Intelligence Analysis",
    description: "Summer 2025 internship @ Palantir",
    link: "/projects/pltr",
    hoverImage: "/projects/palantir_hover.png",
    hoverCaption:
      "Interned with Palantir US Gov (Gotham) over the summer in D.C. to design workflows for a live operational theater.",
    tags: ["product-design"],
  },
  {
    id: "nasa",
    title: "Anticipatory heads up display for spacesuits",
    description: "HCI Research with NASA JSC",
    link: "/projects/nasa",
    hoverImage: "/projects/nasaSUITS_hover.png",
    hoverCaption:
      "Worked with NASA JSC to design & deploy spacesuit interfaces for lunar navigation under the Artemis mission.",
    tags: ["software-engineering", "ai-research"],
  },
  {
    id: "spacechi",
    title: "Decision support system for lunar traversal",
    description: "SpaceCHI 2025 paper",
    link: "https://doi.org/10.4230/OASIcs.SpaceCHI.2025.25",
    hoverImage: "/projects/spaceCHI_hover.png",
    hoverCaption:
      "Wrote independent research paper with UCI presented to the European Space Agency.",
    tags: ["ai-research"],
  },
  {
    id: "dispatch-ai",
    title: "AI agents for emergency response",
    description: "Berkeley skydeck startup accelerator",
    link: "/projects/dispatch-ai",
    hoverImage: "/projects/dispatchAI_hover.png",
    hoverCaption:
      "Worked a summer with Berkeley Skydeck to code conversational ai agents for 911 dispatch training.",
    tags: ["product-design", "software-engineering"],
  },
];

export function filterProjectsByTags(
  items: Project[],
  selectedTags: ProjectTag[],
): Project[] {
  if (selectedTags.length === 0) return items;
  return items.filter((project) =>
    project.tags.some((tag) => selectedTags.includes(tag)),
  );
}
