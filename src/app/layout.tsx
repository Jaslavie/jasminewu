import type { Metadata } from "next";
import "@/styles/globals.css";
import ConditionalSidebar from "@/components/global/ConditionalSidebar";
import BackgroundNoise from "@/components/global/BackgroundNoise";
import ConditionalFooter from "@/components/global/ConditionalFooter";
import MobileNav from "@/components/global/MobileNav";
import CustomCursor from "@/components/ui/CustomCursor";
import ObservationCollapse from "@/components/ui/ObservationCollapse";

export const metadata: Metadata = {
  title: "Jasmine Wu",
  description:
    "AI Researcher & Product Engineer, currently deploying world models and designing environments for human-AI co-reasoning. Previously at Palantir.",
  icons: {
    icon: "/Jasmine_Wu_Logo_Square.png",
    shortcut: "/Jasmine_Wu_Logo_Square.png",
    apple: "/Jasmine_Wu_Logo_Square.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <CustomCursor />
          <ObservationCollapse />

          {/* Background Noise Effect */}
          <BackgroundNoise />

          {/* Mobile Navigation - Shows only on mobile */}
          <MobileNav />

          {/* Main Content Container - Mobile responsive */}
          <div>
            {/* Conditional Left Sidebar - Hidden on writing pages and mobile */}
            <ConditionalSidebar />

            {children}
          </div>

          {/* Conditional Footer - Hidden on writing pages */}
          <ConditionalFooter />
        </div>
      </body>
    </html>
  );
}
