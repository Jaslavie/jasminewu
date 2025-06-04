// animaiton for ascii art
'use client';

import React, { useEffect, useRef } from 'react';

interface CascadeRevealProps {
    children: React.ReactNode;
    direction?: 'left-to-right' | 'top-to-bottom';
    delay?: number;
    duration?: number;
    className?: string;
}

export default function CascadeReveal({
    children,
    direction = 'left-to-right',
    delay = 0,
    duration = 1000,
    className = ''
  }: CascadeRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      // Clear existing content
      container.innerHTML = '';
  
      // Convert content to string if it's ASCII art
      const text = typeof children === 'string' ? children : container.textContent || '';
      const lines = text.split('\n');
  
      // Create wrapped content
      const wrappedContent = lines.map((line, lineIndex) => {
        const lineWrapper = document.createElement('div');
        lineWrapper.style.display = 'block';
        lineWrapper.style.whiteSpace = 'pre';
  
        const chars = line.split('');
        chars.forEach((char, charIndex) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.opacity = '0';
          span.style.display = 'inline-block';
          
          // Calculate delay based on position
          const columnIndex = direction === 'left-to-right' ? charIndex : lineIndex;
          const animationDelay = `${delay + (columnIndex * 20)}ms`;
          
          span.style.animation = `revealText ${duration}ms forwards`;
          span.style.animationDelay = animationDelay;
          
          lineWrapper.appendChild(span);
        });
  
        return lineWrapper;
      });
  
      wrappedContent.forEach(line => container.appendChild(line));
    }, [children, direction, delay, duration]);
  
    return (
      <div 
        ref={containerRef} 
        className={className}
      >
        {children}
      </div>
    );
  }