"use client"

import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { ArrowRight, FileText } from "lucide-react"

export function FinalCTA() {
    return (
        <section className="py-28 bg-[#1C2010] relative overflow-hidden">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            {/* Olive glow orbs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#5C6B2E]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#94ab3e]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#5C6B2E]/30 border border-[#5C6B2E]/50 text-[#d0db9e] text-xs font-black uppercase tracking-wider mb-8">
                    Your Academy's Next Chapter Starts Here
                </span>

                <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
                    Stop Running Your Academy
                    <br />
                    <span className="text-[#94ab3e] italic">on Spreadsheets and Hope.</span>
                </h2>

                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 font-medium leading-relaxed">
                    500+ academy directors already made the switch. Get your personalized rollout plan in 15 minutes — and see exactly what EduScale can do for your branches.
                </p>

                <p className="text-sm text-[#94ab3e] font-bold mb-10 uppercase tracking-wide">
                    Average ROI: +38% revenue growth in 6 months
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <DemoModal>
                        <Button size="lg" className="h-14 px-8 text-base font-black w-full sm:w-auto bg-[#FAF7F0] text-[#1C2010] hover:bg-[#EDE8DC] shadow-2xl shadow-black/30 rounded-xl transition-all duration-200 hover:scale-[1.02]">
                            Get My Free Academy Audit
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </DemoModal>

                    <Button variant="ghost" className="h-14 px-8 text-base text-white/60 hover:bg-white/8 hover:text-white w-full sm:w-auto rounded-xl font-semibold border border-white/10 hover:border-white/20">
                        <FileText className="mr-2 w-5 h-5" />
                        Download Overview
                    </Button>
                </div>

                <p className="mt-8 text-sm text-white/30 font-medium">
                    No credit card required · Free onboarding consultation · Cancel anytime
                </p>
            </div>
        </section>
    )
}
