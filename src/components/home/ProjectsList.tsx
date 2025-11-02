"use client";

import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

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
    title: "Military intelligence analysis",
    description: "Building workflows for intelligence analysis.",
    number: "01",
    imageBefore: "/projects/palantir_hover.png",
    imageAfter: "/projects/palantir_hover_after.png",
    link: "/projects/pltr-intel",
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
    link: "https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25",
  },
  {
    title: "Anticipatory heads-up displays for spacesuits",
    description:
      "XR displays for EVA operations (spacewalks). Tested at NASA JSC lunar facilities.",
    number: "04",
    imageBefore: "/projects/nasaSUITS_hover.png",
    imageAfter: "/projects/nasaSUITS_hover_after.png",
    link: "/projects/nasa",
  },
  //   {
  //     title: "Gallatin AI",
  //     description: "Explainable AI framework for exposing model reasoning behind resupply forecasts.",
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
        {projects.map((project, index) => {
          const fadeIn = useFadeInOnScroll({
            delay: index * 100, // Stagger the animations
            threshold: 0.1,
          });

          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              number={project.number}
              imageBefore={project.imageBefore}
              imageAfter={project.imageAfter}
              link={project.link}
              ref={fadeIn.elementRef}
              style={fadeIn.fadeInStyle}
            />
          );
        })}
      </div>
    </div>
  );
}
