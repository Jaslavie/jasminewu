import type { Metadata } from "next";
import LibraryContent from "@/components/library/LibraryContent";

export const metadata: Metadata = {
  title: "Library · Jasmine Wu",
  description: "A collection of floating books, readings, and reflections.",
};

export default function LibraryPage() {
  return <LibraryContent />;
}
