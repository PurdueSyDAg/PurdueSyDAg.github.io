type Mentor = {
  name: string;
  title?: string;
  org?: string;
  members?: string[];
};

const industry: Mentor[] = [
  { name: "Bayer", members: ["Mentor 1", "Mentor 2", "Mentor 3"] },
  {
    name: "Dan Kurdys",
    title: "Managing Director, Strategic Growth",
    org: "9 North Group",
  },
  {
    name: "Sudhir Sornapudi, Ph.D.",
    title: "Leader, Advanced Vision Intelligence & Digital R&D",
    org: "Corteva",
  },
  {
    name: "Kavita Bhandari",
    title: "Enterprise Data Architect",
    org: "Corteva",
  },
];

const academia: Mentor[] = [
  {
    name: "RCAC",
    title: "Rosen Center for Advanced Computing",
    org: "Purdue University",
  },
  {
    name: "IoT4Ag Faculty",
    org: "NSF Engineering Research Center",
  },
];

function MentorList({ title, people }: { title: string; people: Mentor[] }) {
  return (
    <div>
      <h3 className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#1A1A1A] sm:text-sm">
        {title}
      </h3>
      <ul className="mt-5 space-y-5">
        {people.map((person) => (
          <li
            key={person.name}
            className="border-l-2 border-[#CFB991]/50 pl-4"
          >
            <p className="font-heading text-lg font-bold text-[#1A1A1A]">
              {person.name}
            </p>
            {(person.title || person.org) && (
              <p className="mt-0.5 text-sm leading-relaxed text-[#555960]">
                {person.title}
                {person.title && person.org ? " · " : ""}
                {person.org && (
                  <span className="font-semibold text-[#9E6F3E]">
                    {person.org}
                  </span>
                )}
              </p>
            )}
            {person.members && (
              <ul className="mt-2 space-y-1">
                {person.members.map((member) => (
                  <li key={member} className="text-sm text-[#555960]">
                    {member}{" "}
                    <span className="text-[#9E6F3E]/70">(TBD)</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HackathonStaff2026() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-[#9E6F3E] sm:text-base">
            Who you&apos;ll work with
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-[#1A1A1A] sm:text-4xl">
            Mentors
          </h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#CFB991]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          <MentorList title="Industry Mentors" people={industry} />
          <MentorList title="Academia Mentors" people={academia} />
        </div>
      </div>
    </section>
  );
}
