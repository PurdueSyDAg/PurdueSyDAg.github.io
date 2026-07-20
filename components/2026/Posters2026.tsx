const topics = [
  {
    title: 'Precision ag & digital tools',
    detail: 'Sensing, automation, data, and AI applied across agriculture.',
  },
  {
    title: 'Plant, soil & crop sciences',
    detail: 'Plant science, soil health, entomology, horticulture, and agronomy.',
  },
  {
    title: 'Any agriculture-related topic',
    detail: 'If it touches agriculture, it belongs here — no longer digital-only.',
  },
  {
    title: 'Preliminary results welcome',
    detail: 'Early data and works in progress are encouraged, not just finished studies.',
  },
];

const logistics = [
  { label: 'Submission deadline', value: 'Sep 4, 2026' },
  { label: 'Poster session', value: 'Sep 28, 2026 · 3–5 PM' },
  { label: 'Awards', value: 'Top 3 posters' },
];

export function Posters2026() {
  return (
    <section
      id="posters"
      className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#CFB991]/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.28em] text-[#CFB991] sm:text-base">
            SyDAg &times; Experience ACRE
          </p>
          <h2 className="font-heading text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Poster Session
          </h2>
          <div className="mx-auto mb-8 mt-6 h-[2px] w-16 bg-[#CFB991]" />
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            This year, the SyDAg Poster Session is expanding. In partnership with
            Experience ACRE, we&apos;re opening a broader space for students to
            share their work, ideas, and research in agriculture.
          </p>
        </div>

        {/* Topics welcome — highlighted */}
        <div className="mt-16 rounded-3xl border border-[#CFB991]/25 bg-white/[0.03] p-8 sm:mt-20 sm:p-10">
          <div className="text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#CFB991] sm:text-base">
              Topics welcome
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-white/70 sm:text-lg">
              Posters are no longer limited to digital agriculture. We welcome
              submissions across:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#0A0A0A]/40 p-5 sm:p-6"
              >
                <span
                  aria-hidden
                  className="mt-2 block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#CFB991] to-[#DDB945]"
                />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-white/70">
                    {topic.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-white/80 sm:mt-16 sm:text-xl">
          Whether you are just starting a project, working with early data, or
          ready to share your research story, this is a great opportunity to
          present your work, connect with other students, and be part of SyDAg
          2026.
        </p>

        {/* Logistics */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-3">
          {logistics.map((item) => (
            <div key={item.label} className="bg-[#0A0A0A] px-6 py-6 text-center">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-[#9E6F3E] sm:text-sm">
                {item.label}
              </p>
              <p className="mt-2 font-heading text-base font-bold text-white sm:text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center sm:mt-16">
          <a
            href="https://purdue.ca1.qualtrics.com/jfe/form/SV_d4r9WIqm31pUGay"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.22em] text-[#1A1A1A] shadow-[0_18px_40px_-12px_rgba(207,185,145,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-12px_rgba(207,185,145,0.6)] sm:text-base"
          >
            Submit your poster &amp; register
          </a>
        </div>
      </div>
    </section>
  );
}
