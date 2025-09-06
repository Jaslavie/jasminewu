"use client";

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

interface Project {
  title: string;
  description: string;
  number: string;
  imageBefore: string;
  imageAfter: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Palantir",
    description:
      "Building workflows for targeting analysis and wargaming simulation.",
    number: "01",
    imageBefore: "/projects/palantir_hover.png",
    imageAfter: "/projects/palantir_hover_after.png",
    link: "https://time.com/6691662/ai-ukraine-war-palantir/",
  },
  {
    title: "Emergency triage system for 911 dispatchers",
    description:
      "Triage platform to offload non-emergency 911 calls. $68k funding from Berkeley Skydeck.",
    number: "02",
    imageBefore: "/projects/dispatchAI_hover.png",
    imageAfter: "/projects/dispatchAI_hover_after.png",
    link: "/projects/dispatch-ai",
  },
  {
    title: "Adaptive navigation tool for lunar traversal",
    description:
      "Simulation software for lunar exploration. Presented to the European Space Agency.",
    number: "03",
    imageBefore: "/projects/spaceCHI_hover.png",
    imageAfter: "/projects/spaceCHI_hover_after.png",
    link: "https://drive.google.com/file/d/1iQ2fm9aBCSS3OgeBD4rz7U4PUgjuU8ZG/view",
  },
  {
    title: "Anticipatory heads-up displays for spacesuits",
    description:
      "XR displays for EVA operations. Simulation testing at NASA JSC. Presented to Astronauts.",
    number: "04",
    imageBefore: "/projects/nasaSUITS_hover.png",
    imageAfter: "/projects/nasaSUITS_hover_after.png",
    link: "/projects/nasa",
  },
  //   {
  //     title: "Gallatin AI",
  //     description: "Advanced AI systems for complex decision-making scenarios.",
  //     number: "03",
  //     imageBefore: "/images/gallatin_hover.png",
  //     imageAfter: "/images/gallatin_hover_after.png",
  //     link: "https://www.gallatin.ai/",
  //   },
];

export default function ProjectsList() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            number={project.number}
            imageBefore={project.imageBefore}
            imageAfter={project.imageAfter}
            link={project.link}
            className="hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
