import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { ProblemCost } from "@/components/sections/ProblemCost"
import { SolutionOverview } from "@/components/sections/SolutionOverview"
import { KeyUseCases } from "@/components/sections/KeyUseCases"
import { DashboardPreview } from "@/components/sections/DashboardPreview"
import { Outcomes } from "@/components/sections/Outcomes"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/sections/Footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <ProblemCost />
      <SolutionOverview />
      <KeyUseCases />
      <DashboardPreview />
      <Outcomes />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
