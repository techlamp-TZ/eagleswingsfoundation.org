"use client";

import { ArrowRight, Heart, Target, Eye } from "lucide-react";
import { stats } from "./data";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-brand-soft py-20 md:py-28">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading & image */}
          <div className="lg:col-span-7">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-coral" />
              Reach High | Achieve More
            </span>
            <h2 className="font-sans text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl md:text-[2.75rem]">
              We are an organization whose philosophy is rooted in the realization of human potential.
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/80">
              <p>
                Family Residences and Essential Enterprises, Inc. (FREE) was
                founded in 1977 and is headquartered in Old Bethpage, NY. Today,
                FREE benefits and proudly supports more than{" "}
                <strong className="text-brand-deep">5,500 individuals</strong>{" "}
                with intellectual/developmental disabilities, mental illness, and
                traumatic brain injury across Long Island and the New York
                metropolitan region.
              </p>
              <p>
                It is the mission of FREE to help individuals of all abilities
                reach their full potential and thrive in their communities. We
                provide a diverse array of supports and services including
                housing; recovery services; transition to work; employment; day,
                community, and family services; respite; crisis services;
                education and after-school support; specialty health services;
                and advocacy.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#mission" className="btn-brand">
                About Us
                <ArrowRight className="size-4" />
              </a>
              <a href="#services" className="btn-outline-brand">
                Explore Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <div className="text-2xl font-extrabold text-brand sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mission & vision cards */}
          <div className="lg:col-span-5">
            <div className="space-y-5">
              <MissionCard
                icon={<Target className="size-5" />}
                tag="Our Mission"
                text="To support people of all abilities to reach their full potential and thrive in their communities."
              />
              <MissionCard
                icon={<Eye className="size-5" />}
                tag="Our Vision"
                text="Together… Creating the right solution for any need."
              />
              <MissionCard
                icon={<Heart className="size-5" />}
                tag="Our Motto"
                text="Reach High. Achieve More."
                emphasis
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionCard({
  icon,
  tag,
  text,
  emphasis,
}: {
  icon: React.ReactNode;
  tag: string;
  text: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={
        emphasis
          ? "rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white shadow-lg"
          : "rounded-2xl border border-brand/10 bg-white p-6 shadow-sm"
      }
    >
      <div className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-coral/15 text-coral">
        {icon}
      </div>
      <p
        className={
          emphasis
            ? "text-xs font-bold uppercase tracking-[0.18em] text-white/70"
            : "text-xs font-bold uppercase tracking-[0.18em] text-coral"
        }
      >
        {tag}
      </p>
      <p
        className={
          emphasis
            ? "mt-2 text-xl font-semibold leading-snug text-white"
            : "mt-2 text-lg font-semibold leading-snug text-brand-deep"
        }
      >
        {text}
      </p>
    </div>
  );
}
