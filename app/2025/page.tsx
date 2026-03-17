'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Posters } from '@/components/Posters';
import { Speakers } from '@/components/Speakers';
import { Schedule } from '@/components/Schedule';
import { Team } from '@/components/Team';
import { Sponsors } from '@/components/Sponsors';
import { Footer } from '@/components/Footer';
import { ArchiveBanner } from '@/components/2025/ArchiveBanner';

export default function Archive2025Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2025" />
      <main className="w-full pt-[6.5rem]">
        <ArchiveBanner />
        <Hero />
        <About />
        <Posters />
        <Speakers />
        <Schedule />
        <Team />
        <Sponsors />
      </main>
      <Footer copyrightYear={2025} />
    </div>
  );
}
