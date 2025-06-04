"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CurationsContent() {
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === "undefined") return;

    // Dynamic import to avoid SSR issues
    import("scrollreveal").then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;

      const sr = ScrollReveal({
        origin: "bottom",
        distance: "20px",
        duration: 1000,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        reset: false,
      });

      sr.reveal(".curations-header", {
        delay: 200,
      });

      sr.reveal(".curations-description", {
        delay: 400,
      });

      sr.reveal(".list-container", {
        delay: 600,
      });
    });
  }, []);

  const mediaItems = [
    { title: "Interstellar", link: "https://www.imdb.com/title/tt0816692/" },
    {
      title: "Hacksaw Ridge",
      link: "https://www.imdb.com/title/tt2119532/?ref_=nv_sr_srsg_1_tt_5_nm_2_in_0_q_hacksa",
    },
    {
      title: "Hamilton, the musical",
      link: "https://www.youtube.com/watch?v=Ic7NqP_YGlg",
    },
    {
      title: "The Pianist",
      link: "https://www.imdb.com/title/tt0253474/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520pian",
    },
    {
      title: "Dune II",
      link: "https://www.imdb.com/title/tt15239678/?ref_=nv_sr_srsg_2_tt_5_nm_1_in_0_q_Dune%2520ii",
    },
    { title: "Imitation Game", link: "https://www.imdb.com/title/tt2084970/" },
    {
      title: "Pride and Prejudice",
      link: "https://www.imdb.com/title/tt0414387/",
    },
  ];

  const writingItems = [
    {
      title: "Mastery - Robert Greene",
      link: "https://www.amazon.com/Mastery-Robert-Greene/dp/014312417X",
    },
    {
      title: "Ironies of Automation - Lisanne Bainbridge",
      link: "https://ckrybus.com/static/papers/Bainbridge_1983_Automatica.pdf",
    },
    {
      title: "Julius Caesar - Shakespeare",
      link: "https://www.amazon.com/Julius-Caesar-Folger-Shakespeare-Library/dp/0743482743/",
    },
    {
      title: "How to do Great Work - Paul Graham",
      link: "https://paulgraham.com/greatwork.html",
    },
    {
      title: "Live vs Dead Players - Sam Burja",
      link: "https://samoburja.com/live-versus-dead-players/",
    },
    {
      title: "Moth Fund Manifesto",
      link: "https://www.mothfund.com/manifesto",
    },
    {
      title: "Childhoods of Exceptional People",
      link: "https://substack.com/inbox/post/82323090",
    },
    {
      title: "The Science of Genius",
      link: "https://www.scientificamerican.com/article/the-science-of-genius2/",
    },
  ];

  const historyItems = [
    {
      title: "The Blue Boy - Thomas Gainsborough",
      link: "https://www.huntington.org/blue-boy",
    },
    {
      title: "D-Day FDR Prayer",
      link: "https://www.youtube.com/watch?v=IMy1ZLyaSqk&list=PLrvljGPnb6yWcRrURLXtfkWlN3J5MswoP&index=3",
    },
    {
      title: "the Genius of Napoleon",
      link: "https://towardsdatascience.com/napoleon-was-the-best-general-ever-and-the-math-proves-it-86efed303eeb",
    },
    {
      title: '"The Steel of American Resolve", 9/11',
      link: "https://www.youtube.com/watch?v=0218zWdyPS8&list=PLrvljGPnb6yWcRrURLXtfkWlN3J5MswoP&index=1",
    },
    {
      title: "Rise and Fall of the Third Reich",
      link: "https://www.amazon.com/Rise-Fall-Third-Reich-ebook/dp/B07XD76H41/",
    },
    {
      title: "The Diary of Anne Frank",
      link: "https://www.amazon.com/Anne-Frank-Diary-Young-Girl/dp/B007Z332A0/",
    },
    {
      title: "Flight 93 Revolt",
      link: "https://www.youtube.com/watch?v=x5i-tvvHX68",
    },
  ];

  return (
    <div className="px-16 py-20 max-w-6xl">
      {/* Header */}
      <div className="curations-header mb-8">
        <p className="text-gray-400 text-sm mb-4">
          I like to think of things like a scrapbook: nodes of artifacts to be
          collected, then organized into a connected graph.
        </p>
      </div>

      {/* Description */}
      <div className="curations-description mb-12 space-y-4 w-full md:w-10% ">
        <p>
          Thus, I enjoy curating experiences — be it places traveled, historical
          documents, or 1940s era photographs.
        </p>
        <p>
          I like things that are slightly out of our attention, stripped to its
          essence, and raw.
        </p>
        <p>This is a collection of artifacts that resonate with me.</p>
      </div>

      {/* Categories Header */}
      <div className="flex justify-between items-center mb-12 text-center">
        <div className="flex-1">
          <h2 className="text-white font-serif italic text-xl">curations</h2>
        </div>
        <div className="flex-1">
          <h2 className="text-white font-serif italic text-xl">history</h2>
        </div>
        <div className="flex-1">
          <h2 className="text-white font-serif italic text-xl">writing</h2>
        </div>
        <div className="flex-1">
          <h2 className="text-white font-serif italic text-xl">media</h2>
          <div className="mt-4 space-y-2">
            <Link
              href="https://www.imdb.com/title/tt0816692/"
              target="_blank"
              className="text-gray-400 hover:text-white text-sm transition-colors flex items-center justify-end"
            >
              interstellar →
            </Link>
            <Link
              href="https://www.imdb.com/title/tt2119532/"
              target="_blank"
              className="text-gray-400 hover:text-white text-sm transition-colors flex items-center justify-end"
            >
              ralph lauren →
            </Link>
          </div>
        </div>
      </div>

      {/* Lists Container */}
      <div className="list-container">
        <p className="text-gray-400 text-sm mb-8">Sources of inspiration.</p>

        <div className="grid grid-cols-3 gap-12">
          {/* Media */}
          <div className="list-item">
            <h3 className="text-white mb-6">‣ Media</h3>
            <div className="space-y-3">
              {mediaItems.map((item, index) => (
                <p key={index} className="flex items-center justify-between">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                  <span className="text-gray-600 text-xs">→</span>
                </p>
              ))}
            </div>
          </div>

          {/* Writings */}
          <div className="list-item">
            <h3 className="text-white mb-6">‣ Writings</h3>
            <div className="space-y-3">
              {writingItems.map((item, index) => (
                <p key={index} className="flex items-center justify-between">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                  <span className="text-gray-600 text-xs">→</span>
                </p>
              ))}
            </div>
          </div>

          {/* History */}
          <div className="list-item">
            <h3 className="text-white mb-6">‣ History</h3>
            <div className="space-y-3">
              {historyItems.map((item, index) => (
                <p key={index} className="flex items-center justify-between">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                  <span className="text-gray-600 text-xs">→</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
