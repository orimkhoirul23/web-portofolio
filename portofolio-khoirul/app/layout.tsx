import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap", // penting untuk performance
});

export const metadata: Metadata = {
  title: "Mochammad Khoirullutfansyah | AI Engineer & Backend Developer",
  description:
    "Portfolio of Mochammad Khoirullutfansyah – AI Engineer & Backend Developer specializing in Machine Learning, NLP, and scalable web systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-neutral-950`}>
        {children}
      </body>
    </html>
  );
}
