"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Send,
  Speech,
  CalendarCheck2,
  Users,
  Info,
  Handshake,
  Trophy,
  FileText,
} from "lucide-react";

type NavItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  type: "anchor" | "route";
};

const navigationItems: NavItem[] = [
  { name: "Home", icon: Home, href: "#home", type: "anchor" },
  { name: "About", icon: Info, href: "#about", type: "anchor" },
  { name: "Posters", icon: FileText, href: "#posters", type: "anchor" },
  { name: "Speakers", icon: Speech, href: "#speakers", type: "anchor" },
  { name: "Schedule", icon: CalendarCheck2, href: "#schedule", type: "anchor" },
  { name: "Team", icon: Users, href: "#team", type: "anchor" },
  { name: "Sponsors", icon: Handshake, href: "#sponsors", type: "anchor" },
  { name: "Hackathon", icon: Trophy, href: "/hackathon", type: "route" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleAnchorClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Set active section immediately when clicking
      setActiveSection(href.substring(1));
    }
    setIsMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    window.open(
      "https://purdue.ca1.qualtrics.com/jfe/form/SV_9yuv1mTcomqpWey",
      "_blank",
    );
  };

  // Intersection Observer to track active section
  useEffect(() => {
    // Only attach observer on homepage route
    if (pathname && pathname !== "/") return;

    // Small delay to ensure all sections are rendered
    const timer = setTimeout(() => {
      const sectionElements = navigationItems
        .filter((item) => item.type === "anchor")
        .map((item) => ({
          id: item.href.substring(1),
          element: document.querySelector(item.href),
        }))
        .filter((item) => item.element);

      if (sectionElements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          // Find all intersecting entries
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting,
          );

          if (intersectingEntries.length > 0) {
            // Sort by intersection ratio (most visible section first)
            intersectingEntries.sort(
              (a, b) => b.intersectionRatio - a.intersectionRatio,
            );

            // Get the ID of the most visible section
            const mostVisibleSection = intersectingEntries[0].target.id;
            setActiveSection(mostVisibleSection);
          } else {
            // Handle case when scrolling between sections
            // Check scroll position to determine which section should be active
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            for (const { id, element } of sectionElements) {
              if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementBottom = elementTop + rect.height;
                
                if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                  setActiveSection(id);
                  break;
                }
              }
            }
          }
        },
        {
          threshold: [0.1, 0.3, 0.5, 0.7], // Better thresholds for section detection
          rootMargin: "-100px 0px -50% 0px", // Improved margins for better detection
        },
      );

      // Observe all sections
      sectionElements.forEach(({ element }) => {
        if (element) observer.observe(element);
      });

      // Add scroll listener as backup
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150; // Account for header height
        
        for (const { id, element } of sectionElements) {
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;
            
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActiveSection(id);
              break;
            }
          }
        }
      };

      // Initial call to set correct active section
      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Store observer and scroll listener for cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#000000] backdrop-blur-md border-b border-[#9E6F3E]/20 transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <h1 className="font-heading text-xl font-bold bg-gradient-to-r from-[#CFB991] to-[#DDB945] bg-clip-text text-transparent">
                SyDAg
              </h1>
              <div className="hidden sm:block w-px h-6 bg-[#9E6F3E]/30"></div>
              <span className="hidden sm:block text-sm text-white/70 font-light">
                A Purdue Student Led Symposium
              </span>
            </div>
          </div>

          {/* Center Navigation and Right Register Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isAnchor = item.type === "anchor";
                const isActive = isAnchor
                  ? pathname === "/" && activeSection === item.href.substring(1)
                  : pathname?.startsWith(item.href);
                const innerContent = (
                  <>
                    <item.icon
                      className={`w-4 h-4 transition-colors duration-200 ${isActive
                          ? "text-[#CFB991]"
                          : "group-hover:text-[#CFB991]"}
                      `}
                    />
                    <span className="font-heading text-sm">{item.name}</span>
                  </>
                );

                return isAnchor ? (
                  pathname === "/" ? (
                    <button
                      key={item.name}
                      onClick={() => handleAnchorClick(item.href)}
                      className={`group flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 nav-font-geist cursor-pointer ${
                        isActive
                          ? "text-[#CFB991] font-bold"
                          : "text-white/80 hover:text-white hover:font-semibold"
                      }`}
                    >
                      {innerContent}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={`/${item.href}`}
                      className={`group flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 nav-font-geist text-white/80 hover:text-white hover:font-semibold`}
                    >
                      {innerContent}
                    </Link>
                  )
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 nav-font-geist ${
                      isActive
                        ? "text-[#CFB991] font-bold"
                        : "text-white/80 hover:text-white hover:font-semibold"
                    }`}
                  >
                    {innerContent}
                  </Link>
                );
              })}
            </nav>

            {/* Register Button */}
            <button
              onClick={handleRegisterClick}
              className="hidden md:flex items-center space-x-1 px-4 py-1 bg-gradient-to-r from-[#CFB991] to-[#DDB945] text-[#000000] font-bold rounded-lg hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span className="font-heading">Register</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#C56A33]/20 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const isAnchor = item.type === "anchor";
                return isAnchor ? (
                  pathname === "/" ? (
                    <button
                      key={item.name}
                      onClick={() => handleAnchorClick(item.href)}
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 text-white/80 font-heading cursor-pointer"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-heading">{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={`/${item.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 text-white/80 font-heading"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-heading">{item.name}</span>
                    </Link>
                  )
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 text-white/80 font-heading"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-heading">{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile Register Button */}
              <button
                onClick={handleRegisterClick}
                className="flex items-center space-x-3 px-3 py-3 mt-2 bg-gradient-to-r from-[#ddb945] to-[#f4e076] text-[#1F1510] font-bold rounded-lg transition-all duration-200 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span className="font-heading">Register</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
