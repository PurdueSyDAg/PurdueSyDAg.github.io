import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hackathon } from '@/components/Hackathon';
import { ArchiveBanner } from '@/components/2025/ArchiveBanner';

export const metadata: Metadata = {
  title: 'Hackathon | SyDAg 2025 Archive',
  description:
    'Archived SyDAg 2025 Hackathon details, rules, schedule, and registration information.',
};

export default function Archive2025HackathonPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2025" />
      <main className="pt-[6.5rem]">
        <ArchiveBanner />
        <Hackathon />
      </main>
      <Footer copyrightYear={2025} />
    </div>
  );
}
