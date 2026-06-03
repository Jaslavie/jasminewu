import NoteLink from "@/components/notes/NoteLink";
import {
  NoteCaption,
  NoteFigure,
  NoteImage,
} from "@/components/notes/NoteMedia";
import Divider from "@/components/global/Divider";

export default function AestheticsContent() {
  return (
    <>
      <p>
        I believe beautiful things have a set of{" "}
        <NoteLink href="https://www.nationalgallery.org.uk/learning/teachers-and-schools/picture-in-focus/cross-curricular-ideas/mathematics">
          explicit principles
        </NoteLink>{" "}
        that you can point to when explaining why they are beautiful, similar to
        elegant mathematical theories.
      </p>
      <p>
        I am a big fan of making collections.
        <a
          className="citation"
          href="https://www.pinterest.com/Jaslavie/curations/"
        >
          [1]
        </a>
        <a className="citation" href="https://www.corner.inc/jaslavie">
          [2]
        </a>
        <a
          className="citation"
          href="https://open.spotify.com/playlist/19QUXiP2voCUncSUFfGJMw?si=f971a272b8ba42b3"
        >
          [3]
        </a>
        This is a living collection of things I love.
      </p>

      <Divider />

      <h3>Things</h3>
      <ul>
        <li>
          Raw terminal interfaces. Recently, I've been liking one-line websites
          that feel like linux shells.
          <ul>
            <li>
              I have also been liking the cyberpunk feel of sci-fi programming
              interfaces (ex: Tron: Ares).
            </li>
          </ul>
        </li>
        <li>
          Scandinavian architecture — the design philosophy follows the idea of
          &ldquo;lagom&rdquo;: finding the goldilocks equilibrium between beauty
          and function.
          <ul>
            <li>
              In architecture: natural elements (wood, marble) are exposed in
              their natural form. Ex: we imagine trees as tall and vertical, so
              furniture often follows the same form factor. Thin wooden panels
              (alternating in color and texture) create the impression of
              separation, even if the space itself is one giant rectangle.
            </li>
            <li>
              In music: atmospheric music distilled to essential beats and
              rhythms that match nature.
            </li>
            <li>
              I also love how Minecraft was adapted from Swedish / Nordic
              tradition.
              <NoteFigure>
                <NoteImage
                  src="/notes/lacabra-interior.jpg"
                  alt="Scandinavian-inspired cafe interior"
                  width={817}
                  height={1024}
                />
                <NoteCaption>
                  My favorite coffee shop in nyc:{" "}
                  <NoteLink href="https://lacabra.com/">La Cabra</NoteLink>
                </NoteCaption>
              </NoteFigure>
            </li>
          </ul>
        </li>
        <li>
          Aesthetics of influence that rally crowds around an idea (propaganda,
          speeches, uniforms).
        </li>
        <li>
          Analog systems &amp; primitives: digital alarm clocks, analog watches,
          paper notebooks, blank work docs without templates or simplification.
        </li>
        <li>
          Obscure things that do not beg for attention. Somewhat rough around
          the edges and overlooked, yet still command attention and trust. See
          brands.
        </li>
        <li>
          Primitive artifacts that endure. Ex: paper passports, physical clipper
          cards, handwritten letters, index cards. Objects that carry weight and
          physical grounding, yet can be destroyed in the next moment. Keeping
          these safe becomes a deeply personal act.
        </li>
        <li>
          Classical art movements — baroque and the weaponization of art as a
          method of influence and spiritual zeal to rally the masses. What is
          the human idea of perfection? How did we define the
          &ldquo;ideal&rdquo; during that period of time?
        </li>
        <li>
          Hidden nooks — Lake Tahoe during sunset. Orange orchard at the
          Huntington Gardens.
        </li>
        <li>The thought taken to type or handwrite old notes and documents.</li>
        <li>
          I like when people perform tasks with traditional practices: coffee
          shop owners brewing pour-over coffee instead of using massive
          machines. Coffee that keeps its original bean flavor.
        </li>
      </ul>

      <Divider />

      <h3>Brands</h3>
      <ul>
        <li>
          <NoteLink href="https://www.mothfund.com/manifesto">
            Moth fund
          </NoteLink>{" "}
          — an analogy of moths away from the spotlight. i.e. elevating unspoken
          or unflashy ideas that linger in the background; brands that are
          niche, not necessarily universally appealing.
          <ul>
            <li>
              An analogy for <em>spotlight</em>: building companies to stay on
              trend (ex: SF founder mode hype).
            </li>
            <li>
              <em>Moths</em>:{" "}
              <NoteLink href="https://www.youtube.com/watch?v=H4dGpz6cnHo&list=PLVAh-MgDVqvDUEq6qDXqORBioE4Yhol_z">
                Backrooms
              </NoteLink>{" "}
              series of short films turned movie.
            </li>
          </ul>
        </li>
        <li>
          Public transit trains in NY &amp; DC — though I dislike it as a form
          of transportation, I admire its raw and primitive nature. Not polished
          or packaged up in pretty benches or wallpaper.
        </li>
        <li>
          This Japanese restaurant in Torrance with no signage
          — raw interior (holes in the wall, bare-bone utensils, low publicity),
          unrecognizable. I like how it strips experience to its crux: not
          flashy visuals and brand incentives, but dining at its essence — a
          shared meal with friends.
        </li>
        <li>
          Substack — raw thoughts that don't need polish.
          Evolution of thought in real time.
        </li>
        <li>Patagonia — low-aesthetic. Durable. Raw. Functional.</li>
        <li>
          Military field gear — influence conveyed through fashion, stripped to
          its raw functional units without unnecessary pizzazz.
        </li>
      </ul>

      <Divider />
      <h3>Artifacts</h3>
      <ul>
        <li>Repurposed <NoteLink href="https://x.com/anduriltech/status/1824145559499968944">war propaganda</NoteLink></li>
        <li>Military uniforms</li>
        <li>Historical/battlefield artifacts</li>
        <li>Historical war rooms of the 40s</li>
        <li>
          Historical archives (ex: radio transcripts from the 40s, tape
          recordings, manuscripts).
        </li>
        <li>Old homes turned into museums</li>
        <li>
          I wish there were a way to extract the bridges from songs and nothing
          else.
        </li>
      </ul>
    </>
  );
}
