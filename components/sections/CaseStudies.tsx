"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const cases = [
    {
        initials: "AA",
        name: "Alpha Academy",
        meta: "5 Branches · 2,000+ Students",
        accentBg: "bg-[#5C6B2E]",
        accentText: "text-[#5C6B2E]",
        accentBorder: "border-[#5C6B2E]",
        accentLight: "bg-[#F0F4E0]",
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
        accentBg: "bg-[#46521F]",
        accentText: "text-[#46521F]",
        accentBorder: "border-[#46521F]",
        accentLight: "bg-[#E8EDD4]",
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
        accentBg: "bg-[#748f2d]",
        accentText: "text-[#748f2d]",
        accentBorder: "border-[#748f2d]",
        accentLight: "bg-[#F5F7EC]",
        stat: "4.8★",
        statLabel: "Parent satisfaction score",
        challenge: "Inconsistent teaching quality was driving parent complaints.",
        result: "Parent satisfaction hit 4.8/5 across all 15 branches within one semester.",
        quote: "The transparency gave parents confidence, and the data gave us control.",
    },
]

export function CaseStudies() {
    return (
        <section className="py-24 bg-[#F5F0E8]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-black uppercase tracking-wider mb-4">
                        Success Stories
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        Real Academies.{" "}
                        <span className="text-[#5C6B2E] italic">Real Results.</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
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
                            className="bg-white rounded-2xl border border-[#DDD8CC] shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300"
                        >
                            {/* Card Header */}
                            <div className={`${c.accentLight} px-6 pt-6 pb-4 border-b border-[#E8E3D8]`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-11 h-11 ${c.accentBg} rounded-xl flex items-center justify-center font-black text-white text-sm tracking-wide shrink-0`}>
                                        {c.initials}
                                    </div>
                                    <div>
                                        <div className="font-black text-[#1C2010] leading-tight">{c.name}</div>
                                        <div className="text-xs text-[#9a9585] mt-0.5 font-semibold">{c.meta}</div>
                                    </div>
                                </div>
                                {/* Big Stat */}
                                <div className="flex items-end gap-2">
                                    <span className={`font-display text-4xl font-black ${c.accentText}`}>{c.stat}</span>
                                    <span className="text-sm text-[#9a9585] mb-1 font-semibold">{c.statLabel}</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="px-6 py-5 flex flex-col gap-4 flex-grow">
                                <div>
                                    <p className="text-xs font-black text-[#9a9585] uppercase tracking-widest mb-1">Challenge</p>
                                    <p className="text-sm text-[#5a5748] font-medium">{c.challenge}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-black text-[#9a9585] uppercase tracking-widest mb-1">Outcome</p>
                                    <p className="text-sm font-black text-[#1C2010]">{c.result}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className={`mx-6 mb-6 p-4 rounded-xl ${c.accentLight} border-l-4 ${c.accentBorder}`}>
                                <Quote className={`w-4 h-4 ${c.accentText} mb-2 opacity-60`} />
                                <p className="text-sm italic text-[#5a5748] leading-relaxed font-medium">"{c.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
