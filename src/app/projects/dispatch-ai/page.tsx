"use client";

import { useEffect, useState, type ReactNode } from "react";
import LightProjectPage from "@/components/projects/LightProjectPage";

const diagramMediaClassName = "bg-[#050505] px-4 py-4";
const imageFadeInStyle = {
  animation: "dispatchImageFadeIn 420ms ease-out both",
};

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="pt-2 text-[18px] font-semibold leading-[1.55] text-black"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="w-full border-t-[2px] border-black/10" />;
}

function MediaBlock({
  src,
  alt,
  caption,
  maxHeight,
  mediaClassName = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  maxHeight?: string;
  mediaClassName?: string;
}) {
  const isVideo = /\.(mov|mp4|webm|avi|mkv|m4v)$/i.test(src);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="relative block w-full cursor-none text-left"
        onClick={() => {
          setIsHovered(false);
          setIsExpanded(true);
        }}
        aria-label={`Expand ${alt}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={(event) =>
          setPointerPosition({
            x: event.clientX,
            y: event.clientY,
          })
        }
      >
        <div className={mediaClassName}>
          {isVideo ? (
            <video
              src={src}
              className="h-auto w-full object-contain"
              style={{
                ...(maxHeight ? { maxHeight } : {}),
                ...imageFadeInStyle,
              }}
              loop
              muted
              autoPlay
              playsInline
              preload="metadata"
              aria-label={alt}
            />
          ) : (
            <img
              src={src}
              alt={alt}
              className="h-auto w-full object-contain"
              style={{
                ...(maxHeight ? { maxHeight } : {}),
                ...imageFadeInStyle,
              }}
            />
          )}
        </div>
        {isHovered && !isExpanded ? (
          <span
            className="pointer-events-none fixed z-[10015] -translate-x-1/2 -translate-y-1/2 border border-white/80 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
            style={{
              left: pointerPosition.x,
              top: pointerPosition.y,
              animation: "dispatchZoomBadgeIn 180ms ease-out both",
            }}
          >
            <span className="inline-flex items-center gap-2">
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="3.5" stroke="currentColor" />
                <path d="M7.75 7.75L10.5 10.5" stroke="currentColor" />
              </svg>
              <span>Zoom in</span>
            </span>
          </span>
        ) : null}
      </button>
      {isExpanded ? (
        <div
          className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/30 px-6 py-8 backdrop-blur-md"
          onClick={() => setIsExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <div
            className="max-h-[75vh] w-full max-w-[75vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={mediaClassName}>
              {isVideo ? (
                <video
                  src={src}
                  className="max-h-[75vh] w-full object-contain"
                  style={imageFadeInStyle}
                  loop
                  muted
                  autoPlay
                  playsInline
                  controls
                  aria-label={alt}
                />
              ) : (
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[75vh] w-full object-contain"
                  style={imageFadeInStyle}
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
      {caption ? (
        <p className="text-[12px] leading-[1.45] text-black/50">{caption}</p>
      ) : null}
    </div>
  );
}

export default function DispatchAIProject() {
  return (
    <LightProjectPage
      title="emergency triage system for 911 calls"
      meta="2024 / Product Design, Fullstack"
      imageSrc="/projects/dispatchAI/dispatchThumbnail.png"
      imageAlt="Dispatch AI emergency response platform"
      actions={[
        {
          href: "https://devpost.com/software/dispatch-ai",
          label: "Devpost",
          external: true,
        },
      ]}
    >
      <Divider />
      <p className="text-black">
        A majority of 911 calls are non critical. When truly critical
        emergencies appear, the bottleneck are the non-emergency calls.
      </p>
      <p className="text-black">
        Dispatch AI started from a spontaneous trip with 3 friends at the
        Berkeley AI Hackathon (during my hackathon splurge in freshman year).
        Post-hackathon, we decided to take this project further and launched a
        venture with Berkeley SkyDeck.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/HackathonThumbnail.png"
        alt="Dispatch AI hackathon team and win"
      />

      <p className="text-black">
        I designed V1 of Dispatch in under 36 hours at a hackathon and built out
        the broader platform afterwards.
      </p>
      <ul className="space-y-1 text-[15px] leading-[1.55] text-black">
        <li className="text-black">+ full design system</li>
        <li className="text-black">
          + full emergency response platform: incident monitoring, call
          handling, data analysis, and logging
        </li>
        <li className="text-black">
          + database management system: new data processing pipeline for
          real-time call handling
        </li>
        <li className="text-black">
          + event forecasting model: custom-trained model on historic call data
        </li>
      </ul>

      <Divider />

      <SectionHeading>the operational loop</SectionHeading>
      <p className="text-black">
        The system has two separate agents: the human operator handles emergency
        calls, while the AI agent manages non-emergency intake.
      </p>
      <p className="text-black">
        I designed Dispatch on a continuous operational loop that decides which
        agent should take over at each point. Each session is logged to inform
        future decisions.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/finalDispatch.svg"
        alt="Final dispatch operational loop"
        mediaClassName={diagramMediaClassName}
      />

      <SectionHeading>01 live incident monitoring</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Surface live language translation, script recommendations, and
          evolving call context in a single operational view trained on past
          emergency records.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_liveEmergency.mov"
          alt="Live incident monitoring demo"
        />
      </div>

      <SectionHeading>02 dispatching units</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Select and dispatch units directly on-platform, using pre-structured
          emergency procedures to reduce on-the-fly decision friction.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_confirmAction.mov"
          alt="Dispatching units demo"
        />
      </div>

      <SectionHeading>03 resolving alerts</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Calls often function as fragmented alerts. I consolidated alerts,
          details, and checklists into a single pane so operators can act from
          one place.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/alertsDemoDispatch.mov"
          alt="Resolving alerts demo"
        />
      </div>

      <SectionHeading>04 customizable modules</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Dispatchers typically navigate across multiple rigid systems. This
          version allows them to turn modules on or off depending on the stage
          of operations and the data they need in that moment.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_modular.mov"
          alt="Customizable modules demo"
          maxHeight="800px"
        />
      </div>

      <SectionHeading>05 pathfinding</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Operators can monitor first-responder routes using live Google Maps
          data, review traffic between waypoints, and recommend changes as the
          situation evolves.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_route.mov"
          alt="Pathfinding demo"
        />
      </div>

      <SectionHeading>06 historic call data</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Instead of relying on thousand-page archives, previous calls are
          stored in a central searchable database with configurable access and
          visibility rules.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_log.mov"
          alt="Historic call data demo"
        />
      </div>

      <SectionHeading>07 forecast future call volumes</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Historic volume data becomes a forward-looking tool, helping dispatch
          centers anticipate spikes and prepare staffing ahead of time.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_stats.mov"
          alt="Forecasting call volumes demo"
        />
      </div>

      <Divider />
      <SectionHeading>the problem</SectionHeading>
      <p className="text-black">
        The grim reality of dispatch centers: 82% are understaffed, with the
        average wait time of Oakland PD being 62 seconds. 90% of these calls are
        non-emergency, creating a system where dispatchers are overwhelmed with
        routine calls while critical emergencies wait.
      </p>
      <p className="text-black">
        This constant pressure takes a severe toll on dispatchers&apos; mental
        health and operational efficiency.
      </p>
      <blockquote className="border-l-[2px] border-black/20 pl-4 italic text-black/75">
        "We get a lot of non-emergency calls that distract us from critical
        calls."
        <div className="mt-1 text-[12px] not-italic text-black/50">
          - LAPD Deputy Chief
        </div>
      </blockquote>
      <blockquote className="border-l-[2px] border-black/20 pl-4 italic text-black/75">
        "I feel chronically anxious and stressed, which has impacted my mental
        health."
        <div className="mt-1 text-[12px] not-italic text-black/50">
          - Dispatcher
        </div>
      </blockquote>

      <SectionHeading>at ground 0</SectionHeading>
      <p className="text-black">
        We had the opportunity to speak directly with LAPD staff and observed
        common trends across dispatch centers. Through our research, we
        identified three key pain points that affect dispatchers daily.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/disptachNotes.png"
        alt="Dispatch notes and field research"
      />

      <SectionHeading>user archetype</SectionHeading>
      <p className="text-black">
        The archetypical user sits on two ends of the spectrum:
      </p>
      <ol className="list-decimal space-y-1 pl-6 text-[15px] leading-[1.55] text-black">
        <li className="text-black">
          Veteran dispatchers with decades of tenure
        </li>
        <li className="text-black">
          New-hires with no habitual reflexes toward dispatch ops
        </li>
      </ol>
      <p className="text-black">
        However, both parties are overwhelmed by the amount of data they need to
        consume on a daily basis. This surfaces most when reading off manual
        instruction scripts during emergencies.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/userJourney.png"
        alt="Dispatch user journey"
      />

      <SectionHeading>current workflow</SectionHeading>
      <p className="text-black">
        There are 3 primary decision points in a call. Currently, this work is
        entirely manual: dispatchers type into tiny textboxes and read off
        scripts. The process is inefficient and error-prone.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/dispatchWorkflow.png"
        alt="Current dispatch workflow"
        mediaClassName={diagramMediaClassName}
      />

      <SectionHeading>the root node</SectionHeading>
      <p className="text-black">
        Poorly documented calls are the root cause of distress. The symptoms
        include slower response times, operator stress from repetitive calls,
        and manual, inflexible response procedures.
      </p>
      <p className="text-black">
        The opportunity, therefore, is offloading documentation to a more
        accurate and efficient agent to free up time for dispatchers to focus on
        critical calls.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/dispatchPain.png"
        alt="Dispatch pain points"
        mediaClassName={diagramMediaClassName}
      />

      <Divider />

      <SectionHeading>big picture: communication flow</SectionHeading>
      <p className="text-black">
        The communication workflow moves through a chain of command from the
        caller to the dispatcher, incident commander, unit commander, and first
        responders. That information also has to overcome physical barriers:
        sensor systems, GPS, wifi signals, and bluetooth.
      </p>
      <p className="text-black">
        This helped me understand where each window, module, and task belonged
        inside the broader communications workflow.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/dispatchAIWorkflow.png"
        alt="Dispatch AI communication workflow"
        mediaClassName={diagramMediaClassName}
      />

      <Divider />
      <SectionHeading>the tradeoff between accuracy & speed</SectionHeading>
      <p className="text-black">
        Response time is the immediate thing holding dispatchers back, but
        forgoing accuracy for speed could be more costly. This informed the
        decision to migrate the database and model to a less accurate but faster
        system that could deliver responses rapidly.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/dataProcessing.png"
        alt="Data processing tradeoffs"
        mediaClassName={diagramMediaClassName}
      />
      <p className="text-black">
        I benchmarked 3 models, Mistral, GPT-4, and a custom-trained model, to
        see whether there were significant differences in performance. While the
        larger models were marginally more accurate, they were 230% slower than
        the lighter-weight model we ultimately chose.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/BenchmarkTests.png"
        alt="Benchmark tests"
      />

      <Divider />
      <SectionHeading>incorporating user feedback</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          Early exploration for letting operators share feedback progressively
          during a live call without interrupting the workflow.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/demo/dispatchDemo_feedback.mov"
          alt="Feedback demo"
          maxHeight="400px"
        />
      </div>

      <SectionHeading>drag & drop configuration</SectionHeading>
      <div className="space-y-5">
        <p className="text-black">
          The workflow needed to flex to different scenarios. Drag and drop lets
          users surface the information they need on the fly without constantly
          entering the config panel.
        </p>
        <MediaBlock
          src="/projects/dispatchAI/dragAndDropDispatch.png"
          alt="Drag and drop configuration"
          maxHeight="640px"
        />
      </div>

      <Divider />
      <SectionHeading>appendix</SectionHeading>
      <MediaBlock
        src="/projects/dispatchAI/prepostHackathon.png"
        alt="Pre and post hackathon comparison"
      />

      <SectionHeading>design system</SectionHeading>
      <p className="text-black">
        Custom-built branding and component library, referenced from NATO
        symbology and color guidelines.
      </p>
      <MediaBlock
        src="/projects/dispatchAI/ComponentsLibraryDispatch.svg"
        alt="Dispatch AI component library"
      />

      <Divider />
      <SectionHeading>food for thought</SectionHeading>
      <ol className="list-decimal space-y-4 pl-6 text-[15px] leading-[1.55] text-black">
        <li className="text-black">
          <span className="font-semibold">
            Over-optimized UX can be a disease.
          </span>{" "}
          Humans are wired to crave familiarity, and even slight deviations can
          cause a net reduction in user experience. We kept the long transcripts
          instead of truncating them because that was the long-standing
          structure dispatchers were already used to engaging with.
        </li>
        <li className="text-black">
          <span className="font-semibold">Trust in human intuition.</span> It is
          better to forgo accuracy for speed than the other way around. It is
          better to correct wrong information than to falsely expect perfect
          answers in a life-or-death situation.
        </li>
      </ol>
      <style jsx global>{`
        @keyframes dispatchImageFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dispatchZoomBadgeIn {
          from {
            opacity: 0;
            filter: blur(8px);
            transform: translate(-50%, -50%) scale(0.94);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </LightProjectPage>
  );
}
