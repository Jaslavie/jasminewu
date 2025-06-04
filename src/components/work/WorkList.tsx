"use client";

import { useEffect, useState } from "react";
import Card from "@/components/work/Card";

export default function WorkList() {
  const [showTitle, setShowTitle] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Start animations with fast delays
    const timer1 = setTimeout(() => setShowTitle(true), 100);
    const timer2 = setTimeout(() => setShowCards(true), 250);

    // Cleanup timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="px-[30%] py-20">
      <h2
        className="thesis-title text-text-heading font-serif italic text-[38px] md:text-[42px] mb-8"
        style={{
          opacity: showTitle ? 1 : 0,
          visibility: showTitle ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        experiments.
      </h2>

      <div
        className="space-y-6"
        style={{
          opacity: showCards ? 1 : 0,
          visibility: showCards ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Card
          number="01"
          title="decision support system for lunar traversal"
          description="exploring shared autonomy between AI and human operator on the moon."
          link="/nasa-suits"
        />
      </div>
    </section>
  );
}
