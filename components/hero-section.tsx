"use client";

import { WavyBackground } from "@/components/ui/wavy-background";
import { AuroraText } from "@/components/magicui/aurora-text";

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

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground font-serif md:text-6xl lg:text-7xl text-balance drop-shadow-sm">
            Autonomous AI for <AuroraText className="font-serif">Every Industry</AuroraText>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl">
            <span
              className="block bg-size-[200%_auto] bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--muted-foreground)_0%,var(--foreground)_25%,var(--primary)_50%,var(--foreground)_75%,var(--muted-foreground)_100%)] animate-[text-shine_4s_ease-in-out_infinite]"
            >
              At Autonnomic we increase the standards of every industry with AI
            </span>
          </p>
        </div>
      </WavyBackground>
    </section>
  );
}
