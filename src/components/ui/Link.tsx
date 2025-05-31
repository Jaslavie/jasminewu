"use client";

import React, { useEffect , useRef} from "react";
import Link from "next/link";

interface GlitchEffectProps {
    element: HTMLElement;
    options?: {
        characters?: string;
        speed?: number;
        duration?: number;
        fadeSpeed?: number;
    }
}

class GlitchEffect {
    private element: HTMLElement;
    private originalText: string;
    private originalStyles: Partial<CSSStyleDeclaration>;
    private wrapper: HTMLSpanElement;
    private options: Required<GlitchEffectProps["options"]>;
    private isGlitching: boolean;

    //---- constructor ----//
    constructor(element: HTMLElement, options: GlitchEffectProps['options'] = {}) {
        this.element = element;
        this.originalText = element.textContent || '';
        this.isGlitching = false;

        // Default options
        this.options = {
        characters: "!@#$%^&*()_+:,.",
        speed: 50,
        duration: 150,
        fadeSpeed: 100,
        ...options
        };

        // Create wrapper
        this.wrapper = document.createElement('span');
        this.wrapper.style.display = 'inline-block';
    
        // Set original styles
        const computedStyle = window.getComputedStyle(element);
        this.originalStyles = {
        fontFamily: computedStyle.fontFamily,
        fontSize: computedStyle.fontSize,
        fontWeight: computedStyle.fontWeight,
        fontStyle: computedStyle.fontStyle,
        color: computedStyle.color,
        };

        // Initialize wrapper
        if (!element.contains(this.wrapper)) {
        this.wrapper.textContent = this.originalText;
        element.textContent = '';
        element.appendChild(this.wrapper);
        }

        Object.assign(this.wrapper.style, this.originalStyles);
    }

    //---- helper functions ----//
    start() {
        if (this.isGlitching) return;
        this.isGlitching = true;

        let iterations = 0;
        const maxIterations = 4;

        const interval = setInterval(() => {
            this.wrapper.textContent = this.originalText
                .split("")
                .map(char => char === " " ? char : this.options.characters[
                    Math.floor(Math.random() * this.options.characters.length)
                ])
                .join("");
                
            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(interval);
                this.wrapper.textContent = this.originalText;
                this.isGlitching = false;
            }
        }, this.options.speed);
    }
    stop() {
        this.isGlitching = false;
        this.wrapper.textContent = this.originalText;
        Object.assign(this.wrapper.style, this.originalStyles);
    }
}

//---- component ----//
export default function ChaosLink({ href, children }: { href: string, children: React.ReactNode }) {
    const linkRef = useRef<HTMLAnchorElement>(null); // ref to the link element
    const glitchEffectRef = useRef<GlitchEffect | null>(null); // ref to the glitch effect

    // init the glitch effect
    useEffect(()=> {
        // initialize the glitch effect when the link is mounted
        if (linkRef.current && !glitchEffectRef.current) {
            glitchEffectRef.current = new GlitchEffect(linkRef.current);
        }

        // cleanup the glitch effect when the link is unmounted
        return () => {
            if (glitchEffectRef.current) {
                glitchEffectRef.current.stop();
                glitchEffectRef.current = null;
            }
        };
    }, []);

    // event handlers
    const handleMouseEnter = () => {
        glitchEffectRef.current?.start();
      };
    
      const handleMouseLeave = () => {
        glitchEffectRef.current?.stop();
      };
    
    // render the link
    return (
        <Link 
            href={href} 
            className="link"
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </Link>
    )
}