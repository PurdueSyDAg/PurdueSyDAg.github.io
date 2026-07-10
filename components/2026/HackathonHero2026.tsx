export function HackathonHero2026() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none font-heading text-[18rem] font-black leading-none text-[#CFB991]/[0.06] sm:left-[6%] sm:text-[26rem] lg:left-[10%] lg:text-[34rem]"
      >
        {'{'}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-heading text-[18rem] font-black leading-none text-[#CFB991]/[0.06] sm:right-[6%] sm:text-[26rem] lg:right-[10%] lg:text-[34rem]"
      >
        {'}'}
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-6 py-16 text-center sm:px-8 sm:py-0">
        <div className="mx-auto flex w-fit items-center gap-3">
          <span className="h-[2px] w-8 bg-[#CFB991]" aria-hidden />
          <p className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-white sm:text-base">
            September 25&ndash;27, 2026
          </p>
          <span className="h-[2px] w-8 bg-[#CFB991]" aria-hidden />
        </div>

        <p className="mt-6 font-heading text-lg font-bold uppercase tracking-[0.28em] text-[#CFB991] sm:mt-8 sm:text-xl">
          2nd Edition
        </p>

        <h1 className="mt-3 font-heading text-[3rem] font-black leading-[0.9] tracking-[-0.04em] text-white sm:text-[5rem] md:text-[6.5rem]">
          <span className="block">SyDAg</span>
          <span className="block text-[#CFB991]">Hackathon</span>
        </h1>

        <div className="mx-auto mt-8 h-[3px] w-16 bg-[#CFB991] sm:mt-10" />

        <p className="mx-auto mt-6 max-w-2xl text-xl italic leading-snug text-white/80 sm:mt-8 sm:text-2xl md:text-3xl">
          Open to everyone: students, researchers, scholars, post-docs, faculty,
          and industry. Bring your coding skills, your domain expertise, or both.
          If your roots are in agriculture, this is for you.
        </p>

        <p className="mx-auto mt-5 font-heading text-sm uppercase tracking-[0.22em] text-white/50 sm:mt-6 sm:text-base">
          Teams and individuals welcome
        </p>

        <a
          href="https://purdue.ca1.qualtrics.com/jfe/form/SV_0qW9qMnKuFd9U7I"
          target="_blank"
          rel="noreferrer noopener"
          className="mx-auto mt-8 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.22em] text-[#1A1A1A] shadow-md transition-all duration-200 hover:brightness-95 sm:mt-10 sm:text-base"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
