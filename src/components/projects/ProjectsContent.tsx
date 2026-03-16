"use client";

import { useEffect, useState } from "react";
import { ListBox, ListItemBox } from "@/components/ui/ListBox";
import HomeLeftNav from "@/components/home/HomeLeftNav";
import Footer from "@/components/global/Footer";
import { pageContentStyle, pageLayoutClasses } from "@/components/home/pageStyles";
import NavHint from "@/components/ui/NavHint";

export default function ProjectsContent() {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowList(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "AI agents for emergency response",
      description: "AI agents to offload 911 calls for emergency responders",
      link: "/projects/dispatch-ai",
    },
    {
      title: "Anticipatory heads up display for spacesuits",
      description: "A spacesuit display to help astronauts make autonomous decisions on the moon",
      link: "/projects/nasa",
    },
    {
      title: "Decision support system for lunar traversal",
      description: "SpaceCHI 2025 paper on autonomous decision-making during extravehicular activities",
      link: "https://doi.org/10.4230/OASIcs.SpaceCHI.2025.25",
    },
  ];

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
            <div style={pageContentStyle} className="h-full">
              <ListBox
                className="flex flex-col h-full"
                items={itemsForNavigation}
              >
                <div
                  className="flex flex-col gap-3"
                  style={{
                    opacity: showList ? 1 : 0,
                    filter: showList ? "blur(0px)" : "blur(4px)",
                    transition: "opacity 600ms ease-out, filter 600ms ease-out",
                  }}
                >
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
              </ListBox>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
