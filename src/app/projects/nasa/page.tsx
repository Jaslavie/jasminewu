"use client";

import React from "react";
import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectSection from "@/components/work/ProjectSection";
import ProjectImage from "@/components/work/ProjectImage";
import Divider from "@/components/global/Divider";

export default function NasaProject() {
  const headerData = {
    category: "2025 / DECISION SUPPORT TOOL",
    title:
      "A spacesuit display to help astronauts make autonomous decisions on the moon",
    description:
      "I designed and built a heads up display interface to support astronauts in operational procedures on the moon. Tested simulation with NASA engineers at the Johnson Space Center.",
    logo: "/projects/nasa/nasaLogoWorm.png",
    metadata: {
      role: ["HCI Research", "Product Design", "XR Engineering"],
      duration: "10 months",
      team: ["2 Engineers", "1 Designer"],
      results: ["Presented to NASA review panel", "Top 10 Finalist"],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <ProjectHeader {...headerData} />

      {/* Project Thumbnail */}
      <ProjectImage
        src="/projects/nasa/rockYardTestingThumbnail.png"
        alt="Spacesuit display interface for lunar operations"
        caption=""
      />

      {/* Supporting the Artemis mixed reality efforts */}
      <ProjectSection title="Supporting the Artemis mixed reality efforts">
        <div>
          <p>
            Americans have not sent astronauts on the moon since the 1960s. The
            next human space missions are scheduled to begin in 2027. I helped
            design and prototype a spacesuit interface to support human autonomy
            on these next series of space flights — procedural support,
            geological sampling, and adaptive navigation.
          </p>
          <br />
          <p>
            I presented these concepts to the Flight Director and Astronauts at
            the Johnson Space Center and conducted on-site stress tests with
            simulation and flight engineers at their Rock Yard facility.
          </p>
          {/* Project Image with UI Overlay */}
          <ProjectImage
            src="/projects/nasa/nasaHeader.png"
            alt="Presenting to the NASA Review Panel"
            caption="Astronaut Deniz Burnham and Flight director pictured"
          />
        </div>
      </ProjectSection>

      {/* Starting the first SUITS research lab */}
      <ProjectSection title="Starting the first space hci research lab">
        <div>
          <p>
            I founded the first space hci research team at UC Irvine. We were
            invited to present our work to the dean of the CS school and were
            awarded $20,000 in research funding from the university.
          </p>

          {/* Dean's Council Presentation */}
          <ProjectImage
            src="/projects/nasa/DeansLeadershipCouncil.png"
            alt="Presenting to the Dean's Leadership Council at UC Irvine"
            caption="Presenting to the Dean's Leadership Council at UC Irvine"
          />
        </div>
      </ProjectSection>

      {/* Problem Section */}
      <ProjectSection title="Problem">
        <div>
          <p>
            Operations require direct support from ground stations on earth.
            They plan every step of the journey: timeline design to day-to-day
            tasks down to the minute. Brute-force simulations are run to uncover
            every edge case.
          </p>
          <br />
          <p>
            Sustained human presence on the moon demands autonomous human
            operations — this requires learnable interfaces that can anticipate
            what a user needs before they ask.
          </p>
          {/* quote 1*/}
          <p style={{ color: "white", marginTop: "16px" }}>
            "Operators need the right data at the right time, with zero
            friction. If they can't find it instantly, they default to paper."
          </p>
          <p style={{ fontSize: "14px" }}>NASA Senior UX Designer at Ames</p>
          {/* quote 2 */}
          <p style={{ color: "white", marginTop: "8px" }}>
            "The suit moves differently from natural human mobility. Every extra
            action is a cognitive burden."
          </p>
          <p style={{ fontSize: "14px" }}>Astronaut Trainee</p>

          <ProjectImage
            src="/projects/nasa/testingRockyard.png"
            alt="Indoor debriefing with NASA engineers"
            caption="Debriefing and testing with NASA engineers at the JSC Rockyard."
          />
        </div>
      </ProjectSection>
    </div>
  );
}
