'use client';

import { useCallback, useId, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type HighlightSlide = {
  src: string;
  alt: string;
};

type HighlightsGalleryProps = {
  slides: HighlightSlide[];
  /** Dark frame for use on black / near-black backgrounds */
  theme?: 'light' | 'dark';
};

export function HighlightsGallery({ slides, theme = 'dark' }: HighlightsGalleryProps) {
  const [index, setIndex] = useState(0);
  const labelId = useId();
  const count = slides.length;
  const isDark = theme === 'dark';

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  const onCarouselKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
    },
    [go],
  );

  if (count === 0) return null;

  const ringOffset = isDark ? 'ring-offset-[#0A0A0A]' : 'ring-offset-[#F4F1EA]';
  const focusRing = isDark
    ? 'focus-visible:ring-[#CFB991]/50 focus-visible:ring-offset-[#0A0A0A]'
    : 'focus-visible:ring-[#9E6F3E]/40 focus-visible:ring-offset-[#F4F1EA]';
  const frameBg = isDark ? 'bg-[#111] ring-white/[0.08]' : 'bg-[#E8E4DC] ring-[#1A1A1A]/10';
  const stageBg = isDark ? 'bg-black' : 'bg-[#1A1A1A]/5';
  const fade = isDark ? 'from-[#0A0A0A]/95' : 'from-[#F4F1EA]/90';
  const btnClass = isDark
    ? 'border-white/15 bg-black/70 text-white backdrop-blur-sm'
    : 'border-[#1A1A1A]/10 bg-white/90 text-[#1A1A1A] backdrop-blur-sm';
  const counterClass = isDark ? 'text-white/45' : 'text-[#555960]';

  return (
    <div
      className={`mt-10 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${focusRing} ${ringOffset}`}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={onCarouselKeyDown}
    >
      <p id={labelId} className="sr-only">
        Photo highlights from SyDAg 2025. Use arrow keys or buttons to change
        slides.
      </p>

      <div className={`relative rounded-[1.25rem] p-1.5 ring-1 ${frameBg}`}>
        <div className={`relative overflow-hidden rounded-xl ${stageBg}`}>
          <div
            className="flex motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="w-full shrink-0"
                aria-hidden={i !== index}
              >
                <img
                  src={slide.src}
                  alt={i === index ? slide.alt : ''}
                  className="aspect-[5/3] w-full object-cover sm:aspect-[21/10]"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r ${fade} to-transparent sm:w-20`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l ${fade} to-transparent sm:w-20`}
          />

          <button
            type="button"
            onClick={() => go(-1)}
            className={`absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm sm:left-4 sm:h-11 sm:w-11 ${btnClass}`}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className={`absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm sm:right-4 sm:h-11 sm:w-11 ${btnClass}`}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-4 sm:justify-center sm:overflow-visible sm:pb-0">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 ring-offset-2 ${ringOffset} transition-[box-shadow] motion-safe:duration-200 sm:h-16 sm:w-24 ${
                i === index
                  ? 'ring-[#DDB945] shadow-md shadow-[#DDB945]/10'
                  : 'ring-transparent opacity-[0.82]'
              }`}
              aria-label={`Show photo ${i + 1} of ${count}`}
              aria-current={i === index}
            >
              <img
                src={slide.src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>

        <p
          className={`mt-2 text-center font-heading text-xs tabular-nums ${counterClass}`}
        >
          {index + 1} / {count}
        </p>
      </div>
    </div>
  );
}
