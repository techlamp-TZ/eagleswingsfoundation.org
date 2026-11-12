"use client";

import { ArrowUp, ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { footerNav, site } from "./data";

function LinkCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-orange">{title}</h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="group inline-flex items-start gap-1.5 text-[0.9375rem] text-white/80 transition-colors hover:text-white">
              <ArrowUpRight className="mt-1 size-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="bg-brand-deep text-white/85">
      <div className="relative h-48 overflow-hidden sm:h-56 md:h-64">
        <img
          src="/photos/team/team-outdoor-800w.webp"
          srcSet="/photos/team/team-outdoor-800w.webp 800w, /photos/team/team-outdoor-1400w.webp 1400w, /photos/team/team-outdoor.webp 1600w"
          sizes="100vw"
          alt="The full Eagle's Wings Foundation team outdoors"
          className="size-full object-cover object-[center_30%]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-deep" />
      </div>
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-3" aria-label="Eagle's Wings Foundation Tanzania, home">
              <img src="/eagles-wings-foundation-logo-header.webp" alt="" width={56} height={56} className="size-14 rounded-xl bg-white object-contain p-1" />
              <span className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">Eagle&apos;s Wings</span>
                <span className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-orange">Foundation Tanzania</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-7 text-white/75">
              Founded in 2025. Practical learning and everyday support for children, older people, families and caregivers in Tegeta, Dar es Salaam.
            </p>
            <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-2.5 hover:text-white">
                  <Phone className="mt-1 size-4 shrink-0 text-orange" aria-hidden /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2.5 hover:text-white [overflow-wrap:anywhere]">
                  <Mail className="mt-1 size-4 shrink-0 text-orange" aria-hidden /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 size-4 shrink-0 text-orange" aria-hidden /> {site.location}, Tanzania
              </li>
            </ul>
          </div>
          <LinkCol title="Programs" links={footerNav.programs} />
          <LinkCol title="About" links={footerNav.about} />
          <LinkCol title="Get involved" links={footerNav.getInvolved} />
          <LinkCol title="Resources" links={footerNav.resources} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn">
              <Facebook className="size-4" />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
              <Instagram className="size-4" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
              <Linkedin className="size-4" />
            </a>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-btn">
              <Youtube className="size-4" />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-btn">
              <MessageCircle className="size-4" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="social-btn">
              <Mail className="size-4" />
            </a>
          </div>
          <button
            type="button"
            onClick={toTop}
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-white/25 px-4 text-xs font-semibold text-white/85 transition-colors hover:bg-white hover:text-brand-deep"
          >
            <ArrowUp className="size-3.5" aria-hidden /> Back to top
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-3 py-6 text-[0.8125rem] text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Eagle&apos;s Wings Foundation Tanzania</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">
              Privacy policy
            </a>
            <a href="/faq" className="inline-flex min-h-11 items-center hover:text-white">
              FAQ
            </a>
            <a href="/contact" className="inline-flex min-h-11 items-center hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
