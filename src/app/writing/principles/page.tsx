"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ChaosLink from "@/components/ui/Link";
import Image from "next/image";

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

  return (
    <div className="min-h-screen relative flex justify-center px-8 md:px-0">
      <div
        className="p-8 md:p-[6%] max-w-full md:max-w-4xl w-full md:w-[60vw]"
        style={{
          opacity: showContent ? 1 : 0,
          visibility: showContent ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Back Navigation */}
        <Link
          href="/writing"
          className="text-gray-400 hover:text-white text-sm transition-colors mb-16 inline-block border-b border-dotted border-gray-600 pb-1"
        >
          ← back to writing
        </Link>

        {/* Title and Date */}
        <div className="mb-12">
          <h1 className="font-serif italic text-[32px] text-white mb-4">
            principles
          </h1>
          <p className="text-gray-500 text-sm">Feb 18, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <Image
            src="/writing/athens.png"
            alt="athens"
            width={1000}
            height={1000}
          />
          <p>
            my contrarian and not-so-contrarian beliefs. separated by my core
            principles and list of life lessons.
          </p>

          <section>
            <h2>Enduring value</h2>

            <div className="space-y-4 leading-relaxed">
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

              <p>
                This is a core ethos I want to bring into my work. I want to
                build systems that endure beyond myself: wether that be software
                products, new human-ai collaboration frameworks, or the first{" "}
                <ChaosLink href="https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/">
                  NASA SUITS
                </ChaosLink>{" "}
                research team at my university.
              </p>
            </div>
          </section>

          <section>
            <h2>Mastery</h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                My favorite book is{" "}
                <ChaosLink href="https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X">
                  Mastery
                </ChaosLink>
                . In a culture that galvanizes prestige, quick wins, and
                flamboyant displays of accomplishment — I firmly believe that
                the next era will elevate deep thinkers, masters of their field,
                and enduring systems (see point 1).
              </p>

              <p>
                We should promote commitment over optionality, specialism over
                generalism, focus over shallow achievement — all while
                maintaining our ethos over adaptability. My goal is to master
                the art of human experience, and right now there is a gap
                between ai capability and user experience.
              </p>
            </div>
          </section>

          <section>
            <h2>Seriousness</h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Seriousness is deep engagement and caring about creating{" "}
                <ChaosLink href="https://substack.com/home/post/p-157587475">
                  enduring value
                </ChaosLink>
                . Katherine Boyle{" "}
                <ChaosLink href="https://substack.com/home/post/p-34495925">
                  comments
                </ChaosLink>{" "}
                on "shields of irony" that dull seriousness.
              </p>

              <p>
                I strongly believe that once you enter a venture, you should
                fully commit to it and treat it as your life's mission, even if
                it fails. I don't treat work as a fun game to optimize. I don't
                believe in "playing hard, working hard". What I work on is an
                extension of what I value and who I am. I want to cultivate this
                like a garden, not a forest left to grow wild without care.
              </p>
            </div>
          </section>

          <section>
            <h2>Obsession</h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
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
            </div>
          </section>
          <hr className="border-gray-800 my-12" />

          <section>
            <h2>hard won lessons in life.</h2>

            <p className="text-gray-400 mb-6">
              inspired by "principles" by{" "}
              <ChaosLink href="https://substack.com/home/post/p-154681274">
                nabeel
              </ChaosLink>
              .
            </p>

            <ol className="space-y-4 leading-relaxed list-decimal ">
              <li>
                Your time estimates are always wrong. Always multiply your
                expectations by 2x at minimum. You always need more time than
                you think.
              </li>
              <li>
                Regret is an intoxicating force. It can either kill you or push
                you to prove yourself. Always choose the latter.
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
                Chasing achievement/quick wins is a losing game people learn too
                late. Always aim for the long-term.
              </li>
              <li>
                Select close friends with the same criteria level of scrutiny
                you'd use to evaluate a romantic partner. Ask: "do I feel
                electrified around them?" Never exceed 3-4 close friends.
              </li>
              <li>
                Stick with your convictions ruthlessly. People will tell you
                you're too much. If the group does not align, leave rather than
                conform for the sake of harmony.
              </li>
              <li>
                Sticking with habits means creating artificial routines for
                yourself: drink the same coffee, wear the same clothes, eat the
                same thing, run every morning. Most people are too flexible with
                this, you need to stick to this like military doctrine.
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
                Prioritize fulfillment (note this is different from pleasure and
                happiness) over optics early on. Passion and obsession will
                naturally lead to recognition, much more than the other way
                around.
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
                assymetrically good at (<i>based on talk from Alex Karp</i>).
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
