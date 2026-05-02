"use client";

import { Target, Eye } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    line: "Make education deeply personal and effective by using AI to adapt every learning journey in real time.",
    gradient: "from-primary/30 via-accent/15 to-transparent",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    line: "A world where every institution runs on an LMS that understands its learners, supports its educators, and removes friction from learning.",
    gradient: "from-accent/25 via-primary/10 to-transparent",
  },
];

function AboutCard({
  card,
  isVisible,
  delay,
}: {
  card: (typeof cards)[0];
  isVisible: boolean;
  delay: number;
}) {
  const Icon = card.icon;

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card/70 p-8 backdrop-blur-sm transition-all duration-700 ease-out md:p-11
        hover:border-primary/35 hover:-translate-y-1 hover:shadow-[0_24px_80px_-28px_oklch(0.78_0.14_195_/_0.25)]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(1.25rem)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 animate-[card-glow-pulse_4s_ease-in-out_infinite] rounded-3xl"
        style={{
          boxShadow:
            "inset 0 0 0 1px oklch(0.78 0.14 195 / 0.12), 0 0 40px -12px oklch(0.78 0.14 195 / 0.2)",
        }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 rounded-3xl bg-linear-to-br ${card.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div
          className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-primary/25 to-accent/15 text-primary
            shadow-[0_0_32px_-8px_oklch(0.78_0.14_195_/_0.4)] transition-all duration-500 group-hover:scale-105 md:size-20"
        >
          <Icon className="size-8 md:size-10" strokeWidth={1.25} />
        </div>
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl lg:text-3xl">
          {card.title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground transition-colors md:text-base group-hover:text-foreground/90">
          {card.line}
        </p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-b from-[#030712] via-background to-background py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/18 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="mx-auto mb-16 max-w-3xl text-center transition-all duration-1000 ease-out md:mb-20"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(2.5rem)",
          }}
        >
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-primary">
            Why Autonnomic LMS
          </span>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 font-display text-white">
            <LayoutTextFlip
              text="Built for"
              words={["students", "faculty"]}
              duration={2500}
            />
          </div>
          <p className="mx-auto mt-5 max-w-lg text-sm text-muted-foreground md:text-base">
            One operating system for courses, cognition, and continuous improvement.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          <AboutCard card={cards[0]} isVisible={isInView} delay={300} />
          <AboutCard card={cards[1]} isVisible={isInView} delay={700} />
        </div>
      </div>
    </section>
  );
}
