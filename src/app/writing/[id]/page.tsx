import { notFound } from "next/navigation";
import { notes } from "@/data/notesData";
import NotesContent from "@/components/notes/NotesContent";

export async function generateStaticParams() {
  return notes.filter((n) => !n.externalUrl).map((n) => ({ id: n.id }));
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = notes.find((n) => n.id === id);

  if (!note || note.externalUrl) {
    notFound();
  }

  return <NotesContent activeNoteId={note.id} />;
}
