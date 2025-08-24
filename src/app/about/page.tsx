"use client";

import Link from "@/components/ui/Link";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experiences";
import React, { useEffect, useState } from "react";

export default function About() {
  const [showPara1, setShowPara1] = useState(false);
  const [showPara2, setShowPara2] = useState(false);
  const [showPara3, setShowPara3] = useState(false);
  const [showPara4, setShowPara4] = useState(false);

  useEffect(() => {
    // Staggered animation on component mount
    setTimeout(() => setShowPara1(true), 200);
    setTimeout(() => setShowPara2(true), 400);
    setTimeout(() => setShowPara3(true), 600);
    setTimeout(() => setShowPara4(true), 800);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-0 sm:mt-12 lg:mt-0">
          <div
            className="space-y-4 sm:space-y-6 max-w-2xl mx-auto lg:mx-0"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 300,
              opacity: showPara1 || showPara2 || showPara3 || showPara4 ? 1 : 0,
              visibility:
                showPara1 || showPara2 || showPara3 || showPara4
                  ? "visible"
                  : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <h3
              style={{
                opacity: showPara1 ? 1 : 0,
                visibility: showPara1 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              I design interfaces for humans to interact with intelligence and
              research the AI that drives them. The hardest problems demand
              clarity under chaos. The next frontier isn't smarter AI. It's
              radically fluid interfaces where humans and machines think and
              decide together. I build these systems at{" "}
              <Link href="https://www.palantir.com/platforms/gotham/">
                Palantir
              </Link>{" "}
              and <Link href="https://www.gallatin.ai/">Gallatin AI</Link>. I'm
              a <Link href="https://research.contrary.com/">Contrary</Link> and{" "}
              <Link href="https://www.8vc.com/fellowships">8VC Fellow</Link>,
              studying CS & Neuroscience at UCI.
            </h3>

            <h3
              style={{
                opacity: showPara2 ? 1 : 0,
                visibility: showPara2 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              Previously, I won 15{" "}
              <Link href="https://devpost.com/jaslavie">hackathons</Link>{" "}
              including the world's largest AI hackathon, built 911 dispatch
              agents at{" "}
              <Link href="https://skydeck.berkeley.edu/">Berkeley Skydeck</Link>
              , ran the largest U.S.{" "}
              <Link href="https://designatuci.com/designathon/24">
                designathon
              </Link>
              , built spacesuit displays with NASA, and{" "}
              <Link href="https://spacechi.media.mit.edu/">presented</Link>{" "}
              adaptive navigation{" "}
              <Link href="https://drive.google.com/file/d/1DkKtDtQf2yCWEBN7kKnwssy7x6IParCf/view">
                simulations
              </Link>{" "}
              for astronauts to the European Space Agency.
            </h3>

            <h3
              style={{
                opacity: showPara3 ? 1 : 0,
                visibility: showPara3 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              As a kid I built cardboard claw machines and sold handmade clothes
              in my living room. Augmenting perception and beauty felt like
              alchemy. Henceforth, I made it my life's mission to master (and
              elevate) the art of human experience.
            </h3>

            <h3
              style={{
                opacity: showPara4 ? 1 : 0,
                visibility: showPara4 ? "visible" : "hidden",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              In my free time, I rabbit hole into{" "}
              <Link href="https://www.pinterest.com/Jaslavie/wwii/">
                WW2 history
              </Link>
              ,{" "}
              <Link href="https://substack.com/home/post/p-156802970">
                write
              </Link>
              , and linger in classical art museums. My favorite painting is{" "}
              <i>
                <Link href="https://docs.google.com/document/d/1CzlYHEmkBuTxmPa-5-PeTGrjZgd06Puz3gIr9QQ1f1c/edit?tab=t.0">
                  the Blue Boy.
                </Link>
              </i>{" "}
              Grew up in Orange County with short stints in DC and LA.
            </h3>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 font-serif">
              <h3 className="text-gray-400">Elsewhere</h3>
              <span className="hidden sm:inline">·</span>
              <h3 className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <Link href="https://linkedin.com/in/jaslavie">Linkedin</Link>
                <Link href="https://x.com/jaslavie">X</Link>
                <Link href="https://github.com/jaslavie">Github</Link>
              </h3>
            </div>
          </div>
        </div>

        {/* Right Section - Photo Collage */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12">
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
          <div className="flex items-center lg:mb-12">
            <h2 className="text-[16px] sm:text-[18px] mr-4 font-serif text-gray-500">
              Past life
            </h2>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
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
