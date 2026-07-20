import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero2026 } from '@/components/2026/Hero2026';
import { About2026 } from '@/components/2026/About2026';
import { Speakers2026 } from '@/components/2026/Speakers2026';
import { Schedule2026 } from '@/components/2026/Schedule2026';
import { Posters2026 } from '@/components/2026/Posters2026';
import { Team2026 } from '@/components/2026/Team2026';
import { Sponsors2026 } from '@/components/2026/Sponsors2026';

export default function Site2026Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2026" />
      <main>
        <Hero2026 />
        <About2026 />
        <Speakers2026 />
        <Schedule2026 />
        <Posters2026 />
        <Team2026 />
        <Sponsors2026 />
      </main>
      <Footer
        copyrightYear={2026}
        showDigitalAgClub={false}
        tagline="Symposium of Digital Agriculture - Growing with AI"
      />
    </div>
  );
}
