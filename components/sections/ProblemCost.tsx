"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

const pains = [
    {
        icon: TrendingDown,
        title: "Inconsistent Teaching Quality",
        desc: "Quality drops when your best teachers leave or new branches open. Students notice — and they leave.",
        cost: "20% drop in retention",
    },
    {
        icon: Clock,
        title: "Manual Admin Overload",
        desc: "Teachers spend 10+ hours/week on grading and reporting instead of teaching. That's burnout in slow motion.",
        cost: "$12k/yr wasted per teacher",
    },
    {
        icon: AlertTriangle,
        title: "Painfully Slow Onboarding",
        desc: "New hires take months to adapt to your curriculum. Every branch expansion multiplies the chaos.",
        cost: "3 months ramp-up time",
    },
]

export function ProblemCost() {
    return (
        <section className="py-24 bg-[#F5F0E8]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-bold uppercase tracking-wider mb-4">
                        The Real Cost
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        "Traditional" Management
                        <br />
                        <span className="text-[#5C6B2E] italic">Is Quietly Killing Your Growth</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
                        Without a standardized system, scaling your academy increases chaos — not revenue.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.12, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border border-[#DDD8CC] bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="pt-8 p-6 flex flex-col h-full">
                                    <div className="p-3 rounded-xl bg-[#F5F0E8] border border-[#DDD8CC] text-[#5C6B2E] mb-6 w-fit">
                                        <pain.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-black mb-3 text-[#1C2010]">{pain.title}</h3>
                                    <p className="text-[#5a5748] mb-6 flex-grow leading-relaxed font-medium">
                                        {pain.desc}
                                    </p>
                                    <div className="w-full pt-4 border-t border-[#E8E3D8]">
                                        <p className="text-xs font-black text-[#9a9585] uppercase tracking-widest mb-1">
                                            Estimated Cost
                                        </p>
                                        <p className="text-2xl font-black text-[#1C2010]">
                                            {pain.cost}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 mx-auto max-w-2xl bg-white p-8 rounded-2xl border border-[#DDD8CC] shadow-sm"
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-black text-[#1C2010] text-sm uppercase tracking-wide">Operational Inefficiency Risk</span>
                        <span className="font-black text-[#5C6B2E] text-sm uppercase tracking-wide">High</span>
                    </div>
                    <div className="h-3 bg-[#E8E3D8] rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#94ab3e] to-[#46521F] rounded-full"
                        />
                    </div>
                    <p className="text-sm text-[#9a9585] mt-4 text-center font-medium">
                        85% of multi-branch academies struggle with data fragmentation. Are you one of them?
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
