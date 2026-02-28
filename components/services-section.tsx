import { Brain, Workflow, BarChart3, Shield, Zap, Layers } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Industry-Transforming Applications",
    description:
      "We build complete applications that revolutionize how industries operate. Our learning management systems, financial platforms, and sector-specific solutions change the fundamental way work gets done.",
  },
  {
    icon: Workflow,
    title: "End-to-End Platforms",
    description:
      "Full-featured applications that replace legacy systems and introduce new ways of working. From user management to real-time collaboration, we build platforms that industries adopt as their new standard.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Decision Systems",
    description:
      "Applications that make smarter decisions automatically. Our platforms analyze data, predict outcomes, and take action—transforming how industries make critical choices every day.",
  },
  {
    icon: Shield,
    title: "Secure Enterprise Applications",
    description:
      "Enterprise-grade applications built with security and scale in mind. We create platforms that industries trust with their most sensitive operations and data.",
  },
  {
    icon: Zap,
    title: "Real-Time Collaborative Platforms",
    description:
      "Applications that enable instant collaboration and communication across entire industries. Our platforms connect stakeholders in ways that were previously impossible.",
  },
  {
    icon: Layers,
    title: "Custom Industry Solutions",
    description:
      "Purpose-built applications designed for specific industry needs. We understand sector challenges and build applications that solve them completely, changing how entire industries function.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
            Building applications that transform industries.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            We build intelligent applications that fundamentally change how industries operate. 
            From education to finance, our products reshape workflows, redefine processes, and 
            unlock new possibilities for entire sectors.
          </p>
        </div>

        <div className="grid gap-px rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFirst = index === 0
            const isLast = index === services.length - 1
            return (
              <div
                key={service.title}
                className={`group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary/50 ${
                  isFirst ? "rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none" : ""
                } ${isLast ? "rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none" : ""}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-serif">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
