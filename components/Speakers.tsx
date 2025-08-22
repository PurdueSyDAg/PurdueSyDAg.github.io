"use client";

import { motion } from "framer-motion";
import speakersData from "@/data/speakers.json";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl font-black text-white mb-4">
            Speakers
          </h2>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;re assembling an incredible lineup of distinguished speakers who are leading the way in digital agriculture innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersData
            .sort((a, b) => {
              // Define role priority order
              const roleOrder: { [key: string]: number } = { 'keynote speaker': 1, speaker: 2, panelist: 3, moderator: 4 };
              
              // First sort by role
              const roleComparison = (roleOrder[a.role] || 999) - (roleOrder[b.role] || 999);
              if (roleComparison !== 0) return roleComparison;
              
              // Then sort alphabetically by name
              return a.name.localeCompare(b.name);
            })
            .map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#9E6F3E]/10 backdrop-blur-sm border border-[#9E6F3E]/20 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=400&background=9E6F3E&color=fff`;
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>
                  <span className="px-2 py-1 bg-[#CFB991]/20 border border-[#CFB991]/40 text-[#CFB991] rounded-full text-xs font-medium capitalize">
                    {speaker.role}
                  </span>
                </div>
                <p className="font-body text-[#CFB991] font-medium mb-1">
                  {speaker.title}
                </p>
                <p className="font-body text-[#DDB945] font-medium mb-3 text-sm">
                  {speaker.organization}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
