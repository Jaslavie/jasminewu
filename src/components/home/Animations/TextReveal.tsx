'use client';

import { useEffect, useRef } from 'react';

export default function TextReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear any existing content
        container.innerHTML = '';

        const text = "Jasmine designs interfaces for human-AI collaboration.";
        const words = text.split(" ");
        
        words.forEach((word, wordIndex) => {
            const wordWrapper = document.createElement("span");
            wordWrapper.style.display = "inline-block";
            wordWrapper.style.whiteSpace = "nowrap";
            wordWrapper.style.marginRight = "0.2em";
            
            const characters = word.split("");
            const isSpecialWord = word === "human-AI" || word === "interfaces" || word === "for" 
                            || word === "collaboration.";
            
            characters.forEach((char, charIndex) => {
                const span = document.createElement("span");
                span.textContent = char;
                
                if (isSpecialWord) {
                    span.classList.add("text-gradient", "font-serif", "italic", "text-[36px]");
                }
                
                const totalIndex = words.slice(0, wordIndex).join("").length + charIndex;
                span.style.opacity = "0";
                span.style.animation = "revealText 1s forwards";
                span.style.animationDelay = `${totalIndex * 40}ms`;
                wordWrapper.appendChild(span);
            });
            
            container.appendChild(wordWrapper);
        });
    }, []);

    return (
        <h1 
            ref={containerRef} 
            className="font-light text-[28px] text-text-heading md:text-[32px]"
        />
    );
}