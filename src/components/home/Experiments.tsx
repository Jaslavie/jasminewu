'use client';

import Card from "@/components/home/Card";

export default function Experiments() {
    return (
        <section className="px-[30%] py-20">
            <h2 className="thesis-title text-text-heading font-serif italic text-[38px] md:text-[42px] mb-8">
                    experiments.
            </h2>

            <div className="space-y-6">
                <Card 
                    number="01"
                    title="decision support system for lunar traversal"
                    description="exploring shared autonomy between AI and human operator on the moon."
                    tag="Space CHI 2025"
                    href="/nasa-suits"
                />
            </div>
        </section>
    )
}