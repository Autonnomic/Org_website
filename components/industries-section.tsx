"use client"

import { useState } from "react"
import {
  GraduationCap,
  Landmark,
} from "lucide-react"

const industries = [
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Adaptive learning platforms, automated assessment tools, and student engagement systems that personalize education at scale. Our AI tutors understand individual learning styles and pace, delivering tailored content that maximizes comprehension and retention.",
    stat: "80% more engagement",
  },
  
]

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = industries[activeIndex]

  return (
    <section id="industries" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Industries
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground font-serif md:text-5xl text-balance">
            Transforming work across sectors.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Our AI applications are redefining operational excellence in education
            and finance, with more industries on the horizon.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Industry Tabs */}
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:col-span-2 lg:gap-1">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <button
                  key={industry.name}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all ${
                    activeIndex === index
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground border border-transparent"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{industry.name}</span>
                </button>
              )
            })}
          </div>

          {/* Active Industry Detail */}
          <div className="rounded-xl border border-border bg-card p-8 md:p-12 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <active.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-serif">{active.name}</h3>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              {active.description}
            </p>

            <div className="rounded-lg bg-secondary/50 border border-border px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Impact
              </span>
              <p className="mt-1 text-2xl font-bold text-primary font-serif">
                {active.stat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
