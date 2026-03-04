import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Shahd Murshed — Writer & Translator",
  description: "Selected writing, publications, and translations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}