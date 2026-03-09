
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, BarChart, Bar, Legend } from "recharts"
import { ArrowUpRight } from "lucide-react"

const engagementData = [
    { week: "W1", score: 65, avg: 60 },
    { week: "W2", score: 68, avg: 62 },
    { week: "W3", score: 75, avg: 65 },
    { week: "W4", score: 72, avg: 66 },
    { week: "W5", score: 82, avg: 68 },
    { week: "W6", score: 85, avg: 70 },
    { week: "W7", score: 88, avg: 72 },
    { week: "W8", score: 92, avg: 75 },
]

const homeworkData = [
    { class: "Class A", completed: 85, score: 78 },
    { class: "Class B", completed: 92, score: 88 },
    { class: "Class C", completed: 65, score: 72 },
    { class: "Class D", completed: 78, score: 81 },
]

export function DashboardPreview() {
    return (
        <section id="dashboard" className="py-24 bg-[#FAF7F0]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-black uppercase tracking-wider mb-4">
                        Analytics
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        Data-Driven Decisions,{" "}
                        <span className="text-[#5C6B2E] italic">Instantly</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
                        Stop guessing. See exactly how your classes, teachers, and students are performing with real-time analytics.
                    </p>
                </div>

                {/* KPI Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Attendance Rate", value: "98.2%", delta: "+2.1%" },
                        { label: "Avg Engagement Score", value: "84.5", delta: "+5.4%" },
                        { label: "Homework Completion", value: "91%", delta: "+26pp" },
                        { label: "At-Risk Students", value: "3", delta: "↓ from 9" },
                    ].map((kpi, i) => (
                        <div key={i} className="bg-white border border-[#DDD8CC] rounded-xl p-4">
                            <div className="text-xs text-[#9a9585] font-bold uppercase tracking-wide mb-2">{kpi.label}</div>
                            <div className="font-display text-3xl font-black text-[#1C2010]">{kpi.value}</div>
                            <div className="text-[#5C6B2E] text-xs font-black flex items-center mt-1.5">
                                <ArrowUpRight className="w-3 h-3 mr-1" />{kpi.delta}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Chart 1: Engagement */}
                    <Card className="shadow-sm border border-[#DDD8CC] bg-white">
                        <CardHeader>
                            <CardTitle className="text-lg font-black text-[#1C2010]">Class Engagement Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={engagementData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E3D8" />
                                        <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9a9585' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9a9585' }} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#FAF7F0', borderRadius: '8px', border: '1px solid #DDD8CC', boxShadow: '0 4px 6px -1px rgb(28 32 16 / 0.1)' }}
                                            itemStyle={{ color: '#1C2010', fontSize: '13px' }}
                                        />
                                        <Legend />
                                        <Line type="monotone" dataKey="score" name="Your Academy" stroke="#5C6B2E" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#5C6B2E' }} activeDot={{ r: 6 }} />
                                        <Line type="monotone" dataKey="avg" name="Regional Avg" stroke="#C8B898" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Chart 2: Homework Analysis */}
                    <Card className="shadow-sm border border-[#DDD8CC] bg-white">
                        <CardHeader>
                            <CardTitle className="text-lg font-black text-[#1C2010]">Homework Completion vs Scores</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={homeworkData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E3D8" />
                                        <XAxis dataKey="class" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9a9585' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9a9585' }} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#FAF7F0', borderRadius: '8px', border: '1px solid #DDD8CC', boxShadow: '0 4px 6px -1px rgb(28 32 16 / 0.1)' }}
                                            cursor={{ fill: '#F5F0E8' }}
                                        />
                                        <Legend />
                                        <Bar dataKey="completed" name="Completion Rate %" fill="#5C6B2E" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                        <Bar dataKey="score" name="Avg Score" fill="#1C2010" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
