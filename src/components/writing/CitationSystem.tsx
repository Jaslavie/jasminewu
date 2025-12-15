"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Context for managing citation hover state
interface CitationContextType {
  hoveredCitation: number | null;
  setHoveredCitation: (num: number | null) => void;
  sidenotes: Record<number, string>;
}

const CitationContext = createContext<CitationContextType | null>(null);

// hook for client to use context from parent
// provider will broadcast all tracked changes here
export function useCitationContext() {
  const context = useContext(CitationContext);
  if (!context) {
    throw new Error(
      "useCitationContext must be used within a CitationProvider"
    );
  }
  return context;
}

// provider tracks child component interactions (ex; hover)
// interaction states are sent to ALL children
interface CitationProviderProps {
  children: ReactNode;
  sidenotes: Record<number, string>;
}

export function CitationProvider({
  children,
  sidenotes,
}: CitationProviderProps) {
  const [hoveredCitation, setHoveredCitation] = useState<number | null>(null);

  return (
    <CitationContext.Provider
      value={{
        hoveredCitation,
        setHoveredCitation,
        sidenotes,
      }}
    >
      {children}
    </CitationContext.Provider>
  );
}

// Citation superscript component
interface CitationProps {
  num: number;
  href: string;
}

export function Citation({ num, href }: CitationProps) {
  const { setHoveredCitation } = useCitationContext();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="citation"
      onMouseEnter={() => setHoveredCitation(num)} // highlighted referenced text
      onMouseLeave={() => setHoveredCitation(null)}
    >
      [{num}]
    </a>
  );
}

// each paragraph gets its own container for citations
interface CitationParagraphProps {
  children: ReactNode;
  citations: number[];
}

export function CitationParagraph({
  children,
  citations,
}: CitationParagraphProps) {
  const { sidenotes, hoveredCitation } = useCitationContext();

  return (
    <div className="relative">
      {/* Main paragraph content */}
      {/* Citation components stored here*/}
      <div>{children}</div>

      {/* Sidenote container - aligned with this paragraph, stacks citations vertically */}
      <div className="hidden lg:block absolute left-full top-0 ml-8 w-56 space-y-4 pointer-events-auto">
        {citations.map((num) => (
          <div
            key={num} // key matches with citation block
            className={`p-3 transition-all duration-200 border ${
              hoveredCitation === num
                ? "border-white opacity-100"
                : "border-transparent"
            } ${
              hoveredCitation !== null && hoveredCitation !== num
                ? "opacity-40"
                : "opacity-100"
            }`}
          >
            <p
              className="text-sm leading-relaxed text-gray-400"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              <span className="font-semibold">{num}.</span> {sidenotes[num]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
