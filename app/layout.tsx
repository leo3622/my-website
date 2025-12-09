import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Quoc (Leo) Ho | Data & ML Engineer",
  description:
    "Portfolio of Quoc (Leo) Ho — data engineer and machine learning engineer building reliable data and ML systems.",
  openGraph: {
    title: "Quoc (Leo) Ho | Data & ML Engineer",
    description:
      "Data engineer and machine learning engineer crafting scalable data pipelines and production-grade ML.",
    url: "https://localhost",
    siteName: "Quoc (Leo) Ho Portfolio"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={grotesk.variable}>{children}</body>
    </html>
  );
}
