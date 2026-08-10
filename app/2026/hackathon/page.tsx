import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HackathonHero2026 } from '@/components/2026/HackathonHero2026';
import { HackathonAbout2026 } from '@/components/2026/HackathonAbout2026';
import { HackathonPrizes2026 } from '@/components/2026/HackathonPrizes2026';
import { HackathonStaff2026 } from '@/components/2026/HackathonStaff2026';

export default function Site2026HackathonPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2026" />
      <main>
        <HackathonHero2026 />
        <HackathonAbout2026 />
        <HackathonPrizes2026 />
        <HackathonStaff2026 />
      </main>
      <Footer copyrightYear={2026} showDigitalAgClub={false} />
    </div>
  );
}
