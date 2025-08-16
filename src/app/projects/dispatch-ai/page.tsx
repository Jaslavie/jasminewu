"use client";

import React from "react";
import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectSection from "@/components/work/ProjectSection";
import ProjectImage from "@/components/work/ProjectImage";
import Divider from "@/components/global/Divider";

export default function DispatchAIProject() {
  const headerData = {
    category: "DECISION SUPPORT TOOL",
    title:
      "Designing a platform for AI Agents to offload 911 calls for emergency responders",
    description:
      "I worked with dispatchers to design a platform to handoff non-emergency calls between human operator and AI agent. Won the largest AI hackathon in the world and received $68,000 in grants from Skydeck, Intel, and OpenAI.",
    logo: "/projects/dispatchAI/skydeck.png",
    metadata: {
      role: ["Co-Founder", "Product Design"],
      duration: "10 months",
      team: ["3 Engineers", "1 Designer"],
      results: [
        "Grand Prize, world's largest AI Hackathon",
        "$68,000 investment",
        "Berkeley Skydeck Pad-13",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <ProjectHeader {...headerData} />

      {/* Project Thumbnail */}
      <ProjectImage
        src="/projects/dispatchAI/dispatchThumbnail.png"
        alt="Dispatch AI Platform Thumbnail"
        caption=""
      />
      {/* Introduction Section */}
      <ProjectSection title="winning the largest AI hackathon in the world">
        <div>
          <p>
            Dispatch AI started from a spontaneous trip with 3 friends at
            the Berkeley AI Hackathon. We won the Grand Prize and $18,000 in
            credits from Intel and OpenAI. Post-Hackathon, we decided to take
            this project further and launched a venture with Berkley Skydeck
            with $50,000 in investment. I worked as the solo designer.
          </p>

          <ProjectImage
            src="/projects/dispatchAI/HackathonThumbnail.png"
            alt="Dispatch AI winning the largest AI hackathon in the world"
            caption=""
          />
        </div>
      </ProjectSection>

      {/* Shipped Section */}
      <ProjectSection title="shipped">
        <div>
          <p>
            I designed V1 of Dispatch in under 36 hours at a hackathon. I built
            out the entire platform afterwards.
          </p>

          <div>
            <ul>
              <li>
                <span> + fully equipped design system</span>
              </li>
              <li>
                <span>
                  + full emergency response platform: incident monitoring, call
                  handling, data analysis, and logging
                </span>
              </li>
              <li>
                <span>
                  + database management system: built new data processing
                  pipeline for real-time call handling
                </span>
              </li>
              <li>
                <span>
                  + event forecasting model: custom-trained model on historic
                  call data
                </span>
              </li>
            </ul>
          </div>
          <Divider />
        </div>
      </ProjectSection>

      {/* design overview */}
      <ProjectSection title="">
        <h2 className="text-white italic text-[42px] mt-[2vh]">final design</h2>
      </ProjectSection>
      <ProjectSection title="the operational loop">
        <div>
          <p>
            The system has two separate agents: 1) the human agent (dispatcher)
            takes emergency calls. 2) the AI agent handles non-emergency calls.
          </p>
          <p>
            I designed Dispatch on a continuous operational loop that decides
            which agent should “take over” at each decision point (see model
            design for more details). Each session data is logged to inform
            future decisions.
          </p>
        </div>
      </ProjectSection>
      <ProjectImage
        src="/projects/dispatchAI/finalDispatch.svg"
        alt="Dispatch AI Platform Thumbnail"
        caption=""
      />

      {/* main features */}
      <ProjectSection title="01 live incident monitoring" layout="row">
        <p>
          Operationalize transcripts by supporting live language translation and
          dynamic script recommendations. Trained on 1000s of emergency call
          data.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_liveEmergency.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
      <ProjectSection title="02 Resolving alerts" layout="row">
        <p>
          Currently, calls themselves act as decentralized alerts. We dedicated
          a separate tab for alerts, alongside details and checklists, into a
          single pane-of-glass.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/alertsDemoDispatch.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
      <ProjectSection title="03 Customizable modules" layout="row">
        <p>
          Currently, dispatchers navigate across multiple static interfaces. We
          allow them to toggle on-off modules based on the data they need to
          surface during the current stage of operations.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_modular.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
          maxHeight="800px"
        />
      </ProjectSection>
      <ProjectSection title="04 Pathfinding" layout="row">
        <p>
          Operators can monitor the path first-responders will travel based on
          live google maps data. They can see the traffic between each waypoint,
          view status updates, and recommend changes.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_route.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
      <ProjectSection title="05 Historic call data" layout="row">
        <p>
          Previously, dispatch centers store old call scripts in thousand-page
          albums. We created a first-class solution that stores all previous
          call in a central database. Operators can change security settings to
          configure visibility.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_log.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
      <ProjectSection title="06 Forecast future call volumes" layout="row">
        <p>
          Provide dispatchers with projected call volumes in the following weeks
          to help anticipate spikes in calls. Based on historic call volumes,
          which dispatch centers already collect.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_stats.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
    </div>
  );
}
