"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BridgeMoment() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-10 md:p-14">
                        {/* Left: Question */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">
                                Imagine This
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                                What if managing{" "}
                                <span className="text-yellow-300">10 branches</span>{" "}
                                felt exactly like managing{" "}
                                <span className="text-yellow-300">just one?</span>
                            </h2>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:flex items-center shrink-0">
                            <ArrowRight className="w-8 h-8 text-white/40" />
                        </div>

                        {/* Right: Answer */}
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-white/80 text-lg leading-relaxed">
                                That's what EduScale customers experience — one platform, one source of truth, every branch running at peak.
                            </p>
                            <div className="mt-6 inline-flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">+38%</div>
                                    <div className="text-white/50 text-xs mt-1">Revenue Growth</div>
                                </div>
                                <div className="w-px h-10 bg-white/20" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">15 hrs</div>
                                    <div className="text-white/50 text-xs mt-1">Saved / Teacher / Week</div>
                                </div>
                                <div className="w-px h-10 bg-white/20" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">4.8★</div>
                                    <div className="text-white/50 text-xs mt-1">Parent Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
