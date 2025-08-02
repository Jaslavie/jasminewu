"use client";

import Link from "@/components/ui/Link";
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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Text Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="space-y-6 max-w-2xl py-[2v]"
          style={{
            fontFamily: "var(--font-eb-garamond), 'EB Garamond', serif",
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
            <Link href="https://skydeck.berkeley.edu/">Berkeley Skydeck</Link>,{" "}
            ran the largest U.S.{" "}
            <Link href="https://designatuci.com/designathon/24">
              designathon
            </Link>
            , and <Link href="https://spacechi.media.mit.edu/">presented</Link>{" "}
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
            <Link href="https://substack.com/home/post/p-156802970">write</Link>
            , and linger in classical art museums. My favorite painting is{" "}
            <i>
              <Link href="https://docs.google.com/document/d/1CzlYHEmkBuTxmPa-5-PeTGrjZgd06Puz3gIr9QQ1f1c/edit?tab=t.0">
                the Blue Boy
              </Link>
            </i>{" "}
            .
          </h3>

          {/* Footer Links */}
          <div className="pt-8 flex flex-row items-center gap-2 font-serif">
            <h3 className="text-gray-400 mb-2">Elsewhere</h3>
            <h3>·</h3>
            <h3 className="flex space-x-6">
              <Link href="https://linkedin.com/in/jaslavie">Linkedin</Link>
              <Link href="https://x.com/jaslavie">X</Link>
              <Link href="https://github.com/jaslavie">Github</Link>
            </h3>
          </div>
        </div>
      </div>

      {/* Right Section - Photo Collage */}
      <div className="flex-1 flex items-center justify-center p-8">
        <img
          src="/aboutMePhotos.svg"
          alt="Photo collage"
          className="w-full h-[90%] max-w-lg object-contain"
        />
      </div>
    </div>
  );
}
