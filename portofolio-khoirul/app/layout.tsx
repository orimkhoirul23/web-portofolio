import type { Metadata } from "next";
import "./globals.css";

// Metadata untuk SEO dan judul tab browser
export const metadata: Metadata = {
  title: "Mochammad Khoirullutfansyah | Portfolio",
  description: "AI Engineer & Backend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
