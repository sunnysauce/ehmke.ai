import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Ehmke | Chief Product Officer",
  description: "Professional portfolio of Michael Ehmke, Chief Product Officer at FX Analytics",
  openGraph: {
    type: "website",
    url: "https://ehmke.ai",
    title: "Michael Ehmke | Chief Product Officer",
    description: "Professional portfolio of Michael Ehmke, Chief Product Officer at FX Analytics",
    siteName: "Michael Ehmke Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Michael Ehmke - Chief Product Officer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@michaelemhke",
    creator: "@michaelemhke",
    title: "Michael Ehmke | Chief Product Officer",
    description: "Professional portfolio of Michael Ehmke, Chief Product Officer at FX Analytics",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
