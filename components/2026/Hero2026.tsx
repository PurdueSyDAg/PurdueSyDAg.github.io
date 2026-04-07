export function Hero2026() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F6F1] pt-16"
    >
      <div className="pointer-events-none absolute right-[-2rem] top-12 select-none font-heading text-[16rem] font-black leading-none text-[#CFB991]/[0.045] sm:right-0 sm:text-[24rem] lg:text-[32rem]">
        26
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-0">
        <div className="flex items-stretch gap-4">
          <div
            className="w-[3px] shrink-0 rounded-full bg-[#CFB991]"
            aria-hidden
          />
          <p className="self-center py-0.5 font-heading text-sm font-bold uppercase tracking-[0.32em] text-[#1A1A1A] sm:text-base md:text-lg">
            September 28, 2026
          </p>
        </div>

        <h1 className="mt-6 font-heading text-[3.25rem] font-black leading-[0.85] tracking-[-0.04em] sm:mt-10 sm:text-[5rem] md:text-[7rem] lg:text-[9rem]">
          <span className="block text-[#1A1A1A]">Growing</span>
          <span className="block text-[#CFB991]">with AI</span>
        </h1>

        <div className="mt-8 h-[3px] w-16 bg-[#CFB991] sm:mt-12" />

        <p className="mt-6 max-w-2xl text-xl italic leading-snug text-[#555960] sm:mt-8 sm:text-2xl md:text-3xl">
          2nd Symposium of Digital Agriculture
        </p>

        <div className="mt-4 flex flex-col gap-1 font-heading text-sm text-[#555960] sm:flex-row sm:items-center sm:gap-3">
          <span>Beck Agricultural Center</span>
          <span className="hidden text-[#CFB991] sm:inline">&bull;</span>
          <span>West Lafayette, Indiana</span>
        </div>
      </div>
    </section>
  );
}
