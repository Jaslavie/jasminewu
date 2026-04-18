"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ListBox, ListItemBox, useListHover } from "@/components/ui/ListBox";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "@/components/home/pageStyles";
import NavHint from "@/components/ui/NavHint";

type ProjectItem = {
  title: string;
  description: string;
  link: string;
  hoverImage: string;
  hoverCaption: string;
};

function ProjectHoverPreview({ projects }: { projects: ProjectItem[] }) {
  const { focusedIndex } = useListHover();
  const activeProject = focusedIndex === null ? null : projects[focusedIndex];

  return (
    <div
      className="w-full lg:w-1/2 min-h-[260px] lg:min-h-0"
      style={{
        opacity: activeProject ? 1 : 0,
        transition: "opacity 200ms ease-out",
      }}
    >
      {activeProject ? (
        <div
          key={activeProject.hoverImage}
          className="flex flex-col"
          style={{ animation: "previewFadeIn 280ms ease-out" }}
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={activeProject.hoverImage}
              alt={activeProject.title}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
          <p className="text-sm leading-tight text-[var(--color-text-body)]">
            {activeProject.hoverCaption}
          </p>
        </div>
      ) : null}
      <style jsx>{`
        @keyframes previewFadeIn {
          from {
            opacity: 0;
            filter: blur(6px);
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default function ProjectsContent() {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowList(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Military Intelligence Analysis",
      description: "Summer 2025 internship @ Palantir",
      link: "/projects/pltr",
      hoverImage: "/projects/palantir_hover.png",
      hoverCaption:
        "Interned with Palantir US Gov (Gotham) over the summer in D.C. to design workflows for an active conflict.",
    },
    {
      title: "Anticipatory heads up display for spacesuits",
      description: "HCI Research with NASA JSC",
      link: "/projects/nasa",
      hoverImage: "/projects/nasaSUITS_hover.png",
      hoverCaption:
        "Worked with NASA JSC to design & deploy spacesuit interfaces for lunar navigation under the Artemis mission.",
    },
    {
      title: "Decision support system for lunar traversal",
      description: "SpaceCHI 2025 paper",
      link: "https://doi.org/10.4230/OASIcs.SpaceCHI.2025.25",
      hoverImage: "/projects/spaceCHI_hover.png",
      hoverCaption:
        "Wrote independent research paper with UCI presented to the European Space Agency.",
    },
    {
      title: "AI agents for emergency response",
      description: "Berkeley skydeck startup accelerator",
      link: "/projects/dispatch-ai",
      hoverImage: "/projects/dispatchAI_hover.png",
      hoverCaption: "Worked a summer with Berkeley Skydeck to code conversational ai agents for 911 dispatch training.",
    },
  ] satisfies ProjectItem[];

  const itemsForNavigation = projects.map((p) => ({ href: p.link }));

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <NavHint label={{ normal: "to navigate", observing: "to escape" }} />
      <div className={`flex-1 flex flex-col ${pageLayoutClasses.screenPadding}`}>
        {/* Main Content Area */}
        <div className="flex-1 flex items-start lg:items-center justify-center min-h-0 overflow-hidden">
          {/* Centered Container - nav + divider + content */}
          <div className={`${pageLayoutClasses.innerWrapper}`}>
            {/* Left Nav */}
            <div className={pageLayoutClasses.navWidth}>
              <HomeLeftNav />
            </div>

            {/* Vertical Divider */}
            <div className={pageLayoutClasses.divider} />

            {/* Main Content */}
            <div style={pageContentStyle} className="h-full w-full">
              <ListBox className="flex h-full w-full" items={itemsForNavigation}>
                <div
                  className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-start"
                  style={{
                    opacity: showList ? 1 : 0,
                    filter: showList ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-3">
                      {projects.map((project, index) => (
                        <ListItemBox
                          key={index}
                          href={project.link}
                          title={project.title}
                          subtitle={project.description}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>

                  <ProjectHoverPreview projects={projects} />
                </div>
              </ListBox>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
