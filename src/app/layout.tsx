import type { Metadata } from 'next';
import './styles/globals.css';
import { GeistMono } from 'geist/font/mono';
export const metadata: Metadata = {
  title: 'Ocka',
  icons: './favicon.ico',
  description: 'Ocka AI Cv Generator',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>{children}</body>
    </html>
  );
}
