import type { Metadata } from "next";
import "@/styles/globals.css";
import ConditionalSidebar from "@/components/global/ConditionalSidebar";
import ConditionalLayout from "@/components/global/ConditionalLayout";
import BackgroundNoise from "@/components/global/BackgroundNoise";

export const metadata: Metadata = {
  title: "Jasmine Wu Portfolio",
  description:
    "Jasmine Wu is an interdisciplinary designer who designs Human-AI interfaces for spacewalks and the battlefield.",
  icons: {
    icon: "/Jasmine_Wu_Logo_Square.png",
    shortcut: "/Jasmine_Wu_Logo_Square.png",
    apple: "/Jasmine_Wu_Logo_Square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Background Noise Effect */}
          <BackgroundNoise />

          {/* Conditional Left Sidebar - Hidden on writing pages */}
          <ConditionalSidebar />

          {/* Main Content Area - Adjusts layout based on sidebar presence */}
          <ConditionalLayout>{children}</ConditionalLayout>
        </div>
      </body>
    </html>
  );
}
