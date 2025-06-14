"use client";

import Link from "next/link";

export default function SocialLinks() {
  const socialLinks = [
    { href: "https://x.com/jaslavie", label: "X" },
    { href: "https://linkedin.com/in/jaslavie", label: "linkedin" },
    { href: "https://substack.com/@jaslavie", label: "substack" },
    { href: "https://github.com/jaslavie/", label: "github" },
  ];

  return (
    <div className="hidden md:flex fixed top-[4%] md:top-[4%] right-[6%] md:right-[4%] flex-col items-end space-y-2 z-20">
      {/* Social links */}
      <div className="flex flex-col items-end space-y-1">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
