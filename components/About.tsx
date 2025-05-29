'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

export function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            id="about"
            className="min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-black text-[#3A281C] mb-8">
                        About
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-xl text-[#1E3A5F] leading-relaxed"
                        >
                            Join us for the first annual Symposium on Digital Agriculture (SyDAg), where we bring together researchers,
                            industry leaders, and innovators to explore the intersection of digital technology and
                            agricultural systems.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-xl text-[#1E3A5F] leading-relaxed"
                        >
                            Our goal is to showcase practical applications that are making a real-world impact on
                            sustainable agriculture.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Three Column Layout */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                >
                    {/* Vision */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#ddb945]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#ddb945] to-[#f4e076] rounded-xl flex items-center justify-center mr-4">
                                <Lightbulb className="w-6 h-6 text-[#3A281C]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#C56A33]">Vision</h3>
                        </div>
                        <p className="text-[#1E3A5F] leading-relaxed">
                            Build a future where digital agriculture is impactful, intuitive, and accessible,
                            making it easy to understand, simple to adopt, and useful for growers and
                            stakeholders of all backgrounds.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#C56A33]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#C56A33] to-[#e07a47] rounded-xl flex items-center justify-center mr-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#C56A33]">Mission</h3>
                        </div>
                        <p className="text-[#1E3A5F] leading-relaxed">
                            Create a hands-on, student-led symposium that makes digital agriculture approachable and easy
                            to understand, offering interactive experiences, two-way conversations, and opportunities to
                            explore real-world ag tech.
                        </p>
                    </motion.div>

                    {/* Target Audience */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#3A281C]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#3A281C] to-[#4a3426] rounded-xl flex items-center justify-center mr-4">
                                <Users className="w-6 h-6 text-[#ddb945]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#C56A33]">Target Audience</h3>
                        </div>
                        <p className="text-[#1E3A5F] leading-relaxed">
                            Our target audience includes students, researchers, educators, and industry professionals in
                            digital and precision agriculture. We welcome individuals from data science, engineering,
                            agronomy, and environmental science interested in real-world applications and cross-sector
                            collaboration. We especially focus on students and early-career professionals seeking skills and
                            opportunities at the intersection of technology and agriculture.
                        </p>
                    </motion.div>
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