import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SyDAg 2025 Archive',
  description:
    'Archived website for the 2025 Symposium of Digital Agriculture at Purdue University.',
  alternates: {
    canonical: 'https://www.sydag.org/2025',
  },
  openGraph: {
    title: 'SyDAg 2025 Archive',
    description:
      'Archived website for the 2025 Symposium of Digital Agriculture at Purdue University.',
    url: 'https://www.sydag.org/2025',
  },
};

export default function Archive2025Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
