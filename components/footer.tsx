import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react"

const footerLinks = ["Products", "Studio", "Clients", "Pricing", "Blog", "Privacy", "Terms"]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/autonnomic/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Logo and Company Name - Centered */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.png"
              alt="Autonnomic Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-foreground font-serif tracking-tight">
              Autonnomic
            </span>
          </Link>
        </div>

        {/* Navigation Links - Horizontal Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm text-foreground transition-colors hover:text-primary"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Dashed Separator */}
        <div className="border-t border-dashed border-border/50 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-foreground">
            &copy; {new Date().getFullYear()} Autonnomic. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
