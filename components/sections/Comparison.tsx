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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-sm font-semibold mb-4">
                        Why Switch?
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        EduScale vs. Traditional Setup
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        See exactly what changes when you move from manual to modern.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-semibold">
                        <div className="py-4 px-6 text-slate-400 text-xs uppercase tracking-wider">Area</div>
                        <div className="py-4 px-6 border-l border-slate-700 flex items-center gap-2">
                            <X className="w-4 h-4 text-red-400" />
                            Traditional
                        </div>
                        <div className="py-4 px-6 border-l border-slate-700 flex items-center gap-2 text-blue-300">
                            <Check className="w-4 h-4 text-green-400" />
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
                            className={`grid grid-cols-3 text-sm border-t border-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                        >
                            <div className="py-4 px-6 font-semibold text-slate-700 flex items-center">
                                {row.feature}
                            </div>
                            <div className="py-4 px-6 border-l border-slate-100 text-slate-500 flex items-start gap-2">
                                <X className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                                {row.traditional}
                            </div>
                            <div className="py-4 px-6 border-l border-slate-100 text-slate-800 font-medium flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                                {row.eduscale}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Soft CTA */}
                <div className="text-center mt-10">
                    <p className="text-slate-500 mb-4 text-sm">Ready to make the switch?</p>
                    <DemoModal>
                        <Button size="lg" className="px-8">
                            Book a Free Demo
                        </Button>
                    </DemoModal>
                </div>
            </div>
        </section>
    )
}
