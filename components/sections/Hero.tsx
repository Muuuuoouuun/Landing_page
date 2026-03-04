"use client"

import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Users, CheckCircle } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            Trusted by 500+ Leading Academies
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6"
                    >
                        Standardize Teaching Quality. <br />
                        <span className="text-primary">Guarantee Learning Outcomes.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        The all-in-one EdTech platform for multi-branch academies. Run interactive classes, automate grading, and visualize performance data in real-time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                    >
                        <DemoModal>
                            <Button size="lg" className="h-12 px-8 text-lg shadow-xl shadow-blue-500/20">
                                Book a Demo
                            </Button>
                        </DemoModal>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg bg-white/50 backdrop-blur-sm">
                            Watch 3-min Tour
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-12 w-full border-t border-slate-100 pt-8"
                    >
                        <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-medium mb-6">
                            Trusted by 500+ academies across Asia
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                            {[
                                { value: "500+", label: "Academies" },
                                { value: "120k+", label: "Students" },
                                { value: "15 hrs", label: "Saved / Teacher / Week" },
                                { value: "4.8★", label: "Avg Parent Rating" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
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
                    className="relative mx-auto max-w-5xl rounded-xl border bg-white/40 p-2 shadow-2xl backdrop-blur-sm lg:rounded-2xl lg:p-4 ring-1 ring-slate-900/10"
                >
                    <div className="rounded-lg bg-white border overflow-hidden">
                        {/* Mock Header */}
                        <div className="border-b px-4 py-3 flex items-center gap-4 bg-slate-50/50">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="h-4 w-64 bg-slate-200 rounded-full opacity-50" />
                        </div>
                        {/* Mock Body */}
                        <div className="grid grid-cols-12 gap-0 min-h-[400px]">
                            {/* Sidebar */}
                            <div className="hidden md:flex col-span-2 border-r bg-slate-50/80 p-4 flex-col gap-1">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">Menu</div>
                                {["Dashboard", "Classes", "Students", "Reports", "Settings"].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${i === 0 ? "bg-blue-600 text-white" : "text-slate-500"}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-blue-200" : "bg-slate-300"}`} />
                                        <span className="text-[11px] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Main Content */}
                            <div className="col-span-12 md:col-span-10 p-5 bg-white">
                                <div className="flex justify-between items-center mb-5">
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Academy Overview</div>
                                        <div className="text-[11px] text-slate-400">Week 8 of Spring Semester</div>
                                    </div>
                                    <div className="h-7 px-3 bg-blue-600 rounded-md text-white text-[11px] font-semibold flex items-center">+ New Class</div>
                                </div>
                                {/* KPI Cards */}
                                <div className="grid grid-cols-3 gap-3 mb-5">
                                    {[
                                        { label: "Attendance", value: "98.2%", delta: "+2.1%", color: "text-green-600" },
                                        { label: "Avg Score", value: "84.5", delta: "+5.4%", color: "text-green-600" },
                                        { label: "At-Risk", value: "3", delta: "-2 this wk", color: "text-blue-600" },
                                    ].map((kpi, i) => (
                                        <div key={i} className="rounded-lg border bg-slate-50/80 p-3">
                                            <div className="text-[10px] text-slate-400 font-medium uppercase">{kpi.label}</div>
                                            <div className="text-lg font-bold text-slate-900 mt-0.5">{kpi.value}</div>
                                            <div className={`text-[10px] font-semibold mt-0.5 ${kpi.color}`}>{kpi.delta}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Bar Chart */}
                                <div className="rounded-lg border bg-slate-50/80 p-3">
                                    <div className="text-[11px] font-semibold text-slate-600 mb-3">Engagement Score by Class</div>
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
                                                <span className="text-[9px] text-slate-500">{bar.score}</span>
                                                <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${bar.h}%` }} />
                                                <span className="text-[9px] text-slate-400">{bar.label}</span>
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
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
        </section>
    )
}
