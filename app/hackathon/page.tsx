import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hackathon } from '@/components/Hackathon';

export const metadata: Metadata = {
  title: 'Hackathon | SyDAg 2025',
  description: 'SyDAg Hackathon details, rules, schedule, and registration information',
};

export default function HackathonPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <Hackathon />
      </main>
      <Footer />
    </div>
  );
}


