'use client';

import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Link from "@/components/ui/Link";

// stores main about me

export default function Thesis() {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false
        });

        // Reveal title first
        sr.reveal('.thesis-title', {
            delay: 200
        });

        // Reveal paragraphs sequentially
        sr.reveal('.thesis-paragraph, .links-section', {
            delay: 400,
            interval: 200
        });
    }, []);

    return (
        <section className="px-[30%] py-20">
            <h2 className="thesis-title text-text-heading font-serif italic text-[38px] md:text-[42px] mb-8">
                thesis.
            </h2>

            <div className="space-y-6">
                <p className="thesis-paragraph">
                    The hardest problems demand clarity under chaos. 
                    The next frontier isn't smarter AI. It's interfaces where humans and AI think and act as one. 
                    I'm currently designing decision support systems for battlefield ops at{' '}
                    <Link href="https://www.palantir.com/platforms/gotham/">Palantir</Link> and{' '}
                    <Link href="https://www.gallatin.ai/">Gallatin AI</Link>. 
                    I'm a{' '}
                    <Link href="https://research.contrary.com/">Contrary</Link> and{' '}
                    <Link href="https://www.8vc.com/fellowships">8VC Fellow</Link>, 
                    and study cs & neuroscience at UC Irvine.
                </p>

                <p className="thesis-paragraph">
                    Previously, I competed in a{' '}
                    <Link href="https://devpost.com/jaslavie">hackathon</Link> every weekend and won 15, 
                    including the world's largest AI hackathon. I joined{' '}
                    <Link href="https://skydeck.berkeley.edu/">Berkeley Skydeck</Link> to build AI agents for 911 dispatchers,
                    hosted the largest{' '}
                    <Link href="https://designatuci.com/designathon/24">design hackathon</Link> in the U.S, 
                    and presented my{' '}
                    <Link href="https://drive.google.com/file/d/1DkKtDtQf2yCWEBN7kKnwssy7x6IParCf/view">research</Link> on 
                    adaptive navigation tools for spacewalks to the European Space Agency.
                </p>

                <p className="thesis-paragraph">
                    As a kid I built cardboard claw machines and sold handmade clothes in my living room. 
                    Augmenting perception and beauty felt like alchemy. Henceforth, I made it my life's mission 
                    to master (and elevate) the art of human experience.
                </p>

                <p className="thesis-paragraph">
                    Occasionally, I rabbit hole into{' '}
                    <Link href="https://www.pinterest.com/Jaslavie/wwii/">WW2 history</Link>, {' '}
                    <Link href="https://substack.com/home/post/p-156802970">write</Link>, 
                    and linger in classical art museums. My favorite painting is the{' '}
                    <Link href="https://docs.google.com/document/d/1CzlYHEmkBuTxmPa-5-PeTGrjZgd06Puz3gIr9QQ1f1c/edit?tab=t.0">Blue Boy</Link> and 
                    my favorite book is{' '}
                    <Link href="https://en.wikipedia.org/wiki/Mastery_(book)">Mastery</Link>.
                </p>

                <hr className="border-t border-gray-800 my-8" />

                <div className="links-section space-y-4">
                    <div className="flex flex-row gap-4 items-center">
                        <span className="text-text-body">linkedin</span>
                        <Link href="https://linkedin.com/in/jaslavie">/jaslavie ↗ </Link> 
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <span className="text-text-body">substack</span>
                        <Link href="https://substack.com/@jaslavie">@jaslavie ↗</Link>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <span className="text-text-body">github</span>
                        <Link href="https://github.com/jaslavie/">@jaslavie ↗</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}