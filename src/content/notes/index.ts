import type { ComponentType } from "react";
import BucketlistContent from "./bucketlist";

export const noteComponentsById: Record<string, ComponentType> = {
  bucketlist: BucketlistContent,
};

export function getNoteContent(id: string): ComponentType | null {
  return noteComponentsById[id] ?? null;
}
