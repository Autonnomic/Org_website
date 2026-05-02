"use client";

import { cn } from "@/lib/utils";

interface AuroraTextProps {
  className?: string;
  children: React.ReactNode;
  colors?: string[];
  speed?: number;
}

export function AuroraText({
  className,
  children,
  colors = ["#22d3ee", "#a78bfa", "#06b6d4", "#c084fc", "#22d3ee"],
  speed = 1,
}: AuroraTextProps) {
  const duration = 4 / speed;
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-size-[200%_auto]",
        className
      )}
      style={{
        backgroundImage: gradient,
        animation: `aurora ${duration}s ease-in-out infinite`,
      }}
    >
      {children}
    </span>
  );
}
