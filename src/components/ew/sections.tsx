"use client";

import { useRef } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  Facebook,
  HandHeart,
  Handshake,
  Heart,
  Instagram,
  LifeBuoy,
  Linkedin,
  Mail,
  MessageCircle,
  Target,
  Youtube,
} from "lucide-react";
import { articles, articleCount, programs, site, stats, values } from "./data";
import { cn } from "@/lib/utils";

function Eyebrow({ children, onDark = false, center = false }: { children: React.ReactNode; onDark?: boolean; center?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${onDark ? "text-orange" : "text-orange-ink"} ${center ? "justify-center" : ""}`}
    >
      <span aria-hidden className="h-px w-8 bg-orange" />
      {children}
      {center && <span aria-hidden className="h-px w-8 bg-orange" />}
    </p>
  );
}

/* ------------------------------------------------------------ About */
export function About() {
  return (
    <section id="about" className="bg-sand-warm py-10 md:py-20">
      <div className="container-wide grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col lg:col-span-7">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl md:text-[2.75rem]">
            Compassion in action, rooted in Tegeta.
          </h2>
          <div className="mt-4 max-w-2xl space-y-3 text-[1.0625rem] leading-7 text-brand-deep/80">
            <p>
              Eagle&apos;s Wings Foundation Tanzania was founded in <strong className="text-brand-deep">2025</strong> in Tegeta, Dar es Salaam, to
              improve the lives of people with disabilities and challenges, particularly children and older people.
            </p>
            <p>
              We focus on practical learning and community support for them and for the families and caregivers around them, so that understanding
              turns into everyday participation and belonging.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/about" className="btn-pill-navy">
              About us <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="#programs" className="btn-pill-outline">
              Explore our programs
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white bg-white/85 p-4 shadow-sm">
                <dd className="tabular text-3xl font-bold text-brand-navy">{s.value}</dd>
                <dt className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </dl>
          {/* Mission and vision fill the rest of this column so the two
              columns end flush instead of leaving empty space below the stats. */}
          <div className="mt-6 grid flex-1 grid-cols-1 content-stretch gap-4 sm:grid-cols-2">
            <PurposeCard icon={<Target className="size-5" />} tag="Our mission" className="h-full">
              To empower, encourage and educate less privileged, special needs and elderly individuals by helping, caring for and supporting their needs.
            </PurposeCard>
            <PurposeCard icon={<Eye className="size-5" />} tag="Our vision" className="h-full">
              A fully inclusive society where special needs individuals are valued equally.
            </PurposeCard>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/photos/team/founder-banner-800w.webp"
              srcSet="/photos/team/founder-banner-800w.webp 800w, /photos/team/founder-banner.webp 1600w"
              sizes="(min-width: 1024px) 42vw, 100vw"
              alt="Eagle's Wings Foundation founder standing in front of the Foundation banner"
              className="aspect-[4/5] w-full object-cover object-[center_25%]"
              loading="lazy"
            />
          </div>
          <PurposeCard icon={<Heart className="size-5" />} tag="Our promise" emphasis className="flex flex-1 flex-col justify-center">
            Grow carefully. Serve respectfully. Report truthfully.
          </PurposeCard>
        </div>
      </div>
    </section>
  );
}

function PurposeCard({
  icon,
  tag,
  children,
  emphasis = false,
  className = "",
}: {
  icon: React.ReactNode;
  tag: string;
  children: React.ReactNode;
  emphasis?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        emphasis
          ? "rounded-2xl bg-gradient-to-br from-brand-navy to-brand-deep p-6 text-white shadow-lg"
          : "rounded-2xl border border-line bg-white p-6 shadow-sm",
        className,
      )}
    >
      <span className={cn("mb-3 inline-flex size-10 items-center justify-center rounded-lg", emphasis ? "bg-white/15" : "bg-brand-navy/10 text-brand-navy")}>
        <span className={emphasis ? "text-orange" : ""}>{icon}</span>
      </span>
      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${emphasis ? "text-white/75" : "text-orange-ink"}`}>{tag}</p>
      <p className={`mt-2 font-semibold leading-snug ${emphasis ? "text-xl text-white" : "text-lg text-brand-deep"}`}>{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------ Programs */
const accents = ["bg-brand-navy/10 text-brand-navy", "bg-orange/20 text-orange-ink", "bg-brand-navy/10 text-brand-navy", "bg-orange/20 text-orange-ink", "bg-brand-navy/10 text-brand-navy"];

export function Programs() {
  const scroller = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * 340, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="programs" className="scroll-mt-24 bg-white py-10 md:py-20">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Our programs</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">Five connected areas of work.</h2>
            <p className="mt-4 text-[1.0625rem] leading-8 text-muted-foreground">
              Awareness, education, practical support and guidance for children, older people, families and caregivers in Tegeta and beyond.
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button type="button" aria-label="Scroll programs left" onClick={() => scrollBy(-1)} className="round-btn">
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" aria-label="Scroll programs right" onClick={() => scrollBy(1)} className="round-btn">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <ul ref={scroller} className="scroll-slim mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6" aria-label="Programs">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <li key={p.title} className="w-[290px] shrink-0 snap-start sm:w-[330px]">
                <a
                  href={p.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-navy/30 hover:shadow-xl motion-reduce:hover:translate-y-0"
                >
                  <span className="relative aspect-[16/10] w-full overflow-hidden">
                    <img src={p.image} alt={p.imageAlt} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <span className={`absolute bottom-3 left-3 inline-flex size-10 items-center justify-center rounded-xl shadow-md ${accents[i % accents.length]} bg-white/90`}>
                      <Icon className="size-5" aria-hidden />
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="text-lg font-bold leading-snug text-brand-deep">{p.title}</span>
                    <span className="mt-1 text-[0.8125rem] font-medium text-orange-ink">{p.audience}</span>
                    <span className="mt-2 flex-1 text-[0.9375rem] leading-7 text-muted-foreground">{p.text}</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-navy">
                      Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[0.9375rem] text-muted-foreground">
            <strong className="text-brand-deep">Not sure where to start?</strong> Tell us your situation and we will point you to the right support.
          </p>
          <a href="/get-started" className="btn-pill-navy">
            Find support <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Values */
export function Values() {
  return (
    <section id="values" className="relative overflow-hidden bg-brand-deep py-10 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(246, 147, 30, 0.22), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.10), transparent 50%)",
        }}
      />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <Eyebrow onDark>What guides us</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Six values behind every decision.</h2>
          <p className="mt-4 text-[1.0625rem] leading-8 text-white/80">
            They shape how we work with children, older people, families and caregivers, and how we hold ourselves to account.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            const last = i === values.length - 1;
            return (
              <li
                key={v.title}
                className={
                  last
                    ? "group flex flex-col rounded-2xl bg-gradient-to-br from-orange to-[#e3800b] p-6 text-brand-deep shadow-lg"
                    : "group flex flex-col rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
                }
              >
                <span className={`inline-flex size-11 items-center justify-center rounded-xl ${last ? "bg-brand-deep/10" : "bg-white/15"}`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className={`mt-2 flex-1 text-[0.9375rem] leading-7 ${last ? "text-brand-deep/85" : "text-white/80"}`}>{v.text}</p>
                <span aria-hidden className={`tabular mt-4 text-5xl font-bold leading-none ${last ? "text-brand-deep/15" : "text-white/10 group-hover:text-white/20"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ News */
export function News() {
  return (
    <section id="news" className="bg-sand-warm py-10 md:py-20">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>News &amp; stories</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">Practical guidance for everyday life.</h2>
            <p className="mt-4 text-[1.0625rem] leading-8 text-muted-foreground">
              Plain-language articles on neuro-diversity, caregiving, healthy ageing and everyday life skills.
            </p>
          </div>
          <a href="/blog" className="btn-pill-outline self-start md:self-auto">
            All {articleCount} articles <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <li key={a.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-deep shadow-md">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <CalendarDays className="size-3.5 text-brand-navy" aria-hidden /> {a.date}
                  </p>
                  <h3 className="text-lg font-bold leading-snug text-brand-deep group-hover:text-brand-navy">
                    <a href={a.href} className="after:absolute after:inset-0 after:content-['']">
                      {a.title}
                    </a>
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-7 text-muted-foreground">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-navy">
                    Read article <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Get involved */
const ways = [
  { icon: LifeBuoy, title: "Find support", text: "For families and caregivers looking for guidance for a child or an older person.", cta: "Start here", href: "/get-started" },
  { icon: HandHeart, title: "Volunteer", text: "Eight roles, from community outreach to professional expertise, each with clear supervision.", cta: "Volunteer roles", href: "/get-involved" },
  { icon: Heart, title: "Donate", text: "Help us keep creating learning and care opportunities for children, older people and families.", cta: "Ways to give", href: "/donate", highlight: true },
  { icon: Handshake, title: "Partner", text: "For schools, clinics and organisations who want to work with the Foundation.", cta: "Talk to us", href: "/contact" },
] as const;

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-white py-10 md:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow center>Get involved</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">Practical ways to help in Tegeta.</h2>
          <p className="mt-4 text-[1.0625rem] leading-8 text-muted-foreground">
            Whether you give an hour, a skill or a donation, there is a role that fits.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => {
            const Icon = w.icon;
            const lit = "highlight" in w && w.highlight;
            return (
              <li key={w.title}>
                <a
                  href={w.href}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0",
                    lit
                      ? "border-2 border-orange bg-orange/10 shadow-md hover:bg-orange/15"
                      : "border border-line bg-cream hover:border-brand-navy/30 hover:bg-sand-warm"
                  )}
                >
                  <span className={cn(
                    "inline-flex size-12 items-center justify-center rounded-xl shadow-md",
                    lit ? "bg-orange text-brand-deep" : "bg-gradient-to-br from-brand-navy to-brand-deep text-white"
                  )}>
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="mt-4 text-lg font-bold text-brand-deep">{w.title}</span>
                  <span className="mt-2 flex-1 text-[0.9375rem] leading-7 text-muted-foreground">{w.text}</span>
                  <span className={cn(
                    "mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold",
                    lit ? "text-orange-ink" : "text-brand-navy"
                  )}>
                    {w.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="relative hidden md:col-span-2 md:block">
              <img
                src="/photos/child-smile.webp"
                alt="A child smiling at the Eagle's Wings centre"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-gradient-to-r from-orange to-[#e3800b] p-8 text-brand-deep sm:p-12 md:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-deep/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
                <Heart className="size-3.5" aria-hidden /> Support the mission
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">Help a child, an older person or a family take the next step.</h3>
              <p className="mt-2 text-[0.9375rem] text-brand-deep/85">
                See the ways to give, and how your support connects to our five program areas.
              </p>
              <a href="/donate" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-deep px-7 text-[0.9375rem] font-bold text-white shadow-md transition-colors hover:bg-brand-navy">
                <Heart className="size-4" aria-hidden /> Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Stay connected */
// There is no email newsletter, so this offers the real ways to stay in touch
// instead of a sign-up form that would go nowhere.
export function StayConnected() {
  const channels = [
    { icon: Facebook, label: "Like us on Facebook", value: "Eagle's Wings Foundation", href: site.facebook, external: true },
    { icon: Instagram, label: "Follow us on Instagram", value: site.instagramHandle, href: site.instagram, external: true },
    { icon: Linkedin, label: "Connect on LinkedIn", value: "Eagle's Wings Foundation", href: site.linkedin, external: true },
    { icon: Youtube, label: "Watch on YouTube", value: "Eagle's Wings Foundation", href: site.youtube, external: true },
    { icon: MessageCircle, label: "Message us on WhatsApp", value: site.phone, href: site.whatsapp, external: true },
    { icon: Mail, label: "Email the team", value: site.email, href: `mailto:${site.email}`, external: false },
  ].filter((c) => c.href && c.href !== "#");
  return (
    <section id="stay-connected" className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-deep py-12 text-white md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(circle at 90% 10%, rgba(246, 147, 30, 0.45), transparent 45%)" }}
      />
      <div className="container-wide relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-orange">
            <Mail className="size-3.5" aria-hidden /> Stay in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Stay connected with Eagle&apos;s Wings.</h2>
          <p className="mt-3 max-w-lg text-[1.0625rem] leading-8 text-white/85">
            See our activities, ask a question or tell us how you would like to help. We read every message.
          </p>
          <div className="mt-6 hidden gap-3 lg:flex">
            <img src="/photos/team/team-together-320w.webp" alt="The Eagle's Wings team with arms around each other in front of the Foundation banner" className="h-28 w-40 rounded-xl object-cover" loading="lazy" />
            <img src="/photos/play-basketball.webp" alt="A child playing basketball at the centre" className="h-28 w-40 rounded-xl object-cover" loading="lazy" />
            <img src="/photos/life-gardening.webp" alt="Young people gardening together" className="h-28 w-40 rounded-xl object-cover" loading="lazy" />
          </div>
        </div>
        <ul className="space-y-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-6">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 transition-colors hover:bg-white/15"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-orange text-brand-deep">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/75">{c.label}</span>
                    <span className="block font-semibold [overflow-wrap:anywhere]">{c.value}</span>
                  </span>
                  <ArrowRight className="ml-auto size-4 shrink-0 text-orange" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
