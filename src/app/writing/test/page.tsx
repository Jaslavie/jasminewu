"use client";

import {
  WritingContainer,
  WritingHeader,
  WritingContent,
  WritingSection,
} from "@/components/writing/WritingComponents";
import ChaosLink from "@/components/ui/Link";

export default function TestPost() {
  const postData = {
    title: "test post",
    date: "Feb 20, 2025",
    readingTime: "5",
    featuredImage: {
      url: "/writing/athens.png",
      alt: "Test featured image",
    },
  };

  return (
    <WritingContainer>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <WritingSection title="Core Principles">
          <p>
            History fascinates me. It's a lived experiment of humanity's attempt
            at creating longevity, and ultimately something (a manuscript,
            empires, or entire governance systems) that outlives.
          </p>

          <p>
            There is no natural reason to do this. Our animalistic instinct
            tells us to do things just to survive. Yet in its midst, we have
            masters (be it da vinci, napoleon, or the like) that have a
            grudging, irrational desire to create a legacy that ripples beyond
            their generation.
          </p>

          <p>
            This is a core ethos I want to bring into my work. I want to build
            systems that endure beyond myself: whether that be software
            products, new human-ai collaboration frameworks, or the first{" "}
            <ChaosLink href="https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/">
              NASA SUITS
            </ChaosLink>{" "}
            research team at my university.
          </p>
        </WritingSection>

        <WritingSection title="Mastery">
          <p>
            My favorite book is{" "}
            <ChaosLink href="https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X">
              Mastery
            </ChaosLink>
            . In a culture that galvanizes prestige, quick wins, and flamboyant
            displays of accomplishment — I firmly believe that the next era will
            elevate deep thinkers, masters of their field, and enduring systems.
          </p>

          <blockquote className="border-l-4 border-gray-600 pl-4 italic my-6">
            "We should promote commitment over optionality, specialism over
            generalism, focus over shallow achievement — all while maintaining
            our ethos over adaptability."
          </blockquote>
        </WritingSection>

        <WritingSection title="Hard Won Lessons">
          <p>
            Inspired by "principles" by{" "}
            <ChaosLink href="https://substack.com/home/post/p-154681274">
              nabeel
            </ChaosLink>
            .
          </p>

          <ol className="space-y-4 pl-6 list-decimal">
            <li>
              Your time estimates are always wrong. Always multiply your
              expectations by 2x at minimum.
            </li>
            <li>
              Regret is an intoxicating force. It can either kill you or push
              you to prove yourself.
            </li>
            <li>
              Get really good at reading b.s. in people. This is often disguised
              as prestige and status.
            </li>
            <li>
              You know much, much less than you think. You only realize this
              when you start surrounding yourself with the top 1%.
            </li>
            <li>
              Chasing achievement/quick wins is a losing game people learn too
              late. Always aim for the long-term.
            </li>
          </ol>
        </WritingSection>
      </WritingContent>
    </WritingContainer>
  );
}
