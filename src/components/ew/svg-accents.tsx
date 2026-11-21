"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Organic wave divider placed between sections.
// `flip` mirrors it for bottom-to-top transitions.
// `color` is the fill matching the NEXT section's background.
export function WaveDivider({
  color = "var(--color-cream)",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className={`pointer-events-none block w-full ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: flip ? undefined : "-1px", marginBottom: flip ? "-1px" : undefined }}
    >
      <path
        d="M0 28c160-20 320-28 480-22s320 22 480 18 320-18 480-10v42H0z"
        fill={color}
      />
    </svg>
  );
}

// Soft arc transition — gentler than the wave, good for light→light changes.
export function ArcDivider({
  color = "var(--color-cream)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className={`pointer-events-none block w-full ${className}`}
      style={{ marginTop: "-1px" }}
    >
      <path d="M0 40V20c360-26 720-26 1080-6s280 14 360 16v10z" fill={color} />
    </svg>
  );
}

// Wing accent — the brand motif, used as a subtle decorative element.
export function WingAccent({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <motion.svg
      ref={ref}
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      {...(reduced ? {} : { initial: { opacity: 0, scale: 0.8 }, animate: inView ? { opacity: 1, scale: 1 } : {}, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } })}
    >
      <path
        d="M60 110c0-30 15-52 42-68C74 30 62 15 60 0c-2 15-14 30-42 42 27 16 42 38 42 68z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M38 100c0-22 11-38 30-50-15-7-26-18-29-38-3 20-14 31-27 36 20 10 26 30 26 52z"
        fill="currentColor"
        opacity="0.05"
      />
      <path
        d="M82 100c0-22-11-38-30-50 15-7 26-18 29-38 3 20 14 31 27 36-20 10-26 30-26 52z"
        fill="currentColor"
        opacity="0.04"
      />
    </motion.svg>
  );
}

// Animated orange brush stroke — reveals by drawing the path.
export function BrushStroke({
  className = "",
  width = 240,
}: {
  className?: string;
  width?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      className={`pointer-events-none ${className}`}
      width={width}
      height={12}
      viewBox="0 0 240 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M4 8c50-6 100-6 150-2s60 4 84-1"
        stroke="var(--color-orange, #f6931e)"
        strokeWidth="3"
        strokeLinecap="round"
        {...(reduced ? {} : { initial: { pathLength: 0, opacity: 0 }, animate: inView ? { pathLength: 1, opacity: 1 } : {}, transition: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 } })}
      />
    </svg>
  );
}

// Floating dots pattern — subtle background texture.
export function DotPattern({
  className = "",
  count = 24,
  color = "currentColor",
}: {
  className?: string;
  count?: number;
  color?: string;
}) {
  const dots = Array.from({ length: count }, (_, i) => ({
    cx: 15 + ((i * 37) % 170),
    cy: 10 + ((i * 23) % 80),
    r: 1.5 + (i % 3) * 0.5,
    opacity: 0.06 + (i % 4) * 0.02,
  }));

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 200 100"
      fill="none"
      aria-hidden
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={color} opacity={d.opacity} />
      ))}
    </svg>
  );
}

// Curved connector line between sections — a flowing orange arc.
export function FlowLine({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      className={`pointer-events-none ${className}`}
      viewBox="0 0 400 80"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M0 60c80-50 160-50 200-10s120 40 200-10"
        stroke="var(--color-orange, #f6931e)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
        {...(reduced ? {} : { initial: { pathLength: 0, opacity: 0 }, animate: inView ? { pathLength: 1, opacity: 0.3 } : {}, transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] } })}
      />
    </svg>
  );
}
