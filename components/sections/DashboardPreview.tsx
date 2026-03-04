
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, BarChart, Bar, Legend } from "recharts"
import { ArrowUpRight, CheckCircle2, Users } from "lucide-react"

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
        <section id="dashboard" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Data-Driven Decisions, Instantly
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Stop guessing. See exactly how your classes, teachers, and students are performing with real-time analytics.
                    </p>
                </div>

                {/* KPI Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                        { label: "Attendance Rate", value: "98.2%", delta: "+2.1%", up: true },
                        { label: "Avg Engagement Score", value: "84.5", delta: "+5.4%", up: true },
                        { label: "Homework Completion", value: "91%", delta: "+26pp", up: true },
                        { label: "At-Risk Students", value: "3", delta: "↓ from 9", up: true },
                    ].map((kpi, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">{kpi.label}</div>
                            <div className="text-3xl font-bold text-slate-900">{kpi.value}</div>
                            <div className="text-green-600 text-xs font-semibold flex items-center mt-1.5">
                                <ArrowUpRight className="w-3 h-3 mr-1" />{kpi.delta}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Chart 1: Engagement */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-slate-800">Class Engagement Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={engagementData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            itemStyle={{ color: '#1e293b', fontSize: '13px' }}
                                        />
                                        <Legend />
                                        <Line type="monotone" dataKey="score" name="Your Academy" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                        <Line type="monotone" dataKey="avg" name="Regional Avg" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Chart 2: Homework Analysis */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-slate-800">Homework Completion vs Scores</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={homeworkData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="class" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                            cursor={{ fill: '#f1f5f9' }}
                                        />
                                        <Legend />
                                        <Bar dataKey="completed" name="Completion Rate %" fill="#2563eb" radius={[4, 4, 0, 0]} maxBarSize={40} />
                                        <Bar dataKey="score" name="Avg Score" fill="#0f172a" radius={[4, 4, 0, 0]} maxBarSize={40} />
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
