"use client"

import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-[#EDE8DC] to-[#FAF7F0]">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-sm font-bold mb-8 tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-[#5C6B2E] inline-block" />
                            Trusted by 500+ Leading Academies Across Asia
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#1C2010] mb-6 leading-[1.05]"
                    >
                        Stop Losing Students
                        <br />
                        <span className="text-[#5C6B2E] italic">to Inconsistency.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#5a5748] mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        The all-in-one platform for multi-branch academies — standardize teaching, automate admin work, and guarantee outcomes. All from one dashboard.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                    >
                        <DemoModal>
                            <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#5C6B2E] text-[#FAF7F0] hover:bg-[#46521F] shadow-xl shadow-[#5C6B2E]/25 rounded-xl transition-all duration-200 hover:scale-[1.02]">
                                Save 15 hrs/Week — Book Free Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </DemoModal>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-[#C8B898] bg-white/60 text-[#1C2010] hover:bg-[#F0EBE0] rounded-xl transition-all duration-200">
                            Watch 3-min Tour
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-sm text-[#9a9585] font-medium"
                    >
                        No credit card required · Free onboarding consultation included
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-12 w-full border-t border-[#DDD8CC] pt-8"
                    >
                        <p className="text-xs text-[#9a9585] text-center uppercase tracking-widest font-bold mb-6">
                            Proven results across 500+ academies
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                            {[
                                { value: "500+", label: "Partner Academies" },
                                { value: "120k+", label: "Active Students" },
                                { value: "15 hrs", label: "Saved / Teacher / Week" },
                                { value: "4.8★", label: "Parent Satisfaction" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-black text-[#5C6B2E]">{stat.value}</div>
                                    <div className="text-xs text-[#9a9585] mt-0.5 font-semibold uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
                    className="relative mx-auto max-w-5xl rounded-2xl border border-[#DDD8CC] bg-[#FAF7F0]/70 p-2 shadow-2xl shadow-[#1C2010]/10 backdrop-blur-sm lg:p-4 ring-1 ring-[#1C2010]/6"
                >
                    <div className="rounded-xl bg-white border border-[#E8E3D8] overflow-hidden">
                        {/* Mock Header */}
                        <div className="border-b border-[#E8E3D8] px-4 py-3 flex items-center gap-4 bg-[#FAF7F0]">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-[#7A8C47]" />
                            </div>
                            <div className="h-4 w-64 bg-[#DDD8CC] rounded-full opacity-60" />
                        </div>
                        {/* Mock Body */}
                        <div className="grid grid-cols-12 gap-0 min-h-[400px]">
                            {/* Sidebar */}
                            <div className="hidden md:flex col-span-2 border-r border-[#E8E3D8] bg-[#FAF7F0] p-4 flex-col gap-1">
                                <div className="text-[10px] font-black text-[#9a9585] uppercase tracking-wider px-2 mb-2">Menu</div>
                                {["Dashboard", "Classes", "Students", "Reports", "Settings"].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${i === 0 ? "bg-[#5C6B2E] text-white" : "text-[#5a5748]"}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#d0db9e]" : "bg-[#DDD8CC]"}`} />
                                        <span className="text-[11px] font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Main Content */}
                            <div className="col-span-12 md:col-span-10 p-5 bg-white">
                                <div className="flex justify-between items-center mb-5">
                                    <div>
                                        <div className="text-sm font-black text-[#1C2010]">Academy Overview</div>
                                        <div className="text-[11px] text-[#9a9585] font-medium">Week 8 of Spring Semester</div>
                                    </div>
                                    <div className="h-7 px-3 bg-[#5C6B2E] rounded-md text-white text-[11px] font-bold flex items-center">+ New Class</div>
                                </div>
                                {/* KPI Cards */}
                                <div className="grid grid-cols-3 gap-3 mb-5">
                                    {[
                                        { label: "Attendance", value: "98.2%", delta: "+2.1%", color: "text-[#5C6B2E]" },
                                        { label: "Avg Score", value: "84.5", delta: "+5.4%", color: "text-[#5C6B2E]" },
                                        { label: "At-Risk", value: "3", delta: "-2 this wk", color: "text-[#748f2d]" },
                                    ].map((kpi, i) => (
                                        <div key={i} className="rounded-lg border border-[#E8E3D8] bg-[#FAF7F0] p-3">
                                            <div className="text-[10px] text-[#9a9585] font-bold uppercase tracking-wide">{kpi.label}</div>
                                            <div className="text-lg font-black text-[#1C2010] mt-0.5">{kpi.value}</div>
                                            <div className={`text-[10px] font-bold mt-0.5 ${kpi.color}`}>{kpi.delta}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Bar Chart */}
                                <div className="rounded-lg border border-[#E8E3D8] bg-[#FAF7F0] p-3">
                                    <div className="text-[11px] font-bold text-[#5a5748] mb-3">Engagement Score by Class</div>
                                    <div className="flex items-end justify-around gap-2 h-28 pb-1">
                                        {[
                                            { h: 40, label: "A1", score: "65" },
                                            { h: 70, label: "A2", score: "88" },
                                            { h: 50, label: "B1", score: "72" },
                                            { h: 90, label: "B2", score: "92" },
                                            { h: 60, label: "C1", score: "80" },
                                            { h: 80, label: "C2", score: "85" },
                                            { h: 45, label: "D1", score: "68" },
                                        ].map((bar, i) => (
                                            <div key={i} className="flex flex-col items-center gap-1 flex-1">
                                                <span className="text-[9px] text-[#9a9585]">{bar.score}</span>
                                                <div className="w-full bg-[#5C6B2E] rounded-t-sm opacity-80" style={{ height: `${bar.h}%` }} />
                                                <span className="text-[9px] text-[#9a9585]">{bar.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#DDD8CC] to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5C6B2E]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-[#94ab3e]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#FAF7F0] to-transparent pointer-events-none" />
        </section>
    )
}
