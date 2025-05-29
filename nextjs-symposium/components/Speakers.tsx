'use client';

import { motion } from 'framer-motion';

const speakers = [
    {
        name: 'Dr. Jane Smith',
        title: 'Agricultural AI Researcher',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face',
        bio: 'Leading researcher in artificial intelligence applications for precision agriculture.',
    },
    {
        name: 'Prof. John Davis',
        title: 'Precision Farming Expert',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        bio: 'Pioneer in precision farming technologies and sustainable agricultural practices.',
    },
    {
        name: 'Dr. Sarah Lee',
        title: 'Digital Agriculture Specialist',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        bio: 'Expert in digital transformation and IoT solutions for modern agriculture.',
    },
];

export function Speakers() {
    return (
        <section
            id="speakers"
            className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Keynote Speakers
                    </h2>
                    <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Meet our distinguished speakers who are leading the way in digital agriculture innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&size=400&background=3b82f6&color=fff`;
                                    }}
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {speaker.name}
                                </h3>
                                <p className="font-body text-blue-600 dark:text-blue-400 font-medium mb-3">
                                    {speaker.title}
                                </p>
                                <p className="font-body text-gray-600 dark:text-gray-300 text-sm">
                                    {speaker.bio}
                                </p>
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
                    <p className="font-body text-gray-600 dark:text-gray-300 mb-6">
                        More speakers to be announced soon!
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        🎤 Stay tuned for updates
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 