import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyDAg",
  description:
    "Symposium of Digital Agriculture website, including the latest event information and archived editions.",
  keywords:
    "SyDAg, symposium, digital agriculture, agtech, Purdue University, archived symposium website",
  authors: [{ name: "SyDAg Organizing Committee" }],
  creator: "SyDAg",
  publisher: "SyDAg",
  metadataBase: new URL("https://www.sydag.org"),
  alternates: {
    canonical: "https://www.sydag.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sydag.org",
    siteName: "SyDAg",
    title: "SyDAg",
    description:
      "Symposium of Digital Agriculture website, including the latest event information and archived editions.",
    images: [
      {
        url: "/coa.png",
        width: 2309,
        height: 295,
        alt: "Purdue University College of Agriculture",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyDAg",
    description:
      "Symposium of Digital Agriculture website, including the latest event information and archived editions.",
    images: ["/coa.png"],
    creator: "@sydag2025",
    site: "@sydag2025",
  },
  other: {
    "theme-color": "#ffffff",
    "color-scheme": "light",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
