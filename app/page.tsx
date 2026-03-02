import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { ProductsSection } from "@/components/products-section"
import { ComingSoonSection } from "@/components/coming-soon-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <ProductsSection />
      <ComingSoonSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
