"use client";

import { Target, Eye } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    line: "Make work smarter, faster, and more impactful with AI that delivers from day one.",
    gradient: "from-primary/25 via-primary/10 to-transparent",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    line: "AI in every workflow—unlocking human creativity and productivity at scale.",
    gradient: "from-primary/20 via-primary/5 to-transparent",
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
      className="group relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-card to-card/80 p-8 md:p-12
        transition-all duration-700 ease-out
        hover:border-primary/50 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(1.25rem)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Border-only glow layer — tight shadow around the edge */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl animate-[card-glow-pulse_3s_ease-in-out_infinite]"
        style={{
          boxShadow: "0 0 0 1px var(--primary), 0 0 14px 0 var(--primary)",
        }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${card.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 ring-2 ring-primary/30
            transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/30"
        >
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground font-serif md:text-3xl">
          {card.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed max-w-md group-hover:text-foreground/90 transition-colors">
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
      className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-[#141B41] to-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
            Where autonomous intelligence meets human ambition.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <AboutCard card={cards[0]} isVisible={isInView} delay={0} />
          <AboutCard card={cards[1]} isVisible={isInView} delay={150} />
        </div>
      </div>
    </section>
  );
}
