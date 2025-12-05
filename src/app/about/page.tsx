"use client";

import Link from "@/components/ui/Link";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import React from "react";

export default function About() {
  const heroFade = useFadeInOnScroll({ delay: 0 });
  const photoFade = useFadeInOnScroll({ delay: 200 });
  const pastLifeFade = useFadeInOnScroll({ delay: 0 });
  const experienceFade = useFadeInOnScroll({ delay: 200 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center sm:px-4 lg:px-4 py-8 lg:py-0 sm:mt-12 lg:mt-0">
          <div
            ref={heroFade.elementRef}
            className="space-y-4 sm:space-y-6 w-[50vw] mx-auto lg:mx-0"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 300,
              ...heroFade.fadeInStyle,
              fontSize: "20px",
            }}
          >
            <h3>
              I design simulation environments for humans to co-reason with
              machines and research the AI that drives them. The hardest
              problems demand clarity under chaos. I believe this clarity comes
              from radically fluid interfaces where humans can role-play the
              future before it happens.
            </h3>
            <h3>
              Currently engineering ML models for battlefield simulations at{" "}
              <Link href="https://www.gallatin.ai/">Gallatin AI</Link> and studying CS
              & Neuroscience at UCI. Before this, I spent a stint at{" "}
              <Link href="https://www.palantir.com/platforms/gotham/">
                Palantir
              </Link>{" "}
              and{" "}
              <Link href="https://www.nasa.gov/johnson/exhibits/extravehicular-activities/">
                NASA
              </Link>
              , and dabbled in startups at{" "}
              <Link href="https://contrary.com/">Contrary</Link> and{" "}
              <Link href="https://www.8vc.com/">8VC</Link>.
            </h3>
            <h3>
              I'm an experimentalist at heart. I've won 15{" "}
              <Link href="https://devpost.com/jaslavie">hackathons</Link>{" "}
              including the world's largest AI hackathon, built 911 dispatch
              agents at{" "}
              <Link href="https://skydeck.berkeley.edu/">Berkeley Skydeck</Link>
              , ran the largest U.S.{" "}
              <Link href="https://designatuci.com/designathon/24">
                designathon
              </Link>
              , prototyped spacesuit displays, and{" "}
              <Link href="https://spacechi.media.mit.edu/">presented</Link>{" "}
              lunar route-planning{" "}
              <Link href="https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25">
                simulations
              </Link>{" "}
              at the European Space Agency.
            </h3>

            <h3>
              As a kid I built cardboard claw machines and sold handmade clothes
              in my living room. Augmenting perception and beauty felt like
              alchemy. Henceforth, I made it my life's mission to master (and
              elevate) the art of human experience.
            </h3>

            <h3>
              You can find me sampling cortados at coffee shops,{" "}
              <Link href="https://substack.com/home/post/p-156802970">
                writing
              </Link>
              , or lingering on a portrait at a museum. My favorite painting is{" "}
              <i>
                <Link href="https://docs.google.com/document/d/1CzlYHEmkBuTxmPa-5-PeTGrjZgd06Puz3gIr9QQ1f1c/edit?tab=t.0">
                  the Blue Boy
                </Link>.
              </i>
            </h3>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 font-serif">
              <h3 className="text-gray-400">Elsewhere</h3>
              <span className="hidden sm:inline mb-2">·</span>
              <h3 className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <Link href="https://linkedin.com/in/jaslavie">Linkedin</Link>
                <Link href="https://x.com/jaslavie">X</Link>
                <Link href="https://github.com/jaslavie">Github</Link>
                <Link href="https://drive.google.com/file/d/1q3_SWKf6QXmLmmfI0TeOVNipnBiXw10k/view?usp=sharing">
                  Resume
                </Link>
              </h3>
            </div>
          </div>
        </div>

        {/* Right Section - Photo Collage */}
        <div
          ref={photoFade.elementRef}
          className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12"
          style={photoFade.fadeInStyle}
        >
          <img
            src="/aboutMePhotos.svg"
            alt="Photo collage"
            className="w-full h-auto max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Past Life Section */}
      <div className="px-6 sm:px-8 lg:px-[10vw] pt-12 pb-[12vh]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={pastLifeFade.elementRef}
            className="flex items-center lg:mb-12"
            style={pastLifeFade.fadeInStyle}
          >
            <h2 className="text-[16px] sm:text-[18px] mr-4 font-serif text-gray-500">
              Past life
            </h2>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Experience Cards */}
          <div
            ref={experienceFade.elementRef}
            className="space-y-8 lg:space-y-12"
            style={experienceFade.fadeInStyle}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                date={experience.date}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
