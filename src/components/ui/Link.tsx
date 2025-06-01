"use client";

import React, { useEffect, useRef } from "react";
import NextLink from "next/link";

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
    private originalWidth: number;

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

        // Get computed styles before creating wrapper
        const computedStyle = window.getComputedStyle(element);
        this.originalStyles = {
            fontFamily: computedStyle.fontFamily,
            fontSize: computedStyle.fontSize,
            fontWeight: computedStyle.fontWeight,
            fontStyle: computedStyle.fontStyle,
            color: computedStyle.color,
            textDecoration: computedStyle.textDecoration,
            textDecorationColor: computedStyle.textDecorationColor,
        };

        // Measure original text width using canvas
        this.originalWidth = this.measureTextWidth(this.originalText, computedStyle);

        // Create wrapper with fixed width
        this.wrapper = document.createElement('span');
        this.wrapper.style.display = 'inline-block';
        this.wrapper.style.width = `${this.originalWidth}px`;
        this.wrapper.style.textAlign = 'left';
        this.wrapper.style.overflow = 'hidden';
        this.wrapper.style.whiteSpace = 'nowrap';
        this.wrapper.style.marginBottom = '-6px';

        // Initialize wrapper
        if (!element.contains(this.wrapper)) {
            this.wrapper.textContent = this.originalText;
            element.textContent = '';
            element.appendChild(this.wrapper);
        }

        // Apply original styles to wrapper
        Object.assign(this.wrapper.style, this.originalStyles);
    }

    //---- helper functions ----//
    private measureTextWidth(text: string, computedStyle: CSSStyleDeclaration): number {
        // Create canvas for text measurement
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (!context) return 0;

        // Set font to match the element's computed style
        const fontStyle = computedStyle.fontStyle;
        const fontWeight = computedStyle.fontWeight;
        const fontSize = computedStyle.fontSize;
        const fontFamily = computedStyle.fontFamily;
        
        context.font = `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;
        
        // Measure the text
        const metrics = context.measureText(text);
        return Math.ceil(metrics.width);
    }

    start() {
        if (this.isGlitching) return;
        this.isGlitching = true;

        // Add hover styles
        this.wrapper.style.textDecoration = 'underline';
        this.wrapper.style.textDecorationColor = 'white';
        this.wrapper.style.textDecorationStyle = 'solid';

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

    // Method to get the measured width (useful for debugging)
    getOriginalWidth(): number {
        return this.originalWidth;
    }
}

//---- component ----//
export default function ChaosLink({ href, children }: { href: string, children: React.ReactNode }) {
    const linkRef = useRef<HTMLAnchorElement>(null); // ref to the link element
    const glitchEffectRef = useRef<GlitchEffect | null>(null); // ref to the glitch effect

    // Check if the link is external
    const isExternal = href.startsWith('http') || href.startsWith('https');

    useEffect(() => {
        if (linkRef.current && !glitchEffectRef.current) {
            // Small delay to ensure styles are fully computed
            setTimeout(() => {
                if (linkRef.current) {
                    glitchEffectRef.current = new GlitchEffect(linkRef.current);
                }
            }, 0);
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

    if (isExternal) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                ref={linkRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </a>
        );
    }

    return (
        <NextLink 
            href={href} 
            className="link"
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </NextLink>
    );
}