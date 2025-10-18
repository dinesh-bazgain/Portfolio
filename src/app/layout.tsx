import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dinesh Bajgain",
  description: "Portfolio website of Dinesh Bajgain, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
