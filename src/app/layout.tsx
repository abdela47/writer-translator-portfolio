import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shahd Murshed — Writer & Translator",
  description: "Selected writing, publications, and translations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${garamond.className} h-screen overflow-hidden bg-neutral-100 text-neutral-900`}>
          <div className="flex h-screen flex-col">
          <Navbar />
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </body>
    </html>
  );
}