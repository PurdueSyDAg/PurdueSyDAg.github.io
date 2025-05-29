'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const scheduleItems = [
    {
        time: '09:00 - 10:00',
        title: 'Opening Remarks & Keynote',
        description: 'Welcome address and opening keynote presentation',
    },
    {
        time: '10:15 - 11:30',
        title: 'Panel: Digital Transformation in Agriculture',
        description: 'Expert panel discussion on digital innovation in farming',
    },
    {
        time: '12:00 - 13:30',
        title: 'Lunch & Networking',
        description: 'Networking lunch with fellow attendees and speakers',
    },
    {
        time: '13:45 - 15:00',
        title: 'Workshop: Real-world Applications',
        description: 'Hands-on workshop showcasing practical digital agriculture solutions',
    },
    {
        time: '15:30 - 16:30',
        title: 'Closing Discussion & Future Directions',
        description: 'Wrap-up discussion and outlook on the future of digital agriculture',
    },
];

export function Schedule() {
    return (
        <section
            id="schedule"
            className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Schedule
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A full day of insights, networking, and practical workshops
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

                    <div className="space-y-8">
                        {scheduleItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>

                                {/* Content */}
                                <div className="ml-20 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center mb-3">
                                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                                            {item.time}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                            📅 Event Date
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200">
                            Date and venue details to be announced soon
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 