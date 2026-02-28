import { Brain, Sparkles, Target, TrendingUp, Lightbulb, Zap } from "lucide-react"

const transformations = [
  {
    icon: Brain,
    title: "Personalized Learning Paths",
    description:
      "AI analyzes each student's learning patterns, strengths, and challenges to create customized educational journeys. No two students learn the same way—AI ensures every learner gets the support they need, when they need it.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Content Adaptation",
    description:
      "Educational content adapts in real-time based on student performance and engagement. AI identifies knowledge gaps and automatically adjusts difficulty, pacing, and teaching methods to maximize comprehension.",
  },
  {
    icon: Target,
    title: "Predictive Student Support",
    description:
      "AI predicts which students might struggle before they fall behind, enabling proactive intervention. Professors receive early warnings and actionable insights to help students succeed before challenges become obstacles.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Teaching Insights",
    description:
      "Professors gain unprecedented visibility into how their teaching impacts learning outcomes. AI surfaces patterns across classes, highlighting what works and suggesting improvements to enhance educational effectiveness.",
  },
  {
    icon: Lightbulb,
    title: "Automated Administrative Intelligence",
    description:
      "Routine administrative tasks that once consumed hours now happen automatically. AI handles scheduling, resource allocation, and organizational workflows, freeing educators to focus on what matters most—teaching.",
  },
  {
    icon: Zap,
    title: "Real-Time Collaborative Learning",
    description:
      "AI facilitates instant connections between students, professors, and learning resources. The platform becomes an intelligent ecosystem where knowledge flows seamlessly, breaking down traditional barriers to education.",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Products
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
            Autonnomic LMS
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            <strong className="text-foreground">Transforming education through AI</strong> — 
            We're building a learning management system that doesn't just digitize education, 
            but fundamentally reimagines how learning happens. AI becomes the intelligent layer 
            that makes education more personal, more effective, and more accessible than ever before.
          </p>
        </div>

        {/* How AI Transforms Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold tracking-tight text-foreground font-serif mb-4">
            How AI is Revolutionizing Education
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-3xl">
            Traditional education follows a one-size-fits-all model where students adapt to the system. 
            We're flipping that paradigm. Our AI-powered platform adapts to each student, creating 
            personalized learning experiences that unlock potential and accelerate growth. This isn't 
            just automation—it's intelligent transformation of the entire educational experience.
          </p>
          
          <div className="grid gap-px rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {transformations.map((transformation, index) => {
              const Icon = transformation.icon
              const isFirst = index === 0
              const isLast = index === transformations.length - 1
              return (
                <div
                  key={index}
                  className={`group flex flex-col gap-4 bg-card p-6 md:p-8 transition-colors hover:bg-secondary/50 ${
                    isFirst ? "rounded-t-xl md:rounded-tl-xl md:rounded-tr-none lg:rounded-tl-xl lg:rounded-tr-none" : ""
                  } ${isLast ? "rounded-b-xl md:rounded-br-xl md:rounded-bl-none lg:rounded-br-xl lg:rounded-bl-none" : ""}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground font-serif">{transformation.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{transformation.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* The Future of Education */}
        <div className="rounded-xl border border-border bg-card p-8 md:p-12">
          <h3 className="text-2xl font-bold tracking-tight text-foreground font-serif mb-4">
            The Future of Education
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Education is on the cusp of its greatest transformation. AI enables us to move beyond 
            standardized curricula and rigid schedules. Instead, we're creating adaptive learning 
            ecosystems where:
          </p>
          <ul className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Every student gets a personalized path</strong> — AI understands individual learning styles, paces, and preferences, crafting unique educational journeys that maximize potential.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Professors become mentors, not administrators</strong> — AI handles routine tasks and provides deep insights, allowing educators to focus on inspiring, guiding, and connecting with students.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Learning becomes proactive, not reactive</strong> — AI identifies challenges before they become problems, ensuring students get support exactly when they need it, not after they've fallen behind.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Education scales without losing quality</strong> — AI makes personalized attention possible at scale, ensuring every student receives the individualized support that was once only possible in small classrooms.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
