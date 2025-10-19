"use client";

import { useEffect, useState } from "react";
import ChaosLink from "@/components/ui/Link";
import Link from "next/link";
import {
  WritingContainer,
  WritingHeader,
  WritingContent,
  WritingSection,
} from "@/components/writing/WritingComponents";

export default function LivingEcosystems() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start animation with delay
    const timer = setTimeout(() => setShowContent(true), 200);

    // Cleanup timer
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const postData = {
    title: "how to design living ecosystems",
    date: "Oct 18, 2025",
    readingTime: "5",
    featuredImage: {
      url: "/writing/ecosystemThumbnail.png",
      alt: "how to design live experiences. hackathons and event design",
    },
  };

  return (
    <WritingContainer>
      <div
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Header with integrated back navigation */}
        <WritingHeader
          title={postData.title}
          date={postData.date}
          readingTime={postData.readingTime}
          featuredImage={postData.featuredImage}
          backHref="/writing"
          backText="back to writing"
        />

        {/* Content */}
        <WritingContent>
          <p>
            Recently, I've received a lot of asks about organizing events. For
            the first two years of college, my time was spent hosting and
            attending hackathons. It's been 6 months since I last went to one,
            yet these conversations have reminded me of the interesting
            crossovers between designing private experiences (the consumer apps
            of the world) and designing live ecosystems (the hackathons and
            events of the world).
          </p>

          <p>
            Here, I primarily focus on the <em>philosophy</em> of hosting a
            memorable event. However I also included a short practical guide for
            hosting hackathon-esque events.
          </p>

          <WritingSection title="what are living ecosystems">
            <p>
              I define this as a bounded, physical space where entities disperse
              information and evolve the system with its interactions.
              Colloquially we call this a<em>social space —</em> a co-located
              system where entities (people) are simultaneously exchanging
              public reactions and silent judgement.
              <br />
              I'm interested in a specific type of social space that is
              deliberately designed to illicit certain behaviors.{" "}
              <em>Events</em> are a good example of pre-configured social
              spaces.
            </p>
          </WritingSection>

          <WritingSection title="living ecosystems vs private experiences">
            <p>Live experiences operate under different laws of attention.</p>

            <p>
              In digital design, attention is a long and isolated game.
              Designing private experiences (most consumer apps) biases toward
              mechanics that drive habitual re-engagement and curiosity. The
              system measures a single user’s attention lifecycle over time. It
              evolves gradually, almost asymptotically, via continuous
              optimization. A designer debugs little-by-little until the system
              reaches a state of co-dependence for a single user, which is then
              multiplied across many.
            </p>

            <p>
              Live experiences compress this lifecycle into a single, dense
              interval. Its state evolves at a much quicker velocity, possibly
              risking fragmentation if uncontrolled. It demands systematic
              orchestration to push/pull interactions in an autocatalytic way.
              You cannot wait for participants to tell you somethings wrong the
              day of the event to fix it since it likely has caused compounded
              problems that are hard to remedy.
            </p>

            <p>
              The challenge of this is you're no longer analyzing how one node
              interacts with the rest of the system, but how other nodes respond
              in return. A well-designed ecosystem cannot be constantly
              monitored and spoon-fed micro-improvements until it gets better.
              Fed the correct inputs, it should be able to self-evolve. This is
              what makes texting friends on instagram fundamentally different
              from chatting at a live mixer. One isolates experience into a
              prolonged, private loop while the other lives in a volatile system
              that evolves by the second.
            </p>

            <p>
              The goal is to design a system that is self-propagating. Once set
              in motion, it compounds through its own collisions. The speed of
              those collisions matters. Success is when every domino engages
              naturally, and the system sustains momentum without manual
              intervention.
            </p>
          </WritingSection>

          <WritingSection title="how to design live experiences">
            So what's the approach to designing a live ecosystem? Here's my
            conceptual take on this:
            <h3>step 1: define the grouping strategy</h3>
            <p>
              Inspired by Don Norman's{" "}
              <em style={{ textDecoration: "underline", color: "white" }}>
                <Link href="https://www.amazon.com/Design-Better-World-Meaningful-Sustainable/dp/0262047950">
                  Design for a Better World,
                </Link>
              </em>{" "}
              here is my severely under-baked representation of the concept:
              there exist different nodes in an ecosystem that interact with
              each other. This can get very complex (groups on top of groups) or
              be very simple (single object-to-object interaction). Norman's
              thesis is that interactions within small groups have exponentially
              more impact on the entire system than object-to-object
              interactions.
            </p>
            <img
              src="/writing/DonNorman.png"
              alt="Don Norman"
              width={1000}
              height={1000}
            />
            <p>
              Philosophically, encouraging group behavior inside your event
              design process can create a far more dynamic and interesting
              system than encouraging purely individualistic behavior.
            </p>
            <h3>step 2: define how these groups will interact</h3>
            <p>
              The core through-line of the ecosystem view is that it's driven by
              interactions across nodes — that's what defines how the system
              evolves from its initial state. The way people interact with event
              components informs <i>how the system evolves</i>.
            </p>
            <ul className="space-y-4 pl-6 list-disc">
              <li>
                <strong>Education model:</strong> Do you want people to rapidly
                exchange information about the system but risk dispersing it
                into disparate components?
                <ul>
                  <li>
                    — <em>Characteristics:</em> Characterized by rapid
                    information exchange throughout the system. Individuals may
                    group based on their amount of knowledge rather than shared
                    interests.
                  </li>
                  <li>
                    — <em>Info flow:</em> centripetal force toward the experts
                    in the room.
                  </li>
                  <li>
                    — <em>Practically:</em> increase concentration around expert
                    mentors and ensure easy access to resources (APIs, design
                    tools, etc).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Playground model:</strong> Similar issue with dispersal,
                but instead of focusing on exchanging information across the
                entire diagram, you concentrate exchange within local nodes.
                Practically, this looks like adopting multiple "challenges" or
                event topics.
                <ul>
                  <li>
                    — <em>Characteristics:</em> Characterized by rapid exchange
                    within siloed groups followed by slower diffusion across
                    groups.
                  </li>
                  <li>
                    — <em>Info flow:</em> diffusion model — random nodes
                    constantly recombining and disseminating.
                  </li>
                  <li>
                    — <em>Practically:</em> concentrate effort around creative
                    prompts or diverse themes participants can bucket under.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Mission model:</strong> The event is synchronized under
                a single concept. Participants are collectively actioning to
                meet a shared problem.
                <ul>
                  <li>
                    — <em>Characteristics:</em> Synchronized under a single
                    concept with participants collectively actioning to meet a
                    shared problem.
                  </li>
                  <li>
                    — <em>Info flow:</em> linear.
                  </li>
                  <li>
                    — <em>Practically:</em> strong theming or prompts (e.g.,
                    category-specific hackathons like sustainability) that
                    constrain and align efforts toward a unified goal.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Your ultimate model can be a combination of these, but defining
              this early prevents misalignment later.
            </p>
          </WritingSection>

          <WritingSection title="planning phases">
            <video
              src="/writing/EcosystemVideo.mov"
              autoPlay
              loop
              muted
              playsInline
              className="mt-4 w-full max-w-2xl mx-auto"
              style={{ pointerEvents: "none" }}
            />
            <p>
              <strong>Step 1: Define the spatial layout.</strong>
            </p>
            <p>
              This is the skeleton of your ecosystem — the physical diagram that
              dictates how information will flow through the system. Define the
              zones of the room (where judges, participants, and internal teams
              will primarily be). A messy layout that mixes these groups
              manipulates the vibe in the wrong direction.
            </p>

            <p>
              <strong>Step 2: Map the temporal flow.</strong>
            </p>
            <p>
              Define how time moves through the space. Build a high-level
              timeline of what is essential and when it should happen, then map
              that chronology back to the layout.
            </p>

            <p>
              <strong>Step 3: Set up the comms infrastructure.</strong>
            </p>
            <p>
              This is the connective tissue. How will you communicate schedules,
              announcements, and live updates? Draft all key emails in advance.
              Set up Slack channels and other comms systems before launch.
            </p>

            <p>
              <strong>Step 4: Add the seasoning.</strong>
            </p>
            <p>
              Once structure is set, go on a concentrated execution sprint to
              curate and churn out all tangible elements — swag, graphics, food,
              and visual polish.
            </p>
          </WritingSection>

          <WritingSection title="Backend processes">
            <p>These should happen continuously:</p>

            <ul className="space-y-4 pl-6 list-disc">
              <li>
                <strong>Sponsorships and fundraising:</strong> follows an 80/20
                curve. Your largest contributions will come from a select few
                sponsors. Treat it as a numbers game early on — bias toward
                quantity first, then hyper-invest when someone shows real
                interest.
              </li>
              <li>
                <strong>Casting (speakers, mentors, judges):</strong> coherence
                matters more than titles. People who get along naturally create
                a more cohesive judging and mentoring environment.
              </li>
              <li>
                <strong>Marketing:</strong> the friend-group effect is strongest
                in college. Target where communities already gather. Partner
                with clubs and get their names on your event — it's the fastest
                way to start a chain reaction.
              </li>
            </ul>
          </WritingSection>

          <WritingSection title="Q&A">
            <p>
              <strong>
                1. How do you get started when you've never done this before?
              </strong>
            </p>
            <p>
              Start with the system. Draft a Google Doc explaining <em>why</em>{" "}
              this event should exist. What are you trying to simulate in the
              ecosystem? Define your event model and theming.
            </p>
            <p>Define the interactions:</p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                <em>Definition:</em> Start with the physical layout (location),
                temporal flow (schedule), and feedback systems that tie them
                together (judges, announcements).
              </li>
              <li>
                <em>Execution:</em> Finalize the room early — it dictates
                everything else.
              </li>
            </ul>
            <p>
              At the very end, curate the experience: the documents, the
              aesthetics, food. All the elements that people will
              subconsciously associate with your event.
            </p>

            <p>
              <strong>
                2. What have people given significant positive reviews on?
              </strong>
            </p>
            <p>
              People don't remember things you throw at them (even if that's
              cool-looking merch). They recall the moments they made with
              friends. This is not something you can hand them. You must create
              an ecosystem that can foster this serendipity.
            </p>

            <p>
              <strong>
                3. What is significantly challenging about organizing something
                like this?
              </strong>
            </p>
            <p>
              You underestimate the amount of time orchestration demands. It's
              easy to copy and paste templates from other events. It takes a lot
              more labour to create the connective tissue between these siloed
              artifacts. Spend a significant chunk of time syncing.
            </p>

            <p>
              <strong>4. What is something often overlooked?</strong>
            </p>
            <p>
              People will remember <em>negative</em> experiences far more than
              positive ones. Focus on executing a solid, frictionless event
              rather than overextending on ambition. The philosophy is simple:
              polish over spectacle.
            </p>
          </WritingSection>
        </WritingContent>
      </div>
    </WritingContainer>
  );
}
