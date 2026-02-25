'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  /** Auto-advance interval in ms; 0 to disable */
  autoPlayInterval?: number;
  className?: string;
  /** Use for hero (full-bleed) vs product gallery (rounded) */
  variant?: 'hero' | 'gallery';
}

/**
 * Reusable carousel: hero (full-width) or gallery (rounded) variant.
 * Supports prev/next, optional dots, and optional auto-play.
 */
export function Carousel({
  slides,
  autoPlayInterval = 5000,
  className,
  variant = 'hero',
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % length);
  }, [length]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (autoPlayInterval <= 0 || length <= 1) return;
    const t = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(t);
  }, [autoPlayInterval, goNext, length]);

  if (!length) return null;

  const slide = slides[current];
  const isHero = variant === 'hero';

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'relative w-full bg-pastel-mist',
          isHero ? 'aspect-[21/9] min-h-[200px] sm:min-h-[280px]' : 'aspect-square rounded-lg'
        )}
      >
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          className="object-cover"
          sizes={isHero ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
          priority={isHero && current === 0}
        />
        {isHero && (slide.title || slide.subtitle) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-white">
            {slide.title && (
              <h2 className="text-2xl font-semibold drop-shadow sm:text-4xl">{slide.title}</h2>
            )}
            {slide.subtitle && (
              <p className="mt-1 text-sm drop-shadow sm:text-lg">{slide.subtitle}</p>
            )}
          </div>
        )}
      </div>

      {/* Prev / Next */}
      {length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white sm:left-4"
          >
            <svg className="h-5 w-5 text-pastel-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white sm:right-4"
          >
            <svg className="h-5 w-5 text-pastel-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={slides[i].id}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                i === current ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
