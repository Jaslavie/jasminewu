import Image from "next/image";
import { noteCaptionClass, pageContentStyle } from "@/components/home/pageStyles";

interface ArticleHeaderProps {
  title: string;
  date: string;
  readingTime?: string;
  featuredImage?: {
    url: string;
    alt?: string;
    caption?: string;
  };
  muted?: boolean;
  titleLowercase?: boolean;
}

export default function ArticleHeader({
  title,
  date,
  readingTime,
  featuredImage,
  muted = false,
  titleLowercase = true,
}: ArticleHeaderProps) {
  const titleClass = muted
    ? `mb-1 font-serif text-[32px] italic leading-none text-white/[0.15] md:text-[36px]${titleLowercase ? " lowercase" : ""}`
    : `mb-1 font-serif text-[32px] italic leading-none text-white md:text-[36px]${titleLowercase ? " lowercase" : ""}`;

  const metaClass = muted
    ? "flex items-center gap-2 text-md text-white/[0.15]"
    : "flex items-center gap-2 text-md text-[var(--color-text-muted)]";

  return (
    <>
      <div className="mb-[52px]">
        <h1 className={titleClass} style={{ fontFamily: pageContentStyle.fontFamily }}>
          {title}
        </h1>
        <div className={metaClass} style={{ fontFamily: pageContentStyle.fontFamily }}>
          <p className="text-inherit">{date}</p>
          {readingTime ? (
            <>
              <span className="text-inherit">•</span>
              <p className="text-inherit">{readingTime} min read</p>
            </>
          ) : null}
        </div>
      </div>

      {featuredImage ? (
        <div className={`mb-8 ${muted ? "opacity-[0.15]" : ""}`}>
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || title}
            width={1000}
            height={1000}
            className="h-auto w-full"
          />
          {featuredImage.caption ? (
            <p className={noteCaptionClass}>{featuredImage.caption}</p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
