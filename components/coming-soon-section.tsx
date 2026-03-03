import { Sparkles } from "lucide-react"

export function ComingSoonSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-linear-to-br from-primary/5 via-transparent to-primary/10 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">What&apos;s Next</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-foreground font-serif md:text-4xl text-balance max-w-2xl mx-auto">
            The Autonnomic LMS roadmap.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            We&apos;re shipping advanced analytics, AI mentor experiences, richer collaboration, and more ways to help your learners succeed.
          </p>
        </div>
      </div>
    </section>
  )
}
