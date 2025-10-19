import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Ecosystems - Jasmine Wu",
  description:
    "The philosophy and practice of designing live experiences and events.",
};

export default function LivingEcosystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
