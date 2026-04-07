'use client';

import { Instagram, Linkedin } from 'lucide-react';

type FooterProps = {
    copyrightYear?: number;
    /** When false, hides the Digital Ag. Club column (e.g. 2026 live site). Default true for 2025 archive. */
    showDigitalAgClub?: boolean;
};

export function Footer({
    copyrightYear,
    showDigitalAgClub = true,
}: FooterProps) {
    const currentYear = copyrightYear ?? new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#000000] border-t border-[#555960]/20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 ${
                        showDigitalAgClub ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                    }`}
                >
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-[#CFB991] mb-3">
                            SyDAg
                        </h3>
                        <p className="text-white/70 text-sm">
                            Symposium of Digital Agriculture - From Innovation to Impact
                        </p>
                    </div>

                    {showDigitalAgClub && (
                        <div className="text-center md:text-left">
                            <a
                                href="https://digitalagclub.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <h3 className="text-lg font-bold text-[#DDB945] hover:text-[#CFB991] transition-colors duration-200 mb-3 underline decoration-2 underline-offset-2">
                                    Digital Ag. Club (DAC)
                                </h3>
                            </a>
                            <p className="text-white/70 text-sm">
                                Fostering innovation and collaboration in digital agricultural technologies
                            </p>
                        </div>
                    )}

                    <div className="text-center md:text-left">
                        <a
                            href="https://ag.purdue.edu/idaas/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <h3 className="text-lg font-bold text-[#DDB945] hover:text-[#CFB991] transition-colors duration-200 mb-3 underline decoration-2 underline-offset-2">
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

                    <div className="text-center md:text-left">
                        <a
                            href="https://www.rcac.purdue.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <h3 className="text-lg font-bold text-[#DDB945] hover:text-[#CFB991] transition-colors duration-200 mb-3 underline decoration-2 underline-offset-2">
                                RCAC
                            </h3>
                        </a>
                        <p className="text-white/70 text-sm">
                            Rosen Center for Advanced Computing
                        </p>
                        <p className="text-white/60 text-xs mt-2">
                            Computational resources for researchers
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8 border-t border-[#555960]/20">
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
