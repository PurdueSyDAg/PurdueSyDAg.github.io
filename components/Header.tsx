'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home, Send, Speech, CalendarCheck2, Mail, Info } from 'lucide-react';

const navigationItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: Info, href: '#about' },
    { name: 'Register', icon: Send, href: '#register' },
    { name: 'Speakers', icon: Speech, href: '#speakers' },
    { name: 'Schedule', icon: CalendarCheck2, href: '#schedule' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    // Intersection Observer to track active section
    useEffect(() => {
        const observers = navigationItems.map((item) => {
            const element = document.querySelector(item.href);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(item.href.substring(1)); // Remove the # from href
                    }
                },
                {
                    threshold: 0.3,
                    rootMargin: '-80px 0px -50% 0px'
                }
            );

            observer.observe(element);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#3A281C]/95 backdrop-blur-md border-b border-[#C56A33]/20 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="/purdue.webp"
                            alt="Purdue Logo"
                            className="h-10 w-auto object-contain opacity-90"
                            onError={(e) => {
                                // Fallback if logo doesn't exist
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="flex items-center space-x-2">
                            <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-[#ddb945] to-[#f4e076] bg-clip-text text-transparent">
                                SyDAg
                            </h1>
                            <div className="hidden sm:block w-px h-6 bg-[#C56A33]/30"></div>
                            <span className="hidden sm:block text-sm text-white/70 font-light">
                                Digital Agriculture
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navigationItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`group flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 nav-font-geist ${isActive
                                        ? 'text-[#ddb945] font-bold'
                                        : 'text-white/80 hover:text-white hover:font-semibold'
                                        }`}
                                >
                                    <item.icon className={`w-4 h-4 transition-colors duration-200 ${isActive
                                        ? 'text-[#ddb945]'
                                        : 'group-hover:text-[#ddb945]'
                                        }`} />
                                    <span className="font-heading">{item.name}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg text-white/80 hover:text-white transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-[#C56A33]/20 py-4">
                        <nav className="flex flex-col space-y-1">
                            {navigationItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 hover:scale-105 nav-font-geist ${isActive
                                            ? 'text-[#ddb945] font-bold'
                                            : 'text-white/80 hover:text-white hover:font-semibold'
                                            }`}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive
                                            ? 'text-[#ddb945]'
                                            : ''
                                            }`} />
                                        <span>{item.name}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
} 