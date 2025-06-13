import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyDAg 2025 - From Innovation to Real World Impact",
  description: "Join us for the first annual Symposium on Digital Agriculture, where we bring together researchers, industry leaders, and innovators to explore the intersection of digital technology and agricultural systems.",
  keywords: "SyDAg, symposium, digital agriculture, innovation, agricultural technology, precision agriculture, smart farming, agtech, sustainable agriculture, research symposium, Purdue Univerisity",
  authors: [{ name: "SyDAg 2025 Organizing Committee" }],
  creator: "SyDAg 2025",
  publisher: "SyDAg 2025",
  metadataBase: new URL('https://www.sydag.org'),
  alternates: {
    canonical: 'https://www.sydag.org',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sydag.org',
    siteName: 'SyDAg 2025',
    title: 'SyDAg 2025 - From Innovation to Real World Impact',
    description: 'Join us for the first annual Symposium on Digital Agriculture, where we bring together researchers, industry leaders, and innovators to explore the intersection of digital technology and agricultural systems.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'SyDAg 2025 - Symposium on Digital Agriculture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyDAg 2025 - From Innovation to Real World Impact',
    description: 'Join us for the first annual Symposium on Digital Agriculture, where we bring together researchers, industry leaders, and innovators.',
    images: ['/logo.png'],
    creator: '@sydag2025',
    site: '@sydag2025',
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
    'format-detection': 'telephone=no',
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
