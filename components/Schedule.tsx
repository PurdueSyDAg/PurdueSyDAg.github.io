'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Users, User } from 'lucide-react';
import scheduleData from '@/data/schedule.json';
import speakersData from '@/data/speakers.json';

// Function to get speaker name by ID
const getSpeakerName = (speakerId: string): string => {
    const speaker = speakersData.find(s => s.id === speakerId);
    return speaker ? speaker.name : 'Speaker';
};

// Function to handle speaker name clicks
const handleSpeakerClick = (speakerId: string) => {
    // Prevent default button behavior
    event?.preventDefault();
    
    // Find the specific speaker card directly
    const speakerCard = document.querySelector(`[data-speaker-id="${speakerId}"]`);
    if (speakerCard) {
        // Scroll directly to the speaker card
        speakerCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
        });
        
        // Highlight the speaker after scrolling with appropriate delay for mobile
        const highlightDelay = /Mobi|Android/i.test(navigator.userAgent) ? 800 : 400;
        
        setTimeout(() => {
            // Add temporary highlight effect
            speakerCard.classList.add('speaker-highlight');
            setTimeout(() => {
                speakerCard.classList.remove('speaker-highlight');
            }, 3000); // Remove highlight after 3 seconds
        }, highlightDelay);
    }
};

export function Schedule() {
    return (
        <section
            id="schedule"
            className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-black text-[#000000] mb-4">
                        Event Schedule
                    </h2>
                    <p className="text-lg text-[#000000]/70 max-w-2xl mx-auto">
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#555960] mb-8 text-center">
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

                                className="border-2 border-[#555960]/20 rounded-lg p-6 bg-[#F9F9F9] shadow-lg"
                            >
                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <Calendar className="w-5 h-5 text-[#555960] mr-2" />
                                        <h4 className="text-xl font-semibold text-[#000000]">{day.date}</h4>
                                    </div>
                                    <div className="flex items-center text-[#000000]/70">
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
                                            className="border-l-4 border-[#555960]/60 pl-4 py-2 bg-white rounded-r-md shadow-sm"
                                        >
                                            <div className="flex items-center mb-1">
                                                <Clock className="w-4 h-4 text-[#555960] mr-2" />
                                                <span className="text-[#555960] font-medium text-sm">
                                                    {session.time}
                                                </span>
                                            </div>
                                            <h5 className="font-medium text-[#000000]">{session.title}</h5>
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#555960] mb-8 text-center">
                        {scheduleData.symposium.title}
                    </h3>

                    {scheduleData.symposium.days.map((day, dayIndex) => (
                        <motion.div
                            key={dayIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                            viewport={{ once: true }}

                            className="border-2 border-[#555960]/20 rounded-lg p-6 bg-[#F9F9F9] shadow-lg"
                        >
                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <Calendar className="w-5 h-5 text-[#555960] mr-2" />
                                    <h4 className="text-xl font-semibold text-[#000000]">{day.date}</h4>
                                </div>
                                <div className="flex items-center text-[#000000]/70">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="text-sm">{day.location}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {day.sessions.map((session, sessionIndex) => (
                                    <div key={sessionIndex} className="space-y-4">
                                        <h5 className="text-lg font-semibold text-[#555960] border-b-2 border-[#555960]/30 pb-2 bg-[#555960]/5 px-3 py-2 rounded-t-md">
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
                                                    ? 'ml-6 border-l-2 border-[#CFB991]/60 pl-4 bg-white shadow-sm'
                                                    : 'border-l-4 border-[#555960]/60 pl-4 bg-white shadow-sm'
                                                    } py-2 rounded-r-md`}
                                            >
                                                <div className="flex items-center mb-1">
                                                    <Clock className="w-4 h-4 text-[#555960] mr-2" />
                                                    <span className="text-[#555960] font-medium text-sm">
                                                        {item.time}
                                                    </span>
                                                </div>
                                                <h6 className={`font-medium text-[#000000] ${item.isGroup ? 'text-lg' : ''}`}>
                                                    {item.title}
                                                </h6>
                                                {item.description && (
                                                    <p className="text-[#000000]/70 text-sm mt-1">
                                                        {item.description}
                                                    </p>
                                                )}
                                                {item.speakerId && (
                                                    <div className="mt-2 p-2 bg-[#555960]/5">
                                                        <div className="flex items-center mb-1">
                                                            <User className="w-3 h-3 text-[#555960] mr-1" />
                                                            <span className="text-xs font-medium text-[#555960]">
                                                                Speaker:
                                                            </span>
                                                        </div>
                                                        <button
                                                            onClick={() => handleSpeakerClick(item.speakerId)}
                                                            className="text-sm text-[#000000] hover:text-[#555960] active:text-[#555960] font-medium ml-4 underline decoration-[#CFB991] decoration-2 underline-offset-2 cursor-pointer transition-colors duration-200 touch-manipulation"
                                                        >
                                                            {getSpeakerName(item.speakerId)}
                                                        </button>
                                                    </div>
                                                )}
                                                {item.moderator && (
                                                    <div className="mt-2 p-2 bg-[#555960]/5">
                                                        <div className="flex items-center mb-1">
                                                            <User className="w-3 h-3 text-[#555960] mr-1" />
                                                            <span className="text-xs font-medium text-[#555960]">
                                                                Moderator:
                                                            </span>
                                                        </div>
                                                        <button
                                                            onClick={() => handleSpeakerClick(item.moderator.id)}
                                                            className="text-sm text-[#000000] hover:text-[#555960] active:text-[#555960] font-medium ml-4 underline decoration-[#CFB991] decoration-2 underline-offset-2 cursor-pointer transition-colors duration-200 touch-manipulation"
                                                        >
                                                            {item.moderator.name}
                                                        </button>
                                                    </div>
                                                )}
                                                {item.panelists && item.panelists.length > 0 && (
                                                    <div className="mt-2 p-2 bg-[#CFB991]/5">
                                                        <div className="flex items-center mb-1">
                                                            <Users className="w-3 h-3 text-[#555960] mr-1" />
                                                            <span className="text-xs font-medium text-[#555960]">
                                                                Panelists:
                                                            </span>
                                                        </div>
                                                        <div className="ml-4 space-y-1">
                                                            {item.panelists.map((panelist, pIndex) => (
                                                                <button
                                                                    key={pIndex}
                                                                    onClick={() => handleSpeakerClick(panelist.id)}
                                                                    className="text-sm text-[#000000] hover:text-[#555960] active:text-[#555960] font-medium underline decoration-[#CFB991] decoration-2 underline-offset-2 cursor-pointer transition-colors duration-200 block touch-manipulation"
                                                                >
                                                                    {panelist.name}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
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