"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, useCallback, Children } from "react";

interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedList({ className, children, delay = 400 }: AnimatedListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const observerCallback = useCallback<IntersectionObserverCallback>(([entry]) => {
    if (entry.isIntersecting) setIsInView(true);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [observerCallback]);

  const items = Children.toArray(children);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex flex-col gap-4 overflow-hidden", className)}
    >
      {items.map((child, idx) => (
        <div
          key={idx}
          className="animate-[animated-list-in_0.5s_ease-out_both]"
          style={{
            animationPlayState: isInView ? "running" : "paused",
            animationDelay: isInView ? `${idx * delay}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
