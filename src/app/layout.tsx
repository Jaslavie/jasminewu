import type { Metadata } from "next";
import "@/styles/globals.css";
import Sidebar from "@/components/global/Sidebar";
import BackgroundNoise from "@/components/global/BackgroundNoise";

export const metadata: Metadata = {
  title: "Jasmine Wu Portfolio",
  description:
    "Jasmine Wu is an interdisciplinary designer who designs Human-AI interfaces for spacewalks and the battlefield.",
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

          {/* Fixed Left Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-1 relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
