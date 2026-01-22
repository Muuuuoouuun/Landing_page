"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

const pains = [
    {
        icon: TrendingDown,
        title: "Inconsistent Teaching Quality",
        desc: "Quality drops when your best teachers leave or new branches open.",
        cost: "20% drop in retention",
    },
    {
        icon: Clock,
        title: "Manual Admin Overload",
        desc: "Teachers spend 10+ hours/week on grading and reporting instead of teaching.",
        cost: "$12k/yr wasted per teacher",
    },
    {
        icon: AlertTriangle,
        title: "Slow onboarding",
        desc: "New hires take months to adapt to your curriculum and methods.",
        cost: "3 months ramp-up time",
    },
]

export function ProblemCost() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        The Hidden Cost of "Traditional" Management
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Without a standardized system, scaling your academy increases chaos, not revenue.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300">
                                <CardContent className="pt-8 p-6 flex flex-col items-center text-center h-full">
                                    <div className="p-3 rounded-full bg-red-50 text-red-500 mb-6">
                                        <pain.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900">{pain.title}</h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">
                                        {pain.desc}
                                    </p>
                                    <div className="w-full pt-4 border-t border-slate-100">
                                        <p className="text-sm font-semibold text-red-600 uppercase tracking-widest">
                                            Est. Cost
                                        </p>
                                        <p className="text-xl font-bold text-slate-900 mt-1">
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
                    className="mt-16 mx-auto max-w-2xl bg-white p-8 rounded-2xl shadow-sm border"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-700">Operational Inefficiency Risk</span>
                        <span className="font-bold text-red-500">High</span>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                        />
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                        85% of multi-branch academies struggle with data fragmentation.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
