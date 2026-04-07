import schedule2026 from '@/data/schedule-2026.json';

type SubEvent = {
  time: string;
  title: string;
};

type ScheduleEvent = {
  time: string;
  title: string;
  topic?: string;
  description?: string;
  purpose?: string;
  speakers?: string[];
  subEvents?: SubEvent[];
  topicsLabel?: string;
  topics?: string[];
  highlight?: boolean;
};

type SchedulePeriod = {
  label: string;
  events: ScheduleEvent[];
};

type Schedule2026Data = {
  header: {
    eyebrow: string;
    title: string;
    dayDate: string;
    venue: string;
  };
  periods: SchedulePeriod[];
};

const data = schedule2026 as Schedule2026Data;

function EventCard({ event }: { event: ScheduleEvent }) {
  return (
    <div
      className={`border-l-2 py-4 pl-5 sm:pl-6 ${
        event.highlight
          ? 'border-[#DDB945] bg-[#CFB991]/[0.06]'
          : 'border-[#CFB991]/40'
      }`}
    >
      <time className="font-heading text-xs font-medium uppercase tracking-wider text-[#9E6F3E] sm:text-sm">
        {event.time}
      </time>

      <h4 className="mt-1 font-heading text-base font-semibold text-[#1A1A1A] sm:text-lg">
        {event.title}
      </h4>

      {event.topic && (
        <p className="mt-0.5 text-sm italic text-[#555960] sm:text-base">
          {event.topic}
        </p>
      )}

      {event.description && (
        <p className="mt-2 text-sm font-medium text-[#1A1A1A] sm:text-base">
          {event.description}
        </p>
      )}

      {event.speakers && event.speakers.length > 0 && (
        <ul className="mt-2 space-y-0.5">
          {event.speakers.map((speaker) => (
            <li key={speaker} className="text-sm text-[#555960]">
              {speaker}
            </li>
          ))}
        </ul>
      )}

      {event.subEvents && event.subEvents.length > 0 && (
        <div className="mt-3 space-y-2 border-l border-[#CFB991]/20 pl-4">
          {event.subEvents.map((sub) => (
            <div key={`${sub.time}-${sub.title}`}>
              <time className="font-heading text-xs text-[#9E6F3E]/70">
                {sub.time}
              </time>
              <p className="text-sm text-[#555960]">{sub.title}</p>
            </div>
          ))}
        </div>
      )}

      {event.purpose && (
        <p className="mt-3 border-l border-[#CFB991]/50 pl-3 text-sm leading-relaxed text-[#555960] sm:text-base">
          <span className="mb-1 block font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9E6F3E] sm:text-xs">
            Purpose
          </span>
          {event.purpose}
        </p>
      )}

      {event.topics && event.topics.length > 0 && (
        <div className="mt-3">
          {event.topicsLabel && (
            <p className="mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9E6F3E] sm:text-xs">
              {event.topicsLabel}
            </p>
          )}
          <ul className="space-y-1">
            {event.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-2 text-sm text-[#555960]"
              >
                <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-[#CFB991]" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Schedule2026() {
  const { header, periods } = data;

  return (
    <section id="schedule" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <div className="mb-14 text-center sm:mb-20">
          <p className="mb-4 font-heading text-xs uppercase tracking-[0.3em] text-[#555960]">
            {header.eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-black text-[#1A1A1A] sm:text-5xl md:text-6xl">
            {header.title}
          </h2>
          <div className="mx-auto mb-4 mt-6 h-[2px] w-16 bg-[#CFB991]" />
          <p className="font-heading text-sm text-[#555960]">
            {header.dayDate}
          </p>
          <p className="mt-1 text-sm text-[#555960]">{header.venue}</p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {periods.map((period) => (
            <div key={period.label}>
              <h3 className="mb-6 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-[#9E6F3E] sm:mb-8 sm:text-sm">
                {period.label}
              </h3>

              <div className="space-y-1">
                {period.events.map((event) => (
                  <EventCard
                    key={`${period.label}-${event.time}-${event.title}`}
                    event={event}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
