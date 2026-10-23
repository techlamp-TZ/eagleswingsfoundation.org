"use client";

import { ArrowRight, Heart, HandHeart, Gift, Hammer, Megaphone } from "lucide-react";

const cards = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description:
      "Give your time and talent. From mentorship to hands-on service days, your hours make a visible difference.",
    href: "#get-involved",
    cta: "Find an Opportunity",
  },
  {
    icon: Gift,
    title: "Ways to Give",
    description:
      "Every gift makes a difference. Choose monthly giving, memorial gifts, or planned giving that fits you.",
    href: "#ways-to-give",
    cta: "Give Now",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description:
      "Raise your voice for inclusion. Stay informed and take action on the policies that affect people we support.",
    href: "#get-involved",
    cta: "Get Involved",
  },
  {
    icon: Hammer,
    title: "Saddle Rock Ranch",
    description:
      "Roll up your sleeves for hands-on projects — property clean-up, fence painting, carpentry, and power washing.",
    href: "#get-involved",
    cta: "Sign Up to Volunteer",
  },
];

export function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="relative bg-white py-20 md:py-28"
    >
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">
            <span className="h-px w-8 bg-coral" />
            Get Involved
            <span className="h-px w-8 bg-coral" />
          </span>
          <h2 className="font-sans text-3xl font-extrabold leading-tight text-brand-deep sm:text-4xl">
            Find the opportunity that fits you — and make it yours.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            There are so many ways to show up. Support inclusion, raise voices,
            and stay connected to the work — through giving, volunteering,
            advocacy, and community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand/10 bg-brand-soft/50 p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:bg-brand-soft hover:shadow-xl"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-md">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-deep">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {card.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Donate highlight band */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-coral to-coral-dark p-8 text-white shadow-xl sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                <Heart className="size-3.5" />
                Your gift matters
              </span>
              <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight sm:text-3xl">
                No matter the size, your support helps someone thrive.
              </h3>
              <p className="mt-2 text-sm text-white/85">
                Every dollar funds housing, recovery, employment, and family
                services for the people we proudly support.
              </p>
            </div>
            <a
              href="#ways-to-give"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-coral-dark shadow-md transition-transform hover:scale-105"
            >
              <Heart className="size-4" />
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
