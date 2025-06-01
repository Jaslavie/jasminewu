"use client";

import Planet from "@/components/misc/Planet";
import Link from "@/components/ui/Link";
import TextReveal from "@/components/misc/TextReveal";
import ScrollReveal from 'scrollreveal';
import React, { useEffect } from 'react';

export default function Hero() {
    useEffect(() => {
        const sr = ScrollReveal({
            // origin: 'bottom',
            // distance: '10px',
            duration: 1000,   
            reset: false,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        sr.reveal('p', {
            delay: 2600,
        });

        sr.reveal('#Planet', {
            delay: 3000,
        });
    }, []);

    return (
        <section className="relative min-h-screen min-w-screen overflow-hidden">
            {/* Video Background */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="background-animation.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="relative flex min-h-screen w-full z-10">
                {/* Left Content */}
                <div className="flex flex-col justify-center px-[10%] w-2/3">
                    {/* <h1 className="font-light text-[32px] text-text-heading md:text-[36px]">
                        Jasmine designs 
                        <span className="px-2 text-gradient font-serif italic text-[38px] md:text-[42px]">human-ai interfaces</span> 
                        that translate 
                        <span className="px-2 text-gradient font-serif italic text-[38px] md:text-[42px] chaos-text">chaos into order.</span>
                    </h1> */}
                    <TextReveal />
                    <p className="text-base mt-4">
                        currently in <Link href="https://www.palantir.com/">Washington D.C. ↗</Link>
                    </p>
                </div>

                {/* Right Content - Planet */}
                <div id="Planet" className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2">
                    <Planet />
                </div>
            </div>
        </section>
    );
}