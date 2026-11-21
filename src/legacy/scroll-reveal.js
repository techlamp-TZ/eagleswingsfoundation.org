"use client";

import { useEffect } from "react";

const SELECTOR = [
  "section",
  ".card",
  ".hero-section",
  ".section-header",
  ".cta-section",
  ".grid > div",
  ".volunteer-card",
  ".program-card",
  ".faq-item",
  ".cause-card",
  ".gallery-item",
  ".blog-card",
  ".contact-form",
  ".impact-card",
  ".resource-card",
  "h1",
  "h2",
  ".stats-grid > *",
].join(",");

export function useScrollReveal(dep) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const main = document.getElementById("main");
    if (!main) return;

    // Small delay to let React finish rendering the page content
    const timer = setTimeout(() => {
      const els = main.querySelectorAll(SELECTOR);
      els.forEach((el) => {
        if (!el.closest("[data-no-reveal]") && !el.classList.contains("ew-visible")) {
          el.classList.add("ew-reveal");
        }
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("ew-visible");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "-40px 0px", threshold: 0.08 }
      );

      const targets = main.querySelectorAll(".ew-reveal:not(.ew-visible)");
      targets.forEach((t) => io.observe(t));

      // Store cleanup ref
      main._ewIo = io;
    }, 100);

    return () => {
      clearTimeout(timer);
      if (main._ewIo) {
        main._ewIo.disconnect();
        main._ewIo = null;
      }
    };
  }, [dep]);
}
