import NoteLink from "@/components/notes/NoteLink";

export default function LittleInfinitiesContent() {
  return (
    <>
      <p>
        When I graduated from high school a few eons ago, I referenced a quote
        from &ldquo;The Fault in Our Stars&rdquo; by John Green. In the book,
        the main character Hazel gives a{" "}
        <NoteLink href="https://www.youtube.com/watch?v=h2-XuKZX0JY">
          eulogy
        </NoteLink>{" "}
        to her dying lover Augustus:
      </p>

      <blockquote>
        There are infinite numbers between 0 and 1. There&apos;s .1 and .12 and
        .112 and an infinite collection of others. Some infinities are bigger
        than other infinities. There are days, many of them, when I resent the
        size of my unbounded set. But, Gus, my love, I cannot tell you how
        thankful I am for our little infinity. You gave me a forever within the
        numbered days, and I&apos;m grateful.
      </blockquote>

      <p>
        Beyond the corny love story and math theory (which I have no authority
        to speak to), the premise that life is worth living because it's finite
        is somewhat radical -- especially in our culture that treats{" "}
        <NoteLink href="https://www.nytimes.com/2026/08/13/opinion/interesting-times-bryan-johnson.html">
          delaying death
        </NoteLink>{" "}
        as a principle scientific pursuit. The finite-ness of mortality is to be
        feared. This is never more visceral than when you're on your deathbed,
        as Hazel and Augustus were, so they should have surely felt this too,
        no?
      </p>
      <p>
        According to a{" "}
        <NoteLink href="https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument">
          mathematical proof
        </NoteLink>
        , there is an infinite set between 0 and 1.
      </p>
    </>
  );
}
