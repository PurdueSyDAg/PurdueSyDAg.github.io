import { Award, Medal, Trophy } from "lucide-react";

type Prize = {
  place: string;
  item: string;
  note: string;
  cash: string;
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const prizes: Prize[] = [
  {
    place: "1st Place",
    item: "iPad",
    note: "One per team member",
    cash: "$1,000",
    Icon: Trophy,
    featured: true,
  },
  {
    place: "2nd Place",
    item: "AirPods",
    note: "One per team member",
    cash: "$600",
    Icon: Award,
  },
  {
    place: "3rd Place",
    item: "Yeti Tumbler Kit",
    note: "One per team member",
    cash: "$400",
    Icon: Medal,
  },
];

export function HackathonPrizes2026() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-[#CFB991]/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-[#CFB991] sm:text-base">
            What you can win
          </p>
          <h2 className="mt-4 font-heading text-4xl font-black tracking-tight text-white sm:text-5xl">
            Prizes
          </h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#CFB991]" />

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Cash plus a prize for every member of the winning teams.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6">
          {prizes.map((prize) => {
            const inner = (
              <div className="flex h-full flex-col items-center rounded-3xl bg-[#111111] px-6 py-8 text-center">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "#CFB99114",
                    color: "#CFB991",
                    boxShadow: "inset 0 0 0 1px #CFB99133",
                  }}
                >
                  <prize.Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#CFB991]">
                  {prize.place}
                </p>
                <p className="mt-2 font-heading text-2xl font-black text-white">
                  {prize.item}
                </p>
                <p className="mt-1.5 text-sm text-white/60">{prize.note}</p>
                <p className="mt-4 font-heading text-lg font-black text-[#DDB945]">
                  + {prize.cash}
                </p>
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  for the team
                </p>
              </div>
            );

            return prize.featured ? (
              <div
                key={prize.place}
                className="rounded-3xl bg-gradient-to-br from-[#CFB991] via-[#DDB945]/60 to-[#CFB991]/30 p-[1.5px] shadow-[0_24px_60px_-24px_rgba(207,185,145,0.6)]"
              >
                {inner}
              </div>
            ) : (
              <div
                key={prize.place}
                className="rounded-3xl border border-white/10 bg-[#111111]/70"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
