import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principles - Jasmine Wu",
  description:
    "My contrarian and not-so-contrarian beliefs about enduring value and mastery.",
};

export default function PrinciplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
