import type { ReactNode } from "react";
import { pageContentStyle } from "@/components/home/pageStyles";

interface NoteArticleProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  muted?: boolean;
}

const noteProseClass =
  "[&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1 [&_.citation]:font-[inherit] [&_.citation]:text-[0.65em] [&_.citation]:align-super [&_.citation]:text-inherit [&_.citation]:border-transparent [&_.citation:hover]:text-inherit [&_.citation:hover]:border-transparent";

export default function NoteArticle({
  title,
  subtitle,
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
        className={`w-full text-white/[0.15] [&_*]:text-white/[0.15] [&_.citation]:border-transparent ${noteProseClass}`}
        style={{ fontFamily: pageContentStyle.fontFamily }}
      >
        <h1 className="text-[30px] italic lowercase leading-none md:text-[36px]">
          {title}
        </h1>
        <p className="mt-1 text-[15px]">{subtitle}</p>
        <div className="mt-8 space-y-5 text-[15px] leading-[1.55]">{children}</div>
      </article>
    );
  }

  return (
    <article className="w-full">
      <h1
        className="text-[30px] italic lowercase leading-none text-white md:text-[36px]"
        style={{ fontFamily: pageContentStyle.fontFamily }}
      >
        {title}
      </h1>
      <p
        className="mt-1 text-[15px] text-white/75"
        style={{ fontFamily: pageContentStyle.fontFamily }}
      >
        {subtitle}
      </p>

      <div
        className={`mt-8 space-y-5 leading-[1.55] ${noteProseClass}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </article>
  );
}
