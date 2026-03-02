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

function LMSCard({ item }: { item: (typeof features)[0] }) {
  const Icon = item.icon;
  return (
    <div
      className="group flex items-center gap-4 rounded-xl border border-border bg-card/80 p-4 md:p-5
        hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm md:text-base text-foreground font-medium leading-snug">
        {item.line}
      </p>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Product
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
            Autonnomic LMS
          </h2>
          <p className="mt-4 text-muted-foreground">
            Education reimagined—AI-powered learning that adapts to every student.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
          {/* Left: LMS image — add your image at public/images/lms-section.jpg */}
          <div
            className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-xl bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/lms-section.jpg")' }}
            role="img"
            aria-label="Autonnomic LMS interface"
          />

          {/* Right: animated list of feature cards */}
          <div className="relative min-h-[320px]">
            <AnimatedList delay={280} className="gap-4">
              {features.map((item) => (
                <LMSCard key={item.line} item={item} />
              ))}
            </AnimatedList>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background" aria-hidden />
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-linear-to-r from-primary/10 via-primary/5 to-transparent px-6 py-4 text-center">
          <p className="text-base font-medium text-foreground">
            Personalized paths · Smarter teaching · Learning at scale
          </p>
        </div>
      </div>
    </section>
  );
}
