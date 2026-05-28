import { Award, Check, Crown, Gem, Medal } from "lucide-react";

type Tier = {
  name: string;
  accent: string;
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
  inheritsBelow: boolean;
  benefits: string[];
};

const tiers: Tier[] = [
  {
    name: "Diamond",
    accent: "#CFB991",
    Icon: Gem,
    featured: true,
    inheritsBelow: true,
    benefits: [
      "Top recognition in all materials (print, web, and social media)",
      "Prime logo placement and premium exhibit space",
      "Full access to a networking event",
    ],
  },
  {
    name: "Gold",
    accent: "#DDB945",
    Icon: Crown,
    inheritsBelow: true,
    benefits: [
      "Individualized social media spotlights",
      "Multiple recognition highlights in the event program",
    ],
  },
  {
    name: "Silver",
    accent: "#C8C5BC",
    Icon: Award,
    inheritsBelow: true,
    benefits: [
      "Logo placement on the website and sponsorship email mentions",
      "Exhibit table and networking access",
    ],
  },
  {
    name: "Bronze",
    accent: "#9E6F3E",
    Icon: Medal,
    inheritsBelow: false,
    benefits: [
      "Sponsor name on printed materials and website",
      "Recognition in social media and event program",
    ],
  },
];

const INTEREST_FORM_URL =
  "https://purdue.ca1.qualtrics.com/jfe/form/SV_29NLNu09viH6iEu";

export function Sponsors2026() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#CFB991]/[0.07] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-[#9E6F3E]/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.28em] text-[#CFB991] sm:text-base">
            Sponsors
          </p>
          <h2 className="font-heading text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Sponsorship Opportunities
          </h2>
          <div className="mx-auto mb-8 mt-6 h-[2px] w-16 bg-[#CFB991]" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Support a Purdue student-led symposium shaping the future of
            digital agriculture. Choose a tier or get in touch about a
            custom partnership.
          </p>
        </div>

        <ol className="mt-16 space-y-6 sm:space-y-7">
          {tiers.map((tier) => (
            <li
              key={tier.name}
              className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-0.5 sm:p-9 ${
                tier.featured
                  ? "border-[#CFB991]/40 bg-gradient-to-br from-[#1B1610] via-[#161412] to-[#0F0E0D] shadow-[0_30px_80px_-20px_rgba(207,185,145,0.25)]"
                  : "border-white/10 bg-[#111111]/70 backdrop-blur-sm hover:border-white/20"
              }`}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ backgroundColor: tier.accent }}
              />

              <div className="flex items-center gap-5">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${tier.accent}14`,
                    color: tier.accent,
                    boxShadow: `inset 0 0 0 1px ${tier.accent}33`,
                  }}
                >
                  <tier.Icon className="h-7 w-7" />
                </span>
                <div>
                  <p
                    className="font-heading text-xs font-bold uppercase tracking-[0.28em]"
                    style={{ color: tier.accent }}
                  >
                    {tier.name} Sponsor
                  </p>
                  <p className="mt-1 font-heading text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {tier.name}
                  </p>
                  {tier.inheritsBelow && (
                    <p className="mt-1.5 font-heading text-[11px] uppercase tracking-[0.2em] text-white/40">
                      All benefits below, plus
                    </p>
                  )}
                </div>
              </div>

              <div
                className="my-6 h-px w-full sm:my-8"
                style={{
                  background: `linear-gradient(to right, ${tier.accent}55, transparent)`,
                }}
              />

              <ul className="space-y-3.5">
                {tier.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-base leading-relaxed text-white/85 sm:text-lg"
                  >
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${tier.accent}1A` }}
                    >
                      <Check
                        className="h-3.5 w-3.5"
                        style={{ color: tier.accent }}
                      />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {tier.featured && (
                <div className="mt-7 flex justify-center sm:mt-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#CFB991]/40 bg-[#CFB991]/10 px-4 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.28em] text-[#CFB991]">
                    <Gem className="h-3.5 w-3.5" />
                    Premier Partner
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-center gap-5 text-center sm:mt-20">
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Interested in supporting SyDAg or exploring a custom partnership?
          </p>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.22em] text-[#1A1A1A] shadow-[0_18px_40px_-12px_rgba(207,185,145,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-12px_rgba(207,185,145,0.6)] sm:text-base"
          >
            Express Interest
          </a>
        </div>
      </div>
    </section>
  );
}
