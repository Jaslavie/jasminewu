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
    title: "Emergency triage system for 911 dispatchers",
    description:
      "Triage platform to offload non-emergency 911 calls. $68k funding from Berkeley Skydeck. Grants from OpenAI, Intel, and Mistral AI.",
    number: "01",
    imageBefore: "/projects/dispatchAI_hover.png",
    imageAfter: "/projects/dispatchAI_hover_after.png",
    link: "/projects/dispatch-ai",
  },
  {
    title: "Adaptive navigation tool for lunar traversal",
    description:
      "Adaptive navigation tool for lunar traversal. Simulation software for routing. First author on paper presented at Space CHI 2025.",
    number: "02",
    imageBefore: "/projects/spaceCHI_hover.png",
    imageAfter: "/projects/spaceCHI_hover_after.png",
    link: "https://spacechi.media.mit.edu/",
  },
  {
    title: "Palantir Gotham",
    description:
      "Human-AI interfaces for decision-making on spacewalks and battlefield operations.",
    number: "02",
    imageBefore: "/images/palantir_hover.png",
    imageAfter: "/images/palantir_hover_after.png",
    link: "https://www.palantir.com/platforms/gotham/",
  },
  {
    title: "Gallatin AI",
    description: "Advanced AI systems for complex decision-making scenarios.",
    number: "03",
    imageBefore: "/images/gallatin_hover.png",
    imageAfter: "/images/gallatin_hover_after.png",
    link: "https://www.gallatin.ai/",
  },
];

export default function ProjectsList() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
