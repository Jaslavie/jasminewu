import Link from "next/link";
import Image from "next/image";

interface WritingContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function WritingContainer({
  children,
  className = "",
}: WritingContainerProps) {
  return (
    <div
      className={`min-h-screen relative flex justify-center px-[20vw] md:px-0 ${className}`}
    >
      <div className="p-16 md:p-[12%] max-w-full md:max-w-5xl w-full md:w-[70vw]">
        {children}
      </div>
    </div>
  );
}

interface WritingHeaderProps {
  title: string;
  date: string;
  readingTime?: string;
  featuredImage?: {
    url: string;
    alt?: string;
  };
  backHref: string;
  backText: string;
}

export function WritingHeader({
  title,
  date,
  readingTime,
  featuredImage,
  backHref,
  backText,
}: WritingHeaderProps) {
  return (
    <>
      {/* Back Navigation */}
      <Link
        href={backHref}
        className="text-gray-400 hover:text-white text-md transition-colors mb-16 inline-block border-b border-dotted border-gray-600 pb-1"
      >
        ← {backText}
      </Link>

      {/* Title and Date */}
      <div className="mb-12">
        <h1
          className="font-serif italic text-[32px] text-white mb-4"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          {title}
        </h1>
        <div
          className="flex items-center gap-4 text-gray-500 text-md"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          <p>{date}</p>
          {readingTime && (
            <>
              <span>•</span>
              <p>{readingTime} min read</p>
            </>
          )}
        </div>
      </div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8">
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || title}
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      )}
    </>
  );
}

interface WritingContentProps {
  children: React.ReactNode;
}

export function WritingContent({ children }: WritingContentProps) {
  return (
    <div className="prose prose-invert max-w-none space-y-8">{children}</div>
  );
}

interface WritingSectionProps {
  title: string;
  children: React.ReactNode;
}

export function WritingSection({ title, children }: WritingSectionProps) {
  return (
    <section>
      <h2
        className="text-white font-semibold text-[24px] mb-6"
        style={{ fontFamily: "'EB Garamond', serif" }}
      >
        {title}
      </h2>
      {/* text font */}
      <div
        className="space-y-4 text-gray-300 writing-content"
        style={{ lineHeight: "1.7rem", fontFamily: "'EB Garamond', serif" }}
      >
        {children}
      </div>
    </section>
  );
}

// Utility function to calculate reading time
export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes}`;
}
