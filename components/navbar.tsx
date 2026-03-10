"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Autonnomic Logo"
            width={112}
            height={112}
            className="h-16 w-24 object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Why LMS
          </Link>
          <Link href="#products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            LMS Features
          </Link>
          <Link href="/contact-sales" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Book a Demo
          </Link>
        </div>


        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Why LMS
            </Link>
            <Link href="#team" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Team
            </Link>
            <Link href="#products" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              LMS Features
            </Link>
            <Link href="/contact-sales" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
