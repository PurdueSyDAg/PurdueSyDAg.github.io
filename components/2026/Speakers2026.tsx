import speakers2026 from '@/data/speakers-2026.json';

type Speaker = {
  name: string;
  title: string;
  org: string;
  tag?: string;
  photo?: string;
};

type Keynote = Speaker & { talk: string };

type Speakers2026Data = {
  keynote: Keynote;
  speakers: Speaker[];
};

const data = speakers2026 as Speakers2026Data;

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function Avatar({
  name,
  photo,
  size,
}: {
  name: string;
  photo?: string;
  size: string;
}) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className={`${size} rounded-full object-cover shadow-md ring-2 ring-[#CFB991]/40`}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={`${size} flex items-center justify-center rounded-full bg-gradient-to-br from-[#CFB991] to-[#DDB945] font-heading font-black text-[#1A1A1A] shadow-md ring-2 ring-[#CFB991]/30`}
    >
      {initials(name)}
    </div>
  );
}

export function Speakers2026() {
  const { keynote, speakers } = data;

  return (
    <section id="speakers" className="bg-[#F8F6F1] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.28em] text-[#555960] sm:text-base">
            Speakers
          </p>
          <h2 className="font-heading text-4xl font-black text-[#1A1A1A] sm:text-5xl md:text-6xl">
            2026 Lineup
          </h2>
          <div className="mx-auto mb-8 mt-6 h-[2px] w-16 bg-[#CFB991]" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#555960] sm:text-xl">
            Researchers, industry leaders, and growers exploring how AI is
            reshaping agriculture. Headshots coming soon.
          </p>
        </div>

        {/* Keynote */}
        <div className="mt-16 sm:mt-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#CFB991] via-[#DDB945]/60 to-[#CFB991]/30 p-[1.5px] shadow-[0_30px_70px_-30px_rgba(207,185,145,0.7)]">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-white px-6 py-10 text-center sm:flex-row sm:gap-8 sm:px-12 sm:py-12 sm:text-left">
              <Avatar
                name={keynote.name}
                photo={keynote.photo}
                size="h-28 w-28 text-3xl sm:h-32 sm:w-32 sm:text-4xl"
              />
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#9E6F3E] sm:text-sm">
                  Keynote
                </p>
                <h3 className="mt-2 font-heading text-2xl font-black text-[#1A1A1A] sm:text-3xl">
                  {keynote.name}
                </h3>
                <p className="mt-1 text-base text-[#555960] sm:text-lg">
                  {keynote.title}
                  <span className="font-semibold text-[#9E6F3E]">
                    {' · '}
                    {keynote.org}
                  </span>
                </p>
                <p className="mt-3 text-base italic leading-snug text-[#1A1A1A] sm:text-lg">
                  &ldquo;{keynote.talk}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Speaker grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col items-center rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-sm"
            >
              <Avatar
                name={speaker.name}
                photo={speaker.photo}
                size="h-20 w-20 text-xl"
              />
              {speaker.tag && (
                <span className="mt-4 inline-flex rounded-full border border-[#CFB991]/50 bg-[#CFB991]/10 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-[#9E6F3E]">
                  {speaker.tag}
                </span>
              )}
              <h3 className="mt-3 font-heading text-lg font-bold text-[#1A1A1A]">
                {speaker.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#555960]">
                {speaker.title}
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-[#9E6F3E]">
                {speaker.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
