"use client";

import { coreValues } from "./data";

export function CoreValuesSection() {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-brand-deep py-20 text-white md:py-28"
    >
      {/* Decorative shapes */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(217, 115, 51, 0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.12), transparent 50%)",
        }}
      />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <span className="section-eyebrow !text-coral">
            <span className="h-px w-8 bg-coral" />
            What We Stand For
          </span>
          <h2 className="font-sans text-3xl font-extrabold leading-tight sm:text-4xl">
            Seven values guide every decision we make.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            These principles shape how we hire, how we serve, and how we
            measure ourselves — and they have anchored FREE for more than four
            decades.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreValues.map((v, i) => {
            const Icon = v.icon;
            const isLast = i === coreValues.length - 1;
            return (
              <div
                key={v.title}
                className={
                  isLast
                    ? "group relative flex flex-col rounded-2xl border border-white/15 bg-gradient-to-br from-coral to-coral-dark p-6 shadow-lg transition-transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1 xl:col-span-1"
                    : "group relative flex flex-col rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10"
                }
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {v.description}
                </p>
                <span className="mt-4 text-5xl font-extrabold leading-none text-white/10 transition-colors group-hover:text-white/20">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
