import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "Dinesh Bajgain | Full Stack & AI/ML",
  description:
    "Portfolio of Dinesh Bajgain, a Full Stack Developer and AI/ML Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
