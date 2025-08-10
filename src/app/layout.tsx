import type { Metadata } from "next";
import "@/styles/globals.css";
import ConditionalSidebar from "@/components/global/ConditionalSidebar";
import ConditionalLayout from "@/components/global/ConditionalLayout";
import BackgroundNoise from "@/components/global/BackgroundNoise";
import ConditionalFooter from "@/components/global/ConditionalFooter";
import MobileNav from "@/components/global/MobileNav";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Jasmine Wu",
  description:
    "Jasmine Wu is an interdisciplinary designer who designs Human-AI interfaces for spacewalks and the battlefield.",
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
        <div className="min-h-screen flex flex-col">
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Background Noise Effect */}
          <BackgroundNoise />

          {/* Mobile Navigation - Shows only on mobile */}
          <MobileNav />

          {/* Main Content Container - Mobile responsive */}
          <div className="relative flex-1 min-h-screen md:h-[calc(100vh-2.5rem)]">
            {/* Conditional Left Sidebar - Hidden on writing pages and mobile */}
            <ConditionalSidebar />

            {/* Main Content Area - Adjusts layout based on sidebar presence */}
            <ConditionalLayout>{children}</ConditionalLayout>
          </div>

          {/* Conditional Footer - Hidden on writing pages */}
          <ConditionalFooter />
        </div>
      </body>
    </html>
  );
}
