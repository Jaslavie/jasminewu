import type { ComponentType } from "react";
import SampleLibraryNote from "./sample-note";

export const libraryComponentsById: Record<string, ComponentType> = {
  "book-01": SampleLibraryNote,
  "book-02": SampleLibraryNote,
  "book-03": SampleLibraryNote,
  "book-04": SampleLibraryNote,
  "book-05": SampleLibraryNote,
  "book-06": SampleLibraryNote,
  "book-07": SampleLibraryNote,
  "book-08": SampleLibraryNote,
  "book-09": SampleLibraryNote,
  "book-10": SampleLibraryNote,
};

export function getLibraryBookContent(id: string): ComponentType {
  return libraryComponentsById[id] ?? SampleLibraryNote;
}
