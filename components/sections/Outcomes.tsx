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
        <section id="outcomes" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-3xl font-bold tracking-tight mb-6">
                            Transform Your Academy's DNA
                        </h2>
                        <p className="text-slate-400 text-lg mb-8">
                            Move from a manual, variance-prone local operation to a scalable, data-driven education powerhouse.
                        </p>
                        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 inline-block">
                            <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-2">Avg Time Saved</div>
                            <div className="text-5xl font-bold text-blue-400">15 hrs</div>
                            <div className="text-sm text-slate-400 mt-2">per teacher / week</div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 gap-6">
                        {comparisons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 rounded-xl overflow-hidden border border-slate-700"
                            >
                                <div className="bg-slate-800/50 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-red-400"><X className="w-5 h-5" /></span>
                                        <span className="text-slate-400 font-semibold uppercase text-xs">Without EduScale ({item.role})</span>
                                    </div>
                                    <p className="text-slate-300">{item.before}</p>
                                </div>
                                <div className="bg-blue-900/10 p-6 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-400"><Check className="w-5 h-5" /></span>
                                        <span className="text-blue-200 font-semibold uppercase text-xs">With EduScale ({item.role})</span>
                                    </div>
                                    <p className="text-white font-medium">{item.after}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
