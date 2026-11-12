"use client";

import { ArrowRight, BookOpen, Eye, Heart, Laptop, Settings, Users } from "lucide-react";
import { stats } from "./data";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-ink">
      <span aria-hidden className="h-px w-8 bg-orange" />
      {children}
    </p>
  );
}

const impactIcons = [Users, Laptop, Users, BookOpen];

function WingLeaves({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 160" fill="none" aria-hidden>
      <path d="M60 160c0-40 20-70 55-90C85 55 65 35 60 0c-5 35-25 55-55 70 35 20 55 50 55 90z" fill="currentColor" />
      <path d="M30 140c0-30 15-50 40-65-20-10-35-25-38-50-3 25-18 40-32 45 25 12 30 40 30 70z" fill="currentColor" opacity="0.6" />
      <path d="M90 140c0-30-15-50-40-65 20-10 35-25 38-50 3 25 18 40 32 45-25 12-30 40-30 70z" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function AboutPage() {
  return (
    <div className="bg-cream">
      <div className="container-wide py-12 md:py-16">
        {/* ---- Two balanced columns ---- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ===== LEFT COLUMN ===== */}
          <div className="flex flex-col lg:col-span-7">
            <Eyebrow>Who we are</Eyebrow>
            <h1 className="text-[2.5rem] font-bold leading-[1.1] text-brand-deep sm:text-5xl md:text-[3.25rem]">
              Compassion in action,
              <br />
              <span className="relative inline-block">
                rooted in Tegeta.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 240 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M4 8c50-6 100-6 150-2s60 4 84-1"
                    stroke="var(--color-orange, #f6931e)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <div className="mt-4 max-w-xl space-y-3 text-[1.0625rem] leading-7 text-brand-deep/75">
              <p>
                Eagle&apos;s Wings Foundation Tanzania was founded in 2025 in Tegeta, Dar es Salaam,
                to improve the lives of people with disabilities and challenges, particularly children
                and older people.
              </p>
              <p>
                We focus on practical learning and community support for them and for the families
                and caregivers around them, so that understanding turns into everyday participation
                and belonging.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/about#mission" className="btn-pill-orange">
                About Us <ArrowRight className="size-4" aria-hidden />
              </a>
              <a href="/programs" className="btn-pill-outline">
                Explore Our Programs <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>

            {/* Mission and vision fill this column so it ends flush with the photo column */}
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                    <Settings className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-ink">
                      Our Mission
                    </p>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-brand-deep/75">
                      To empower, encourage and educate less privileged, special needs and elderly
                      individuals by helping, caring for and supporting their needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                    <Eye className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-ink">
                      Our Vision
                    </p>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-brand-deep/75">
                      To build a more inclusive and supportive community where every person, regardless
                      of ability or age, has the opportunity to thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="flex flex-col lg:col-span-5">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/photos/team/founder-banner.webp"
                alt="Eagle's Wings Foundation founder standing in front of the Foundation banner"
                className="aspect-[3/2] w-full object-cover object-[center_25%]"
              />
            </div>

            {/* Stats pin to the bottom of the column so it ends flush with the left column */}
            <div className="mt-auto pt-8">
              <Eyebrow>Our Impact</Eyebrow>
              <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-6">
                {stats.map((s, i) => {
                  const Icon = impactIcons[i];
                  return (
                    <div key={s.label} className="flex flex-col items-start">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <dd className="mt-3 text-3xl font-bold tabular-nums text-brand-deep md:text-4xl">
                        {s.value}
                      </dd>
                      <dt className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">
                        {s.label}
                      </dt>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ---- Meet the Team ---- */}
        <div className="mt-14">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">
            Meet the people behind Eagle&apos;s Wings
          </h2>
          <p className="mt-2 max-w-2xl text-[0.9375rem] leading-7 text-brand-deep/70">
            Our dedicated team works together to create a more inclusive community
            in Tegeta and beyond.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: 'Stella Rweyemamu', role: 'Director', photo: '/photos/team/Stella.png' },
              { name: 'Stephen Krasinski', role: 'Staff', photo: '/photos/team/Mzungu.png' },
              { name: 'Paul Rweyemamu', role: 'Accountant', photo: '/photos/team/Paul_Rweyemamu.png' },
              { name: 'Paschal Nsonda', role: 'Secretary', photo: '/photos/team/Tegemeo.png' },
              { name: 'Doreen Temistocles', role: 'Staff', photo: '/photos/team/Doreen.png' },
              { name: 'Winfrida Rweyemamu', role: 'Staff', photo: '/photos/team/Winfrida.png' },
            ].map((m) => (
              <div key={m.name} className="group text-center">
                <div className="overflow-hidden rounded-2xl bg-sand-warm">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-[0.9375rem] font-bold text-brand-deep">{m.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-ink">{m.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Get Involved CTA ---- */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-deep to-brand-navy shadow-xl">
          <div className="grid grid-cols-1 items-center md:grid-cols-12">
            {/* Photo */}
            <div className="relative min-h-[260px] md:col-span-4">
              <img
                src="/photos/joy-portrait.webp"
                alt="A caregiver and child smiling together at the Eagle's Wings centre"
                className="absolute inset-0 size-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="px-8 py-10 text-white sm:px-10 md:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange">
                Get Involved
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-[1.75rem]">
                Together, we can make
                <br />a bigger difference.
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-7 text-white/75">
                Support our programs, volunteer your time, or partner with us in creating a more
                inclusive Tanzania.
              </p>
            </div>

            {/* Button + decoration */}
            <div className="relative flex items-center justify-center px-8 pb-8 md:col-span-3 md:pb-0">
              <a
                href="/donate"
                className="relative z-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange px-7 text-[0.9375rem] font-bold text-brand-deep shadow-md transition-all hover:bg-[#e3800b] hover:shadow-lg"
              >
                <Heart className="size-4" aria-hidden /> Donate Now{" "}
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <WingLeaves className="pointer-events-none absolute -right-2 bottom-0 h-36 w-28 text-orange/20 md:h-44 md:w-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
