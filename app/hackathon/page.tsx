import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HackathonHero2026 } from '@/components/2026/HackathonHero2026';

export default function HackathonPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2026" />
      <main>
        <HackathonHero2026 />
      </main>
      <Footer copyrightYear={2026} showDigitalAgClub={false} />
    </div>
  );
}
