"use client"

import React, { useEffect, useRef } from 'react';
import CascadeReveal from '@/components/home/Animations/CascadeReveal';

interface ASCIIArtAnimationProps {
  className?: string;
  fontSize?: number;
  color?: string;
  activeColor?: string;
  opacity?: number;
  rippleRadius?: number;
  glitchDuration?: number;
  letterSpacing?: string;
}

const ASCIIArtAnimation: React.FC<ASCIIArtAnimationProps> = ({
  className = '',
  fontSize = 27.62,
  color = 'rgba(255, 255, 255, 0.506)',
  activeColor = '#fff',
  opacity = 0.85,
  rippleRadius = 50,
  glitchDuration = 1000,
  letterSpacing = '0.02em'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const art = `                                                                                       _.oo.
                                      _ .u [[/;:,.                     _.odMMM'
                                .o888uu[[[ / ;:  -.      _.@p^       MM.
                             oN8888uu[[[ /; -:: - .                 dp^
                           dNMMN8u[[[ [/; : - - .         .o@p
                        MMMN888uu[[/; : : - .    o@^
                        NNMN888uu[[[ / ~ .o@^
                         88888888uu[ [ [/o@^-. .
                       oI8888uu[ [ /o@P^:- - . .
                .@^    YUU[[/o@^; : :- - - . .
           OMP        ^/o@p: ; ; : - - - . .
      .dMM         o@   ^;:  : - - - . . .
   dMMM@^                    ^^^
 YMUP^
   ^^`;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Split the art into individual characters and wrap each in a span
    const wrappedArt = art.split('\n').map(line => 
      line.split('').map(char => 
        char === ' ' ? ' ' : `<span class="char" data-original-char="${char}">${char}</span>`
      ).join('')
    ).join('\n');
    
    container.innerHTML = wrappedArt;

    // Wrap each character in a container that preserves dimensions
    const chars = container.querySelectorAll('.char') as NodeListOf<HTMLSpanElement>;
    chars.forEach(char => {
      // Create wrapper and store original dimensions
      const wrapper = document.createElement('span');
      wrapper.className = 'char-wrapper';
      
      // Force layout calculation to get correct dimensions
      const rect = char.getBoundingClientRect();
      wrapper.style.width = `${rect.width}px`;
      wrapper.style.height = `${rect.height}px`;
      wrapper.style.display = 'inline-block';
      wrapper.style.position = 'relative';
      wrapper.style.textAlign = 'center';
      
      // Wrap the character
      char.parentNode?.insertBefore(wrapper, char);
      wrapper.appendChild(char);
    });

    function findNearbyChars(sourceChar: HTMLSpanElement, radius: number): HTMLSpanElement[] {
      const sourceRect = sourceChar.getBoundingClientRect();
      const sourceCenter = {
        x: sourceRect.left + sourceRect.width / 2,
        y: sourceRect.top + sourceRect.height / 2
      };

      return Array.from(container.querySelectorAll('.char')).filter(char => {
        if (char === sourceChar) return false;
        const rect = char.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        const distance = Math.sqrt(
          Math.pow(center.x - sourceCenter.x, 2) + 
          Math.pow(center.y - sourceCenter.y, 2)
        );
        return distance <= radius;
      }) as HTMLSpanElement[];
    }

    function simpleGlitch(element: HTMLSpanElement): void {
      if ((element as any).isGlitching) return;
      (element as any).isGlitching = true;
      
      const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>";
      let iterations = 0;
      const maxIterations = 5;
      
      const interval = setInterval(() => {
        element.textContent = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        iterations++;
        
        if (iterations >= maxIterations) {
          clearInterval(interval);
          // Always revert to the stored original character
          element.textContent = element.dataset.originalChar || '';
          setTimeout(() => {
            (element as any).isGlitching = false;
          }, glitchDuration);
        }
      }, 200);
    }

    // Add event listeners
    const handleMouseEnter = (char: HTMLSpanElement) => {
      if ((char as any).isAnimating) return;
      (char as any).isAnimating = true;
      
      // Animate hovered character
      char.classList.add('active');
      simpleGlitch(char);

      // Ripple effect
      const nearbyChars = findNearbyChars(char, rippleRadius);
      nearbyChars.forEach((nearChar, index) => {
        const delay = index * 100;
        setTimeout(() => {
          nearChar.classList.add('active');
          simpleGlitch(nearChar);
          
          // Reset nearby char after animation
          setTimeout(() => {
            nearChar.classList.remove('active');
            nearChar.textContent = nearChar.dataset.originalChar || '';
          }, glitchDuration);
        }, delay);
      });

      // Reset hovered char after animation
      setTimeout(() => {
        char.classList.remove('active');
        char.textContent = char.dataset.originalChar || '';
        (char as any).isAnimating = false;
      }, glitchDuration);
    };

    chars.forEach(char => {
      const listener = () => handleMouseEnter(char);
      char.addEventListener('mouseenter', listener);
      
      // Store the listener for cleanup
      (char as any)._listener = listener;
    });

    // Cleanup function
    return () => {
      chars.forEach(char => {
        if ((char as any)._listener) {
          char.removeEventListener('mouseenter', (char as any)._listener);
        }
      });
    };
  }, [rippleRadius, glitchDuration]);

  const styles: React.CSSProperties = {
    color: '#666',
    whiteSpace: 'pre',
    fontSize: `${fontSize}px`,
    lineHeight: 1,
    cursor: 'default',
    position: 'relative',
    fontWeight: 'normal',
    opacity,
    letterSpacing,
    fontFamily: '"EB Garamond", serif'
  };

  return (
   
     

      <CascadeReveal delay={3000} direction="left-to-right">
      
      <div 
        style={styles}
        className={className}
      >
        {art}
      </div>
    </CascadeReveal>
  );
};

export default ASCIIArtAnimation;