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
          gridSpan="2/3"
        />
      </ProjectSection>
      <ProjectSection title="02 dispatching units" layout="row">
        <p>
          Select and dispatch units on-platform. Select from pre-designed
          emergency procedures to reduce on-site decision-making.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_confirmAction.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
          gridSpan="2/3"
        />
      </ProjectSection>
      <ProjectSection title="03 Resolving alerts" layout="row">
        <p>
          Currently, calls themselves act as decentralized alerts. We dedicated
          a separate tab for alerts, alongside details and checklists, into a
          single pane-of-glass.
        </p>

        <ProjectImage
          src="/projects/dispatchAI/demo/alertsDemoDispatch.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
          gridSpan="2/3"
        />
      </ProjectSection>
      <ProjectSection title="04 Customizable modules" layout="row">
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
          gridSpan="2/3"
        />
      </ProjectSection>
      <ProjectSection title="05 Pathfinding" layout="row">
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
      <ProjectSection title="06 Historic call data" layout="row">
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
      <ProjectSection title="07 Forecast future call volumes" layout="row">
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

      <div style={{ padding: "0 8vw" }}>
        <Divider />
      </div>

      {/* Problem Analysis Section */}
      <ProjectSection title="">
        <h2 className="text-white italic text-[42px] mt-[2vh]">the problem</h2>
      </ProjectSection>
      <ProjectSection title="">
        <div>
          <p>
            The grim reality of dispatch centers: 82% are understaffed, with the
            average wait time of Oakland PD being 62 seconds. 90% of these calls
            are non-emergency, creating a system where dispatchers are
            overwhelmed with routine calls while critical emergencies wait.
          </p>
          <p>
            This constant pressure takes a severe toll on dispatchers' mental
            health and operational efficiency.
          </p>
          <div className="mt-6 space-y-4">
            <blockquote className="border-l-4 border-primary pl-4 italic text-white">
              "We get a lot of non-emergency calls that distract us from
              critical calls."
              <div className="text-sm text-muted-foreground mt-1 text-gray-400">
                — LAPD Deputy Chief
              </div>
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic text-white">
              "I feel chronically anxious and stressed, which has impacted my
              mental health"
              <div className="text-sm text-muted-foreground mt-1 text-gray-400">
                — Dispatcher
              </div>
            </blockquote>
          </div>
        </div>
      </ProjectSection>

      {/* Ground Zero Research Section */}
      <ProjectSection title="at ground 0">
        <div>
          <p>
            We had the opportunity to speak directly with LAPD staff and
            observed common trends across dispatch centers. Through our
            research, we identified three key pain points that affect
            dispatchers daily.
          </p>
        </div>
        <ProjectImage
          src="/projects/dispatchAI/disptachNotes.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>

      {/* User Archetype Section */}
      <ProjectSection title="user archetype">
        <div>
          <p>The archetypical user sits on two ends of the spectrum:</p>
          <ol className="mt-2 space-y-1">
            <li>Veteran dispatchers with decades of tenure</li>
            <li>New-hires with no habitual reflexes toward dispatch ops</li>
          </ol>
          <p className="mt-4">
            However, both parties are overwhelmed by the amount of data they
            need to consume on a daily basis. This surfaces most when reading
            off manual instruction scripts during emergencies.
          </p>
        </div>
        {/* User Journey Section */}
        <ProjectImage
          src="/projects/dispatchAI/userJourney.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>

      {/* Current Workflow Section */}
      <ProjectSection title="current workflow">
        <div>
          <p>
            There are 3 primary decision points in a call. Currently, this work
            is entirely manual - dispatchers type in tiny textboxes and read off
            scripts. The process is inefficient and error-prone.
          </p>
          <ProjectImage
            src="/projects/dispatchAI/dispatchWorkflow.png"
            alt="Dispatch AI Platform Thumbnail"
            caption=""
          />
        </div>
      </ProjectSection>

      {/* Root Cause Section */}
      <ProjectSection title="the root node">
        <div>
          <p>
            Poorly-documented calls is the root cause of distress. The symptoms
            of this include:
          </p>
          <ol>
            <li>slower response times</li>
            <li>operator stress from repetitive calls</li>
            <li>manual and in-malleable response procedures</li>
          </ol>
          <p className="mt-4">
            The opportunity, therefore, is offloading documentation to a more
            accurate and efficient agent to free up time for dispatchers to
            focus on critical calls
          </p>
        </div>
        <ProjectImage
          src="/projects/dispatchAI/dispatchPain.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>

      <div style={{ padding: "0 8vw" }}>
        <Divider />
      </div>

      {/* Problem Analysis Section */}
      <ProjectSection title="">
        <h2 className="text-white italic text-[42px] mt-[2vh]">
          solution smithing
        </h2>
      </ProjectSection>
      <ProjectSection title="big picture: communication flow">
        <div>
          <p>
            The communication workflow flows through a chain-of-command system
            from the caller to the dispatcher, incident commander, unit
            commander, and finally the first responders. All of this intel must
            also overcome physical barriers: sensor systems, gps, wifi signals,
            and bluetooth.
          </p>
          <p>
            This helped me better understand where each window and task can fit
            inside of the comms workflow.
          </p>
        </div>
        <ProjectImage
          src="/projects/dispatchAI/dispatchAIWorkflow.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>

      <div style={{ padding: "0 8vw" }}>
        <Divider />
      </div>

      <ProjectSection title="the tradeoff between accuracy & speed">
        <div>
          <p>
            Response time is the immediate thing holding dispatchers back, but
            forgoing accuracy for speed could be more costly.
            <br />
            This informed the decision to migrate the database and model to a
            less accurate, but faster model that can deliver responses rapidly.
          </p>
        </div>
        <ProjectImage
          src="/projects/dispatchAI/dataProcessing.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
        <div>
          <p>
            I benchmarked 3 models (Mistral, GPT4, and a custom-trained model)
            to see if there were significant differences in performance.
            <br />
            While the Mistral and OpenAI models were marginally more accurate,
            it was 230% slower than a lighter weight model — the latter of which
            we ultimately opted for.
          </p>
        </div>
        <ProjectImage
          src="/projects/dispatchAI/BenchmarkTests.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
      {/* micro-interactions */}
      <div style={{ padding: "0 8vw" }}>
        <Divider />
      </div>

      <ProjectSection title="">
        <h2 className="text-white italic text-[42px] mt-[2vh]">
          micro-interactions
        </h2>
      </ProjectSection>
      <ProjectSection title="Incorporating user feedback" layout="row">
        <p>
          Early exploration for operators to share feedback progressively during
          a live call without interrupting the workflow.
        </p>
        <ProjectImage
          src="/projects/dispatchAI/demo/dispatchDemo_feedback.mov"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
          maxHeight="400px"
        />
      </ProjectSection>
      <ProjectSection title="Drag & Drop configuration" layout="row">
        <p>
          The workflow needed to flex to different scenarios. Drag and drop
          allows users to surface info they need on-the-fly without interacting
          with the config panel.
        </p>
        <ProjectImage
          src="/projects/dispatchAI/dragAndDropDispatch.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
          maxHeight="640px"
        />
      </ProjectSection>

      <div style={{ padding: "0 8vw" }}>
        <Divider />
      </div>
      
      {/* appendix */}
      <ProjectSection title="">
        <h2 className="text-white italic text-[42px] mt-[2vh]">appendix</h2>
      </ProjectSection>
      <ProjectSection title="">
        <ProjectImage
          src="/projects/dispatchAI/prepostHackathon.png"
          alt="Dispatch AI Platform Thumbnail"
          caption=""
        />
      </ProjectSection>
      <ProjectSection title="design system">
        <div>
          <p>
            custom-built branding and component library. Referenced from NATO
            symbology/color guidelines.
          </p>
          <ProjectImage
            src="/projects/dispatchAI/ComponentsLibraryDispatch.svg"
            alt="Dispatch AI Platform Thumbnail"
            caption=""
          />
        </div>
      </ProjectSection>
    </div>
  );
}
