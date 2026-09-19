import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://quocdho.vercel.app"),
  title: "Quoc (Leo) Ho | Vision Systems & Computer Science",
  description:
    "Quoc (Leo) Ho — vision systems specialist and computer vision researcher in Holland, Michigan. Connecting hardware, software, and hands-on problem-solving.",
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
      <body>{children}</body>
    </html>
  );
}
