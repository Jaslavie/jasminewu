import Link from "next/link";
import ArticleHeader from "@/components/ui/ArticleHeader";

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
      className={`min-h-screen relative flex justify-center ${className}`}
    >
      <div className="px-6 py-8 lg:p-[12%] max-w-full lg:max-w-5xl w-full lg:w-[70vw]">
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
    caption?: string;
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
      <ArticleHeader
        title={title}
        date={date}
        readingTime={readingTime}
        featuredImage={featuredImage}
      />
    </>
  );
}

interface WritingContentProps {
  children: React.ReactNode;
}

export function WritingContent({ children }: WritingContentProps) {
  return (
    <div className="article-prose prose prose-invert max-w-none space-y-8">{children}</div>
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
