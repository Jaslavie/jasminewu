"use client";

import Link from "next/link";

interface CardProps {
  number: string;
  title: string;
  description: string;
  link: string;
  className?: string;
}

export default function tCard({
  number,
  title,
  description,
  link,
  className = "",
}: CardProps) {
  return (
    <div className={`project-item border-b border-gray-800 pb-8 ${className}`}>
      <div className="flex items-start space-x-6">
        <span className="text-gray-500 text-sm font-mono">{number}.</span>
        <div className="flex-1">
          <h3 className="text-white font-serif italic text-xl mb-2 hover:text-gray-300 transition-colors">
            <Link href={link}>{title} →</Link>
          </h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
