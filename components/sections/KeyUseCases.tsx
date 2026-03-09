"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Check, Video } from "lucide-react"
import { motion } from "framer-motion"

export function KeyUseCases() {
    return (
        <section id="use-cases" className="py-24 bg-[#F5F0E8]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-black uppercase tracking-wider mb-4">
                        Use Cases
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        Built for{" "}
                        <span className="text-[#5C6B2E] italic">Every Stakeholder</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
                        Whether you are teaching, managing, or learning, EduScale adapts to your needs.
                    </p>
                </div>

                <Tabs defaultValue="classes" className="w-full max-w-5xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 h-auto p-1 bg-[#E8E3D8]">
                            <TabsTrigger value="classes" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-[#5C6B2E] data-[state=active]:text-[#FAF7F0]">Interactive Classes</TabsTrigger>
                            <TabsTrigger value="homework" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-[#5C6B2E] data-[state=active]:text-[#FAF7F0]">Homework & Tests</TabsTrigger>
                            <TabsTrigger value="admin" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-[#5C6B2E] data-[state=active]:text-[#FAF7F0]">Admin Dashboard</TabsTrigger>
                            <TabsTrigger value="comms" className="py-2 text-sm md:text-base font-bold data-[state=active]:bg-[#5C6B2E] data-[state=active]:text-[#FAF7F0]">Communication</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="mt-8">
                        <TabsContent value="classes">
                            <UseCaseCard
                                title="Run Interactive Hybrid Classes"
                                desc="Engage students in-person and online simultaneously with our synchronized classroom tools."
                                points={[
                                    "Real-time whiteboard sharing",
                                    "In-class polls and quizzes",
                                    "Automatic attendance tracking",
                                ]}
                                illustration={<ClassesIllustration />}
                            />
                        </TabsContent>
                        <TabsContent value="homework">
                            <UseCaseCard
                                title="Automate Homework & Grading"
                                desc="Save teachers hours every week by automating the distribution and grading of assignments."
                                points={[
                                    "Bank of 50,000+ standardized questions",
                                    "AI-assisted grading for essays",
                                    "Instant feedback for students",
                                ]}
                                illustration={<HomeworkIllustration />}
                            />
                        </TabsContent>
                        <TabsContent value="admin">
                            <UseCaseCard
                                title="360° View for Admins"
                                desc="Monitor the health of your academy with granular data on every branch, class, and student."
                                points={[
                                    "Revenue and enrollment tracking",
                                    "Teacher performance analytics",
                                    "Dropout risk alerts",
                                ]}
                                illustration={<AdminIllustration />}
                            />
                        </TabsContent>
                        <TabsContent value="comms">
                            <UseCaseCard
                                title="Seamless Parent Communication"
                                desc="Keep parents in the loop without the manual effort of drafting emails every day."
                                points={[
                                    "Automated weekly progress reports",
                                    "Direct messaging channel",
                                    "Event and payment reminders",
                                ]}
                                illustration={<CommsIllustration />}
                            />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

function UseCaseCard({ title, desc, points, illustration }: { title: string, desc: string, points: string[], illustration: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="overflow-hidden border border-[#DDD8CC] shadow-md bg-white">
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto bg-[#F5F0E8] flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-[#E8E3D8]">
                        {illustration}
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <h3 className="font-display text-2xl font-black mb-4 text-[#1C2010]">{title}</h3>
                        <p className="text-[#5a5748] mb-6 text-lg font-medium leading-relaxed">
                            {desc}
                        </p>
                        <ul className="space-y-3">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#E8EDD4] border border-[#C8D49A] flex items-center justify-center text-[#5C6B2E]">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-[#1C2010] font-semibold">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

function ClassesIllustration() {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-[#DDD8CC]">
            <div className="bg-[#5C6B2E] px-4 py-2 flex items-center justify-between">
                <span className="text-white text-xs font-bold">Live Class — Math G8</span>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span className="text-red-200 text-[10px] font-bold">LIVE</span>
                </div>
            </div>
            <div className="p-3 space-y-2">
                <div className="bg-[#F5F0E8] rounded-md h-24 flex items-center justify-center border border-[#E8E3D8]">
                    <Video className="w-8 h-8 text-[#5C6B2E]/40" />
                </div>
                <div className="flex gap-2">
                    {["Min-jun", "Soyeon", "Daeho", "Jiwon"].map((name, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-[#E8EDD4] flex items-center justify-center text-[10px] font-black text-[#5C6B2E]">{name[0]}</div>
                            <span className="text-[8px] text-[#9a9585] font-medium">{name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 pt-1">
                    <div className="flex-1 bg-[#5C6B2E] rounded text-center text-[10px] text-white py-1 font-bold">Poll</div>
                    <div className="flex-1 bg-[#F5F0E8] rounded text-center text-[10px] text-[#9a9585] py-1 font-medium">Whiteboard</div>
                </div>
            </div>
        </div>
    )
}

function HomeworkIllustration() {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-[#DDD8CC]">
            <div className="bg-[#1C2010] px-4 py-2">
                <span className="text-white text-xs font-bold">Homework — Ch.5 Algebra</span>
            </div>
            <div className="p-3 space-y-2">
                {[
                    { q: "Q1. Solve: 2x + 3 = 11", status: "correct", score: "10/10" },
                    { q: "Q2. Factor: x² - 4", status: "correct", score: "10/10" },
                    { q: "Q3. Simplify: (x+2)²", status: "wrong", score: "4/10" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-md bg-[#FAF7F0] border border-[#E8E3D8]">
                        <span className="text-[11px] text-[#5a5748] truncate flex-1 font-medium">{item.q}</span>
                        <div className={`ml-2 text-[10px] font-black px-1.5 py-0.5 rounded ${item.status === "correct" ? "bg-[#E8EDD4] text-[#46521F]" : "bg-red-50 text-red-600"}`}>
                            {item.score}
                        </div>
                    </div>
                ))}
                <div className="flex items-center justify-between pt-1 border-t border-[#E8E3D8]">
                    <span className="text-[11px] text-[#9a9585] font-semibold">AI Grade: Instant</span>
                    <span className="text-[11px] font-black text-[#1C2010]">Total: 80/100</span>
                </div>
            </div>
        </div>
    )
}

function AdminIllustration() {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-[#DDD8CC]">
            <div className="bg-[#1C2010] px-4 py-2">
                <span className="text-white text-xs font-bold">Admin — Branch Overview</span>
            </div>
            <div className="p-3 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                    {[
                        { label: "Enrollment", value: "2,341", delta: "+12%", ok: true },
                        { label: "Revenue", value: "₩48M", delta: "+8%", ok: true },
                        { label: "At-Risk", value: "7", delta: "⚠ Review", ok: false },
                        { label: "NPS", value: "72", delta: "↑ from 65", ok: true },
                    ].map((kpi, i) => (
                        <div key={i} className="bg-[#FAF7F0] rounded-md p-2 border border-[#E8E3D8]">
                            <div className="text-[9px] text-[#9a9585] uppercase font-bold">{kpi.label}</div>
                            <div className="text-sm font-black text-[#1C2010]">{kpi.value}</div>
                            <div className={`text-[9px] font-bold ${kpi.ok ? "text-[#5C6B2E]" : "text-red-500"}`}>{kpi.delta}</div>
                        </div>
                    ))}
                </div>
                <div className="flex items-end gap-1 h-12 bg-[#FAF7F0] rounded-md border border-[#E8E3D8] px-2 pt-2">
                    {[60, 75, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#5C6B2E] rounded-t-sm opacity-70" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function CommsIllustration() {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-[#DDD8CC]">
            <div className="bg-[#1C2010] px-4 py-2">
                <span className="text-white text-xs font-bold">Parent Report — Soyeon K.</span>
            </div>
            <div className="p-3 space-y-2">
                <div className="flex items-center gap-2 bg-[#F0F4E0] rounded-md p-2 border border-[#C8D49A]">
                    <div className="w-8 h-8 rounded-full bg-[#E8EDD4] flex items-center justify-center text-xs font-black text-[#5C6B2E]">S</div>
                    <div>
                        <div className="text-[11px] font-black text-[#1C2010]">Weekly Progress: ↑ Excellent</div>
                        <div className="text-[9px] text-[#9a9585] font-medium">Avg Score: 91 · Attendance: 100%</div>
                    </div>
                </div>
                {[
                    { from: "Teacher Kim", msg: "Soyeon excelled in Ch.5!", time: "9:12 AM" },
                    { from: "Auto Report", msg: "Homework submitted on time ✓", time: "8:00 AM" },
                ].map((msg, i) => (
                    <div key={i} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#E8EDD4] flex items-center justify-center text-[9px] font-black text-[#5C6B2E] shrink-0">{msg.from[0]}</div>
                        <div className="flex-1 bg-[#FAF7F0] rounded-md p-1.5 border border-[#E8E3D8]">
                            <div className="text-[9px] font-black text-[#5C6B2E]">{msg.from}</div>
                            <div className="text-[10px] text-[#5a5748] font-medium">{msg.msg}</div>
                        </div>
                        <span className="text-[9px] text-[#9a9585] shrink-0 font-medium">{msg.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
