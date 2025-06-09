'use client';

import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-[#1F1510] via-[#2A1B12] to-[#1F1510] border-t border-[#C56A33]/20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* SyDAg Column */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-[#ddb945] mb-3">
                            SyDAg
                        </h3>
                        <p className="text-white/70 text-sm">
                            Symposium of Digital Agriculture - From Innovation to Impact
                        </p>
                    </div>

                    {/* Digital Ag. Club Column */}
                    <div className="text-center md:text-left">
                        <a
                            href="https://digitalagclub.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <h3 className="text-lg font-bold text-[#f4e076] hover:text-[#ddb945] transition-colors duration-200 mb-3 underline decoration-2 underline-offset-2">
                                Digital Ag. Club (DAC)
                            </h3>
                        </a>
                        <p className="text-white/70 text-sm">
                            Fostering innovation and collaboration in digital agricultural technologies
                        </p>
                    </div>

                    {/* IDAAS Column */}
                    <div className="text-center md:text-left">
                        <a
                            href="https://ag.purdue.edu/idaas/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <h3 className="text-lg font-bold text-[#f4e076] hover:text-[#ddb945] transition-colors duration-200 mb-3 underline decoration-2 underline-offset-2">
                                IDAAS
                            </h3>
                        </a>
                        <p className="text-white/70 text-sm">
                            Institute of Digital and Advanced Agricultural Systems
                        </p>
                        <p className="text-white/60 text-xs mt-2">
                            Advancing agriculture through digital innovation
                        </p>
                    </div>
                </div>

                {/* Copyright and Social Links */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8 border-t border-[#C56A33]/20">
                    <div className="text-center md:text-left">
                        <p className="text-white/70">
                            © {currentYear} SyDAg. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="https://www.linkedin.com/company/sydag/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-[#ddb945] transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/purduesydag/?igsh=NGh0NDA5OGVtenhs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-[#ddb945] transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 