"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Heart, MapPin, Menu, Phone, X } from "lucide-react";
import { megaMenus, site, topLinks, type MegaMenu } from "./data";
import { cn } from "@/lib/utils";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Eagle's Wings Foundation Tanzania, home">
      <img
        src="/eagles-wings-foundation-logo-header.webp"
        alt=""
        width={56}
        height={56}
        className={cn("object-contain", compact ? "size-10" : "size-14")}
      />
      <span className="flex flex-col leading-none">
        <span className={cn("font-extrabold tracking-tight text-brand-deep", compact ? "text-base" : "text-xl")}>Eagle&apos;s Wings</span>
        <span className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-orange-ink">Foundation Tanzania</span>
      </span>
    </a>
  );
}

function TopBar() {
  return (
    <div className="hidden bg-brand-deep text-white lg:block">
      <div className="container-wide flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-white/85">
            <MapPin className="size-3.5" aria-hidden />
            {site.location}
          </span>
          <a href={site.phoneHref} className="inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-white">
            <Phone className="size-3.5" aria-hidden />
            {site.phone}
          </a>
        </div>
        <div className="flex items-center gap-4 text-white/85">
          <a href="/blog" className="transition-colors hover:text-white">
            News &amp; stories
          </a>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Facebook
          </a>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Instagram
          </a>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <span className="h-3 w-px bg-white/20" aria-hidden />
          <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

// Large drop-down panel: one column per area, each with an icon, a line of
// description and its links, plus an optional call-to-action band.
function MegaPanel({ menu }: { menu: MegaMenu }) {
  const cols = menu.columns.length > 4 ? "md:grid-cols-3" : menu.columns.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className="mega-panel invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="w-[min(94vw,60rem)] rounded-2xl border border-line bg-white p-6 shadow-2xl shadow-brand-deep/15">
        <ul className={cn("grid grid-cols-1 gap-3", cols)}>
          {menu.columns.map((col) => {
            const Icon = col.icon;
            return (
              <li key={col.title} className="rounded-xl p-3 transition-colors hover:bg-cream">
                <a href={col.href} className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-navy/10 text-brand-navy">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.9375rem] font-bold leading-tight text-brand-deep">{col.title}</span>
                    {col.description && <span className="mt-1 block text-[0.8125rem] leading-snug text-muted-foreground">{col.description}</span>}
                  </span>
                </a>
                {col.children.length > 0 && (
                  <ul className="mt-2 space-y-0.5 pl-[3.25rem]">
                    {col.children.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="block rounded-md px-2 py-1.5 text-[0.8125rem] font-medium text-brand-deep/75 hover:bg-white hover:text-brand-navy">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        {menu.featured && (
          <div className="mt-5 flex flex-col gap-3 rounded-xl bg-gradient-to-r from-brand-deep to-brand-navy p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.9375rem] font-bold">{menu.featured.title}</p>
              <p className="mt-0.5 text-[0.8125rem] text-white/80">{menu.featured.description}</p>
            </div>
            <a href={menu.featured.href} className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-orange px-5 text-[0.8125rem] font-bold text-brand-deep hover:bg-white">
              {menu.featured.cta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [path, setPath] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // The inner pages navigate client-side (react-router), so track the
    // browser's own popstate plus the event the legacy layout dispatches.
    const sync = () => setPath(window.location.pathname);
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("ew-route-change", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("ew-route-change", sync);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 transition-shadow",
          scrolled && "shadow-md shadow-brand-deep/5"
        )}
      >
        <div className="container-wide flex h-20 items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
            {megaMenus.map((menu) => {
              const active = path === menu.href || (menu.href !== "/" && path.startsWith(`${menu.href}/`));
              return (
                <div
                  key={menu.label}
                  className="group relative"
                  onMouseEnter={() => setOpenMenu(menu.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocusCapture={() => setOpenMenu(menu.label)}
                  onBlurCapture={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                  }}
                >
                  <a
                    href={menu.href}
                    aria-haspopup="true"
                    aria-expanded={openMenu === menu.label}
                    className={cn(
                      "inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-[0.9375rem] font-semibold transition-colors group-hover:bg-cream group-hover:text-brand-deep",
                      active ? "text-brand-deep" : "text-brand-deep/85",
                    )}
                  >
                    {menu.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
                  </a>
                  <MegaPanel menu={menu} />
                </div>
              );
            })}
            {topLinks.map((l) => {
              const active = path === l.href || path.startsWith(`${l.href}/`);
              return (
                <a
                  key={l.label}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] font-semibold hover:bg-cream hover:text-brand-deep",
                    active ? "text-brand-deep" : "text-brand-deep/85",
                  )}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <a href="/donate" className="btn-pill-orange min-h-10 px-3.5 text-sm sm:min-h-12 sm:px-6 sm:text-[0.9375rem]">
              <Heart className="size-4" aria-hidden /> Donate
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-brand-deep xl:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-orange"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden
        />
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-brand-deep/55 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <Logo compact />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-brand-deep"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
              {megaMenus.map((menu, i) => (
                <details key={menu.label} className="group mb-1" open={i === 0}>
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between rounded-lg px-3 font-semibold text-brand-deep hover:bg-cream">
                    {menu.label}
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="mb-2 ml-3 border-l-2 border-line pl-3">
                    {menu.columns.map((col) => (
                      <div key={col.title} className="py-1.5">
                        <a href={col.href} className="block rounded-md px-2 py-1.5 text-[0.9375rem] font-semibold text-brand-deep hover:bg-cream">
                          {col.title}
                        </a>
                        {col.children.map((item) => (
                          <a key={item.label} href={item.href} className="block rounded-md px-2 py-1.5 text-sm text-brand-deep/75 hover:bg-cream">
                            {item.label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
              ))}
              {topLinks.map((l) => (
                <a key={l.label} href={l.href} className="flex min-h-12 items-center rounded-lg px-3 font-semibold text-brand-deep hover:bg-cream">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="border-t border-line p-4">
              <a href="/donate" className="btn-pill-orange w-full">
                <Heart className="size-4" aria-hidden /> Donate
              </a>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="size-3.5 text-orange-ink" aria-hidden /> {site.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
