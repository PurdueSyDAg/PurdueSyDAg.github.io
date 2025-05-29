'use client';

import { useState } from 'react';
import { Menu, X, Home, Send, Speech, CalendarCheck2, CircleHelp, Mail, Sun, Moon } from 'lucide-react';

const navigationItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Register', icon: Send, href: '#register' },
    { name: 'Speakers', icon: Speech, href: '#speakers' },
    { name: 'Schedule', icon: CalendarCheck2, href: '#schedule' },
    { name: 'FAQ', icon: CircleHelp, href: '#faq' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-blue-50 dark:bg-gray-900 border-b border-blue-100 dark:border-gray-700 transition-colors duration-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="/logo.jpg"
                            alt="IDAAS Logo"
                            className="w-10 h-10 rounded-lg object-cover"
                            onError={(e) => {
                                // Fallback if logo doesn't exist
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <h1 className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                            IDAAS
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className="font-body flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="font-medium">{item.name}</span>
                            </button>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-blue-100 dark:border-gray-700 py-4">
                        <nav className="flex flex-col space-y-2">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className="font-body flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="font-medium">{item.name}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
} 