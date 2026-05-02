import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ComingSoonSection } from "@/components/coming-soon-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,oklch(0.2_0.08_265_/_0.5),transparent_50%)]"
        aria-hidden
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ComingSoonSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
