import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "the art of rehearsal - Jasmine Wu",
  description:
    "Collaborative simulation environments, and why humans must stay in the loop.",
};

export default function RehersalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
