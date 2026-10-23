"use client";

import Link from "next/link";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { footerNav, contactInfo } from "./data";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-brand-deep text-white/85"
    >
      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="container-wide flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-sans text-2xl font-extrabold text-white sm:text-3xl">
              There are so many ways to show up.
            </h3>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Support inclusion, raise voices, and stay connected to the work.
              Find the opportunity that fits you and make it yours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#ways-to-give" className="btn-coral">
              <Heart className="size-4" />
              Donate Now
            </a>
            <a
              href="#careers"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-deep"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3" aria-label="FREE home">
              <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-coral to-coral-dark text-white shadow-md">
                <Heart className="size-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  FREE
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-coral">
                  Family Residences &amp; Essential Enterprises
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              Founded in 1977. Headquartered in Old Bethpage, NY. Proudly
              supporting more than 5,500 individuals of all abilities across
              Long Island and the New York metropolitan region.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                className="flex items-start gap-2.5 text-white/85 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 text-coral" />
                <span>
                  {contactInfo.phone}
                  <span className="block text-xs text-white/60">
                    Toll-free: {contactInfo.phoneAlt}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-2.5 text-white/85 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 text-coral" />
                {contactInfo.email}
              </a>
              <a
                href="https://maps.google.com/?q=191+Bethpage-Sweet+Hollow+Road+Old+Bethpage+NY+11804"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-white/85 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 text-coral" />
                {contactInfo.address}
              </a>
            </div>
          </div>

          {/* Link cols */}
          <FooterLinkCol
            title="Services"
            links={footerNav.services}
          />
          <FooterLinkCol title="About" links={footerNav.about} />
          <FooterLinkCol
            title="Get Involved"
            links={footerNav.getInvolved}
          />
          <FooterLinkCol title="Partners" links={footerNav.partners} />
        </div>

        {/* Social row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <SocialLink
              href="https://www.facebook.com/FREEFamilyRes"
              label="Facebook"
              icon={<Facebook className="size-4" />}
            />
            <SocialLink
              href="https://www.linkedin.com/company/freefamilyres"
              label="LinkedIn"
              icon={<Linkedin className="size-4" />}
            />
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/85 transition-colors hover:bg-white hover:text-brand-deep"
          >
            <ArrowUp className="size-3.5" />
            Back to top
          </button>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="border-t border-white/10 bg-brand-deep">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Family Residences and Essential
            Enterprises, Inc. — A 501(c)(3) Not-for-profit Organization.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="#privacy" className="transition-colors hover:text-white">
              Website Privacy Policies
            </Link>
            <Link href="#nondiscrimination" className="transition-colors hover:text-white">
              Non-Discrimination Notice
            </Link>
            <Link href="#no-discriminacion" className="transition-colors hover:text-white">
              No Discriminación Notis
            </Link>
            <Link href="#employee-resources" className="transition-colors hover:text-white">
              Employee Resources
            </Link>
            <Link href="#site-credit" className="transition-colors hover:text-white">
              Site Credit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkCol({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-coral">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="group inline-flex items-start gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
            >
              <ArrowUpRight className="mt-0.5 size-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-coral hover:bg-coral hover:text-white"
    >
      {icon}
    </a>
  );
}
