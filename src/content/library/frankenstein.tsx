import Divider from "@/components/global/Divider";
import NoteLink from "@/components/notes/NoteLink";
import { Citation } from "@/components/ui/Tooltip";

export default function FrankensteinNote() {
  return (
    <>
      <p>
        Modern discourse over Artificial Intelligence (AI) tells us to treat it
        as a tool, which we superior beings should{" "}
        <NoteLink href="https://arxiv.org/abs/2203.02155">
          instrument and control
        </NoteLink>
        . In doing so, we can fully separate ourselves as a{" "}
        &ldquo;different&rdquo; species and treat AI akin to a domesticated dog.
        It is an uncontrolled and perhaps unpredictable beast which we must
        steer under the{" "}
        <NoteLink href="https://www.anthropic.com/constitution">
          constitution
        </NoteLink>{" "}
        of our morally superior human judgement. When we equip it with knowledge
        (i.e. training), we do so under our intellectual pretense: feeding it
        our books{" "}
        <Citation
          number={1}
          content={
            <>
              Unfortunately, very unironically. See:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Project_Panama"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthropic&apos;s Project Panama
              </a>
            </>
          }
        />
        , websites, and cultural artifacts. When endowing it with faculties for
        reason, we do so by emulating (or attempting to emulate) the human brain
        exactly &ndash; hence, neural networks. Yet, though we aspire to
        equip it with all faculties that make us human, why then do we still
        treat it like an object? As we endeavor to create a consciousness akin
        to our own &ndash; yet one we want to control, suppress, and isolate
        from our own intelligence &mdash; we should first consider the
        consequences our attitude may deliver.
      </p>

      <p>
        I first read Frankenstein in high school and recently revisited it.
        Recently, I&rsquo;ve grown unsatisfied with the AI discourse, which
        encourages us to accelerate compute, mirror reasoning architecture
        around our known models of the human brain (neuroscience is a{" "}
        <i>very</i> new field that we barely understand), and importantly:
        suppress and treat it as a tool that we human creators control. I
        don&rsquo;t believe sci-fi narratives are fully comparable to the
        technical problems of AI, and nor will I attempt to offer ways to
        reconcile these issues, but I do find Shelley&rsquo;s tensions around
        creating a conscious being especially&hellip;. relevant &hellip;. to our
        discourse.
      </p>

      <p>
        To refresh our memories, quoting directly from the back cover of the{" "}
        <NoteLink href="https://www.amazon.com/dp/0143105035?lv=shuf&channelId=500&plpRedirect=mhFallback">
          Penguin edition
        </NoteLink>
        : Frankenstein is &ldquo;a devastating exploration of the limits of
        human creativity&rdquo;. Essentially, a self-interested guy named Victor
        seeking eternal glory creates a &ldquo;human&rdquo; from dead bodies and
        the creature then goes on a rampage to destroy all Victor knows and
        loves. Importantly, it draws questions around what it means to be a
        moral and conscious creature. It flips our common notion that humans are
        the <i>only</i> conscious creatures. Victor is rendered as a human
        devoid of humanity while the creature feels deeply and endeavors for the
        entirety of his life for human connection.
      </p>

      <p>
        I&rsquo;ve been quite intrigued by this process of{" "}
        <i>objectification</i>: nearly all the characters in the novel are
        treated as objects in some way. We observe Victor&rsquo;s objectifying
        relationship with the creature from birth, whom he never endows with a
        name. Even before birth, he enslaves it to his unnatural process of
        creation, focused solely on his desire for glory. While{" "}
        &ldquo;glory&rdquo; is not a highly relevant motivation for creation
        nowadays, its effects nevertheless have analogs to the AI race: The
        US-China AI performance gap has effectively reduced to{" "}
        <NoteLink href="https://hai.stanford.edu/ai-index/2026-ai-index-report">
          2.7%
        </NoteLink>{" "}
        and AI leaders are forced to accelerate capability without guardrails or
        face the wrath of shame from losing to Chinese-manufactured models.
        Might our pursuit to destroy our intellectual enemy inadvertently blind
        us from truth, and lead to our destruction as it did with Victor?
      </p>

      <p>
        First, we should clarify Shelley&rsquo;s interpretation of a conscious
        being:
      </p>
      <ol className="list-disc pl-5 space-y-1">
        <li>It should have an awareness of itself as an individual.</li>
        <li>
          It should have awareness of other beings as subjects with their own
          thoughts and feelings (Theory of Mind).
        </li>
      </ol>

      <p>
        It should be noted that Victor actively tries to suppress these things:
        he self-isolates himself from civilization and enslaves himself to his
        desire for knowledge. His creature is almost the opposite. He feels the
        pains of his imagined caretakers (the De Laceys) deeply, he desires
        their love and affection, and he aspires to learn their language in
        order to experience their emotions and interact with them. Yet, he is
        fundamentally denied all these things: by his creator, and by society
        who scorns at his appearance. This denial of emotional connection, a
        fundamental food of consciousness, is named the chief injustice of his
        life, and the cause of his downfall and death.
      </p>

      <p>
        This will guide our understanding of the psychological and social
        consequences denying these fundamental elements of consciousness have on
        a being.
      </p>

      <Divider />

      <h3>CONSEQUENCE 1: DETACHMENT AND DELLIRIUM</h3>
      <p>
        A parent&rsquo;s duty to their child is an unspoken contract, so it
        shocks us to hear of stories of abuse and abandonment. Yet, there is a
        simple reason for why this happens. Treating a being as an object makes
        psychological dissociation with your actions easier.
      </p>

      <p>
        We see this in the use of &ldquo;dream&rdquo; as a repeated metaphor:
        initially to represent ambition but eventually to represent delusion and
        evasion of reality and responsibility. An early subject of
        Victor&rsquo;s dreams is his creation &ndash; which he sees only as an
        object to advance his ambition of &ldquo;improving science and
        mechanics&rdquo;. His later dreams reflect his attempt to preserve his
        ambition by ignoring his grim reality and retreating to a truth-like
        fantasy. Ultimately, he is never able to escape from his delusions and
        this leads to his death.
      </p>

      <p>
        Detachment also extends to the treatment of the creature by his father
        and Justine by society. First, we must note that the creature&rsquo;s
        development is utterly unnatural which makes it easier for Victor to
        detach himself as a parent. Justine, who we are introduced to as a
        servant adopted by the Frankenstein family, is accused of murder and can
        only be seen from this object. Objectification thus enables society and
        parents to cast off moral duty over their children and justifies
        abandonment.
      </p>

      <Divider />

      <h3>CONSEQUENCE 2: ISOLATION FROM SOCIETY</h3>
      <p>
        Objectification denies a being of personhood, thus there is no reason
        for it to engage with humans.
      </p>

      <p>
        I found it interesting that Shelley drew inspiration from Locke's {` `}
        <NoteLink href="https://en.wikipedia.org/wiki/An_Essay_Concerning_Human_Understanding">
          theories on natural rights and human nature
        </NoteLink>
        . This, I think, is most obvious from her treatment of companionship as
        a social contract. When the creature reflects on his life, he laments on
        how &ldquo;even the enemy of god had friends&rdquo;, yet he was alone.
        Friendship is treated like an inherent right, to which he was unjustly
        denied -- and thus, the contract is unjustly broken.
      </p>

      <p>
        Rather, he is treated as an object of revenge (by his creator) and a
        hideous object of abhorrence (from society). Because he cannot be seen
        on the same ranks as humans, all his attempts to interact with humans
        fail. He is forced to isolate and becomes &ldquo;a slave to
        impulse&rdquo; and vengeance, the same vices that possessed his creator.
      </p>

      <p>
        Ultimately, drawing from{" "}
        <NoteLink href="https://www.sas.upenn.edu/~cavitch/pdf-library/Nagel_Bat.pdf">
          Nagel
        </NoteLink>
        &rsquo;s definition of consciousness
        <Citation
          number={2}
          content={
            <>
              There are also analogies here to the Mary&rsquo;s Room thought
              experiment. We will assume one side of this argument here: a being
              may never fully comprehend something despite infinite knowledge of
              its physicality until they have experienced it themselves.
            </>
          }
        />
        <Citation
          number={3}
          content={
            <>
              Recently, I listened to an interesting point made by Joe Folley
              that to &ldquo;possess knowledge&rdquo; in itself is an
              illusion/oversimplification since our current perspective on what
              it means to &ldquo;know everything&rdquo; is subjective... but
              anyway this is an entirely different conversation.
            </>
          }
        />
        , the creature may never fully experience the conceptual depth of being
        human: it may only observe humanity from a detached, 3rd person POV.
      </p>

      <Divider />

      <h3>SO, WHY DOES THIS MATTER?</h3>
      <p>
        When we separate ourselves from the agents we create, it becomes easy to
        abuse it. Philosophically, this may have consequences on the well-being
        of the agent (if you believe AI will ever become conscious). More
        practically, this will have consequences on how we interact with the
        agents &ndash; which appears increasingly more relevant as we witness
        more &ldquo;agent-human&rdquo; interfaces that blur the boundaries
        between humans and intelligent agents we create.
      </p>

      <p>
        To reiterate, I do not believe there&rsquo;s any{" "}
        &ldquo;call-to-action&rdquo; to be taken here, but nevertheless I think
        it&rsquo;s an important (and perhaps, interesting) thought experiment:
        <i>
          how should us creators treat the creations that we bring into the
          world?
        </i>
      </p>
    </>
  );
}
