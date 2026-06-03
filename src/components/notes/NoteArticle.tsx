import type { ReactNode } from "react";
import ArticleHeader from "@/components/ui/ArticleHeader";
import { pageContentStyle } from "@/components/home/pageStyles";

interface NoteArticleProps {
  title: string;
  subtitle: string;
  readingTime?: string;
  featuredImage?: {
    url: string;
    alt?: string;
    caption?: string;
  };
  children: ReactNode;
  muted?: boolean;
}

const noteProseClass =
  "[&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_ul_ul]:mt-1 [&_ul_ul]:ml-4 [&_p]:m-0 [&_h2]:mt-0 [&_h2]:mb-6 [&_h2]:text-[24px] [&_h2]:font-semibold [&_h2]:text-white [&_section]:space-y-4 [&_.note-caption_a.link]:mb-0 [&_[data-note-divider]]:!my-0";

const noteMutedClass =
  "text-white/[0.15] [&_*]:text-white/[0.15] [&_h3]:text-white/[0.15] [&_img]:opacity-[0.15] [&_video]:opacity-[0.15] [&_.note-caption]:text-white/[0.15] [&_.citation]:border-transparent [&_.link[data-link-icon='true']]:border-white/[0.15] [&_.link[data-link-icon='true']:hover]:border-white/[0.15]";

export default function NoteArticle({
  title,
  subtitle,
  readingTime,
  featuredImage,
  children,
  muted = false,
}: NoteArticleProps) {
  const bodyStyle = {
    fontFamily: pageContentStyle.fontFamily,
    fontSize: pageContentStyle.fontSize,
    lineHeight: pageContentStyle.lineHeight,
    color: pageContentStyle.color,
  };

  if (muted) {
    return (
      <article
        data-note-muted="true"
        className={`w-full ${noteMutedClass} ${noteProseClass}`}
        style={{ fontFamily: pageContentStyle.fontFamily }}
      >
        <ArticleHeader
          title={title}
          date={subtitle}
          readingTime={readingTime}
          featuredImage={featuredImage}
          muted
          titleLowercase={false}
        />
        <div className="article-prose relative space-y-4 text-[15px] leading-[1.55]">{children}</div>
      </article>
    );
  }

  return (
    <article className="w-full">
      <ArticleHeader
        title={title}
        date={subtitle}
        readingTime={readingTime}
        featuredImage={featuredImage}
        titleLowercase={false}
      />

      <div
        className={`article-prose relative mt-8 space-y-4 leading-[1.55] ${noteProseClass}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </article>
  );
}
