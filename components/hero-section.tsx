"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { AuroraText } from "@/components/magicui/aurora-text"
import { Button } from "@/components/ui/button"

const HERO_WAVE_COLORS = [
  "#22d3ee",
  "#0891b2",
  "#a78bfa",
  "#06b6d4",
  "#c4b5fd",
]
const HERO_BG_FILL = "#030712"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] pt-28 pb-24 md:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.42_0.2_295_/_0.22),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_0%,oklch(0.45_0.15_195_/_0.18),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_90%,oklch(0.35_0.12_260_/_0.25),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 animate-[grid-fade_8s_ease-in-out_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.96 0.01 260 / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.96 0.01 260 / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 40%, black 15%, transparent 70%)",
        }}
        aria-hidden
      />

      <WavyBackground
        containerClassName="!h-full !min-h-0 absolute inset-0 flex flex-col items-center justify-center bg-transparent"
        className="relative z-[1] mx-auto max-w-5xl px-6 pt-8 md:pt-12"
        colors={HERO_WAVE_COLORS}
        backgroundFill={HERO_BG_FILL}
        waveOpacity={0.42}
        blur={12}
        speed="slow"
      >
        <div className="relative z-[2] mx-auto flex w-full flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 backdrop-blur-md md:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_oklch(0.78_0.14_195_/_0.9)]" />
            </span>
            <span className="bg-linear-to-r from-white/95 to-white/65 bg-clip-text text-xs font-medium tracking-wide text-transparent">
              Autonomous intelligence for learning institutions
            </span>
          </div>

          <h1 className="max-w-4xl text-balance font-display text-[2.65rem] font-bold leading-[1.06] tracking-tight text-white drop-shadow-[0_0_60px_oklch(0.78_0.14_195_/_0.15)] md:text-6xl lg:text-[4.25rem]">
            Autonnomic{" "}
            <AuroraText className="font-display font-bold">
              LMS
            </AuroraText>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/72 md:text-lg md:leading-relaxed">
            An AI-native learning management system that adapts to every student,
            surfaces real-time insight for faculty, and automates the operational
            load of running courses at scale.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Button
              size="lg"
              className="h-12 rounded-full px-8 text-base font-semibold shadow-[0_0_36px_-6px_oklch(0.78_0.14_195_/_0.55)]"
              asChild
            >
              <Link href="/contact-sales">
                Request a demo
                <ArrowRight className="size-[1.125rem]" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-white/[0.04] px-8 text-base text-white backdrop-blur-sm hover:bg-white/[0.08] hover:text-white"
              asChild
            >
              <Link href="#products">Explore the platform</Link>
            </Button>
          </div>

          <div className="mt-14 grid w-full max-w-xl grid-cols-3 gap-4 border-y border-white/[0.07] py-6 md:mt-20 md:max-w-3xl md:gap-8">
            {[
              { k: "Adaptive", v: "per learner" },
              { k: "Real-time", v: "faculty signals" },
              { k: "Ops", v: "on autopilot" },
            ].map((item) => (
              <div key={item.k} className="text-center">
                <p className="font-display text-sm font-semibold tracking-tight text-white md:text-base">
                  {item.k}
                </p>
                <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.2em] text-white/45 md:text-xs">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WavyBackground>
    </section>
  )
}
