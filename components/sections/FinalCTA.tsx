"use client"

import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { ArrowRight, FileText } from "lucide-react"

export function FinalCTA() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden text-neutral-500">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Ready to Standardize Your Success?
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                    Get a tailored rollout plan in 15 minutes. See why top academies trust EduScale.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <DemoModal>
                        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto">
                            Get Your Rollout Plan
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </DemoModal>

                    <Button variant="outline" className="h-14 px-8 text-lg bg-transparent text-white border-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                        <FileText className="mr-2 w-5 h-5" />
                        Download One-Page Overview
                    </Button>
                </div>

                <p className="mt-8 text-sm text-blue-200 opacity-80">
                    No credit card required. Free roadmap consultation included.
                </p>
            </div>
        </section>
    )
}
