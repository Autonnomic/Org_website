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
  colors = ["#06908F", "#0892A5", "#0CA4A5", "#38bdf8", "#06908F"],
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
