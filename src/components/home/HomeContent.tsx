"use client";

import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
// import TextReveal from "@/components/home/Animations/TextReveal";
import React, { useEffect, useState } from "react";
import ChaosLink from "@/components/ui/Link";

export default function HomeContent() {
  // const [showContent, setShowContent] = useState(false);
  const [showThesisPara1, setShowThesisPara1] = useState(false);
  const [showThesisPara2, setShowThesisPara2] = useState(false);
  const [showThesisPara3, setShowThesisPara3] = useState(false);
  const [showThesisPara4, setShowThesisPara4] = useState(false);
  const [showDivider, setShowDivider] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);

  useEffect(() => {
    // Automatically start the staggered animation on component mount
    setTimeout(() => setShowThesisPara1(true), 200); // First paragraph
    setTimeout(() => setShowThesisPara2(true), 400); // Second paragraph
    setTimeout(() => setShowThesisPara3(true), 600); // Third paragraph
    setTimeout(() => setShowThesisPara4(true), 800); // Fourth paragraph
    setTimeout(() => setShowDivider(true), 1000); // HR divider
    setTimeout(() => setShowSocials(true), 1200); // Social links
    setTimeout(() => setShowPlanet(true), 1400); // Planet last

    // Previous TextReveal event listener code - commented out
    // const handleTextRevealComplete = () => {
    //   setShowContent(true);
    //   setTimeout(() => setShowThesisPara1(true), 100);
    //   setTimeout(() => setShowThesisPara2(true), 200);
    //   setTimeout(() => setShowThesisPara3(true), 300);
    //   setTimeout(() => setShowThesisPara4(true), 400);
    //   setTimeout(() => setShowDivider(true), 450);
    //   setTimeout(() => setShowSocials(true), 500);
    //   setTimeout(() => setShowPlanet(true), 700);
    // };
    // window.addEventListener("textRevealComplete", handleTextRevealComplete);
    // return () => {
    //   window.removeEventListener("textRevealComplete", handleTextRevealComplete);
    // };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-full px-8 md:px-0">
      {/* left content Area */}
      <div className="flex-1 flex flex-col justify-start md:pl-[5%] max-w-full md:pb-0 md:space-y-10">
        {/* Header Section - Spacer for layout consistency */}
        <div className="home-content mb-10 md:mb-12 max-w-full md:max-w-2xl w-full md:w-[30vw]">
          {/* TextReveal component removed but keeping div structure for spacing */}
          <div className="mb-3">{/* Removed TextReveal component */}</div>
        </div>

        {/* Thesis Content */}
        <div
          className="thesis-content space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-6 max-w-full md:max-w-2xl w-full md:w-[30vw] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg"
          style={{
            fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
            lineHeight: "clamp(1.4, 1.6, 1.7)",
            opacity:
              showThesisPara1 ||
              showThesisPara2 ||
              showThesisPara3 ||
              showThesisPara4
                ? 1
                : 0,
            visibility:
              showThesisPara1 ||
              showThesisPara2 ||
              showThesisPara3 ||
              showThesisPara4
                ? "visible"
                : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <p
            style={{
              opacity: showThesisPara1 ? 1 : 0,
              visibility: showThesisPara1 ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            The hardest problems demand clarity under chaos. The next frontier
            isn't smarter AI. It's radically fluid interfaces where humans and
            machines make decisions as one. I design these at{" "}
            <Link href="https://www.palantir.com/platforms/gotham/">
              Palantir
            </Link>{" "}
            and <Link href="https://www.gallatin.ai/">Gallatin AI</Link>. I'm a{" "}
            <Link href="https://research.contrary.com/">Contrary</Link> and{" "}
            <Link href="https://www.8vc.com/fellowships">8VC Fellow</Link>, and
            study CS & Neuroscience at UCI.
          </p>

          <p
            style={{
              opacity: showThesisPara2 ? 1 : 0,
              visibility: showThesisPara2 ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            Previously, I won 15{" "}
            <Link href="https://devpost.com/jaslavie">hackathons</Link>{" "}
            including the world's largest AI hackathon, built 911 dispatch
            agents at{" "}
            <Link href="https://skydeck.berkeley.edu/">Berkeley Skydeck, </Link>{" "}
            ran the largest U.S.{" "}
            <Link href="https://designatuci.com/designathon/24">
              designathon
            </Link>
            , and <Link href="https://spacechi.media.mit.edu/">presented</Link>{" "}
            adaptive navigation{" "}
            <Link href="https://drive.google.com/file/d/1DkKtDtQf2yCWEBN7kKnwssy7x6IParCf/view">
              tools
            </Link>{" "}
            for astronauts to the European Space Agency.
          </p>

          <p
            style={{
              opacity: showThesisPara3 ? 1 : 0,
              visibility: showThesisPara3 ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            As a kid I built cardboard claw machines and sold handmade clothes
            in my living room. Augmenting perception and beauty felt like
            alchemy. Henceforth, I made it my life's mission to master (and
            elevate) the art of human experience.
          </p>

          <p
            style={{
              opacity: showThesisPara4 ? 1 : 0,
              visibility: showThesisPara4 ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            In my free time, I rabbit hole into{" "}
            <Link href="https://www.pinterest.com/Jaslavie/wwii/">
              WW2 history
            </Link>
            ,{" "}
            <Link href="https://substack.com/home/post/p-156802970">write</Link>
            , and linger in classical art museums. My favorite painting is{" "}
            <i>
              <Link href="https://docs.google.com/document/d/1CzlYHEmkBuTxmPa-5-PeTGrjZgd06Puz3gIr9QQ1f1c/edit?tab=t.0">
                the Blue Boy
              </Link>
            </i>{" "}
            .
          </p>
        </div>

        <hr
          className="border-gray-800 my-3 w-full md:w-[30vw]"
          style={{
            opacity: showDivider ? 1 : 0,
            visibility: showDivider ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        />

        {/* Social Links at Bottom */}
        <div
          className="social-links-bottom space-y-1 sm:space-y-2 text-sm sm:text-base"
          style={{
            fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
            opacity: showSocials ? 1 : 0,
            visibility: showSocials ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <p className="flex flex-row gap-2 items-center">
            <span>linkedin</span>
            <ChaosLink href="https://linkedin.com/in/jaslavie">
              /jaslavie ↗
            </ChaosLink>
          </p>

          <p className="flex flex-row gap-2 items-center">
            <span>substack</span>
            <ChaosLink href="https://substack.com/@jaslavie">
              @jaslavie ↗
            </ChaosLink>
          </p>

          <p className="flex flex-row gap-2 items-center">
            <span>github</span>
            <ChaosLink href="https://github.com/jaslavie/">
              @jaslavie ↗
            </ChaosLink>
          </p>
        </div>
      </div>

      {/* Right Side ASCII Art */}
      <div className="hidden md:flex items-center justify-center mt-12 md:mt-0 md:pr-[8%]">
        <div
          id="Planet"
          style={{
            opacity: showPlanet ? 1 : 0,
            visibility: showPlanet ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Planet />
        </div>
      </div>
    </div>
  );
}
