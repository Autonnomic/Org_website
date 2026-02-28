import { Target, Eye } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
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

        <div className="grid gap-px rounded-xl border border-border bg-border md:grid-cols-2">
          <div className="flex flex-col gap-4 bg-card p-8 md:p-12 rounded-t-xl md:rounded-tl-xl md:rounded-tr-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">Our Mission</h3>
            <p className="leading-relaxed text-muted-foreground">
              To build AI applications that transform the way every industry operates — making
              work smarter, faster, and more impactful. We believe in deploying autonomous
              intelligence that delivers measurable outcomes from day one.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-card p-8 md:p-12 rounded-b-xl md:rounded-br-xl md:rounded-bl-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-serif">Our Vision</h3>
            <p className="leading-relaxed text-muted-foreground">
              A world where AI seamlessly integrates into every workflow, unlocking new levels
              of human creativity and productivity. We envision a future where businesses of
              every size harness autonomous systems to drive unprecedented growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
