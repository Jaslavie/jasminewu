"use client";

import Link from "@/components/ui/Link";
import Planet from "@/components/misc/Planet";
import TextReveal from "@/components/home/Animations/TextReveal";
import React, { useEffect } from "react";

export default function HomeContent() {
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    // Dynamic import to avoid SSR issues
    import("scrollreveal").then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;

      const sr = ScrollReveal({
        duration: 1000,
        reset: false,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
      });

      sr.reveal(".home-content p", {
        delay: 2600,
      });

      sr.reveal("#Planet", {
        delay: 3000,
      });

      sr.reveal(".thesis-content", {
        delay: 3200,
      });

      sr.reveal(".social-links-bottom", {
        delay: 3400,
      });
    });
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center px-16 py-20">
        {/* Header Section */}
        <div className="home-content mb-16 max-w-2xl">
          <div className="mb-8">
            <TextReveal />
          </div>
          <p className="text-base">
            currently in{" "}
            <Link href="https://www.palantir.com/">Washington D.C. ↗</Link>
          </p>
        </div>

        {/* Thesis Content */}
        <div className="thesis-content space-y-6 max-w-2xl">
          <p>
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

          <p>
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

          <p>
            As a kid I built cardboard claw machines and sold handmade clothes
            in my living room. Augmenting perception and beauty felt like
            alchemy. Henceforth, I made it my life's mission to master (and
            elevate) the art of human experience.
          </p>

          <p>
            Occasionally, I rabbit hole into{" "}
            <Link href="https://www.pinterest.com/Jaslavie/wwii/">
              WW2 history
            </Link>
            ,{" "}
            <Link href="https://substack.com/home/post/p-156802970">write</Link>
            , and linger in classical art museums. My favorite painting is{" "}
            <Link href="https://docs.google.com/document/d/1CzlYHEmkBuTxmPa-5-PeTGrjZgd06Puz3gIr9QQ1f1c/edit?tab=t.0">
              <i>the Blue Boy</i>
            </Link>{" "}.
          </p>
        </div>

        {/* Social Links at Bottom */}
        <div className="social-links-bottom mt-16 space-y-4">
          <div className="flex flex-row gap-4 items-center">
            <span className="text-gray-400">linkedin</span>
            <Link href="https://linkedin.com/in/jaslavie">/jaslavie ↗</Link>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <span className="text-gray-400">substack</span>
            <Link href="https://substack.com/@jaslavie">@jaslavie ↗</Link>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <span className="text-gray-400">github</span>
            <Link href="https://github.com/jaslavie/">@jaslavie ↗</Link>
          </div>
        </div>
      </div>

      {/* Right Side ASCII Art */}
      <div className="w-1/3 flex items-center justify-center">
        <div id="Planet">
          <Planet />
        </div>
      </div>
    </div>
  );
}
