"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SimpleRotatingTextProps {
  words: string[];
  className?: string;
  intervalMs?: number;
}

export function RotatingText({
  words,
  className,
  intervalMs = 2200,
}: SimpleRotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  if (!words || words.length === 0) return null;

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span key={index} className="rt-rotate-word inline-block">
        {words[index]}
      </span>
    </span>
  );
}

