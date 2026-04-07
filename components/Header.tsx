"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarCheck2,
  FileText,
  Handshake,
  Home,
  Info,
  Menu,
  Send,
  Speech,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { YearSwitcher } from "@/components/shared/YearSwitcher";

type NavItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  type: "anchor" | "route";
};

type HeaderProps = {
  variant?: "2025" | "2026";
};

const archiveNavigationItems: NavItem[] = [
  { name: "Home", icon: Home, href: "#home", type: "anchor" },
  { name: "About", icon: Info, href: "#about", type: "anchor" },
  { name: "Posters", icon: FileText, href: "#posters", type: "anchor" },
  { name: "Speakers", icon: Speech, href: "#speakers", type: "anchor" },
  { name: "Schedule", icon: CalendarCheck2, href: "#schedule", type: "anchor" },
  { name: "Team", icon: Users, href: "#team", type: "anchor" },
  { name: "Sponsors", icon: Handshake, href: "#sponsors", type: "anchor" },
  { name: "Hackathon", icon: Trophy, href: "/2025/hackathon", type: "route" },
];

const liveNavigationItems: NavItem[] = [
  { name: "Home", icon: Home, href: "#home", type: "anchor" },
  { name: "About", icon: Info, href: "#about", type: "anchor" },
  { name: "Speakers", icon: Speech, href: "#speakers", type: "anchor" },
  { name: "Schedule", icon: CalendarCheck2, href: "#schedule", type: "anchor" },
  { name: "Hackathon", icon: Trophy, href: "/2026/hackathon", type: "route" },
];

export function Header({ variant = "2025" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const homePath = variant === "2025" ? "/2025" : "/2026";
  const navigationItems =
    variant === "2025" ? archiveNavigationItems : liveNavigationItems;
  const showRegister = variant === "2025";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleAnchorClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

  const getAnchorHref = (href: string) => `${homePath}${href}`;
  const isHomeRoute = pathname === homePath;

  useEffect(() => {
    if (pathname && pathname !== homePath) return;

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
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting,
          );

          if (intersectingEntries.length > 0) {
            intersectingEntries.sort(
              (a, b) => b.intersectionRatio - a.intersectionRatio,
            );
            setActiveSection(intersectingEntries[0].target.id);
          } else {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const { id, element } of sectionElements) {
              if (!element) continue;

              const rect = element.getBoundingClientRect();
              const elementTop = rect.top + window.scrollY;
              const elementBottom = elementTop + rect.height;

              if (
                scrollPosition >= elementTop &&
                scrollPosition <= elementBottom
              ) {
                setActiveSection(id);
                break;
              }
            }
          }
        },
        {
          threshold: [0.1, 0.3, 0.5, 0.7],
          rootMargin: "-100px 0px -50% 0px",
        },
      );

      sectionElements.forEach(({ element }) => {
        if (element) observer.observe(element);
      });

      const handleScroll = () => {
        const scrollPosition = window.scrollY + 150;

        for (const { id, element } of sectionElements) {
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (
            scrollPosition >= elementTop &&
            scrollPosition < elementBottom
          ) {
            setActiveSection(id);
            break;
          }
        }
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [homePath, navigationItems, pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-[#9E6F3E]/20 bg-gradient-to-r from-[#000000] via-[#1a1a1a] to-[#000000] backdrop-blur-md transition-all duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <h1 className="font-heading bg-gradient-to-r from-[#CFB991] to-[#DDB945] bg-clip-text text-xl font-bold text-transparent">
                SyDAg
              </h1>
              <div className="hidden h-6 w-px bg-[#9E6F3E]/30 sm:block"></div>
              <span className="hidden text-sm font-light text-white/70 sm:block">
                A Purdue Student Led Symposium
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden items-center space-x-1 md:flex">
              {navigationItems.map((item) => {
                const isAnchor = item.type === "anchor";
                const isActive = isAnchor
                  ? isHomeRoute && activeSection === item.href.substring(1)
                  : pathname?.startsWith(item.href);
                const innerContent = (
                  <>
                    <item.icon
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isActive
                          ? "text-[#CFB991]"
                          : "group-hover:text-[#CFB991]"
                      }`}
                    />
                    <span className="font-heading text-sm">{item.name}</span>
                  </>
                );

                return isAnchor ? (
                  <Link
                    key={item.name}
                    href={getAnchorHref(item.href)}
                    onClick={(event) => {
                      if (isHomeRoute) {
                        event.preventDefault();
                        handleAnchorClick(item.href);
                      }
                    }}
                    className={`group flex items-center space-x-1 rounded-lg px-3 py-2 transition-all duration-200 hover:scale-105 ${
                      isActive
                        ? "font-bold text-[#CFB991]"
                        : "text-white/80 hover:font-semibold hover:text-white"
                    }`}
                  >
                    {innerContent}
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center space-x-1 rounded-lg px-3 py-2 transition-all duration-200 hover:scale-105 ${
                      isActive
                        ? "font-bold text-[#CFB991]"
                        : "text-white/80 hover:font-semibold hover:text-white"
                    }`}
                  >
                    {innerContent}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <YearSwitcher currentYear={variant} />
            </div>

            {showRegister && (
              <button
                onClick={handleRegisterClick}
                className="hidden cursor-pointer items-center space-x-1 rounded-lg bg-gradient-to-r from-[#CFB991] to-[#DDB945] px-4 py-1 font-bold text-[#000000] shadow-lg transition-all duration-200 hover:scale-105 md:flex"
              >
                <Send className="h-4 w-4" />
                <span className="font-heading">Register</span>
              </button>
            )}

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="cursor-pointer rounded-lg p-2 text-white/80 transition-colors duration-200 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[#C56A33]/20 py-4 md:hidden">
            <nav className="flex flex-col space-y-1">
              <div className="px-3 pb-3">
                <YearSwitcher currentYear={variant} />
              </div>

              {navigationItems.map((item) => {
                const isAnchor = item.type === "anchor";

                return isAnchor ? (
                  <Link
                    key={item.name}
                    href={getAnchorHref(item.href)}
                    onClick={(event) => {
                      if (isHomeRoute) {
                        event.preventDefault();
                        handleAnchorClick(item.href);
                        return;
                      }

                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 rounded-lg px-3 py-3 font-heading text-white/80 transition-all duration-200"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-heading">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 rounded-lg px-3 py-3 font-heading text-white/80 transition-all duration-200"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-heading">{item.name}</span>
                  </Link>
                );
              })}

              {showRegister && (
                <button
                  onClick={handleRegisterClick}
                  className="mt-2 flex cursor-pointer items-center space-x-3 rounded-lg bg-gradient-to-r from-[#ddb945] to-[#f4e076] px-3 py-3 font-bold text-[#1F1510] transition-all duration-200"
                >
                  <Send className="h-5 w-5" />
                  <span className="font-heading">Register</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
