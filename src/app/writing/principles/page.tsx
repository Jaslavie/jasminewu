"use client";

import { useEffect, useState } from "react";
import {
  WritingHeader,
  WritingContent,
  WritingSection,
} from "@/components/writing/WritingComponents";
import {
  CitationProvider,
  Citation,
  CitationParagraph,
} from "@/components/writing/CitationSystem";

// Sidenote data
const sidenotes: Record<number, string> = {
  1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. NASA SUITS is a program that challenges students to design spacesuit interfaces.",
  2: "Lorem ipsum dolor sit amet. Mastery by Robert Greene explores the path to expertise through apprenticeship and creative active phases.",
  3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deep engagement requires sustained focus over superficial productivity.",
  4: "Lorem ipsum dolor sit amet. Katherine Boyle's essay explores how irony shields us from genuine commitment.",
  5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nabeel's principles essay inspired this collection of beliefs.",
};

export default function Principles() {
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
    title: "principles",
    date: "Feb 18, 2025",
    readingTime: "8",
    featuredImage: {
      url: "/writing/athens.png",
      alt: "athens",
    },
  };

  return (
    <CitationProvider sidenotes={sidenotes}>
      <div
        className="min-h-screen flex justify-center"
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Main content - centered */}
        <div className="w-full max-w-3xl p-16 md:py-[8%] md:px-[6%]">
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
              my contrarian and not-so-contrarian beliefs. separated by my core
              principles and list of life lessons.
            </p>

            <WritingSection title="Enduring value">
              <p>
                History fascinates me. It's a lived experiment of humanity's
                attempt at creating longevity, and ultimately something (a
                manuscript, empires, or entire governance systems) that
                outlives.
              </p>

              <p>
                There is no natural reason to do this. Our animalistic instinct
                tells us to do things just to survive. Yet in its midst, we have
                masters (be it da vinci, napoleon, or the like) that have a
                grudging, irrational desire to create a legacy that ripples
                beyond their generation.
              </p>

              <CitationParagraph citations={[1]}>
                <p>
                  This is a core ethos I want to bring into my work. I want to
                  build systems that endure beyond myself: whether that be
                  software products, new human-ai collaboration frameworks, or
                  the first NASA SUITS
                  <Citation
                    num={1}
                    href="https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/"
                  />{" "}
                  research team at my university.
                </p>
              </CitationParagraph>
            </WritingSection>

            <WritingSection title="Mastery">
              <CitationParagraph citations={[2]}>
                <p>
                  My favorite book is Mastery
                  <Citation
                    num={2}
                    href="https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X"
                  />
                  . In a culture that galvanizes prestige, quick wins, and
                  flamboyant displays of accomplishment — I firmly believe that
                  the next era will elevate deep thinkers, masters of their
                  field, and enduring systems (see point 1).
                </p>
              </CitationParagraph>

              <p>
                We should promote commitment over optionality, specialism over
                generalism, focus over shallow achievement — all while
                maintaining our ethos over adaptability. My goal is to master
                the art of human experience, and right now there is a gap
                between ai capability and user experience.
              </p>
            </WritingSection>

            <WritingSection title="Seriousness">
              <CitationParagraph citations={[3, 4]}>
                <p>
                  Seriousness is deep engagement and caring about creating
                  enduring value
                  <Citation
                    num={3}
                    href="https://substack.com/home/post/p-157587475"
                  />
                  . Katherine Boyle comments
                  <Citation
                    num={4}
                    href="https://substack.com/home/post/p-34495925"
                  />{" "}
                  on "shields of irony" that dull seriousness.
                </p>
              </CitationParagraph>

              <p>
                I strongly believe that once you enter a venture, you should
                fully commit to it and treat it as your life's mission, even if
                it fails. I don't treat work as a fun game to optimize. I don't
                believe in "playing hard, working hard". What I work on is an
                extension of what I value and who I am. I want to cultivate this
                like a garden, not a forest left to grow wild without care.
              </p>
            </WritingSection>

            <WritingSection title="Obsession">
              <p>
                Self-made success is one of the most peculiar and incredible
                human phenomena. Growing up without a silver spoon (money,
                connections, successful parents, etc) puts your odds of success
                at near 0. Yet, some of the most exceptional individuals in
                history — Rihanna, Turing, etc — have risen from nothing to one
                of the most legendary figures in history.
              </p>

              <p>
                This deeply fascinates me. I think this is one of the root nodes
                of what makes humanity exceptional: the raw drive,
                determination, and pure obsession to create something — to
                literally go against the natural mechanics of the world. I'm
                always excited to hear stories about this, and it deeply
                motivates my work.
              </p>
            </WritingSection>
            <hr className="border-gray-800 my-12" />

            <WritingSection title="hard won lessons in life.">
              <CitationParagraph citations={[5]}>
                <p>
                  inspired by "principles" by nabeel
                  <Citation
                    num={5}
                    href="https://substack.com/home/post/p-154681274"
                  />
                  .
                </p>
              </CitationParagraph>

              <ol className="space-y-4 pl-6 list-decimal">
                <li>
                  Your time estimates are always wrong. Always multiply your
                  expectations by 2x at minimum. You always need more time than
                  you think.
                </li>
                <li>
                  Regret is an intoxicating force. It can either kill you or
                  push you to prove yourself. Always choose the latter.
                </li>
                <li>
                  Get really good at reading b.s. in people. this is often
                  disguised as prestige and status. Cultivate awareness when
                  people are putting up a front, but don't try to fix it.
                </li>
                <li>
                  You know much, much less than you think. You only realize this
                  when you start surrounding yourself with the top 1%. Aim for
                  this.
                </li>
                <li>
                  Chasing achievement/quick wins is a losing game people learn
                  too late. Always aim for the long-term.
                </li>
                <li>
                  Select close friends with the same criteria level of scrutiny
                  you'd use to evaluate a romantic partner. Ask: "do I feel
                  electrified around them?" Never exceed 3-4 close friends.
                </li>
                <li>
                  Stick with your convictions ruthlessly. People will tell you
                  you're too much. If the group does not align, leave rather
                  than conform for the sake of harmony.
                </li>
                <li>
                  Sticking with habits means creating artificial routines for
                  yourself: drink the same coffee, wear the same clothes, eat
                  the same thing, run every morning. Most people are too
                  flexible with this, you need to stick to this like military
                  doctrine.
                </li>
                <li>
                  Being a good leader means being boots-on-the-ground with
                  everything that happens in the team. Delegation does not work
                  unchecked.
                </li>
                <li>
                  Bad environments turn you into a different person. Treat
                  mediocrity as a disease. Stay away from it at all costs.
                </li>
                <li>
                  Many groups, especially in university, underperform and will
                  dilute your attention. You must find pockets of exceptional
                  individuals (ex:research labs and engineering groups) or leave
                  entirely.
                </li>
                <li>
                  Prioritize fulfillment (note this is different from pleasure
                  and happiness) over optics early on. Passion and obsession
                  will naturally lead to recognition, much more than the other
                  way around.
                </li>
                <li>
                  Never conflate good talkers with good doers. You need to
                  battle-test capability before drawing a conclusion (applies to
                  ourselves as well).
                </li>
                <li>
                  Don't feel compelled to attend every event. Trust that the
                  quality of your work will bring the right people to you.
                </li>
                <li>
                  If you're not naturally good at something, don't do it. Some
                  people are born with exceptional talent & intuition and they
                  will outperform you. Instead, find the thing you are
                  asymmetrically good at (based on talk from Alex Karp).
                </li>
              </ol>
            </WritingSection>
          </WritingContent>
        </div>
      </div>
    </CitationProvider>
  );
}
