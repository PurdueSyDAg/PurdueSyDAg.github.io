'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/Arana-Weed-Science-Researcher.jpg',
        '/Arana-Garlic.jpg'
    ];

    // Auto-rotate images every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleRegisterClick = () => {
        window.open('https://www.purdue.edu/bicc/tools/qualtrics/index.php', '_blank');
    };

    const handleLearnMoreClick = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Button animation variants
    const buttonAnimation = {
        hover: { y: -4, transition: { duration: 0.2, ease: "easeOut" } },
        tap: { y: 0, scale: 0.98, transition: { duration: 0.1 } },
    };

    // Add CSS for bounce animation
    const bounceAnimation = {
        animation: "bounce 2s infinite"
    };

    // Add keyframes for bounce animation
    const bounceKeyframes = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(-10px);}
        60% {transform: translateY(-5px);}
    }
    `;

    // Inject keyframes into the document
    if (typeof document !== 'undefined') {
        const styleSheet = document.styleSheets[0];
        if (styleSheet) {
            try {
                styleSheet.insertRule(bounceKeyframes, styleSheet.cssRules.length);
            } catch (e) {
                // Ignore if rule already exists
            }
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Images */}
            <AnimatePresence mode="wait">
                {images.map((image, index) => (
                    index === currentImageIndex && (
                        <motion.div
                            key={image}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 z-10"
                        >
                            <div className="relative w-full h-full">
                                <img
                                    src={image}
                                    alt="Agricultural Research"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Modern Gradient Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#1F1510]/95 via-[#2A1B12]/90 to-[#C56A33]/85"></div>

            {/* Content */}
            <div className="relative z-30 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col min-h-screen justify-between">
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-2 pt-0">
                        {/* Badge */}
                        <motion.div
                            className="inline-block mx-auto"
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center space-x-2">
                                <span className="w-12 h-[2px] bg-white/30"></span>
                                <p className="text-sm sm:text-xl font-light text-white uppercase tracking-[0.2em]">
                                    First Annual
                                </p>
                                <span className="w-12 h-[2px] bg-white/30"></span>
                            </div>
                        </motion.div>

                        {/* Main Title Group */}
                        <div className="space-y-3">
                            <motion.h1
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight px-4"
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)", y: 30 }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            >
                                <motion.span
                                    className="block mb-1"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                >
                                    Symposium of
                                </motion.span>
                                <motion.span
                                    className="block bg-gradient-to-r from-[#ddb945] to-[#f4e076] bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                                >
                                    Digital Agriculture
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light italic tracking-wide"
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                            >
                                (SyDAg)
                            </motion.p>
                        </div>

                        {/* Subtitle */}
                        <motion.div
                            className="mt-2"
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                        >
                            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light tracking-wide">
                                From Innovation to Impact
                            </p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
                        >
                            <motion.button
                                onClick={handleRegisterClick}
                                variants={buttonAnimation}
                                whileHover="hover"
                                whileTap="tap"
                                className="group relative px-8 py-4 text-lg font-bold text-[#1F1510] bg-gradient-to-r from-[#ddb945] to-[#f4e076] rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#f4e076] to-[#ddb945] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">Register Now</span>
                            </motion.button>

                            <motion.button
                                onClick={handleLearnMoreClick}
                                variants={buttonAnimation}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-8 py-4 text-lg font-semibold text-white bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-md hover:bg-white/20 hover:border-white/50"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Image indicators */}
                        <motion.div
                            className="flex justify-center space-x-2 mt-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
                        >
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentImageIndex
                                        ? 'bg-[#ddb945] w-8'
                                        : 'bg-white/40'
                                        }`}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="pb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col items-center space-y-1">
                            <p className="text-md text-white/70 font-light uppercase tracking-wider">
                                Scroll to explore
                            </p>
                            <div className="w-5 h-9 flex justify-center items-center">
                                <div style={bounceAnimation}>
                                    <FaChevronDown color="#E7D5C2" size={15} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 