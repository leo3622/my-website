import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quocdho.vercel.app"),
  title: "Quoc (Leo) Ho | Vision Systems & Computer Science",
  description:
    "Quoc (Leo) Ho. Exploring thoughtful interfaces, creative coding, and computer vision. A personal portfolio of interactive studies and applied research.",
  openGraph: {
    title: "Quoc (Leo) Ho | Vision Systems & Computer Science",
    description:
      "Connecting hardware, software, and curiosity to make real-world systems work better.",
    url: "https://quocdho.vercel.app",
    siteName: "Quoc (Leo) Ho Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
