import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDAAS Symposium 2025 - From Innovation to Real World Impact",
  description: "Join us for the first annual IDAAS symposium, where we bring together researchers, industry leaders, and innovators to explore the intersection of digital technology and agricultural systems.",
  keywords: "IDAAS, symposium, digital agriculture, innovation, agricultural technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
