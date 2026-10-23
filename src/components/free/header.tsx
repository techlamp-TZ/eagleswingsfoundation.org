"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Heart, Phone, MapPin } from "lucide-react";
import {
  allMegaMenus,
  topNavLinks,
  type MegaMenu,
} from "./data";
import { cn } from "@/lib/utils";

/* --------- Mega menu panel --------- */
function MegaMenuPanel({ menu }: { menu: MegaMenu }) {
  return (
    <div className="mega-menu-content absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-3 group-hover:block">
      <div className="w-[min(95vw,64rem)] rounded-2xl border border-brand/10 bg-white p-6 shadow-2xl shadow-brand-deep/15">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {menu.columns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.title}
                className="group/col rounded-xl border border-transparent p-3 transition-colors hover:border-brand/10 hover:bg-brand-soft/60"
              >
                <Link
                  href={col.href}
                  className="mb-2 flex items-start gap-2.5"
                >
                  {Icon && (
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-4.5" />
                    </span>
                  )}
                  <div>
                    <h4 className="text-sm font-bold leading-tight text-brand-deep">
                      {col.title}
                    </h4>
                  </div>
                </Link>
                {col.description && (
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                    {col.description}
                  </p>
                )}
                <ul className="space-y-1">
                  {col.children?.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-2 py-1 text-xs font-medium text-foreground/70 transition-colors hover:bg-brand/10 hover:text-brand"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {menu.featured && (
          <div className="mt-5 flex flex-col gap-3 rounded-xl bg-gradient-to-r from-brand to-brand-dark p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h5 className="text-sm font-bold">{menu.featured.title}</h5>
              <p className="mt-0.5 text-xs text-white/80">
                {menu.featured.description}
              </p>
            </div>
            <Link
              href={menu.featured.href}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-deep transition-transform hover:scale-105"
            >
              {menu.featured.cta}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/* --------- Top utility bar --------- */
function TopBar() {
  return (
    <div className="hidden bg-brand-deep text-white lg:block">
      <div className="container-wide flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-white/85">
            <MapPin className="size-3.5" />
            191 Bethpage-Sweet Hollow Road, Old Bethpage, NY 11804
          </span>
          <a
            href="tel:5168701600"
            className="inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-white"
          >
            <Phone className="size-3.5" />
            (516) 870-1600
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/85">
          <Link href="#employee-resources" className="transition-colors hover:text-white">
            Employee Resources
          </Link>
          <span className="h-3 w-px bg-white/20" />
          <Link href="#newsletter" className="transition-colors hover:text-white">
            Newsletter
          </Link>
          <span className="h-3 w-px bg-white/20" />
          <a
            href="https://www.facebook.com/FREEFamilyRes"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/freefamilyres"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

/* --------- Header --------- */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <TopBar />

      <div
        ref={headerRef}
        className={cn(
          "border-b border-brand/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow",
          scrolled && "shadow-md"
        )}
      >
        <div className="container-wide flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="FREE Home">
            <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-md">
              <Heart className="size-6" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tight text-brand-deep">
                FREE
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-coral">
                Family Residences &amp; Essential Enterprises
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {allMegaMenus.map((menu) => (
              <div key={menu.label} className="group relative">
                <Link
                  href={menu.href}
                  className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors group-hover:bg-brand-soft group-hover:text-brand-deep"
                >
                  {menu.label}
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <MegaMenuPanel menu={menu} />
              </div>
            ))}
            {topNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-brand-soft hover:text-brand-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link href="#ways-to-give" className="btn-coral">
              <Heart className="size-4" />
              Donate Now
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-brand/15 text-brand-deep lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <MobileDrawer onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

/* --------- Mobile drawer --------- */
function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>("Services");

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-brand/10 px-4 py-3.5">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-white">
              <Heart className="size-5" />
            </span>
            <span className="text-base font-extrabold text-brand-deep">FREE</span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-brand/15 text-brand-deep"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="scroll-slim flex-1 overflow-y-auto px-2 py-3">
          {allMegaMenus.map((menu) => {
            const isOpen = openSection === menu.label;
            return (
              <div key={menu.label} className="mb-1">
                <button
                  type="button"
                  onClick={() => setOpenSection(isOpen ? null : menu.label)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-deep hover:bg-brand-soft"
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="mb-2 ml-2 border-l-2 border-brand/15 pl-3">
                    {menu.columns.map((col) => (
                      <div key={col.title} className="py-2">
                        <p className="px-2 text-xs font-bold uppercase tracking-wide text-coral">
                          {col.title}
                        </p>
                        <ul className="mt-1 space-y-0.5">
                          {col.children?.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="block rounded-md px-2 py-1.5 text-xs text-foreground/75 hover:bg-brand-soft hover:text-brand-deep"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {menu.featured && (
                      <Link
                        href={menu.featured.href}
                        onClick={onClose}
                        className="mt-2 block rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white"
                      >
                        {menu.featured.cta} →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          {topNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-deep hover:bg-brand-soft"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-brand/10 p-4">
          <Link
            href="#ways-to-give"
            onClick={onClose}
            className="btn-coral w-full"
          >
            <Heart className="size-4" />
            Donate Now
          </Link>
          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
            <p className="inline-flex items-center gap-1.5">
              <Phone className="size-3.5 text-brand" />
              (516) 870-1600
            </p>
            <p className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand" />
              Old Bethpage, NY 11804
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
