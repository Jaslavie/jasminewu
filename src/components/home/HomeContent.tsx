"use client";

import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
import TextReveal from "@/components/home/Animations/TextReveal";
import React, { useEffect, useState } from "react";
import ChaosLink from "@/components/ui/Link";

export default function HomeContent() {
  const [showContent, setShowContent] = useState(false);
  const [showThesisPara1, setShowThesisPara1] = useState(false);
  const [showThesisPara2, setShowThesisPara2] = useState(false);
  const [showThesisPara3, setShowThesisPara3] = useState(false);
  const [showThesisPara4, setShowThesisPara4] = useState(false);
  const [showDivider, setShowDivider] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    // Listen for TextReveal completion
    const handleTextRevealComplete = () => {
      setShowContent(true);

      // Stagger the reveals with intervals
      setTimeout(() => setShowThesisPara1(true), 100); // First paragraph
      setTimeout(() => setShowThesisPara2(true), 200); // Second paragraph
      setTimeout(() => setShowThesisPara3(true), 300); // Third paragraph
      setTimeout(() => setShowThesisPara4(true), 400); // Fourth paragraph
      setTimeout(() => setShowDivider(true), 450); // HR divider
      setTimeout(() => setShowSocials(true), 500); // Social links
      setTimeout(() => setShowPlanet(true), 700); // Planet last
    };

    window.addEventListener("textRevealComplete", handleTextRevealComplete);

    return () => {
      window.removeEventListener(
        "textRevealComplete",
        handleTextRevealComplete
      );
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center pl-[10%]">
        {/* Header Section */}
        <div className="home-content mb-12 max-w-2xl w-[38vw]">
          {/* Main header */}
          <div className="mb-2">
            <TextReveal />
          </div>
          {/* Currently in */}
          <p
            className="text-base"
            style={{
              opacity: showContent ? 1 : 0,
              visibility: showContent ? "visible" : "hidden",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            currently in{" "}
            <Link href="https://www.palantir.com/">Washington D.C. ↗</Link>
          </p>
        </div>

        {/* Thesis Content */}
        <div
          className="thesis-content space-y-6 max-w-2xl w-[38vw]"
          style={{
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
            isn't smarter AI. It's interfaces where humans and AI think and act
            as one. I currently experiment with human-AI collaboration for
            battlefield ops at{" "}
            <Link href="https://www.palantir.com/platforms/gotham/">
              Palantir
            </Link>{" "}
            and <Link href="https://www.gallatin.ai/">Gallatin AI</Link>. I'm a{" "}
            <Link href="https://research.contrary.com/">Contrary</Link> and{" "}
            <Link href="https://www.8vc.com/fellowships">8VC Fellow</Link>, and
            study CS & Neuroscience at UC Irvine.
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
            including the world's largest AI hackathon, joined{" "}
            <Link href="https://skydeck.berkeley.edu/">Berkeley Skydeck</Link>{" "}
            to build AI agents for 911 dispatchers, hosted the largest{" "}
            <Link href="https://designatuci.com/designathon/24">
              design hackathon
            </Link>{" "}
            in the U.S, and presented{" "}
            <Link href="https://drive.google.com/file/d/1DkKtDtQf2yCWEBN7kKnwssy7x6IParCf/view">
              research
            </Link>{" "}
            on adaptive navigation tools for spacewalks to the European Space
            Agency.
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
            Occasionally, I rabbit hole into{" "}
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
          className="border-gray-800 mt-8 w-[38vw]"
          style={{
            opacity: showDivider ? 1 : 0,
            visibility: showDivider ? "visible" : "hidden",
            transition: "opacity 0.5s ease-in-out",
          }}
        />

        {/* Social Links at Bottom */}
        <div
          className="social-links-bottom mt-8 space-y-2"
          style={{
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
      <div className="flex items-center justify-center">
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
