import type { ComponentType } from "react";
import FrankensteinNote from "./frankenstein";
import SimulacraNote from "./simulacra";

export const libraryComponentsById: Record<string, ComponentType> = {
  frankenstein: FrankensteinNote,
  simulacra: SimulacraNote,
};

export function getLibraryBookContent(id: string): ComponentType {
  return libraryComponentsById[id] ?? FrankensteinNote;
}
