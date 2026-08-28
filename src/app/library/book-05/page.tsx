import type { Metadata } from "next";
import { books } from "@/data/libraryData";
import BookDetailContent from "@/components/library/BookDetailContent";

const book = books.find((b) => b.id === "book-05") || books[4];

export const metadata: Metadata = {
  title: `${book.noteTitle || book.title} · Library · Jasmine Wu`,
  description: `Notes and readings on ${book.title} by ${book.author}.`,
};

export default function Book05Page() {
  return <BookDetailContent book={book} />;
}
