import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Scroll Example",
  description: "My favorite Movie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto bg-[#1d2029]">
          <Hero />
          {children}
        </main>
      </body>
    </html>
  );
}
