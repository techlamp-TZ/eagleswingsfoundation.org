"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const hidden = { opacity: 0, y: 32 };
const visible = { opacity: 1, y: 0 };

const fadeHidden = { opacity: 0 };
const fadeVisible = { opacity: 1 };

const scaleHidden = { opacity: 0, scale: 0.92 };
const scaleVisible = { opacity: 1, scale: 1 };

type Ease = [number, number, number, number];
const ease: Ease = [0.25, 0.4, 0.25, 1];

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      {...(reduced ? {} : { initial: hidden, animate: inView ? visible : hidden, transition: { duration: 0.6, ease, delay } })}
    >
      {children}
    </Tag>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      {...(reduced ? {} : { initial: fadeHidden, animate: inView ? fadeVisible : fadeHidden, transition: { duration: 0.5, ease, delay } })}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      {...(reduced ? {} : { initial: scaleHidden, animate: inView ? scaleVisible : scaleHidden, transition: { duration: 0.55, ease, delay } })}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className,
  as = "ul",
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : stagger } },
      }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "li",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      variants={reduced ? undefined : {
        hidden,
        visible,
      }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </Tag>
  );
}

export function CountUp({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const isNumeric = /^\d+$/.test(value);

  return (
    <div ref={ref}>
      <dd className="tabular text-3xl font-bold text-brand-navy">
        {isNumeric && !reduced ? (
          <AnimatedNumber target={parseInt(value, 10)} play={inView} />
        ) : (
          value
        )}
      </dd>
      <dt className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">
        {label}
      </dt>
    </div>
  );
}

function AnimatedNumber({ target, play }: { target: number; play: boolean }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (play) mv.set(target);
  }, [play, target, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (spanRef.current) spanRef.current.textContent = String(Math.round(v));
    });
    return unsub;
  }, [spring]);

  return <span ref={spanRef}>0</span>;
}
