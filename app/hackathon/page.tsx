import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function HackathonPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2026" />
      <main className="min-h-screen bg-gradient-to-br from-[#F9F9F9] via-white to-[#EBD99F]/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-4xl flex-col items-center justify-center text-center">
          <p className="mb-4 text-base font-semibold uppercase tracking-[0.28em] text-[#9E6F3E] sm:text-lg">
            2026 Hackathon
          </p>
          <h1 className="mb-6 text-4xl font-black text-[#000000] sm:text-5xl md:text-6xl">
            This page is reserved for the next hackathon build.
          </h1>
          <p className="mb-8 max-w-3xl text-xl leading-relaxed text-[#1E3A5F] sm:text-2xl">
            We kept the full 2025 hackathon page intact for record keeping.
            Use the year switcher above, or jump straight to the archive below.
          </p>
          <a
            href="/2025/hackathon"
            className="rounded-2xl bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-4 text-lg font-bold text-black shadow-lg transition-transform duration-200 hover:scale-[1.02]"
          >
            Open 2025 Hackathon Archive
          </a>
        </div>
      </main>
      <Footer copyrightYear={2026} showDigitalAgClub={false} />
    </div>
  );
}
