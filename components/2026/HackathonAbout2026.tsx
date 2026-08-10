const days = [
  {
    day: "Friday night",
    label: "Kickoff",
    text: "Teams form and the challenges are announced over dinner. Already have a team? You're ready to start.",
  },
  {
    day: "Saturday",
    label: "Build day",
    text: "Hacking starts in the morning, with mentors around the venue all day. Breakfast, lunch, and dinner are provided.",
  },
  {
    day: "Sunday",
    label: "Demos",
    text: "Finish your project and submit your slides in the morning, with mentors still on hand. Teams present in the afternoon and the top three are picked.",
  },
  {
    day: "Monday",
    label: "Symposium & awards",
    text: "The top three give a lightning talk to the symposium for the fan-favorite vote, then the awards are handed out.",
  },
];

export function HackathonAbout2026() {
  return (
    <section className="bg-[#F8F6F1] py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-[#9E6F3E] sm:text-base">
          New to hackathons?
        </p>
        <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl">
          What&apos;s a Hackathon?
        </h2>
        <div className="mx-auto mt-6 h-[2px] w-16 bg-[#CFB991]" />
        <p className="mt-6 text-lg leading-relaxed text-[#555960] sm:text-xl">
          A few days where small teams pick a real problem in agriculture and
          build something to solve it. You don&apos;t have to be a programmer. If
          you know the problem, you&apos;re exactly who a team needs.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-6 sm:mt-16 sm:px-8">
        <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#555960] sm:text-sm">
          The challenge
        </p>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-relaxed text-[#555960] sm:text-xl">
          We&apos;ll present two tracks, one from{" "}
          <span className="font-semibold text-[#9E6F3E]">Bayer</span> and one
          from <span className="font-semibold text-[#1A1A1A]">IoT4Ag</span>. Pick
          the one that speaks to you and build your solution around it.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6 sm:mt-20 sm:px-8">
        <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#555960] sm:text-sm">
          How the days go
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {days.map((d) => (
            <div
              key={d.day}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
            >
              <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#9E6F3E]">
                {d.day}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-[#1A1A1A]">
                {d.label}
              </p>
              <p className="mt-2 text-base leading-relaxed text-[#555960]">
                {d.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
