import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

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
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${lora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
