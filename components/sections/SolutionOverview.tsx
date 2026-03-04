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
        <section id="solution" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        One Platform for the Entire Teaching Lifecycle
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From lesson planning to parent reporting — every step connected, every stakeholder aligned.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
                    {/* Steps Pipeline */}
                    <div className="flex flex-col md:flex-row lg:flex-col gap-4 relative w-full lg:w-1/3">
                        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-100 hidden lg:block" />
                        <div className="absolute top-8 left-8 right-8 h-0.5 bg-slate-100 hidden md:block lg:hidden" />

                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={cn(
                                    "relative flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border-2",
                                    activeStep === index
                                        ? "bg-white border-primary shadow-lg scale-105 z-10"
                                        : "bg-transparent border-transparent hover:bg-slate-50 opacity-70 hover:opacity-100"
                                )}
                            >
                                <div
                                    className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                        activeStep === index
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-slate-100 text-slate-500"
                                    )}
                                >
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold text-lg", activeStep === index ? "text-primary" : "text-slate-700")}>
                                        {step.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Active Step Showcase */}
                    <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl border bg-slate-900 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 gap-6">
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
                                    <h3 className="text-xl font-bold text-white mb-2">{steps[activeStep].title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                                        {steps[activeStep].desc}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}

function PlanMockup() {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-2">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">Curriculum Builder</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Spring 2025</span>
            </div>
            {[
                { unit: "Unit 1: Algebra Basics", lessons: 6, done: 6 },
                { unit: "Unit 2: Linear Equations", lessons: 8, done: 5 },
                { unit: "Unit 3: Quadratics", lessons: 7, done: 0 },
            ].map((u, i) => (
                <div key={i} className="flex items-center gap-3">
                    <div className="flex-1">
                        <div className="text-[11px] text-slate-200 mb-1">{u.unit}</div>
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${(u.done / u.lessons) * 100}%` }}
                            />
                        </div>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0">{u.done}/{u.lessons}</span>
                </div>
            ))}
        </div>
    )
}

function TeachMockup() {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-blue-600">
                <span className="text-xs font-semibold text-white">Live — Math G8 · Room A</span>
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
                    <span className="text-[10px] text-red-200">LIVE</span>
                </div>
            </div>
            <div className="p-3 space-y-2">
                <div className="bg-slate-700 rounded-lg h-16 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400">Whiteboard sharing active</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        {["S", "J", "D", "M", "H"].map((n, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-[9px] text-slate-300 font-bold">{n}</div>
                        ))}
                    </div>
                    <span className="text-[10px] text-slate-400">22 connected</span>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1 bg-blue-500 rounded text-center text-[10px] text-white py-1">Poll Active ✓</div>
                    <div className="flex-1 bg-slate-700 rounded text-center text-[10px] text-slate-400 py-1">Quiz</div>
                </div>
            </div>
        </div>
    )
}

function AssessMockup() {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-2">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Auto-Grading</span>
                <span className="text-[10px] text-green-400 font-semibold">AI Complete</span>
            </div>
            {[
                { name: "Kim Soyeon", score: 94, status: "A" },
                { name: "Park Minjun", score: 78, status: "B+" },
                { name: "Lee Daeho", score: 61, status: "C" },
                { name: "Choi Jiwon", score: 88, status: "B+" },
            ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-1 border-b border-slate-700/60">
                    <span className="text-[11px] text-slate-300">{s.name}</span>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-16 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 rounded-full" style={{ width: `${s.score}%` }} />
                        </div>
                        <span className={`text-[10px] font-bold ${s.score >= 80 ? "text-green-400" : s.score >= 70 ? "text-yellow-400" : "text-red-400"}`}>
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
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">Performance Overview</span>
                <span className="text-[10px] text-blue-400">Real-time</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                    { label: "Avg Score", value: "84.5" },
                    { label: "Attendance", value: "98%" },
                    { label: "At-Risk", value: "3" },
                ].map((k, i) => (
                    <div key={i} className="bg-slate-700 rounded-lg p-2 text-center">
                        <div className="text-sm font-bold text-white">{k.value}</div>
                        <div className="text-[9px] text-slate-400">{k.label}</div>
                    </div>
                ))}
            </div>
            <div className="flex items-end gap-1 h-12">
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
                ))}
            </div>
        </div>
    )
}

function CoachMockup() {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-2">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Parent Reports Sent</span>
                <span className="text-[10px] text-green-400">Auto ✓</span>
            </div>
            {[
                { name: "Kim Soyeon", status: "↑ Excellent", color: "text-green-400", note: "Score up 12pts this week" },
                { name: "Park Minjun", status: "→ Steady", color: "text-yellow-400", note: "Consistent but plateau detected" },
                { name: "Lee Daeho", status: "⚠ Review", color: "text-red-400", note: "Missed 2 homework, low quiz score" },
            ].map((s, i) => (
                <div key={i} className="flex items-start gap-2 py-1 border-b border-slate-700/60">
                    <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-[9px] font-bold text-slate-300 shrink-0">{s.name[0]}</div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-200">{s.name}</span>
                            <span className={`text-[10px] font-semibold ${s.color}`}>{s.status}</span>
                        </div>
                        <p className="text-[9px] text-slate-500 truncate">{s.note}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
