import type { ComponentType } from "react";
import AestheticsContent from "./aesthetics";
// import BucketlistContent from "./bucketlist";
// import LittleInfinitiesContent from "./little-infinities";
import LivingEcosystemsContent from "./living-ecosystems";
import PrinciplesContent from "./principles";

export const noteComponentsById: Record<string, ComponentType> = {
  aesthetics: AestheticsContent,
  // bucketlist: BucketlistContent,
  // "little-infinities": LittleInfinitiesContent,
  "living-ecosystems": LivingEcosystemsContent,
  principles: PrinciplesContent,
};

export function getNoteContent(id: string): ComponentType | null {
  return noteComponentsById[id] ?? null;
}
