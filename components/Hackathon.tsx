"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Gift, Trophy, Users, Code, Target, CheckCircle, ArrowRight, Zap, Award, User } from 'lucide-react';
import scheduleData from '@/data/schedule.json';

export function Hackathon() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#DDB945]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#CFB991]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CFB991]/20 to-[#DDB945]/20 border border-[#CFB991]/30 rounded-full px-4 py-2 mb-8">
              <Trophy className="w-4 h-4 text-[#DDB945]" />
              <span className="text-sm font-medium">48-Hour Innovation Challenge</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="block text-white">SyDAg</span>
              <span className="block bg-gradient-to-r from-[#CFB991] to-[#DDB945] bg-clip-text text-transparent">
                Hackathon
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Building the future of user-friendly digital agriculture
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <Calendar className="w-5 h-5 text-[#DDB945]" />
                <span className="font-medium">October 18-19, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <MapPin className="w-5 h-5 text-[#DDB945]" />
                <span className="font-medium">Purdue University</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://purdue.ca1.qualtrics.com/jfe/form/SV_8rhziKf1QXUjJnU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#CFB991] to-[#DDB945] text-black font-bold text-lg rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Register as Team
              </a>
              <a 
                href="https://purdue.ca1.qualtrics.com/jfe/form/SV_54R3TbpGP7lBQMe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black border-2 border-[#DDB945] text-[#DDB945] font-bold text-lg rounded-2xl hover:bg-[#DDB945] hover:text-black hover:scale-105 transition-all duration-300"
              >
                <User className="w-5 h-5" />
                Register Solo
              </a>
            </div>

            {/* What is this? - Now part of hero */}
            <motion.div
              className="mt-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">What is this Hackathon?</h3>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  A 48-hour innovation sprint where teams tackle real agricultural challenges. 
                  Choose from five case studies and build solutions that make digital agriculture 
                  more accessible and farmer-friendly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#DDB945] to-[#CFB991] rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-black" />
                    </div>
                    <h4 className="font-bold">Who Can Join</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Students, researchers, professionals, or enthusiasts from any background. 
                    All skill levels welcome!
                  </p>
                </div>

                <div className="relative bg-gradient-to-br from-[#CFB991]/20 to-[#DDB945]/20 p-6 rounded-xl border-2 border-[#CFB991]/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CFB991]/5 to-[#DDB945]/5 rounded-xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-xl flex items-center justify-center shadow-lg">
                        <Target className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="font-bold text-lg text-white">The Challenge</h4>
                    </div>
                    <p className="text-white text-sm italic font-medium">
                      &ldquo;How to make digital agriculture more user-friendly and adaptable to farmers?&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6">Event Schedule</h2>
            <p className="text-xl text-gray-300">Key dates and weekend agenda</p>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {[
              { date: "Aug 18", event: "Registration Opens" },
              { date: "Oct 4", event: "Registration Closes" },
              { date: "Oct 18", event: "Hackathon Begins" },
              { date: "Oct 19", event: "Judging Day" },
              { date: "Oct 20", event: "Winners Announced" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 border border-gray-700 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-[#CFB991] mb-2">{milestone.date}</div>
                <div className="text-sm text-gray-300">{milestone.event}</div>
              </motion.div>
            ))}
          </div>

          {/* Weekend Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scheduleData.hackathon.days.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/50 border border-gray-700 rounded-2xl p-6 hover:border-[#CFB991]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#DDB945]" />
                  <h3 className="text-2xl font-bold">{day.date}</h3>
                </div>
                
                <div className="space-y-3">
                  {day.sessions.map((session: { time: string; title: string }, sessionIndex: number) => (
                    <div key={sessionIndex} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                      <Clock className="w-4 h-4 text-[#CFB991] mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-[#CFB991] font-medium">{session.time}</div>
                        <div className="text-white">{session.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6 flex items-center justify-center gap-3">
              <Award className="w-10 h-10 text-[#DDB945]" />
              Prizes & Rewards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compete for cash prizes and exclusive opportunities
            </p>
          </motion.div>

          {/* Prize Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { place: "1st Place", amount: "$300", gradient: "from-yellow-400 to-yellow-600" },
              { place: "2nd Place", amount: "$150", gradient: "from-gray-300 to-gray-500" },
              { place: "3rd Place", amount: "$50", gradient: "from-orange-400 to-orange-600" }
            ].map((prize, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#CFB991]/50 transition-all text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFB991]/5 to-[#DDB945]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${prize.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{prize.place}</h3>
                  <p className="text-4xl font-black text-[#CFB991]">{prize.amount}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bonus Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#CFB991]/10 to-[#DDB945]/10 border border-[#CFB991]/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 justify-center">
              <Zap className="w-6 h-6 text-[#DDB945]" />
              Bonus Opportunities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DDB945] mt-1 flex-shrink-0" />
                <span>Mentorship with industry experts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DDB945] mt-1 flex-shrink-0" />
                <span>Present at RCAC symposium (Oct 23rd)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#DDB945] mt-1 flex-shrink-0" />
                <span>Network with potential investors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6">How to Join</h2>
            <p className="text-xl text-gray-300">Ready to build the future? Here&apos;s how to get started</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { step: "1", title: "Register Online", desc: "Sign up before October 4th" },
              { step: "2", title: "Form Your Team", desc: "Up to 5 people or get matched by skills" },
              { step: "3", title: "Build Solutions", desc: "48 hours to create something amazing" },
              { step: "4", title: "Present & Win", desc: "Pitch your solution to judges" }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-black/50 border border-gray-700 rounded-xl p-6 text-center hover:border-[#CFB991]/50 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#CFB991] to-[#DDB945] text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#CFB991]/10 via-[#DDB945]/5 to-[#CFB991]/10 border border-[#CFB991]/30 rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                <Gift className="w-6 h-6 text-[#DDB945]" />
                Resources Provided
              </h3>
              <p className="text-gray-300 text-sm">Everything you need to build amazing solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">RCAC Computing Resources</h4>
                  <p className="text-gray-300 text-sm">Advanced computing power for ML and data processing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#DDB945] to-[#CFB991] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Expert Mentorship</h4>
                  <p className="text-gray-300 text-sm">Guidance from industry and academic professionals throughout the event</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#555960] to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Food & Refreshments</h4>
                  <p className="text-gray-300 text-sm">Meals and snacks to keep you energized</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-[#555960] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Collaborative Workspace</h4>
                  <p className="text-gray-300 text-sm">Modern facilities designed for team collaboration</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-[#CFB991]/20 text-center">
              <p className="text-sm text-gray-400 italic">*Don&apos;t forget to bring your own laptop!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Ready to Join?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t miss your chance to be part of this exciting hackathon. Registration closes October 4th!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://purdue.ca1.qualtrics.com/jfe/form/SV_8rhziKf1QXUjJnU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#CFB991] to-[#DDB945] text-black font-bold text-xl rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                Register as Team
              </a>
              <a 
                href="https://purdue.ca1.qualtrics.com/jfe/form/SV_54R3TbpGP7lBQMe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-6 bg-black border-2 border-[#DDB945] text-[#DDB945] font-bold text-xl rounded-2xl hover:bg-[#DDB945] hover:text-black hover:scale-105 transition-all duration-300"
              >
                <User className="w-6 h-6" />
                Register Solo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}