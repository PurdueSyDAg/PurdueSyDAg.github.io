import {
  Award,
  Coffee,
  Crown,
  FileText,
  Gem,
  Medal,
  Plane,
  Trophy,
} from "lucide-react";

type Logo = { src: string; name: string; size?: string };

const diamond: Logo[] = [
  { src: "/sponsors/2026/corteva.png", name: "Corteva Agriscience" },
];
const gold: Logo[] = [
  { src: "/sponsors/2026/john-deere.png", name: "John Deere" },
  { src: "/sponsors/2026/bayer.png", name: "Bayer" },
];
const silver: Logo[] = [
  { src: "/sponsors/2026/agri-spray-drones.png", name: "Agri Spray Drones" },
  {
    src: "/sponsors/2026/purdue-college-ag.png",
    name: "Purdue College of Agriculture",
  },
  {
    src: "/sponsors/2026/hunsinger.png",
    name: "Hunsinger Ag Solutions",
    size: "h-16 sm:h-[4.5rem]",
  },
];
const bronze: Logo[] = [
  { src: "/sponsors/2026/brandt.png", name: "BRANDT" },
  { src: "/sponsors/2026/cnh.png", name: "CNH" },
  { src: "/sponsors/2026/icmc.png", name: "Indiana Corn Marketing Council" },
  { src: "/sponsors/2026/isa.png", name: "Indiana Soybean Alliance" },
  {
    src: "/sponsors/2026/solinftec.png",
    name: "SOLIX Ag Robotics by Solinftec",
    size: "h-16 sm:h-20",
  },
  {
    src: "/sponsors/2026/purdue.png",
    name: "Purdue Agricultural Alumni Association",
    size: "h-20 sm:h-24",
  },
];
const hackathon: (Logo & { size: string })[] = [
  { src: "/sponsors/2026/bayer.png", name: "Bayer", size: "h-20 sm:h-24" },
  {
    src: "/sponsors/2026/agrinovus.png",
    name: "AgriNovus Indiana",
    size: "h-12 sm:h-14",
  },
  { src: "/sponsors/2026/iot4ag.png", name: "IoT4Ag", size: "h-12 sm:h-16" },
  {
    src: "/sponsors/2026/ag-data-services.png",
    name: "Ag Data Services",
    size: "h-12 sm:h-16",
  },
];

// Program / in-kind sponsors — one logo each, shown with the element they support.
const program = [
  {
    src: "/sponsors/2026/cgb.png",
    name: "CGB Enterprises",
    supports: "Poster Session",
    Icon: FileText,
  },
  {
    src: "/sponsors/2026/spraytec.png",
    name: "SprayTec",
    supports: "Travel Award",
    Icon: Plane,
  },
  {
    src: "/sponsors/2026/becks.png",
    name: "Beck's",
    supports: "Coffee Break",
    Icon: Coffee,
  },
];

const INTEREST_FORM_URL =
  "https://purdue.ca1.qualtrics.com/jfe/form/SV_29NLNu09viH6iEu";

function TierHeading({
  label,
  accent,
  Icon,
  emphasis = false,
}: {
  label: string;
  accent: string;
  Icon: React.ComponentType<{ className?: string }>;
  emphasis?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="flex items-center justify-center rounded-2xl"
        style={{
          width: emphasis ? "3.25rem" : "2.75rem",
          height: emphasis ? "3.25rem" : "2.75rem",
          backgroundColor: `${accent}1F`,
          color: accent,
          boxShadow: `inset 0 0 0 1px ${accent}40`,
        }}
      >
        <Icon className={emphasis ? "h-6 w-6" : "h-5 w-5"} />
      </span>
      <p
        className={`mt-3 font-heading font-bold uppercase tracking-[0.28em] ${
          emphasis ? "text-sm sm:text-base" : "text-xs sm:text-sm"
        }`}
        style={{ color: accent }}
      >
        {label} Sponsor
      </p>
      <span
        className="mt-3 h-[2px] w-10 rounded-full"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}

/** One logo in a soft cell on the light band. `emphasis` adds a gold ring. */
function LogoCell({
  logo,
  logoClass,
  emphasis = false,
}: {
  logo: Logo;
  logoClass: string;
  emphasis?: boolean;
}) {
  if (emphasis) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-[#CFB991] via-[#DDB945]/60 to-[#CFB991]/30 p-[1.5px] shadow-[0_20px_45px_-24px_rgba(207,185,145,0.8)]">
        <div className="flex h-full items-center justify-center rounded-3xl bg-white px-8 py-9 sm:px-12 sm:py-11">
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className={`w-auto max-w-full object-contain ${logoClass}`}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center rounded-2xl border border-black/[0.06] bg-white px-6 py-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:px-8 sm:py-7">
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className={`w-auto object-contain ${logoClass}`}
      />
    </div>
  );
}

export function Sponsors2026() {
  return (
    <section id="sponsors">
      {/* Sponsorship opportunity — dark, short */}
      <div className="relative overflow-hidden bg-[#0A0A0A] py-24 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#CFB991]/[0.07] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#9E6F3E]/[0.07] blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.28em] text-[#CFB991] sm:text-base">
            Sponsors
          </p>
          <h2 className="font-heading text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Become a Sponsor
          </h2>
          <div className="mx-auto mb-8 mt-6 h-[2px] w-16 bg-[#CFB991]" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Support a Purdue student-led symposium shaping the future of digital
            agriculture. Diamond, Gold, Silver, and Bronze tiers are available,
            along with custom partnerships.
          </p>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.22em] text-[#1A1A1A] shadow-[0_18px_40px_-12px_rgba(207,185,145,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-12px_rgba(207,185,145,0.6)] sm:text-base"
          >
            Express Interest
          </a>
        </div>
      </div>

      {/* Our sponsors — light logo wall */}
      <div className="bg-[#F8F6F1] py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="mb-4 font-heading text-sm uppercase tracking-[0.28em] text-[#9E6F3E] sm:text-base">
              Thank You
            </p>
            <h2 className="font-heading text-4xl font-black text-[#1A1A1A] sm:text-5xl md:text-6xl">
              Our Sponsors
            </h2>
            <div className="mx-auto mb-8 mt-6 h-[2px] w-16 bg-[#CFB991]" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#555960] sm:text-xl">
              Thank you to the organizations making the 2026 symposium possible.
            </p>
          </div>

          {/* Diamond */}
          <div className="mt-12 sm:mt-14">
            <TierHeading label="Diamond" accent="#B8985A" Icon={Gem} emphasis />
            <div className="mx-auto mt-6 max-w-2xl">
              {diamond.map((logo) => (
                <LogoCell
                  key={logo.name}
                  logo={logo}
                  logoClass="h-16 sm:h-20 md:h-24"
                  emphasis
                />
              ))}
            </div>
          </div>

          {/* Gold */}
          <div className="mt-10 sm:mt-12">
            <TierHeading label="Gold" accent="#C79A1E" Icon={Crown} />
            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {gold.map((logo) => (
                <LogoCell key={logo.name} logo={logo} logoClass="h-32 sm:h-40" />
              ))}
            </div>
          </div>

          {/* Silver */}
          <div className="mt-10 sm:mt-12">
            <TierHeading label="Silver" accent="#8A8D93" Icon={Award} />
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-5 sm:gap-6">
              {silver.map((logo) => (
                <div key={logo.name} className="w-full sm:w-[calc(50%-0.75rem)]">
                  <LogoCell logo={logo} logoClass={logo.size ?? "h-14 sm:h-16"} />
                </div>
              ))}
            </div>
          </div>

          {/* Bronze */}
          <div className="mt-10 sm:mt-12">
            <TierHeading label="Bronze" accent="#9E6F3E" Icon={Medal} />
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
              {bronze.map((logo) => (
                <LogoCell
                  key={logo.name}
                  logo={logo}
                  logoClass={logo.size ?? "h-9 sm:h-11"}
                />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 mb-2 h-px w-full max-w-3xl bg-black/10 sm:mt-14" />

          {/* Hackathon — elevated */}
          <div className="mt-10 sm:mt-12">
            <TierHeading
              label="Hackathon"
              accent="#B8985A"
              Icon={Trophy}
              emphasis
            />
            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {hackathon.map((logo) => (
                <LogoCell
                  key={logo.name}
                  logo={logo}
                  logoClass={logo.size}
                  emphasis
                />
              ))}
            </div>
          </div>

          {/* Program / in-kind */}
          <div className="mt-10 sm:mt-12">
            <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#555960] sm:text-sm">
              Program Sponsors
            </p>
            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
              {program.map(({ src, name, supports, Icon }) => (
                <div key={name} className="flex flex-col items-center">
                  <LogoCell logo={{ src, name }} logoClass="h-9 sm:h-11" />
                  <p className="mt-3 flex items-center gap-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E6F3E]">
                    <Icon className="h-3.5 w-3.5" />
                    {supports}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
