import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";
import {
  noteCaptionClass,
  noteFigureClass,
  noteImageClass,
} from "@/components/home/pageStyles";

type NoteImageProps = Omit<ImageProps, "className">;

export function NoteFigure({ children }: { children: ReactNode }) {
  return <figure className={noteFigureClass}>{children}</figure>;
}

export function NoteImage(props: NoteImageProps) {
  return <Image {...props} className={noteImageClass} />;
}

export function NoteCaption({ children }: { children: ReactNode }) {
  return <figcaption className={noteCaptionClass}>{children}</figcaption>;
}
