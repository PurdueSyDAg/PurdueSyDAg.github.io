'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import teamData from '@/data/team.json';
import contactData from '@/data/contact.json';

// Map icon names to components
const iconMap = {
    Mail,
    Phone,
    MapPin
};

export function Team() {
    // Separate faculty from students
    const students = teamData.filter(member => member.role !== 'Advising Faculty');
    const faculty = teamData.filter(member => member.role === 'Advising Faculty');

    return (
        <section
            id="team"
            className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-black text-[#3A281C] mb-8">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-[#1E3A5F] leading-relaxed max-w-3xl mx-auto">
                        The passionate students and researchers behind the SyDAg symposium, working to bridge the gap between digital innovation and agricultural practice.
                    </p>
                </motion.div>

                {/* Student Team Members */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {students.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#C56A33]/20"
                        >
                            <div className="relative w-full h-64 bg-gradient-to-br from-[#ddb945]/20 to-[#C56A33]/20">
                                <img
                                    src={`/team/${member.pfp_file_name}`}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=C56A33&color=fff&bold=true`;
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Left Column: Name and Role */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1F1510] mb-1">{member.name}</h3>
                                        <p className="text-sm text-[#1E3A5F] font-medium">{member.role}</p>
                                    </div>

                                    {/* Right Column: Position and LinkedIn */}
                                    <div>
                                        <p className="text-base font-bold text-[#C56A33] mb-3">
                                            {member.position}
                                        </p>
                                        {member.linkedin && (
                                            <motion.a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-flex items-center text-sm text-[#C56A33] hover:text-[#ddb945] font-semibold"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                                LinkedIn
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Faculty Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    {/* Decorative Separator */}
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C56A33]/30 to-transparent"></div>
                        <div className="px-6">
                            <h3 className="text-2xl font-bold text-[#3A281C]">Faculty Advisors</h3>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C56A33]/30 to-transparent"></div>
                    </div>

                    {/* Faculty Members */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {faculty.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#ddb945]/30"
                            >
                                <div className="relative w-full h-80 bg-gradient-to-br from-[#ddb945]/30 to-[#C56A33]/20">
                                    <img
                                        src={`/team/${member.pfp_file_name}`}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => {
                                            // Fallback to placeholder if image fails to load
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=ddb945&color=3A281C&bold=true`;
                                        }}
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-[#1F1510] mb-2">{member.name}</h3>
                                        <p className="text-[#ddb945] font-semibold mb-3">{member.position}</p>
                                        <p className="text-[#C56A33] font-medium mb-4">{member.role}</p>
                                        {member.linkedin && (
                                            <motion.a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-flex items-center text-[#C56A33] hover:text-[#ddb945] font-semibold"
                                            >
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                                LinkedIn Profile
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-bold text-[#3A281C] mb-8">
                        Have Questions?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {contactData.map((item, index) => {
                            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                            return (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.a
                                        href={item.href}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg border border-[#C56A33]/20"
                                    >
                                        <motion.div
                                            className="w-12 h-12 bg-gradient-to-r from-[#C56A33] to-[#ddb945] rounded-xl flex items-center justify-center mb-4"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <p className="text-sm font-medium text-[#1F1510]/70 mb-1">
                                            {item.label}
                                        </p>
                                        <p className="text-[#1F1510] font-medium group-hover:text-[#C56A33]">
                                            {item.value}
                                        </p>
                                    </motion.a>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom Decorative Element */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-[#ddb945] via-[#C56A33] to-[#3A281C] rounded-full origin-left"></div>
                </motion.div>
            </div>
        </section>
    );
} 