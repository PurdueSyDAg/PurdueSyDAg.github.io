import Link from 'next/link';
import { Archive, Sparkles } from 'lucide-react';

export function ComingSoon() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(221,185,69,0.22),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(158,111,62,0.18),_transparent_24%),linear-gradient(180deg,_#f7f2e8_0%,_#ffffff_40%,_#f7f7f5_100%)] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-[6%] top-28 h-40 w-40 rounded-full bg-[#DDB945]/20 blur-3xl" />
        <div className="absolute right-[8%] top-36 h-56 w-56 rounded-full bg-[#9E6F3E]/15 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-48 w-48 rounded-full bg-[#CFB991]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-12rem)] max-w-4xl items-center">
        <section className="w-full text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9E6F3E]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#9E6F3E] shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            SyDAg 2026 is taking shape
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#16120d] sm:text-6xl lg:text-7xl">
            The next chapter of digital agriculture is coming soon.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#3f3b36] sm:text-xl">
            We&apos;re building the 2026 symposium experience now. This page is the
            new home for the upcoming event, while the full 2025 program remains
            available as an archive.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/2025"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#16120d] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_40px_rgba(22,18,13,0.18)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Browse 2025 Archive
              <Archive className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
