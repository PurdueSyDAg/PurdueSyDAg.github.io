'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar } from 'lucide-react';
import scheduleData from '@/data/schedule.json';

export function Schedule() {
    return (
        <section
            id="schedule"
            className="min-h-screen bg-gradient-to-br from-[#f5f1e8] to-[#e8dcc6] px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-black text-[#1F1510] mb-4">
                        Event Schedule
                    </h2>
                    <p className="text-lg text-[#1F1510]/70 max-w-2xl mx-auto">
                        Three days of innovation, collaboration, and insights in digital agriculture
                    </p>
                </motion.div>

                {/* Hackathon Weekend */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#C56A33] mb-8 text-center">
                        {scheduleData.hackathon.title}
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {scheduleData.hackathon.days.map((day, dayIndex) => (
                            <motion.div
                                key={dayIndex}
                                initial={{ opacity: 0, x: dayIndex === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="border-2 border-[#C56A33]/30 rounded-lg p-6 backdrop-blur-sm shadow-lg"
                            >
                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <Calendar className="w-5 h-5 text-[#C56A33] mr-2" />
                                        <h4 className="text-xl font-semibold text-[#1F1510]">{day.date}</h4>
                                    </div>
                                    <div className="flex items-center text-[#1F1510]/70">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{day.location}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {day.sessions.map((session, sessionIndex) => (
                                        <motion.div
                                            key={sessionIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: sessionIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="border-l-4 border-[#C56A33]/40 pl-4 py-2 bg-[#1F1510]/5 rounded-r-md"
                                        >
                                            <div className="flex items-center mb-1">
                                                <Clock className="w-4 h-4 text-[#C56A33] mr-2" />
                                                <span className="text-[#C56A33] font-medium text-sm">
                                                    {session.time}
                                                </span>
                                            </div>
                                            <h5 className="font-medium text-[#1F1510]">{session.title}</h5>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Symposium */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#C56A33] mb-8 text-center">
                        {scheduleData.symposium.title}
                    </h3>

                    {scheduleData.symposium.days.map((day, dayIndex) => (
                        <motion.div
                            key={dayIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01, y: -4 }}
                            className="border-2 border-[#C56A33]/30 rounded-lg p-6 backdrop-blur-sm shadow-lg"
                        >
                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <Calendar className="w-5 h-5 text-[#C56A33] mr-2" />
                                    <h4 className="text-xl font-semibold text-[#1F1510]">{day.date}</h4>
                                </div>
                                <div className="flex items-center text-[#1F1510]/70">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="text-sm">{day.location}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {day.sessions.map((session, sessionIndex) => (
                                    <div key={sessionIndex} className="space-y-4">
                                        <h5 className="text-lg font-semibold text-[#C56A33] border-b-2 border-[#C56A33]/30 pb-2 bg-[#C56A33]/10 px-3 py-2 rounded-t-md">
                                            {session.sessionTitle}
                                        </h5>

                                        {session.items.map((item, itemIndex) => (
                                            <motion.div
                                                key={itemIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`${item.isSubItem
                                                    ? 'ml-6 border-l-2 border-[#ddb945]/50 pl-4 bg-[#ddb945]/10'
                                                    : 'border-l-4 border-[#C56A33]/40 pl-4 bg-[#1F1510]/5'
                                                    } py-2 rounded-r-md`}
                                            >
                                                <div className="flex items-center mb-1">
                                                    <Clock className="w-4 h-4 text-[#C56A33] mr-2" />
                                                    <span className="text-[#C56A33] font-medium text-sm">
                                                        {item.time}
                                                    </span>
                                                </div>
                                                <h6 className={`font-medium text-[#1F1510] ${item.isGroup ? 'text-lg' : ''}`}>
                                                    {item.title}
                                                </h6>
                                                {item.description && (
                                                    <p className="text-[#1F1510]/70 text-sm mt-1">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 