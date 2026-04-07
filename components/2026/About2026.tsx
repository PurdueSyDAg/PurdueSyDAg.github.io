import {
  Monitor,
  Handshake,
  Sparkles,
  Route,
  Eye,
  Network,
} from 'lucide-react';
import { Highlights2025 } from '@/components/2026/Highlights2025';

const purposeItems = [
  {
    icon: Monitor,
    text: 'Showcase technology that improves real-world decision-making',
  },
  {
    icon: Handshake,
    text: 'Promote collaboration between industry, academia, and growers',
  },
  {
    icon: Sparkles,
    text: 'Inspire the next generation of digital agriculture innovators',
  },
  {
    icon: Route,
    text: 'Create accessible pathways for understanding emerging digital tools',
  },
  {
    icon: Eye,
    text: 'Increase awareness of ongoing research and industry innovations',
  },
  {
    icon: Network,
    text: 'Foster interdisciplinary networks and hands-on learning',
  },
];

const audienceGroups = [
  'Students',
  'Researchers & Educators',
  'Industry & Startups',
  'Extension & Agronomists',
  'Growers',
];

export function About2026() {
  return (
    <section
      id="about"
      className="bg-[#0A0A0A] pb-0 pt-24 text-white sm:pt-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:max-w-7xl lg:px-12">
        <p className="mb-16 font-heading text-sm uppercase tracking-[0.28em] text-[#CFB991] sm:mb-20 sm:text-base">
          About SyDAg 2026
        </p>

        {/* Vision */}
        <div className="mb-16 border-l-[3px] border-[#CFB991] pl-6 sm:mb-20 sm:pl-10">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.22em] text-[#CFB991]/70 sm:text-base">
            Our Vision
          </p>
          <p className="text-2xl italic leading-relaxed text-white/90 sm:text-3xl md:text-4xl">
            To build a future where digital agriculture is impactful, intuitive,
            and accessible, making advanced technologies easy to understand,
            simple to adopt, and meaningfully useful to growers, researchers, and
            stakeholders across the agricultural ecosystem.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16 sm:mb-20">
          <p className="mb-4 font-heading text-sm uppercase tracking-[0.22em] text-[#CFB991]/70 sm:text-base">
            Our Mission
          </p>
          <p className="max-w-3xl text-xl leading-relaxed text-white/75 sm:text-2xl">
            Our mission is to host a hands-on, student-led symposium that makes
            digital agriculture approachable, encourages two-way conversations,
            and showcases real-world applications shaping the future of food and
            agriculture.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-16 h-px w-full bg-white/10 sm:mb-20" />

        {/* Purpose */}
        <div className="mb-16 sm:mb-20">
          <h2 className="mb-5 font-heading text-3xl font-bold text-white sm:text-4xl">
            The Symposium
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-white/60 sm:text-xl">
            SyDAg brings together emerging leaders and established experts to
            explore how innovations in digital and AI&#8209;driven agriculture
            can address pressing challenges across production, management, and
            supply systems.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {purposeItems.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#CFB991]/10">
                  <item.icon className="h-5 w-5 text-[#CFB991]" />
                </div>
                <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="border-t border-white/10 pb-10 pt-12 sm:pb-14 sm:pt-16">
          <p className="mb-6 font-heading text-sm uppercase tracking-[0.22em] text-[#CFB991]/70 sm:text-base">
            Who It&apos;s For
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {audienceGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-white/15 px-4 py-2 font-heading text-sm text-white/60 sm:text-base"
              >
                {group}
              </span>
            ))}
          </div>

          <p className="mb-0 max-w-3xl text-lg leading-relaxed text-white/50 sm:text-xl">
            The symposium welcomes students from agriculture, engineering, data
            science, and related fields, as well as researchers, educators,
            industry professionals, startups, extension specialists, and growers
            exploring or utilizing digital tools.
          </p>
        </div>
      </div>

      <Highlights2025 />
    </section>
  );
}
