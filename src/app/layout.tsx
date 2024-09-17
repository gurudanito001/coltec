import type { Metadata, Viewport } from "next";
import { Raleway, Italiana } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';


const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Captain Stitches",
  description: "Passionate about bringing quality tech gadgets to your household",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
