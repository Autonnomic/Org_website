"use client";

import { Target, Eye } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    description:
      "To build AI applications that transform the way every industry operates — making work smarter, faster, and more impactful. We believe in deploying autonomous intelligence that delivers measurable outcomes from day one.",
    gradient: "from-primary/20 via-primary/5 to-transparent",
    glowColor: "primary",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where AI seamlessly integrates into every workflow, unlocking new levels of human creativity and productivity. We envision a future where businesses of every size harness autonomous systems to drive unprecedented growth.",
    gradient: "from-primary/15 via-primary/5 to-transparent",
    glowColor: "primary",
  },
];

function AboutCard({ card }: { card: (typeof cards)[0] }) {
  const Icon = card.icon;
  const [isHovered, setIsHovered] = useState(false);
  const [shineKey, setShineKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShineKey((k) => k + 1);
  };

  return (
    <div
      className="group group/card relative overflow-hidden rounded-2xl border border-primary/20 bg-card/90 p-8 backdrop-blur-sm transition-all duration-500 md:p-12
        hover:border-primary/60 hover:shadow-[0_0_50px_-12px_var(--primary)]
        hover:-translate-y-2 hover:scale-[1.02]
        perspective-[1000px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated gradient border glow on hover */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${
          isHovered ? "animate-[card-glow-pulse_2s_ease-in-out_infinite]" : ""
        }`}
        style={{
          boxShadow: "0 0 60px -15px var(--primary)",
          opacity: isHovered ? 0.5 : 0,
        }}
        aria-hidden
      />

      {/* Shine sweep on hover - key forces re-run each time */}
      <div
        key={shineKey}
        className={`pointer-events-none absolute inset-0 rounded-2xl ${
          isHovered ? "animate-[card-shine_0.8s_ease-out_forwards]" : ""
        }`}
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, transparent 55%)",
          backgroundSize: "200% 100%",
        }}
        aria-hidden
      />

      {/* Subtle gradient overlay */}
      <div
        className={`absolute inset-0 rounded-2xl bg-linear-to-br ${card.gradient} opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon with glow and float on hover */}
        <div
          className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30 transition-all duration-500 group-hover/card:bg-primary/25 group-hover/card:ring-primary/50 group-hover/card:shadow-[0_0_30px_-5px_var(--primary)] group-hover/card:scale-110 group-hover/card:-translate-y-1"
        >
          <Icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover/card:scale-110" />
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground font-serif transition-colors duration-300 group-hover/card:text-primary/95 md:text-2xl">
          {card.title}
        </h3>
        <p className="leading-relaxed text-muted-foreground transition-all duration-500 group-hover/card:text-foreground/90">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Who We Are
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
            Where autonomous intelligence meets human ambition.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Founded with the belief that AI should amplify human potential, not replace it,
            Autonnomic designs systems that think, learn, and adapt — empowering organizations
            to achieve what was previously impossible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AboutCard card={cards[0]} />
          <AboutCard card={cards[1]} />
        </div>
      </div>
    </section>
  );
}
