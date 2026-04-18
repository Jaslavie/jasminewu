import ChaosLink from "@/components/ui/Link";
import { Citation } from "@/components/ui/Tooltip";
import LightProjectPage from "@/components/projects/LightProjectPage";

export default function Project() {
  return (
    <LightProjectPage
      title="palantir - military intelligence analysis"
      meta="Summer 2025 / Product design"
      imageSrc="/projects/palantir_hover_after.png"
      imageAlt="Palantir project preview"
      actions={[
        {
          href: "https://www.palantir.com/platforms/gotham/",
          label: "Gotham",
          external: true,
        },
        {
          href: "https://x.com/ssankar/status/1784707894614646863",
          label: "Target Workbench",
          external: true,
        },
      ]}
    >
      <div className="w-full border-t-[2px] border-black/10" />
      <p className="italic text-black">"all warfare is based on deception."</p>

      <p className="text-black">
        Winning depends on knowing which signals to trust when the battlefield
        is built to mislead. Ironically, intelligence
        <Citation
          number={1}
          content={
            <>
              The 2003 Iraq failure was defined by institutional{" "}
              <ChaosLink href="https://en.wikipedia.org/wiki/Tower_of_Babel">
                fragmentation
              </ChaosLink>
              : a 15-agency collective acting as a "Community in name only",
              allowed 112 separate reports to be generated from a single
              unvetted source.
            </>
          }
        />
        arrives as fragmented artifacts, trapped in siloed rows of a database
        stripped of the relationships that give them meaning.
      </p>

      <p className="text-black">
        In the biblical story of Babel
        <Citation
          number={2}
          content={
            <>
              The Tower of Babel is a biblical myth where humanity loses the
              ability to communicate & share ideas, preventing construction on a
              massive tower.{" "}
              <ChaosLink href="https://en.wikipedia.org/wiki/Tower_of_Babel">
                Read more
              </ChaosLink>
              .
            </>
          }
        />
        , experts are tasked with building a tower. The catch is that each
        speaks a different language, and thus the system fails from lack of
        shared understanding. Military intelligence breaks down in the same way
        when expert analysts produce individually credible accounts without a
        shared interpretation.
      </p>

      <p className="text-black">
        My objective at Palantir was to design the translator between those
        experts. I designed an analysis framework to establish semantic
        relationships across intelligence nodes and analyze cascading effects on
        the system. I also optimized the UX of Target Workbench more broadly
        and designed a framework for visualizing operational uncertainty in the
        simulation platform.{" "}
        <ChaosLink href="mailto:jasminqw@uci.edu">
          Please reach out to learn more.
        </ChaosLink>
      </p>
    </LightProjectPage>
  );
}
