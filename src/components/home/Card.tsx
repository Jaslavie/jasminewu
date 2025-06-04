'use client';

import Link from "@/components/ui/Link";

interface CardProps {
    number: string;
    title: string;
    description: string;
    tag: string;
    href?: string;
}

export default function Card({number, title, description, tag, href}: CardProps) {
    const TitleContent = () => (
        <h3 className="font-serif italic text-2xl md:text-3xl text-text-heading">
            {title}
            {href && <span className="text-white">→</span>}
        </h3>
    );

    return (
        <article className="group relative flex flex-col gap-4">
            
                {/* Number */}
                <span className="text-text-subheading text-sm text-[#ffffff71]">
                    {number}
                </span>

                {/* Title */}
                {href ? (
                    <Link href={href}>
                        <TitleContent />
                    </Link>
                ) : (
                    <TitleContent />
                )}

                {/* Description */}
                <p className="text-text-body">{description}</p>

                {/* tag */}
                <div className="inline-block px-3 py-1 bg-background/80 rounded text-sm text-text-subheading">
                    {tag}
                </div>
          
        </article>
    )
}