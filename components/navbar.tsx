"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/[0.08] bg-background/55 px-4 py-2 shadow-[0_0_40px_-12px_oklch(0.78_0.14_195_/_0.25)] backdrop-blur-2xl md:px-5 md:py-2.5"
        style={{
          boxShadow:
            "0 0 0 1px oklch(0.78 0.14 195 / 0.06), 0 24px 80px -32px oklch(0.05 0.05 265 / 0.9)",
        }}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt="Autonnomic Logo"
            width={112}
            height={112}
            className="h-11 w-auto object-contain opacity-95 md:h-12"
          />

        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Why LMS
          </Link>
          <Link
            href="#products"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/contact-sales"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Demo
          </Link>
          <Button
            size="sm"
            className="rounded-full px-5 font-medium shadow-[0_0_24px_-4px_oklch(0.78_0.14_195_/_0.5)]"
            asChild
          >
            <Link href="/contact-sales">Book a demo</Link>
          </Button>
        </div>

        <button
          className="-mr-1 rounded-full p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-5xl rounded-3xl border border-white/[0.08] bg-background/90 p-5 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="#about"
              className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Why LMS
            </Link>
            <Link
              href="#products"
              className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/contact-sales"
              className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
