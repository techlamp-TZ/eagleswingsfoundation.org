"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { programCards } from "./data";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { bg: string; ring: string; text: string }> = {
  brand: { bg: "bg-brand/10", ring: "group-hover:ring-brand/30", text: "text-brand" },
  coral: { bg: "bg-coral/15", ring: "group-hover:ring-coral/30", text: "text-coral" },
  gold: { bg: "bg-gold/20", ring: "group-hover:ring-gold/40", text: "text-[#a16a14]" },
};

export function ProgramsServices() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 340;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-wide">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-coral" />
              Our Programs &amp; Services
            </span>
            <h2 className="font-sans text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl">
              From the places we live to the places we work.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              FREE serves the traditionally underserved with a number of
              initiatives, assistance programs, and built-in support systems to
              help individuals flourish — across housing, recovery, employment,
              day programming, family services, and crisis response.
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-brand/20 text-brand-deep transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-brand/20 text-brand-deep transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Cards scroller */}
        <div
          ref={scrollerRef}
          className="scroll-slim mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
        >
          {programCards.map((card) => {
            const Icon = card.icon;
            const accent = accentMap[card.accent];
            return (
              <a
                key={card.title}
                href={card.href}
                className="group relative flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white p-6 shadow-sm ring-2 ring-transparent transition-all hover:-translate-y-1 hover:shadow-xl sm:w-[340px]"
              >
                <span
                  className={cn(
                    "inline-flex size-12 items-center justify-center rounded-xl ring-2 ring-transparent transition-all",
                    accent.bg,
                    accent.ring,
                    accent.text
                  )}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-brand-deep">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
                <span className="pointer-events-none absolute right-0 top-0 h-20 w-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand/5 transition-transform group-hover:scale-150" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand/10 pt-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-brand-deep">Not sure where to start?</strong>{" "}
            Our Resource &amp; Referral team will help match you with the right
            supports.
          </p>
          <a href="#referral" className="btn-brand">
            Start Here
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
