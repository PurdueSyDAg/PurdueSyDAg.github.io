import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SyDAg 2026',
  description:
    'Live route for the upcoming 2026 Symposium of Digital Agriculture website.',
  alternates: {
    canonical: 'https://www.sydag.org/2026',
  },
  openGraph: {
    title: 'SyDAg 2026',
    description:
      'Live route for the upcoming 2026 Symposium of Digital Agriculture website.',
    url: 'https://www.sydag.org/2026',
  },
};

export default function Site2026Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
