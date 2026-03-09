"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BridgeMoment() {
    return (
        <section className="py-16 bg-[#FAF7F0]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden"
                >
                    {/* Background gradient — dark olive */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1C2010] to-[#303912]" />
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    {/* Olive glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#5C6B2E]/30 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-10 md:p-14">
                        {/* Left: Question */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-[#94ab3e] text-xs font-black uppercase tracking-widest mb-3">
                                Imagine This
                            </p>
                            <h2 className="font-display text-2xl md:text-3xl font-black text-white leading-snug">
                                What if managing{" "}
                                <span className="text-[#d0db9e]">10 branches</span>{" "}
                                felt exactly like managing{" "}
                                <span className="text-[#d0db9e]">just one?</span>
                            </h2>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:flex items-center shrink-0">
                            <ArrowRight className="w-8 h-8 text-[#5C6B2E]" />
                        </div>

                        {/* Right: Answer */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-white/80 text-lg leading-relaxed font-medium">
                                That's what EduScale customers experience — one platform, one source of truth, every branch running at peak.
                            </p>
                            <div className="mt-6 inline-flex items-center gap-6">
                                <div className="text-center">
                                    <div className="font-display text-3xl font-black text-[#d0db9e]">+38%</div>
                                    <div className="text-white/50 text-xs mt-1 font-semibold uppercase tracking-wide">Revenue Growth</div>
                                </div>
                                <div className="w-px h-10 bg-white/15" />
                                <div className="text-center">
                                    <div className="font-display text-3xl font-black text-[#d0db9e]">15 hrs</div>
                                    <div className="text-white/50 text-xs mt-1 font-semibold uppercase tracking-wide">Saved / Teacher / Week</div>
                                </div>
                                <div className="w-px h-10 bg-white/15" />
                                <div className="text-center">
                                    <div className="font-display text-3xl font-black text-[#d0db9e]">4.8★</div>
                                    <div className="text-white/50 text-xs mt-1 font-semibold uppercase tracking-wide">Parent Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
