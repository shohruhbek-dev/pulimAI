import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { TeamSection } from "@/components/team-section"
import { WhyUsSection } from "@/components/why-us-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { HowWesolveSection } from "@/components/how-we-solve-section"
import { ModulesSection } from "@/components/modules-section"
import { AICapabilitiesSection } from "@/components/ai-capabilities-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function PulimAILanding() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <TeamSection />
      <WhyUsSection />
      <RoadmapSection />
      <HowWesolveSection />
      <ModulesSection />
      <AICapabilitiesSection />
      <IntegrationsSection />
      <PricingSection />
      <Footer />
    </main>
  )
}
