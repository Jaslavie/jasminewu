'use client';

import Card from "@/components/work/Card";

export default function WorkList() {
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
                    link="/nasa-suits"
                />
            </div>
        </section>
    )
}