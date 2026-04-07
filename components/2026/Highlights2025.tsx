import { HighlightsGallery } from '@/components/2026/HighlightsGallery';

const galleryImages = [
  {
    file: '20251020_SyDAg_JC0021.jpg',
    alt: 'SyDAg 2025 symposium attendees and venue',
  },
  {
    file: '20251020_SyDAg_JC0071.jpg',
    alt: 'SyDAg 2025 presentations and discussions',
  },
  {
    file: '20251020_SyDAg_JC0086 (1).jpg',
    alt: 'SyDAg 2025 symposium activity',
  },
  {
    file: '20251020_SyDAg_JC0138.jpg',
    alt: 'SyDAg 2025 speakers or sessions',
  },
  {
    file: '20251020_SyDAg_JC0301.jpg',
    alt: 'SyDAg 2025 interactive hall or exhibits',
  },
  {
    file: '20251020_SyDAg_JC0345 (1).jpg',
    alt: 'SyDAg 2025 community and networking',
  },
] as const;

const summaryPoints = [
  'Keynote and sessions with industry (Corteva, CNH, INARI) and peer universities.',
  '35+ research posters in person and online, archived on Purdue e-Pubs.',
  'Interactive hall with 10+ partners; livestream reach including watch parties in South America.',
  'First SyDAg Hackathon (48 hours) with RCAC and Bayer; $5K+ in student awards and travel support.',
  '10+ sponsors across industry and Purdue, anchored by the IDAAS initiative.',
];

function gallerySrc(file: string) {
  return `/25highlights/${encodeURIComponent(file)}`;
}

const slides = galleryImages.map(({ file, alt }) => ({
  src: gallerySrc(file),
  alt,
}));

function HighlightsSectionRule() {
  return (
    <div
      className="flex w-full flex-col items-center px-6 pt-12 sm:pt-16"
      aria-hidden
    >
      <div className="h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mt-4 flex w-full max-w-md items-center gap-3 sm:max-w-lg">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#CFB991]/50" />
        <div className="h-2 w-2 shrink-0 rotate-45 bg-[#DDB945]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#CFB991]/50" />
      </div>
      <div className="mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-[#9E6F3E] via-[#DDB945] to-[#CFB991] sm:w-40" />
    </div>
  );
}

export function Highlights2025() {
  return (
    <div
      id="highlights"
      className="mt-16 w-full min-w-0 bg-[#0A0A0A] text-white sm:mt-24"
    >
      <HighlightsSectionRule />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:max-w-7xl lg:px-12">
        <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          2025 in review
        </h2>

        <p className="mt-6 max-w-3xl font-heading text-2xl font-semibold leading-snug text-white/90 sm:text-3xl md:text-4xl md:leading-tight">
          The first SyDAg proved what a student-led symposium can look like at
          scale: research, industry, hands-on demos, a hackathon, and leadership
          from the very top of the university.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#161616] to-[#0d0d0d] p-9 ring-1 ring-[#CFB991]/15 sm:p-10">
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#CFB991]/60 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#DDB945]/[0.06]"
              aria-hidden
            />
            <p className="font-heading text-xs uppercase tracking-[0.28em] text-[#CFB991] sm:text-sm">
              Attendance
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-10">
              <span className="font-heading text-6xl font-light tabular-nums leading-none tracking-[-0.04em] text-[#DDB945] sm:text-7xl md:text-8xl">
                140
              </span>
              <p className="max-w-md pb-1 text-lg leading-relaxed text-white/65 sm:text-xl">
                Guests spanning campus, industry, and research, together for the
                inaugural program.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-[#CFB991]/25 bg-[#111]/80 px-8 py-8 backdrop-blur-sm lg:py-10">
            <p className="font-heading text-sm uppercase tracking-[0.22em] text-[#CFB991] sm:text-base">
              Opening session
            </p>
            <p className="mt-4 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
              Purdue President{' '}
              <span className="text-[#DDB945]">Dr. Mung Chiang</span>
              <span className="block sm:mt-1">
                College of Agriculture Dean{' '}
                <span className="text-[#DDB945]">Dr. Bernie Engel</span>
              </span>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/60 sm:text-xl">
              Both joined the kickoff with robotics from Purdue labs, setting the
              tone for a symposium built on visibility and ambition.
            </p>
          </div>
        </div>

        <HighlightsGallery slides={slides} theme="dark" />

        <div className="mt-14 border-t border-white/10 pt-14">
          <p className="font-heading text-sm uppercase tracking-[0.22em] text-[#CFB991] sm:text-base">
            At a glance
          </p>
          <ul className="mt-6 space-y-4">
            {summaryPoints.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-lg leading-relaxed text-white/70 sm:text-xl"
              >
                <span
                  className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#DDB945]"
                  aria-hidden
                />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-white/55 sm:text-xl">
            Browse poster proceedings on{' '}
            <a
              href="https://docs.lib.purdue.edu/sydag"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#DDB945] underline decoration-[#CFB991]/50 decoration-2 underline-offset-2"
            >
              Purdue e-Pubs
            </a>
            .
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-[#CFB991]/25 bg-[#CFB991]/[0.06] px-6 py-5 sm:px-8 sm:py-6">
          <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
            <span className="font-heading font-bold text-[#CFB991]">
              SyDAg 2026
            </span>{' '}
            on September 28, 2026 in West Lafayette carries that momentum
            forward with a new leadership team and the same mission: digital
            agriculture that connects people, ideas, and the field.
          </p>
        </div>
      </div>
    </div>
  );
}
