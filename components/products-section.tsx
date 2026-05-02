"use client";

import { Brain, Sparkles, Target, TrendingUp, Lightbulb, Zap } from "lucide-react";
import { AnimatedList } from "@/components/magicui/animated-list";

const features = [
  { icon: Brain, line: "Personalized learning paths for every student." },
  { icon: Sparkles, line: "Content that adapts in real time." },
  { icon: Target, line: "Predictive support before students fall behind." },
  { icon: TrendingUp, line: "Data-driven insights for educators." },
  { icon: Lightbulb, line: "Automated admin so you focus on teaching." },
  { icon: Zap, line: "Real-time collaboration across the platform." },
];

const steps = [
  {
    title: "Onboard",
    description: "Connect your courses, enroll learners, and plug into your data in days—not months.",
  },
  {
    title: "Learn",
    description: "Students get adaptive experiences while professors see exactly who needs help.",
  },
  {
    title: "Optimize",
    description: "Use AI insights to iterate on content, interventions, and outcomes every term.",
  },
];

function LMSCard({ item }: { item: (typeof features)[0] }) {
  const Icon = item.icon;
  return (
    <div
      className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-white/[0.06] bg-card/50 p-4 backdrop-blur-md transition-all duration-300
        hover:border-primary/35 hover:bg-primary/[0.06] hover:shadow-[0_0_40px_-16px_oklch(0.78_0.14_195_/_0.35)] md:gap-5 md:p-5"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-linear-to-br from-primary/25 to-accent/10 text-primary transition-transform duration-300 group-hover:scale-105 md:size-12">
        <Icon className="size-5 md:size-[1.35rem]" strokeWidth={1.5} />
      </div>
      <p className="text-sm font-medium leading-snug text-foreground md:text-[0.95rem]">
        {item.line}
      </p>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden py-28 md:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[min(100%,900px)] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.45 0.12 295 / 0.12), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-[4.75rem]">
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-primary">
            The Platform
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            One surface. Every signal.
          </h2>
          <p className="mt-4 text-pretty text-sm text-muted-foreground md:text-base">
            Autonnomic LMS personalizes learning at scale, amplifies educators, and keeps
            your academic operations coherent.
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-card/40 shadow-[0_0_0_1px_oklch(0.78_0.14_195_/_0.06)_inset] backdrop-blur-sm">
            <div
              className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.78 0.14 195 / 0.08), transparent 55%)",
              }}
              aria-hidden
            />
            <div
              className="relative aspect-4/3 bg-cover bg-center"
              style={{ backgroundImage: 'url("/images/lms-section.jpg")' }}
              role="img"
              aria-label="Autonnomic LMS interface"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.06] bg-linear-to-t from-background/95 to-transparent px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">
              <p className="font-display text-sm font-semibold text-foreground md:text-base">
                Autonnomic LMS
              </p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                Replace static hubs with intelligence that reacts to cohorts—without adding
                tooling sprawl.
              </p>
            </div>
          </div>

          <div className="relative min-h-[300px]">
            <AnimatedList delay={260} className="gap-3 md:gap-4">
              {features.map((item) => (
                <LMSCard key={item.line} item={item} />
              ))}
            </AnimatedList>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:mt-[4.75rem] md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-card/55 p-6 text-left backdrop-blur-md transition-colors hover:border-primary/25 md:p-7"
            >
              <span className="font-mono text-[0.625rem] text-muted-foreground/80 md:text-[0.6875rem]">
                0{i + 1}
              </span>
              <p className="mt-2 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
