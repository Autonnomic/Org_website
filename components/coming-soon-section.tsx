import { Sparkles } from "lucide-react"

export function ComingSoonSection() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-card/55 px-8 py-16 text-center backdrop-blur-md md:px-16 md:py-22"
          style={{
            boxShadow:
              "0 0 0 1px oklch(0.78 0.14 195 / 0.08), 0 40px 100px -40px oklch(0.15 0.08 265 / 0.8)",
          }}
        >
          <div
            className="pointer-events-none absolute -left-1/4 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.55 0.2 295 / 0.12), transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-1/4 top-0 h-[380px] w-[380px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.5 0.14 195 / 0.14), transparent 65%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm md:mb-10">
            <Sparkles className="size-3.5 text-primary md:size-4" strokeWidth={1.75} />
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Horizon
            </span>
          </div>

          <h2 className="relative mx-auto max-w-xl font-display text-2xl font-bold tracking-tight text-foreground md:max-w-2xl md:text-4xl text-balance">
            The roadmap is live—analytics, mentorship, richer collaboration.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
            We&apos;re shipping advanced analytics, mentor-grade AI loops, tighter team
            workflows, and new surfaces for learner success—all on the same LMS core.
          </p>
        </div>
      </div>
    </section>
  )
}
