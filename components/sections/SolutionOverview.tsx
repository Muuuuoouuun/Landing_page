"use client"

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
    },
    {
        id: 2,
        title: "Teach",
        icon: Video,
        desc: "Deliver interactive live or hybrid classes with built-in whiteboard and engagement tools.",
    },
    {
        id: 3,
        title: "Assess",
        icon: CheckSquare,
        desc: "Auto-assign homework and quizzes. Let AI handle the grading instantly.",
    },
    {
        id: 4,
        title: "Analyze",
        icon: BarChart,
        desc: "View real-time performance dashboards for every student, class, and branch.",
    },
    {
        id: 5,
        title: "Coach",
        icon: MessageCircle,
        desc: "Data-driven feedback for students and parents. Communicate results automatically.",
    },
]

export function SolutionOverview() {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <section id="solution" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        One Workflow to Rule Them All
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From lesson planning to parent reporting, we streamline the entire lifecycle.
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
                    <div className="w-full lg:w-1/2 aspect-video relative rounded-2xl border bg-slate-900 overflow-hidden shadow-2xl p-8 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 text-blue-400">
                                    {(() => {
                                        const Icon = steps[activeStep].icon
                                        return <Icon className="w-10 h-10" />
                                    })()}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{steps[activeStep].title}</h3>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-md mx-auto">
                                    {steps[activeStep].desc}
                                </p>
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
