import type { Metadata } from "next";
// import "./globals.css";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Jasmine Wu Portfolio",
  description: "Jasmine Wu is an interdisciplinary designer who designs Human-AI interfaces for spacewalks and the battlefield.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
