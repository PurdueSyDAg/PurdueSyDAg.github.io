'use client';

import { motion } from 'framer-motion';

export function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        About
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <p className="font-body text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Join us for the first annual IDAAS symposium, where we bring together researchers,
                        industry leaders, and innovators to explore the intersection of digital technology
                        and agricultural systems.
                    </p>

                    <p className="font-body text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Our goal is to showcase practical applications that are making a real-world impact
                        on sustainable agriculture.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <div className="text-blue-600 dark:text-blue-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Innovation
                        </h3>
                        <p className="font-body text-gray-600 dark:text-gray-300">
                            Cutting-edge technologies transforming agriculture
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <div className="text-green-600 dark:text-green-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Collaboration
                        </h3>
                        <p className="font-body text-gray-600 dark:text-gray-300">
                            Connecting researchers, industry, and innovators
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <div className="text-orange-600 dark:text-orange-400 mb-4">
                            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                            </svg>
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Sustainability
                        </h3>
                        <p className="font-body text-gray-600 dark:text-gray-300">
                            Real-world impact on sustainable agriculture
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 