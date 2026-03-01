"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

const HERO_WAVE_COLORS = ["#0CA4A5", "#0892A5", "#06908F", "#0CA4A5", "#0892A5"];
const HERO_BG_FILL = "#141B41";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32 min-h-screen bg-[#141B41]">
      <WavyBackground
        containerClassName="!h-full !min-h-0 absolute inset-0 flex flex-col items-center justify-center bg-[#141B41]"
        className="max-w-7xl mx-auto px-6 w-full"
        colors={HERO_WAVE_COLORS}
        backgroundFill={HERO_BG_FILL}
        waveOpacity={0.45}
        blur={10}
        speed="slow"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 shadow-[0_0_24px_-4px_var(--primary)/40] backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_2px_var(--primary)]" />
            <span className="text-xs font-medium text-primary">Redefining the Daily Grind.</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground font-serif md:text-6xl lg:text-7xl text-balance">
            Autonomous AI for
            <span className="text-primary drop-shadow-[0_0_24px_var(--primary)/50]"> Every Industry</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
          Autonomic is re-engineering the DNA of productivity. By deploying intelligent 
          AI ecosystems, we aren't just improving workflows—we’re fundamentally redefining how the world works, from the classroom to the trading floor and beyond.
          </p>
        </div>
      </WavyBackground>
    </section>
  );
}
