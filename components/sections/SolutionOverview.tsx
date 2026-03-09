"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Video, CheckSquare, BarChart, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
    {
        id: 1,
        title: "Plan",
        icon: BookOpen,
        desc: "Centralize your curriculum. Create standardized lesson plans that every teacher can access.",
        mockup: <PlanMockup />,
    },
    {
        id: 2,
        title: "Teach",
        icon: Video,
        desc: "Deliver interactive live or hybrid classes with built-in whiteboard and engagement tools.",
        mockup: <TeachMockup />,
    },
    {
        id: 3,
        title: "Assess",
        icon: CheckSquare,
        desc: "Auto-assign homework and quizzes. Let AI handle the grading instantly.",
        mockup: <AssessMockup />,
    },
    {
        id: 4,
        title: "Analyze",
        icon: BarChart,
        desc: "View real-time performance dashboards for every student, class, and branch.",
        mockup: <AnalyzeMockup />,
    },
    {
        id: 5,
        title: "Coach",
        icon: MessageCircle,
        desc: "Data-driven feedback for students and parents. Communicate results automatically.",
        mockup: <CoachMockup />,
    },
]

export function SolutionOverview() {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <section id="solution" className="py-24 bg-[#FAF7F0]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-black uppercase tracking-wider mb-4">
                        How It Works
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        One Platform for the{" "}
                        <span className="text-[#5C6B2E] italic">Entire Teaching Lifecycle</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
                        From lesson planning to parent reporting — every step connected, every stakeholder aligned.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                    {/* Steps Pipeline */}
                    <div className="flex flex-col md:flex-row lg:flex-col gap-4 relative w-full lg:w-1/3">
                        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-[#E8E3D8] hidden lg:block" />
                        <div className="absolute top-8 left-8 right-8 h-0.5 bg-[#E8E3D8] hidden md:block lg:hidden" />

                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={cn(
                                    "relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border-2",
                                    activeStep === index
                                        ? "bg-white border-[#5C6B2E] shadow-lg scale-105 z-10"
                                        : "bg-transparent border-transparent hover:bg-[#F5F0E8] opacity-70 hover:opacity-100"
                                )}
                            >
                                <div
                                    className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                        activeStep === index
                                            ? "bg-[#5C6B2E] text-[#FAF7F0]"
                                            : "bg-[#E8E3D8] text-[#5a5748]"
                                    )}
                                >
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={cn("font-black text-lg", activeStep === index ? "text-[#5C6B2E]" : "text-[#1C2010]")}>
                                        {step.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Step Showcase */}
                    <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl border border-[#303912] bg-[#1C2010] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 gap-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center gap-5 w-full"
                            >
                                {/* Mini UI Mockup */}
                                <div className="w-full max-w-sm">
                                    {steps[activeStep].mockup}
                                </div>
                                {/* Text */}
                                <div className="text-center">
                                    <h3 className="font-display text-xl font-black text-white mb-2">{steps[activeStep].title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto font-medium">
                                        {steps[activeStep].desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5C6B2E]/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function PlanMockup() {
    return (
        <div className="bg-[#252D13] rounded-xl border border-[#5C6B2E]/30 p-4 space-y-2">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-white/80">Curriculum Builder</span>
                <span className="text-[10px] bg-[#5C6B2E]/30 text-[#94ab3e] px-2 py-0.5 rounded-full font-bold">Spring 2025</span>
            </div>
            {[
                { unit: "Unit 1: Algebra Basics", lessons: 6, done: 6 },
                { unit: "Unit 2: Linear Equations", lessons: 8, done: 5 },
                { unit: "Unit 3: Quadratics", lessons: 7, done: 0 },
            ].map((u, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="text-[11px] text-white/70 mb-1">{u.unit}</div>
                        <div className="h-1.5 bg-[#303912] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#5C6B2E] rounded-full"
                                style={{ width: `${(u.done / u.lessons) * 100}%` }}
                            />
                        </div>
                    </div>
                    <span className="text-[10px] text-white/40 shrink-0">{u.done}/{u.lessons}</span>
                </div>
            ))}
        </div>
    )
}

function TeachMockup() {
    return (
        <div className="bg-[#252D13] rounded-xl border border-[#5C6B2E]/30 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[#5C6B2E]">
                <span className="text-xs font-black text-white">Live — Math G8 · Room A</span>
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
                    <span className="text-[10px] text-red-200 font-bold">LIVE</span>
                </div>
            </div>
            <div className="p-3 space-y-2">
                <div className="bg-[#303912] rounded-lg h-16 flex items-center justify-center">
                    <span className="text-[10px] text-white/40 font-medium">Whiteboard sharing active</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        {["S", "J", "D", "M", "H"].map((n, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-[#303912] flex items-center justify-center text-[9px] text-white/60 font-black">{n}</div>
                        ))}
                    </div>
                    <span className="text-[10px] text-white/40 font-medium">22 connected</span>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1 bg-[#5C6B2E] rounded text-center text-[10px] text-white py-1 font-bold">Poll Active ✓</div>
                    <div className="flex-1 bg-[#303912] rounded text-center text-[10px] text-white/40 py-1">Quiz</div>
                </div>
            </div>
        </div>
    )
}

function AssessMockup() {
    return (
        <div className="bg-[#252D13] rounded-xl border border-[#5C6B2E]/30 p-4 space-y-2">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-white/80">Auto-Grading</span>
                <span className="text-[10px] text-[#94ab3e] font-black">AI Complete ✓</span>
            </div>
            {[
                { name: "Kim Soyeon", score: 94, status: "A" },
                { name: "Park Minjun", score: 78, status: "B+" },
                { name: "Lee Daeho", score: 61, status: "C" },
                { name: "Choi Jiwon", score: 88, status: "B+" },
            ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-[#303912]">
                    <span className="text-[11px] text-white/60 font-medium">{s.name}</span>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-16 bg-[#303912] rounded-full overflow-hidden">
                            <div className="h-full bg-[#5C6B2E] rounded-full" style={{ width: `${s.score}%` }} />
                        </div>
                        <span className={`text-[10px] font-black ${s.score >= 80 ? "text-[#94ab3e]" : s.score >= 70 ? "text-yellow-400" : "text-red-400"}`}>
                            {s.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

function AnalyzeMockup() {
    const bars = [45, 68, 55, 82, 70, 90, 60]
    return (
        <div className="bg-[#252D13] rounded-xl border border-[#5C6B2E]/30 p-4">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-white/80">Performance Overview</span>
                <span className="text-[10px] text-[#94ab3e] font-bold">Real-time</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                    { label: "Avg Score", value: "84.5" },
                    { label: "Attendance", value: "98%" },
                    { label: "At-Risk", value: "3" },
                ].map((k, i) => (
                    <div key={i} className="bg-[#303912] rounded-lg p-2 text-center">
                        <div className="text-sm font-black text-white">{k.value}</div>
                        <div className="text-[9px] text-white/40 font-semibold">{k.label}</div>
                    </div>
                ))}
            </div>
            <div className="flex items-end gap-1 h-12">
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 bg-[#5C6B2E] rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
                ))}
            </div>
        </div>
    )
}

function CoachMockup() {
    return (
        <div className="bg-[#252D13] rounded-xl border border-[#5C6B2E]/30 p-4 space-y-2">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-white/80">Parent Reports Sent</span>
                <span className="text-[10px] text-[#94ab3e] font-black">Auto ✓</span>
            </div>
            {[
                { name: "Kim Soyeon", status: "↑ Excellent", color: "text-[#94ab3e]", note: "Score up 12pts this week" },
                { name: "Park Minjun", status: "→ Steady", color: "text-yellow-400", note: "Consistent but plateau detected" },
                { name: "Lee Daeho", status: "⚠ Review", color: "text-red-400", note: "Missed 2 homework, low quiz score" },
            ].map((s, i) => (
                <div key={i} className="flex items-start gap-2 py-1 border-b border-[#303912]">
                    <div className="w-6 h-6 rounded-full bg-[#303912] flex items-center justify-center text-[9px] font-black text-white/60 shrink-0">{s.name[0]}</div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-white/70 font-medium">{s.name}</span>
                            <span className={`text-[10px] font-black ${s.color}`}>{s.status}</span>
                        </div>
                        <p className="text-[9px] text-white/30 truncate font-medium">{s.note}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
