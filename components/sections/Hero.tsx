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
                        className="mt-12 flex items-center justify-center gap-8 text-slate-400 grayscale opacity-70"
                    >
                        {/* Social Proof Placeholders */}
                        <div className="font-bold text-xl">ACADEMY ONE</div>
                        <div className="font-bold text-xl">EDU GROUP</div>
                        <div className="font-bold text-xl">GLOBAL INSTITUTE</div>
                        <div className="font-bold text-xl">FUTURE SCHOOL</div>
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
                            <div className="hidden md:block col-span-2 border-r bg-slate-50/50 p-4 space-y-4">
                                <div className="h-8 w-full bg-blue-100 rounded-md" />
                                <div className="h-4 w-3/4 bg-slate-200 rounded-md" />
                                <div className="h-4 w-3/4 bg-slate-200 rounded-md" />
                                <div className="h-4 w-3/4 bg-slate-200 rounded-md" />
                            </div>
                            {/* Main Content */}
                            <div className="col-span-12 md:col-span-10 p-6 bg-white">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="space-y-2">
                                        <div className="h-6 w-48 bg-slate-900 rounded-md" />
                                        <div className="h-4 w-32 bg-slate-300 rounded-md" />
                                    </div>
                                    <div className="h-10 w-32 bg-primary rounded-md shadow-sm" />
                                </div>
                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-32 rounded-xl border bg-slate-50 p-4 space-y-4">
                                            <div className="h-8 w-8 rounded-full bg-blue-100" />
                                            <div className="h-8 w-24 bg-slate-200 rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div className="h-64 rounded-xl border bg-slate-50 flex items-end justify-around p-8 pb-0 gap-4">
                                    {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                                        <div key={i} className="w-full bg-blue-200 rounded-t-lg" style={{ height: `${h}%` }} />
                                    ))}
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
