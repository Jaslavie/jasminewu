import { notFound } from "next/navigation";
import { books } from "@/data/libraryData";
import BookDetailContent from "@/components/library/BookDetailContent";

export async function generateStaticParams() {
  return books.filter((b) => b.isActive).map((b) => ({ id: b.id }));
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = books.find((b) => b.id === id);

  if (!book || !book.isActive) {
    notFound();
  }

  return <BookDetailContent book={book} />;
}
