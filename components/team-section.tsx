"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users2, Github } from "lucide-react";
import { cn } from "@/lib/utils";

// Add photos to public/images/team/. Add github: "https://github.com/username" for each member.
const team = [
  { name: "Sreekar Reddy", role: "CEO, Founder & Lead Engineer", initials: "SR", image: "/images/team/sreekar.jpg", github: "https://github.com/Veera-Sreekar-Reddy" },
  { name: "Sandeep Reddy", role: "COO", initials: "SR", image: "/images/team/sandeep.jpg", github: "https://github.com" },
  { name: "Ravi Kiran", role: "CFO & CMO", initials: "MS", image: "/images/team/Kiran.jpg", github: "https://github.com" },
];

function TeamCard({
  member,
  isVisible,
  delay,
}: {
  member: (typeof team)[0];
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div
      className={cn(
        "group flex shrink-0 flex-row items-center gap-4 rounded-2xl border border-border bg-card/90 p-5 pr-6",
        "transition-all duration-500 ease-out",
        "hover:border-primary/30 hover:bg-primary/5"
      )}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <Avatar className="h-16 w-16 shrink-0 rounded-full border-2 border-border bg-muted">
        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
        <AvatarFallback className="rounded-full bg-primary/15 text-sm font-semibold text-primary">
          {member.initials}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1 text-left">
        <h3 className="truncate text-lg font-bold tracking-tight text-foreground">
          {member.name}
        </h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>
      </div>
      {member.github ? (
        <Link
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          aria-label={`${member.name} on GitHub`}
        >
          <Github className="h-5 w-5" />
        </Link>
      ) : null}
    </div>
  );
}

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header: icon + "Meet Our Team" */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card">
            <Users2 className="h-6 w-6 text-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Meet Our Team
          </h2>
        </div>

        {/* Centered row of team cards */}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="w-full min-w-[280px] max-w-[340px] sm:w-[340px]"
              >
                <TeamCard
                  member={member}
                  isVisible={isInView}
                  delay={i * 120}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
