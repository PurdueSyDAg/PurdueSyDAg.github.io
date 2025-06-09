"use client";

import { motion } from "framer-motion";
import speakersData from "@/data/speakers.json";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1F1510] via-[#2A1B12] to-[#0F0B08] px-4 sm:px-6 lg:px-8 py-20"
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
            We're assembling an incredible lineup of distinguished speakers who are leading the way in digital agriculture innovation
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-[#C56A33]/10 backdrop-blur-sm border border-[#C56A33]/20 rounded-2xl shadow-lg p-12 max-w-md text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#ddb945] to-[#f4e076] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎤</span>
              </div>
            </motion.div>
            
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Coming Soon
            </h3>
            
            <p className="font-body text-white/80 mb-6 leading-relaxed">
              We're excited to announce our speaker lineup soon. Stay tuned for updates on the incredible experts who will be joining us!
            </p>
            
            <div className="inline-flex items-center px-4 py-2 bg-[#ddb945]/20 border border-[#ddb945]/30 text-[#ddb945] rounded-full text-sm font-medium">
              📅 Announcements coming soon
            </div>
          </motion.div>
        </motion.div>

        {/* 
        TODO: Uncomment this section when speakers are ready to be displayed
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersData.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#C56A33]/10 backdrop-blur-sm border border-[#C56A33]/20 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=400&background=C56A33&color=fff`;
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="font-body text-[#ddb945] font-medium mb-3">
                  {speaker.title}
                </p>
                <p className="font-body text-white/70 text-sm">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-white/70 mb-6">
            More speakers to be announced soon!
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-[#ddb945]/20 border border-[#ddb945]/30 text-[#ddb945] rounded-full text-sm font-medium">
            🎤 Stay tuned for updates
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
