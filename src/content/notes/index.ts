import type { ComponentType } from "react";
import AestheticsContent from "./aesthetics";
import BucketlistContent from "./bucketlist";
import LivingEcosystemsContent from "./living-ecosystems";

export const noteComponentsById: Record<string, ComponentType> = {
  aesthetics: AestheticsContent,
  bucketlist: BucketlistContent,
  "living-ecosystems": LivingEcosystemsContent,
};

export function getNoteContent(id: string): ComponentType | null {
  return noteComponentsById[id] ?? null;
}
