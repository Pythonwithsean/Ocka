import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import page from "./login/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocka",
  description: "Ocka AI Cv Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
