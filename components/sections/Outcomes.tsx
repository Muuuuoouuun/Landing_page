"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisons = [
    {
        role: "Admins",
        before: "Blind spots on teacher quality and student retention risks.",
        after: "Full visibility with automated weekly reports and alerts.",
    },
    {
        role: "Teachers",
        before: "Buried in grading, content prep, and parent emails.",
        after: "Focus 100% on teaching; AI handles grading and admin.",
    },
    {
        role: "Students",
        before: "Passive learning with delayed feedback on homework.",
        after: "Interactive classes with instant feedback loops.",
    },
    {
        role: "Parents",
        before: "Unsure about child's progress until the report card arrives.",
        after: "Real-time updates and clear visibility into improvements.",
    },
]

export function Outcomes() {
    return (
        <section id="outcomes" className="py-24 bg-[#1C2010] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#303912] border border-[#5C6B2E]/40 text-[#94ab3e] text-xs font-black uppercase tracking-wider mb-4">
                            Proven Results
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-4 leading-tight">
                            The Before &amp; After{" "}
                            <span className="text-[#94ab3e] italic">Every Academy Deserves</span>
                        </h2>
                        <p className="text-white/60 text-base mb-8 font-medium leading-relaxed">
                            From variance-prone manual ops to a scalable, data-driven education powerhouse.
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { value: "60%", label: "Reduction in admin workload" },
                                { value: "+38%", label: "Average revenue growth" },
                                { value: "48 hrs", label: "To deploy a new branch" },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-[#303912]/60 rounded-xl border border-[#5C6B2E]/30">
                                    <div className="font-display text-2xl font-black text-[#d0db9e] shrink-0 w-16 text-right">{stat.value}</div>
                                    <div className="w-px h-8 bg-[#5C6B2E]/40 shrink-0" />
                                    <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 gap-4">
                        {comparisons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 rounded-xl overflow-hidden border border-[#303912]"
                            >
                                <div className="bg-[#252D13]/60 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#303912]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-red-400/80"><X className="w-4 h-4" /></span>
                                        <span className="text-white/40 font-black uppercase text-xs tracking-wider">Without EduScale ({item.role})</span>
                                    </div>
                                    <p className="text-white/60 font-medium">{item.before}</p>
                                </div>
                                <div className="bg-[#303912]/40 p-6 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5C6B2E]" />
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[#94ab3e]"><Check className="w-4 h-4" /></span>
                                        <span className="text-[#94ab3e]/80 font-black uppercase text-xs tracking-wider">With EduScale ({item.role})</span>
                                    </div>
                                    <p className="text-white font-bold">{item.after}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
