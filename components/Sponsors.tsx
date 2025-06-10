'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

type BenefitKey = 'Networking Session Access' | 'Social Media Promotion' | 'Website + Booklet Listing' | 'Premier Recognition' | 'Premium Exhibit/Table Space' | 'Top Logo Placement';

interface Tier {
    name: string;
    color: string;
    borderColor: string;
    benefits: Record<BenefitKey, boolean>;
}

export function Sponsors() {
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

    const tiers: Tier[] = [
        {
            name: 'Steward',
            color: 'from-[#ddb945] to-[#f4e076]',
            borderColor: 'border-[#ddb945]',
            benefits: {
                'Networking Session Access': true,
                'Social Media Promotion': true,
                'Website + Booklet Listing': true,
                'Premier Recognition': true,
                'Premium Exhibit/Table Space': true,
                'Top Logo Placement': true,
            }
        },
        {
            name: 'Cultivator', 
            color: 'from-[#C56A33] to-[#e07a47]',
            borderColor: 'border-[#C56A33]',
            benefits: {
                'Networking Session Access': true,
                'Social Media Promotion': true,
                'Website + Booklet Listing': true,
                'Premier Recognition': true,
                'Premium Exhibit/Table Space': true,
                'Top Logo Placement': false,
            }
        },
        {
            name: 'Pollinator',
            color: 'from-[#3A281C] to-[#4a3426]',
            borderColor: 'border-[#3A281C]',
            benefits: {
                'Networking Session Access': true,
                'Social Media Promotion': true,
                'Website + Booklet Listing': true,
                'Premier Recognition': false,
                'Premium Exhibit/Table Space': false,
                'Top Logo Placement': false,
            }
        }
    ];

    const benefits: BenefitKey[] = [
        'Networking Session Access',
        'Social Media Promotion', 
        'Website + Booklet Listing',
        'Premier Recognition',
        'Premium Exhibit/Table Space',
        'Top Logo Placement'
    ];

    return (
        <section
            id="sponsors"
            className="min-h-screen bg-gradient-to-br from-[#1F1510] via-[#2A1B12] to-[#0F0B08] py-20"
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
                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
                        Sponsors
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-xl text-white/80 leading-relaxed"
                        >
                            Join us as a sponsor and help shape the future of digital agriculture while connecting with 
                            students, researchers, and industry leaders.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Sponsorship Tiers Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-xl sm:text-3xl font-black text-white mb-4">
                        Industry Sponsorship Tiers
                    </h3>
                </motion.div>

                {/* Image and Table Side by Side Layout */}
                <div className="flex flex-col lg:flex-row lg:gap-12 mb-8 lg:mb-16">
                    {/* Call for Sponsors Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mb-8 lg:mb-0 flex justify-center lg:w-2/5"
                    >
                        <div className="relative max-w-xl w-full">
                            <Image
                                src="/sponsors/call_for_sponsors.png"
                                alt="Call for Sponsors"
                                width={600}
                                height={450}
                                className="w-full h-auto rounded-2xl shadow-lg"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Desktop Table View */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="hidden lg:block lg:w-3/5"
                    >
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                            {/* Table Header */}
                            <div className="grid grid-cols-4 bg-gradient-to-r from-[#3A281C] to-[#4a3426]">
                                <div className="p-4 lg:p-5">
                                    <h4 className="text-lg lg:text-xl font-bold text-white">Benefit</h4>
                                </div>
                                {tiers.map((tier) => (
                                    <div key={tier.name} className="p-4 lg:p-5 text-center">
                                        <h4 className="text-sm lg:text-base font-bold text-white mb-1">{tier.name}</h4>
                                        {tier.name === 'Steward' && (
                                            <span className="text-[#ddb945] text-sm">⭐</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Table Body */}
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    variants={cardVariants}
                                    className={`grid grid-cols-4 border-b border-gray-100 ${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                                >
                                    <div className="p-4 lg:p-5">
                                        <span className="text-sm lg:text-base font-medium text-[#1E3A5F]">{benefit}</span>
                                    </div>
                                    {tiers.map((tier) => (
                                        <div key={`${tier.name}-${benefit}`} className="p-4 lg:p-5 text-center">
                                            {tier.benefits[benefit] ? (
                                                <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 mx-auto" />
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Card View */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:hidden grid gap-6 mb-16"
                >
                    {tiers.map((tier, _tierIndex) => (
                        <motion.div
                            key={tier.name}
                            variants={cardVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className={`bg-white rounded-2xl p-6 shadow-lg border-l-4 ${tier.borderColor}`}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mr-4`}>
                                    <span className="text-white font-bold text-lg">
                                        {tier.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#C56A33]">{tier.name}</h3>
                                    {tier.name === 'Steward' && (
                                        <span className="text-[#ddb945] text-sm">⭐</span>
                                    )}
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="flex items-center justify-between">
                                        <span className="text-[#1E3A5F] flex-1">{benefit}</span>
                                        <div className="ml-4">
                                            {tier.benefits[benefit] ? (
                                                <Check className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <X className="w-5 h-5 text-red-500" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Opportunities */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Additional Sponsorship Opportunities
                    </h3>
                    <div className="bg-[#C56A33]/10 backdrop-blur-sm border border-[#C56A33]/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                        <p className="text-xl text-white/80 leading-relaxed">
                            <span className="font-bold text-[#ddb945]">Hackathon</span>, <span className="font-bold text-[#ddb945]">Travel awards</span>, <span className="font-bold text-[#ddb945]">Poster Competition Awards</span>, and <span className="font-bold text-[#ddb945]">Coffee Breaks</span>
                        </p>
                    </div>
                </motion.div>

                {/* Become a Sponsor CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Sponsor?
                    </h3>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Join us in shaping the future of digital agriculture and connect with the next generation of innovators.
                    </p>
                    <motion.button
                        onClick={() => window.open('https://purdue.ca1.qualtrics.com/jfe/form/SV_b7QHgJq74jjAPau?Q_CHL=qr', '_blank')}
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-4 text-xl font-bold text-[#1F1510] bg-gradient-to-r from-[#ddb945] to-[#f4e076] rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f4e076] to-[#ddb945] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">Become a Sponsor</span>
                    </motion.button>
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