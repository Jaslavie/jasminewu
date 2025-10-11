"use client";

import Link from "next/link";
import React from "react";

interface ProjectHeaderProps {
  backLink?: string;
  backText?: string;
  category: string;
  title: string;
  description: string;
  logo?: string;
  metadata?: {
    role?: string[];
    duration?: string;
    team?: string[];
    results?: string[];
  };
  className?: string;
}

export default function ProjectHeader({
  backLink = "/",
  backText = "Back to work",
  category,
  title,
  description,
  logo,
  metadata,
  className = "",
}: ProjectHeaderProps) {
  return (
    <header className={`lg:px-[16vw] px-[8vw] pt-[12vh] pb-[2vh] ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href={backLink}
            className="flex items-center gap-2 text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
          >
            <span>←</span>
            <span>{backText}</span>
          </Link>
        </div>

        {/* Project Title Section */}
        <div className="mb-8">
          <p className="text-[rgba(255,255,255,0.5)] text-sm mb-2">
            {category}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-3xl text-white mb-6 leading-tight font-light font-[helvetica]">
            {title}
          </h1>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Project Description */}
        <div className="flex flex-col items-start lg:items-center lg:flex-row gap-8 mb-8">
          {/* Left - Logo */}
          <div className="lg:w-1/3">
            {logo && (
              <img
                src={logo}
                alt="Project logo"
                className="w-[200px] h-auto object-contain"
              />
            )}
          </div>

          {/* Right - Description */}
          <div className="lg:w-2/3">
            <p className="text-[rgba(255,255,255,0.75)] text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Project Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Role */}
          {metadata?.role && metadata.role.length > 0 && (
            <div>
              <h3 className="font-serif text-white mb-2">Role</h3>
              <ul>
                {metadata.role.map((role, index) => (
                  <li key={index} className="text-[rgba(255,255,255,0.5)] mb-1">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Duration */}
          {metadata?.duration && (
            <div>
              <h3 className="font-serif text-white mb-2">Duration</h3>
              <p className="text-[rgba(255,255,255,0.5)]">
                {metadata.duration}
              </p>
            </div>
          )}

          {/* Team */}
          {metadata?.team && metadata.team.length > 0 && (
            <div>
              <h3 className="font-serif text-white mb-2">Team</h3>
              <ul>
                {metadata.team.map((member, index) => (
                  <li key={index} className="text-[rgba(255,255,255,0.5)] mb-1">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results */}
          {metadata?.results && metadata.results.length > 0 && (
            <div>
              <h3 className="font-serif text-white mb-2">Results</h3>
              <ul>
                {metadata.results.map((result, index) => (
                  <li key={index} className="text-[rgba(255,255,255,0.5)] mb-1">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
