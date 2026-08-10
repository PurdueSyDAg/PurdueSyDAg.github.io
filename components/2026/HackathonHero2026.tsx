const hackathonSponsors = [
  { src: "/sponsors/2026/bayer.png", name: "Bayer", size: "h-14 sm:h-20" },
  {
    src: "/sponsors/2026/agrinovus.png",
    name: "AgriNovus Indiana",
    size: "h-10 sm:h-12",
  },
  { src: "/sponsors/2026/iot4ag.png", name: "IoT4Ag", size: "h-12 sm:h-14" },
  {
    src: "/sponsors/2026/ag-data-services.png",
    name: "Ag Data Services",
    size: "h-5 sm:h-7",
  },
];

export function HackathonHero2026() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[640px] flex-col overflow-hidden bg-[#0A0A0A] pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none font-heading text-[16rem] font-black leading-none text-[#CFB991]/[0.06] sm:left-[6%] sm:text-[24rem] lg:left-[10%] lg:text-[32rem]"
      >
        {'{'}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-heading text-[16rem] font-black leading-none text-[#CFB991]/[0.06] sm:right-[6%] sm:text-[24rem] lg:right-[10%] lg:text-[32rem]"
      >
        {'}'}
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        <div className="w-full max-w-4xl mx-auto px-6 py-8 text-center sm:px-8">
          <div className="mx-auto flex w-fit items-center gap-3">
            <span className="h-[2px] w-8 bg-[#CFB991]" aria-hidden />
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-white sm:text-sm">
              September 25&ndash;27, 2026
            </p>
            <span className="h-[2px] w-8 bg-[#CFB991]" aria-hidden />
          </div>

          <p className="mt-4 font-heading text-base font-bold uppercase tracking-[0.28em] text-[#CFB991] sm:mt-6 sm:text-lg">
            2nd Edition
          </p>

          <h1 className="mt-2 font-heading text-[2.5rem] font-black leading-[0.9] tracking-[-0.04em] text-white sm:text-[4rem] md:text-[5.25rem]">
            <span className="block">SyDAg</span>
            <span className="block text-[#CFB991]">Hackathon</span>
          </h1>

          <div className="mx-auto mt-6 h-[3px] w-16 bg-[#CFB991] sm:mt-8" />

          <p className="mx-auto mt-5 max-w-2xl text-lg italic leading-snug text-white/80 sm:mt-6 sm:text-xl md:text-2xl">
            Open to everyone: students, researchers, scholars, post-docs,
            faculty, and industry. Bring your coding skills, your domain
            expertise, or both. If your roots are in agriculture, this is for
            you.
          </p>

          <p className="mx-auto mt-4 font-heading text-xs uppercase tracking-[0.22em] text-white/50 sm:mt-5 sm:text-sm">
            Teams and individuals welcome
          </p>

          <a
            href="https://purdue.ca1.qualtrics.com/jfe/form/SV_0qW9qMnKuFd9U7I"
            target="_blank"
            rel="noreferrer noopener"
            className="mx-auto mt-6 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-[0.22em] text-[#1A1A1A] shadow-md transition-all duration-200 hover:brightness-95 sm:mt-8 sm:py-4"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Sponsor ribbon */}
      <div className="relative w-full shrink-0 bg-white">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#CFB991] to-transparent"
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-5 sm:gap-5 sm:py-6">
          <p className="font-heading text-[11px] font-bold uppercase tracking-[0.28em] text-[#9E6F3E] sm:text-xs">
            Powered by our Hackathon Sponsors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-16">
            {hackathonSponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.src}
                alt={sponsor.name}
                loading="lazy"
                className={`w-auto max-w-full object-contain ${sponsor.size}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
