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
    title: "Adaptive navigation tool for lunar traversal",
    description:
      "Adaptive navigation tool for lunar traversal. Simulation software for routing. First author on paper presented at Space CHI 2025.",
    number: "01",
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
            className="hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
