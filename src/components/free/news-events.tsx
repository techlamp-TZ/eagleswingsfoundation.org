"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { newsArticles } from "./data";

export function NewsEvents() {
  return (
    <section id="news" className="bg-brand-soft py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-coral" />
              FREE News &amp; Events
            </span>
            <h2 className="font-sans text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl">
              Stories from across the FREE community.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Updates on programs, events, advocacy, and the people who make our
              mission possible — straight from the field.
            </p>
          </div>
          <a href="#news" className="btn-outline-brand self-start md:self-auto">
            View All
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <CalendarDays className="size-3.5 text-brand" />
                  {article.date}
                </div>
                <h3 className="text-lg font-bold leading-snug text-brand-deep transition-colors group-hover:text-brand">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <a
                  href={article.href}
                  className="link-arrow mt-4 self-start"
                >
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
