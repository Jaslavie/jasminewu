import Image from "next/image";
import LightProjectPage from "@/components/projects/LightProjectPage";
import { Citation } from "@/components/ui/Tooltip";
import ChaosLink from "@/components/ui/Link";

function ProjectImageBlock({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="relative w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="h-auto w-full object-contain"
        />
      </div>
      {caption ? (
        <p className="text-[12px] leading-[1.45] text-black/50">{caption}</p>
      ) : null}
    </div>
  );
}

export default function NasaProject() {
  return (
    <LightProjectPage
      title="spacesuit display for lunar navigation"
      meta="2025 / HCI research & XR engineering"
      imageSrc="/projects/nasa/rockYardTestingThumbnail.png"
      imageAlt="NASA spacesuit display interface"
      actions={[
        {
          href: "https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.SpaceCHI.2025.25",
          label: "Research paper",
          external: true,
        },
      ]}
    >
      <div className="w-full border-t-[2px] border-black/10" />

      <p className="text-black">
        Living on a different planet has captured the human imagination for
        centuries
        <Citation
          number={1}
          content={
            <>
              Westward in 1845, when it was called Manifest Destiny and a nation
              decided the continent was owed to it. Outward in 1969, when a man
              left a bootprint on the Moon. Outward still, in{" "}
              <ChaosLink href="https://en.wikipedia.org/wiki/Interstellar_(film)">
                films
              </ChaosLink>{" "}
              that throw us into existential episodes on life beyond earth.{" "}
              <ChaosLink href="https://philosophynow.org/issues/61/Space_Exploration_Humanitys_Single_Most_Important_Moral_Imperative">
                Space Exploration
              </ChaosLink>
              - Humanity's final moral imperative.
            </>
          }
        />
        . Americans have not sent astronauts on the moon since the 1960s. The
        next human space missions are scheduled to begin in 2027
        <Citation
          number={2}
          content={
            <>
              *Update.{" "}
              <ChaosLink href="https://www.nasa.gov/news-release/nasa-welcomes-record-setting-artemis-ii-moonfarers-back-to-earth/">
                Artemis II
              </ChaosLink>{" "}
              moon landings were completed in April 2026.
            </>
          }
        />
        . When the time comes, astronauts will be tasked to perform up to 4
        extravehicular activities in 5 days
        <Citation
          number={3}
          content={
            <>
              AKA - these are a series of procedures and tasks that astronauts
              perform during spacewalks.{" "}
              <ChaosLink href="https://en.wikipedia.org/wiki/Extravehicular_activity">
                Read more
              </ChaosLink>
            </>
          }
        />
        with the same minute-by-minute ground controls from earth.
      </p>

      <p className="text-black">
        Over 6 months, I worked with the Johnson Space Center to research and
        prototype an XR decision support tool for [greater] astronaut autonomy
        on these next series of space flights. I built a system to pull biometric,
        telemetry, and terrain data from live spacesuit data and surface this
        on an XR display (simulating a HMD).
      </p>

      <p className="text-black">
        These concepts were presented to the Flight Director and Astronaut Deniz
        Burnham.
      </p>

      <ProjectImageBlock
        src="/projects/nasa/nasaHeader.png"
        alt="Presenting to the NASA review panel"
        caption="Astronaut Deniz Burnham and flight director pictured."
      />

      <ProjectImageBlock
        src="/projects/nasa/DeansLeadershipCouncil.png"
        alt="Presenting the work at UC Irvine"
        caption="Presenting to the Dean Council of UC Irvine's CS School."
      />

      <ProjectImageBlock
        src="/projects/nasa/testingRockyard.png"
        alt="Testing with NASA engineers at the Rock Yard"
        caption="Debriefing and testing with NASA engineers at the JSC Rock Yard."
      />
    </LightProjectPage>
  );
}
