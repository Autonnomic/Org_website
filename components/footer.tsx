import Link from "next/link"
import Image from "next/image"
import { Github, Instagram } from "lucide-react"

const footerLinks = ["Products", "Privacy Policy", "Terms and Conditions"]

const socialLinks = [
  { icon: Github, href: "https://github.com/Autonnomic", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/autonnomic/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-card/35 backdrop-blur-sm">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Autonnomic Logo"
              width={40}
              height={40}
              className="size-10 object-contain opacity-95"
            />
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Autonnomic
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => {
              const href = link === "Products" ? "#products" : "#"
              return (
                <Link
                  key={link}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link}
                </Link>
              )
            })}
          </nav>

          <div className="h-px w-full max-w-sm bg-linear-to-r from-transparent via-border to-transparent md:max-w-md" />

          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-10">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Autonnomic. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={social.label}
                  >
                    <Icon className="size-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
