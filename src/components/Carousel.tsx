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

const HERO_TRANSITION_MS = 500;

/**
 * Reusable carousel: hero (compact, with transition) or gallery variant.
 * Smooth crossfade between slides; hero is a smaller, contained strip.
 */
export function Carousel({
  slides,
  autoPlayInterval = 5000,
  className,
  variant = 'hero',
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = slides.length;

  const goNext = useCallback(() => {
    if (length <= 1) return;
    setIsTransitioning(true);
    setCurrent((c) => (c + 1) % length);
  }, [length]);

  const goPrev = useCallback(() => {
    if (length <= 1) return;
    setIsTransitioning(true);
    setCurrent((c) => (c - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    if (!isTransitioning) return;
    const t = setTimeout(() => setIsTransitioning(false), HERO_TRANSITION_MS);
    return () => clearTimeout(t);
  }, [isTransitioning, current]);

  useEffect(() => {
    if (autoPlayInterval <= 0 || length <= 1) return;
    const t = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(t);
  }, [autoPlayInterval, goNext, length]);

  if (!length) return null;

  const isHero = variant === 'hero';

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'relative w-full bg-pastel-mist',
          isHero
            ? 'aspect-[3/1] max-h-[220px] sm:max-h-[260px] md:max-h-[280px]'
            : 'aspect-square rounded-lg'
        )}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              'absolute inset-0 transition-opacity duration-300 ease-in-out',
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
            style={{ transitionDuration: `${HERO_TRANSITION_MS}ms` }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes={isHero ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
              priority={isHero && i === 0}
            />
            {isHero && (slide.title || slide.subtitle) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 text-white">
                {slide.title && (
                  <h2 className="text-xl font-semibold drop-shadow sm:text-3xl">{slide.title}</h2>
                )}
                {slide.subtitle && (
                  <p className="mt-1 text-xs drop-shadow sm:text-base">{slide.subtitle}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      {length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white sm:left-4"
          >
            <svg className="h-5 w-5 text-pastel-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white sm:right-4"
          >
            <svg className="h-5 w-5 text-pastel-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {length > 1 && (
        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-3">
          {slides.map((_, i) => (
            <button
              key={slides[i].id}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrent(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-colors sm:h-2 sm:w-2',
                i === current ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
