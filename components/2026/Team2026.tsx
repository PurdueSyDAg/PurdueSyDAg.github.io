import { Linkedin } from "lucide-react";
import teamData from "@/data/team-2026.json";

type Member = (typeof teamData)[number];

const isAdvisor = (m: Member) => /Advising/i.test(m.role);

const getImageSrc = (member: Member) =>
  member.pfp_file_name
    ? `/team/${member.pfp_file_name}`
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        member.name,
      )}&size=400&background=CFB991&color=1A1A1A&bold=true`;

function MemberCard({ member }: { member: Member }) {
  return (
    <li className="flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#CFB991]/15">
        <img
          src={getImageSrc(member)}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-heading text-lg font-black leading-snug text-[#1A1A1A]">
          {member.name}
        </h3>
        <p className="mt-1 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#9E6F3E]">
          {member.role}
        </p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#555960] transition-colors hover:text-[#1A1A1A]"
          >
            <Linkedin className="h-4 w-4" />
            <span className="font-heading">LinkedIn</span>
          </a>
        )}
      </div>
    </li>
  );
}

export function Team2026() {
  const organizers = teamData.filter((m) => !isAdvisor(m));
  const advisors = teamData.filter(isAdvisor);

  return (
    <section id="team" className="bg-[#F8F6F1] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.28em] text-[#555960] sm:text-base">
            Team
          </p>
          <h2 className="font-heading text-4xl font-black text-[#1A1A1A] sm:text-5xl md:text-6xl">
            The People Behind SyDAg
          </h2>
          <div className="mx-auto mb-8 mt-6 h-[2px] w-16 bg-[#CFB991]" />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#555960] sm:text-xl">
            A student-led group of researchers, engineers, and organizers
            building the 2026 symposium.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {organizers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </ul>

        {advisors.length > 0 && (
          <div className="mt-24 sm:mt-32">
            <div className="mx-auto flex max-w-3xl items-center gap-4">
              <div className="h-px flex-1 bg-[#1A1A1A]/10" />
              <p className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-[#555960] sm:text-sm">
                Faculty & Staff Advisors
              </p>
              <div className="h-px flex-1 bg-[#1A1A1A]/10" />
            </div>

            <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              {advisors.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
