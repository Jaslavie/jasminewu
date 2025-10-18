import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Post - Jasmine Wu",
  description: "A test writing post with placeholder content.",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
