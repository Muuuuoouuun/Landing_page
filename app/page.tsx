import { Hero } from "@/components/sections/Hero"
import { ProblemCost } from "@/components/sections/ProblemCost"
import { BridgeMoment } from "@/components/sections/BridgeMoment"
import { Outcomes } from "@/components/sections/Outcomes"
import { SolutionOverview } from "@/components/sections/SolutionOverview"
import { KeyUseCases } from "@/components/sections/KeyUseCases"
import { DashboardPreview } from "@/components/sections/DashboardPreview"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Comparison } from "@/components/sections/Comparison"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemCost />
      <BridgeMoment />
      <Outcomes />
      <SolutionOverview />
      <KeyUseCases />
      <DashboardPreview />
      <CaseStudies />
      <Comparison />
      <FAQ />
      <FinalCTA />
    </>
  )
}
