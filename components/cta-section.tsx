import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-6 px-8 py-16 text-center md:px-16 md:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="text-xs font-medium text-primary">Ready to see Autonnomic LMS?</span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
              Bring AI-native learning to your institution.
            </h2>

            <p className="max-w-md text-muted-foreground">
              Book a walkthrough of Autonnomic LMS and explore how it can fit your programs, teams, and learners.
            </p>

            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary gap-2 px-8" asChild>
                <Link href="/contact-sales">
                  Book a demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
