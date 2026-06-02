import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PainSection } from "@/components/pain-section";
import { FeaturesSection } from "@/components/features-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="roadmap">
          <RoadmapSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
