'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Register } from '@/components/Register';
import { About } from '@/components/About';
import { Speakers } from '@/components/Speakers';
import { Schedule } from '@/components/Schedule';
import { Team } from '@/components/Team';
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
      </main>
      <Footer />
    </div>
  );
}
