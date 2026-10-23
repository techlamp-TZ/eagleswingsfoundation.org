"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroSlides } from "./data";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);
  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, index]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      className="relative isolate -mt-px overflow-hidden bg-brand-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[88vh] min-h-[560px] w-full sm:h-[80vh] md:h-[78vh]">
        {heroSlides.map((slide, i) => {
          const active = i === index;
          return (
            <article
              key={slide.eyebrow}
              aria-hidden={!active}
              className={cn(
                "hero-slide absolute inset-0 transition-opacity duration-700",
                active ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt=""
                  className="size-full object-cover"
                  style={{
                    transform: active ? "scale(1.05)" : "scale(1.0)",
                    transition: "transform 7s ease-out",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(105deg, ${slide.overlayFrom} 0%, ${slide.overlayVia} 50%, ${slide.overlayTo} 100%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="container-wide relative flex h-full items-center">
                <div className="max-w-2xl py-16">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    <span className="size-1.5 rounded-full bg-coral" />
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-5 font-sans text-3xl font-extrabold leading-[1.1] text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={slide.cta.href}
                      className="btn-coral"
                    >
                      {slide.cta.label}
                      <ArrowRight className="size-4" />
                    </a>
                    {slide.ctaSecondary && (
                      <a
                        href={slide.ctaSecondary.href}
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-deep"
                      >
                        {slide.ctaSecondary.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Controls */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="container-wide flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="pointer-events-auto inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-deep"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="pointer-events-auto inline-flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-deep"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Dots / progress */}
      <div className="absolute inset-x-0 bottom-6 z-10">
        <div className="container-wide flex items-center justify-center gap-2.5 md:justify-start">
          {heroSlides.map((s, i) => (
            <button
              key={s.eyebrow}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "group relative h-1.5 rounded-full transition-all",
                i === index
                  ? "w-12 bg-coral"
                  : "w-6 bg-white/40 hover:bg-white/70"
              )}
            >
              {i === index && (
                <span
                  key={index}
                  className="absolute inset-0 origin-left rounded-full bg-white"
                  style={{
                    animation: paused
                      ? "none"
                      : `progressBar ${AUTOPLAY_MS}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
          <span className="ml-3 hidden text-xs font-semibold text-white/80 md:inline">
            {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
