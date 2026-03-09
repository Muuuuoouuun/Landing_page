import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EduScale | The All-in-One Operating System for Academies",
  description: "Standardize teaching quality, automate admin work, and guarantee learning outcomes with EduScale's data-driven platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Header />
        <main className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
