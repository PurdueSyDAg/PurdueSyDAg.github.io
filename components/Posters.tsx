'use client';

import { motion } from 'framer-motion';
import { FileText, Upload, Video, Calendar, Award, Trophy, Download } from 'lucide-react';

export function Posters() {
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
            scale: 0.95
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };


    const handleTemplateDownload = () => {
        const link = document.createElement('a');
        link.href = '/posters/SyDAg_2025_Header_Template.pptx';
        link.download = 'SyDAg_2025_Header_Template.pptx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="posters"
            className="min-h-screen bg-gradient-to-br from-[#000000] via-[#1a1a1a] to-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
                        Posters
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-xl text-white/90 leading-relaxed"
                        >
                            We are excited to share that all symposium posters will be processed and published through 
                            <span className="font-semibold text-[#CFB991]"> Purdue e-Pubs</span>, Purdue University&apos;s open-access institutional repository.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="text-lg text-white/80 leading-relaxed"
                        >
                            This platform assigns a persistent DOI for stable citation, ensures broad accessibility, 
                            and establishes a permanent publication record for your work with usage statistics and 
                            streamlined submission process.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Poster Types */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                >
                    {/* In-Person Posters */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#CFB991]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-xl flex items-center justify-center mr-4">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black">In-Person Posters</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-[#1E3A5F] font-medium mb-4">
                                Follow these instructions to register and upload your poster:
                            </p>
                            
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">1</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Create a Purdue e-Pubs account</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">2</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Sign the Purdue e-Pubs licensing agreement</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">3</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Choose the &quot;Submit research&quot; tab and select &quot;Symposium of Digital Agriculture from Innovation to Impact 2025&quot;</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#CFB991] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">4</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Submit your abstract and poster as a PowerPoint file</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Online Posters */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#DDB945]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#DDB945] to-[#DAAA00] rounded-xl flex items-center justify-center mr-4">
                                <Video className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black">Online Posters</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="text-[#1E3A5F] font-medium mb-4">
                                In addition to your poster, record a <span className="font-bold text-[#DDB945]">3-minute video</span> explaining your poster:
                            </p>
                            
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#DDB945] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">1</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Create a Purdue e-Pubs account</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#DDB945] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">2</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Sign the Purdue e-Pubs licensing agreement</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#DDB945] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">3</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Choose &quot;Submit research&quot; and select the SyDAg 2025 link</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#DDB945] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">4</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Submit abstract and poster as PowerPoint file</p>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-[#DDB945] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-sm font-bold">5</span>
                                    </div>
                                    <p className="text-[#1E3A5F]">Upload video as &quot;Additional file&quot; with 99% accurate transcription/closed captions</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Important Information */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                >
                    {/* Deadline */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#555960]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#555960] to-[#6F727B] rounded-xl flex items-center justify-center mr-4">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black">Deadline</h3>
                        </div>
                        <p className="text-[#1E3A5F] leading-relaxed">
                            The deadline to submit your poster information is 
                            <span className="font-bold text-[#555960]"> September 30 at 11:59 p.m.</span>
                        </p>
                    </motion.div>

                    {/* Competition */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#DAAA00]"
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#DAAA00] to-[#DDB945] rounded-xl flex items-center justify-center mr-4">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-black">Competition</h3>
                        </div>
                        <p className="text-[#1E3A5F] leading-relaxed">
                            You may register and present more than one poster, but you can only 
                            <span className="font-bold text-[#DAAA00]"> participate in the poster competition with one</span>.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Poster Competition Prizes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl font-black text-white mb-4 flex items-center justify-center gap-3"
                        >
                            <Trophy className="w-8 h-8 text-[#DDB945]" />
                            Competition Prizes
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg text-white/80 max-w-2xl mx-auto"
                        >
                            Compete for cash prizes with your innovative poster presentation
                        </motion.p>
                    </div>

                    {/* Prize Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { place: "1st Place", amount: "$300", gradient: "from-yellow-400 to-yellow-600", rank: "🥇" },
                            { place: "2nd Place", amount: "$200", gradient: "from-gray-300 to-gray-500", rank: "🥈" },
                            { place: "3rd Place", amount: "$100", gradient: "from-orange-400 to-orange-600", rank: "🥉" }
                        ].map((prize, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="relative bg-white p-8 rounded-2xl border-2 border-[#CFB991]/30 text-center group shadow-xl"
                            >
                                <div className="relative">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${prize.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                        <Trophy className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-4xl mb-3">{prize.rank}</div>
                                    <h3 className="text-2xl font-bold text-[#000000] mb-3">{prize.place}</h3>
                                    <p className="text-4xl font-black text-[#DDB945]">{prize.amount}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Competition Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-gradient-to-r from-[#CFB991]/20 via-[#DDB945]/15 to-[#DAAA00]/20 rounded-xl p-6 border border-[#CFB991]/30 max-w-3xl mx-auto"
                    >
                        <div className="text-center">
                            <h4 className="text-xl font-bold text-white mb-3">Competition Details</h4>
                            <p className="text-white/90 leading-relaxed">
                                Posters will be judged on <span className="font-semibold text-[#DDB945]">innovation</span>, 
                                <span className="font-semibold text-[#DDB945]"> impact</span>, and 
                                <span className="font-semibold text-[#DDB945]"> presentation quality</span>. 
                                Remember: you can present multiple posters but only compete with one!
                            </p>
                        </div>
                    </motion.div>

                    {/* Awards and Recognition */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-white rounded-xl p-6 border-2 border-[#CFB991]/30 max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-6">
                            <h4 className="text-2xl font-bold text-[#000000] mb-3 flex items-center justify-center gap-2">
                                <Award className="w-6 h-6 text-[#DDB945]" />
                                Awards & Recognition
                            </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* In-Person Awards */}
                            <div className="bg-gradient-to-br from-[#CFB991]/10 to-[#DDB945]/5 rounded-lg p-6 border border-[#CFB991]/20">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-lg flex items-center justify-center mr-3">
                                        <Trophy className="w-5 h-5 text-white" />
                                    </div>
                                    <h5 className="text-lg font-bold text-[#000000]">In-Person Presenters</h5>
                                </div>
                                <p className="text-[#1E3A5F] leading-relaxed">
                                    <span className="font-bold text-[#DDB945]">Monetary awards</span> are available for the top in-person poster presentations in the competition.
                                </p>
                            </div>

                            {/* Online Recognition */}
                            <div className="bg-gradient-to-br from-[#DDB945]/10 to-[#DAAA00]/5 rounded-lg p-6 border border-[#DDB945]/20">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#DDB945] to-[#DAAA00] rounded-lg flex items-center justify-center mr-3">
                                        <FileText className="w-5 h-5 text-white" />
                                    </div>
                                    <h5 className="text-lg font-bold text-[#000000]">Online Presenters</h5>
                                </div>
                                <p className="text-[#1E3A5F] leading-relaxed">
                                    All online presenters/poster submitters will receive a <span className="font-bold text-[#DDB945]">certificate of participation</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Requirements */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#CFB991]/30 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#CFB991] via-[#DDB945] to-[#DAAA00]"></div>
                        
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                <FileText className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-black text-[#000000]">
                                Poster Requirements
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Header Template */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[#CFB991]/10 to-[#DDB945]/5 rounded-xl p-6 border border-[#CFB991]/20"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-lg flex items-center justify-center mr-3">
                                        <Upload className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold text-[#000000]">Header Template</h4>
                                </div>
                                <p className="text-[#1E3A5F] leading-relaxed mb-4">
                                    Include the provided header template in your poster design to maintain consistency across all submissions.
                                </p>
                                
                                <motion.button
                                    onClick={handleTemplateDownload}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full group relative px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#CFB991] to-[#DDB945] rounded-lg shadow-lg overflow-hidden cursor-pointer"
                                >
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        <Download className="w-4 h-4" />
                                        <span>Download Header Template</span>
                                        <span className="text-xs font-normal opacity-90">(PPTX)</span>
                                    </span>
                                    
                                    {/* Hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#DDB945] to-[#DAAA00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>
                            </motion.div>

                            {/* Innovation Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[#DDB945]/10 to-[#DAAA00]/5 rounded-xl p-6 border border-[#DDB945]/20"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#DDB945] to-[#DAAA00] rounded-lg flex items-center justify-center mr-3">
                                        <div className="text-white font-bold text-lg">💡</div>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#000000]">Innovation Focus</h4>
                                </div>
                                <p className="text-[#1E3A5F] leading-relaxed">
                                    Add a dedicated section highlighting the <span className="font-semibold text-[#DDB945]">innovation and impact</span> of your research in digital agriculture.
                                </p>
                            </motion.div>

                            {/* Dimensions */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[#555960]/10 to-[#6F727B]/5 rounded-xl p-6 border border-[#555960]/20"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#555960] to-[#6F727B] rounded-lg flex items-center justify-center mr-3">
                                        <div className="text-white font-bold text-lg">📐</div>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#000000]">Dimensions</h4>
                                </div>
                                <p className="text-[#1E3A5F] leading-relaxed">
                                    <span className="font-bold text-[#555960]">Recommended size:</span><br />
                                    <span className="text-2xl font-black text-[#000000]">34 × 45</span><br />
                                    <span className="text-sm text-[#1E3A5F]/70">inches</span>
                                </p>
                            </motion.div>
                        </div>

                        {/* Additional info banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8 bg-gradient-to-r from-[#CFB991]/20 via-[#DDB945]/15 to-[#DAAA00]/20 rounded-xl p-4 border border-[#CFB991]/30"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-6 h-6 bg-[#CFB991] rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">ℹ</span>
                                </div>
                                <p className="text-[#1E3A5F] font-medium text-center">
                                    All posters will be published through Purdue e-Pubs with persistent DOI assignment for permanent citation
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* Submit Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Submit Your Poster?
                    </h3>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Start your submission through Purdue e-Pubs and join the symposium poster showcase.
                    </p>
                    <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-400 text-gray-700 font-bold text-xl rounded-2xl cursor-not-allowed opacity-75">
                        <span>Submission Closed - Deadline Passed</span>
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
                    <div className="w-24 h-1 bg-gradient-to-r from-[#CFB991] via-[#DDB945] to-[#555960] rounded-full origin-left"></div>
                </motion.div>
            </div>
        </section>
    );
}
