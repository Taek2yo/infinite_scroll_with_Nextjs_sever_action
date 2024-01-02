import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Desc from "@/components/Desc";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Scroll Example",
  description: "My favorite anime",
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
          <Desc />
          {children}
        </main>
      </body>
    </html>
  );
}
