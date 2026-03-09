"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"

const rows = [
    {
        feature: "Teacher time on admin tasks",
        traditional: "10+ hrs/week per teacher",
        eduscale: "Under 2 hrs — AI handles it",
    },
    {
        feature: "Performance visibility",
        traditional: "End-of-term report cards only",
        eduscale: "Real-time dashboards for every stakeholder",
    },
    {
        feature: "Scaling to new branches",
        traditional: "Months of manual setup per location",
        eduscale: "Deploy a new branch in under 48 hrs",
    },
    {
        feature: "Parent communication",
        traditional: "Manual emails, often inconsistent",
        eduscale: "Automated weekly reports, zero effort",
    },
    {
        feature: "New teacher onboarding",
        traditional: "3+ months ramp-up",
        eduscale: "Standardized playbook — up in days",
    },
    {
        feature: "Teaching quality consistency",
        traditional: "Depends on individual teacher",
        eduscale: "Centralized curriculum enforced across all branches",
    },
]

export function Comparison() {
    return (
        <section className="py-24 bg-[#FAF7F0]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-black uppercase tracking-wider mb-4">
                        Why Switch?
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        EduScale vs.{" "}
                        <span className="text-[#5C6B2E] italic">Traditional Setup</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
                        See exactly what changes when you move from manual to modern.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-[#DDD8CC] shadow-lg bg-white"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-[#1C2010] text-white text-sm font-black">
                        <div className="py-4 px-6 text-white/40 text-xs uppercase tracking-wider">Area</div>
                        <div className="py-4 px-6 border-l border-[#303912] flex items-center gap-2 text-white/70">
                            <X className="w-4 h-4 text-red-400/80" />
                            Traditional
                        </div>
                        <div className="py-4 px-6 border-l border-[#303912] flex items-center gap-2 text-[#d0db9e]">
                            <Check className="w-4 h-4 text-[#94ab3e]" />
                            With EduScale
                        </div>
                    </div>

                    {/* Table Rows */}
                    {rows.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.07, duration: 0.4 }}
                            viewport={{ once: true }}
                            className={`grid grid-cols-3 text-sm border-t border-[#E8E3D8] ${index % 2 === 0 ? "bg-white" : "bg-[#FAF7F0]"}`}
                        >
                            <div className="py-4 px-6 font-black text-[#1C2010] flex items-center text-xs uppercase tracking-wide">
                                {row.feature}
                            </div>
                            <div className="py-4 px-6 border-l border-[#E8E3D8] text-[#9a9585] flex items-start gap-2 font-medium">
                                <X className="w-3.5 h-3.5 text-red-400/70 mt-0.5 shrink-0" />
                                {row.traditional}
                            </div>
                            <div className="py-4 px-6 border-l border-[#E8E3D8] text-[#1C2010] font-bold flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-[#5C6B2E] mt-0.5 shrink-0" />
                                {row.eduscale}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Soft CTA */}
                <div className="text-center mt-10">
                    <p className="text-[#9a9585] mb-4 text-sm font-semibold">Seen enough? Let's talk about your academy.</p>
                    <DemoModal>
                        <Button size="lg" className="px-8 bg-[#5C6B2E] text-[#FAF7F0] hover:bg-[#46521F] font-bold rounded-xl shadow-lg shadow-[#5C6B2E]/20">
                            Book a Free Demo
                        </Button>
                    </DemoModal>
                </div>
            </div>
        </section>
    )
}
