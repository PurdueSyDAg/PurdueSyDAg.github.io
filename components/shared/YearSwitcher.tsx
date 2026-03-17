"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CalendarRange, ChevronDown } from "lucide-react";

type YearSwitcherProps = {
  currentYear: "2025" | "2026";
};

const years = [
  { year: "2026", label: "2026", href: "/2026" },
  { year: "2025", label: "2025 Archive", href: "/2025" },
] as const;

export function YearSwitcher({ currentYear }: YearSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentItem = years.find((item) => item.year === currentYear) ?? years[0];

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative inline-block w-full text-left md:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex w-full min-w-[9.5rem] items-center justify-between rounded-full border border-[#CFB991]/20 bg-white/6 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-200 hover:border-[#CFB991]/40 hover:bg-white/10 md:min-w-[10.5rem]"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#CFB991] to-[#DDB945] text-black shadow-sm">
            <CalendarRange className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-semibold text-white">
            {currentItem.label}
          </span>
        </span>
        <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-[#CFB991]/20 bg-[#111111]/95 shadow-[0_22px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:absolute md:right-0 md:z-50 md:mt-2 md:w-56">
          {years.map((item) => {
            const isActive = item.year === currentYear;

            return (
              <Link
                key={item.year}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#CFB991] to-[#DDB945] font-semibold text-black"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isActive ? "bg-black/70" : "bg-[#CFB991]"
                    }`}
                  />
                  <span>{item.label}</span>
                </span>
                {isActive && (
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black/60">
                    Active
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
