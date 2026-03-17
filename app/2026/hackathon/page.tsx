import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Site2026HackathonPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header variant="2026" />
      <main className="min-h-screen bg-gradient-to-br from-[#F9F9F9] via-white to-[#EBD99F]/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-4xl flex-col items-center justify-center text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#9E6F3E]">
            2026 Hackathon
          </p>
          <h1 className="mb-6 text-4xl font-black text-[#000000] sm:text-5xl">
            This page is ready for the next hackathon launch.
          </h1>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#1E3A5F]">
            The 2026 experience will be built here. Until then, the full 2025
            hackathon remains available as an archive.
          </p>
          <a
            href="/2025/hackathon"
            className="rounded-2xl bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-4 text-lg font-bold text-black shadow-lg transition-transform duration-200 hover:scale-[1.02]"
          >
            Open 2025 Hackathon Archive
          </a>
        </div>
      </main>
      <Footer copyrightYear={2026} />
    </div>
  );
}
