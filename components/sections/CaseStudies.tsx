"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const cases = [
    {
        initials: "AA",
        name: "Alpha Academy",
        meta: "5 Branches · 2,000+ Students",
        accentBg: "bg-blue-600",
        accentText: "text-blue-600",
        accentBorder: "border-blue-500",
        accentLight: "bg-blue-50",
        stat: "60%",
        statLabel: "Admin time reduced",
        challenge: "Managing standardized tests across 5 locations was a nightmare.",
        result: "Unified curriculum delivery across all branches in under 2 weeks.",
        quote: "EduScale allowed us to open 2 new branches without adding a single admin staff member.",
    },
    {
        initials: "MG",
        name: "MathGenius",
        meta: "Online Hybrid · 800+ Students",
        accentBg: "bg-emerald-600",
        accentText: "text-emerald-600",
        accentBorder: "border-emerald-500",
        accentLight: "bg-emerald-50",
        stat: "92%",
        statLabel: "Homework completion rate",
        challenge: "Student engagement was dropping in online classes.",
        result: "Completion rate jumped from 65% to 92% — in one semester.",
        quote: "The interactive tools made our online classes feel just as alive as our physical ones.",
    },
    {
        initials: "SH",
        name: "Sky High English",
        meta: "Franchise · 15 Branches",
        accentBg: "bg-violet-600",
        accentText: "text-violet-600",
        accentBorder: "border-violet-500",
        accentLight: "bg-violet-50",
        stat: "4.8★",
        statLabel: "Parent satisfaction score",
        challenge: "Inconsistent teaching quality was driving parent complaints.",
        result: "Parent satisfaction hit 4.8/5 across all 15 branches within one semester.",
        quote: "The transparency gave parents confidence, and the data gave us control.",
    },
]

export function CaseStudies() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-600 text-sm font-semibold mb-4">
                        Success Stories
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Real Academies. Real Results.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From single-site schools to 15-branch franchises — EduScale scales with you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                        >
                            {/* Card Header */}
                            <div className={`${c.accentLight} px-6 pt-6 pb-4 border-b border-slate-100`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-11 h-11 ${c.accentBg} rounded-xl flex items-center justify-center font-bold text-white text-sm tracking-wide shrink-0`}>
                                        {c.initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 leading-tight">{c.name}</div>
                                        <div className="text-xs text-muted-foreground mt-0.5">{c.meta}</div>
                                    </div>
                                </div>
                                {/* Big Stat */}
                                <div className="flex items-end gap-2">
                                    <span className={`text-4xl font-black ${c.accentText}`}>{c.stat}</span>
                                    <span className="text-sm text-slate-500 mb-1 font-medium">{c.statLabel}</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 py-5 flex flex-col gap-4 flex-grow">
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Challenge</p>
                                    <p className="text-sm text-slate-600">{c.challenge}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Outcome</p>
                                    <p className="text-sm font-semibold text-slate-800">{c.result}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className={`mx-6 mb-6 p-4 rounded-xl ${c.accentLight} border-l-4 ${c.accentBorder}`}>
                                <Quote className={`w-4 h-4 ${c.accentText} mb-2 opacity-60`} />
                                <p className="text-sm italic text-slate-600 leading-relaxed">"{c.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
