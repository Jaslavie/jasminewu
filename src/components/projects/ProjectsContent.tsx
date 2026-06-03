"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ListBox,
  ListItemBox,
  ListNavHint,
  useListHover,
} from "@/components/ui/ListBox";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import ProjectFilter from "@/components/projects/ProjectFilter";
import {
  filterProjectsByTags,
  projects,
  type Project,
  type ProjectTag,
} from "@/data/projectsData";
import {
  pageContentStyle,
  pageLayoutClasses,
  pageCaptionClass,
} from "@/components/home/pageStyles";

function ProjectHoverPreview({ projects }: { projects: Project[] }) {
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
          <div className="relative w-full aspect-[4/2.5] overflow-hidden">
            <Image
              src={activeProject.hoverImage}
              alt={activeProject.title}
              fill
              className="object-contain"
              sizes="(min-width: 1024px)"
            />
          </div>
          <p className={pageCaptionClass}>
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
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowList(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(
    () => filterProjectsByTags(projects, selectedTags),
    [selectedTags],
  );

  const itemsForNavigation = filteredProjects.map((p) => ({ href: p.link }));
  const listKey = selectedTags.slice().sort().join("-") || "all";

  return (
    <div className={pageLayoutClasses.screenSpace}>
      <div
        className={`flex-1 flex flex-col ${pageLayoutClasses.screenPadding}`}
      >
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
            <div style={pageContentStyle} className={pageLayoutClasses.mainContent}>
              <ListBox
                key={listKey}
                className="flex h-full w-full"
                items={itemsForNavigation}
              >
                <ListNavHint />
                <div
                  className="flex h-full w-full flex-col gap-8 lg:flex-row lg:items-start"
                  style={{
                    opacity: showList ? 1 : 0,
                    filter: showList ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                >
                  <div className="w-full lg:w-1/2">
                    <ProjectFilter
                      selectedTags={selectedTags}
                      onChange={setSelectedTags}
                    />
                    <div className="flex flex-col gap-2">
                      {filteredProjects.map((project, index) => (
                        <ListItemBox
                          key={project.id}
                          href={project.link}
                          title={project.title}
                          subtitle={project.description}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>

                  <ProjectHoverPreview projects={filteredProjects} />
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
