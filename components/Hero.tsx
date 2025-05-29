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
        const element = document.querySelector('#register');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
        styleSheet.insertRule(bounceKeyframes, styleSheet.cssRules.length);
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
            <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#3A281C]/90 via-[#C56A33]/80 to-[#ddb945]/85"></div>

            {/* Content */}
            <div className="relative z-30 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col min-h-screen justify-between">
                    {/* Main Content */}
                    <div className="flex-1 flex flex-col justify-center space-y-2 pt-0">
                        {/* Badge */}
                        <div className="inline-block mx-auto">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2">
                                <p className="text-sm sm:text-base font-medium text-white uppercase tracking-widest">
                                    First Annual
                                </p>
                            </div>
                        </div>

                        {/* Main Title Group - Tighter spacing */}
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight px-4">
                                <span className="block mb-1">Symposium of</span>
                                <span className="block bg-gradient-to-r from-[#ddb945] to-[#f4e076] bg-clip-text text-transparent">
                                    Digital Agriculture
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light italic tracking-wide">
                                (SyDAg)
                            </p>
                        </div>

                        {/* Subtitle - Closer to title */}
                        <div className="mt-2">
                            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-light tracking-wide">
                                From Innovation to Impact
                            </p>
                        </div>

                        {/* Buttons - More space above */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <motion.button
                                onClick={handleRegisterClick}
                                variants={buttonAnimation}
                                whileHover="hover"
                                whileTap="tap"
                                className="group relative px-8 py-4 text-lg font-bold text-[#3A281C] bg-gradient-to-r from-[#ddb945] to-[#f4e076] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#f4e076] to-[#ddb945] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">Register Now</span>
                            </motion.button>

                            <motion.button
                                onClick={handleLearnMoreClick}
                                variants={buttonAnimation}
                                whileHover="hover"
                                whileTap="tap"
                                className="px-8 py-4 text-lg font-semibold text-white bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </div>

                        {/* Image indicators - Closer to content */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentImageIndex
                                        ? 'bg-[#ddb945] w-8'
                                        : 'bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Scroll Indicator - Refined animation and positioning */}
                    <div className="pb-6">
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
                    </div>
                </div>
            </div>
        </section>
    );
} 