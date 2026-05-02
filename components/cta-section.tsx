import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="pb-28 md:pb-36">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-[1px] shadow-[0_40px_100px_-40px_oklch(0.25_0.1_265_/_0.6)]"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.78 0.14 195 / 0.45), oklch(0.55 0.2 295 / 0.35), oklch(0.78 0.14 195 / 0.2))",
          }}
        >
          <div className="relative rounded-[calc(1.5rem-1px)] border border-white/[0.06] bg-background/92 backdrop-blur-xl">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(oklch(0.96 0.01 260) 1px, transparent 1px),
                  linear-gradient(90deg, oklch(0.96 0.01 260) 1px, transparent 1px)
                `,
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />

            <div className="relative flex flex-col items-center gap-6 px-8 py-16 text-center md:gap-8 md:px-16 md:py-22">
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  Next cohort
                </span>
              </div>

              <h2 className="max-w-3xl text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.35rem]">
                Bring autonomous learning ops to campus.
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Book a structured walkthrough: programs, SSO, integrations, and the day-one
                experience for faculty and learners.
              </p>

              <div className="pt-2">
                <Button
                  size="lg"
                  className="h-12 rounded-full px-10 text-base font-semibold shadow-[0_0_40px_-6px_oklch(0.78_0.14_195_/_0.45)]"
                  asChild
                >
                  <Link href="/contact-sales">
                    Book a demo
                    <ArrowRight className="size-[1.125rem]" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
