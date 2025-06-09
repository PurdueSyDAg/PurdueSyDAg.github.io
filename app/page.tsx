'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Speakers } from '@/components/Speakers';
import { Schedule } from '@/components/Schedule';
import { Team } from '@/components/Team';
import { Sponsors } from '@/components/Sponsors';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
