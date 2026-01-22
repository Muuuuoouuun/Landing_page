"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function KeyUseCases() {
    return (
        <section id="use-cases" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Built for Every Stakeholder
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Whether you are teaching, managing, or learning, EduScale adapts to your needs.
                    </p>
                </div>

                <Tabs defaultValue="classes" className="w-full max-w-5xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 h-auto p-1">
                            <TabsTrigger value="classes" className="py-2 text-sm md:text-base">Interactive Classes</TabsTrigger>
                            <TabsTrigger value="homework" className="py-2 text-sm md:text-base">Homework & Tests</TabsTrigger>
                            <TabsTrigger value="admin" className="py-2 text-sm md:text-base">Admin Dashboard</TabsTrigger>
                            <TabsTrigger value="comms" className="py-2 text-sm md:text-base">Communication</TabsTrigger>
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
                                imageColor="bg-blue-100"
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
                                imageColor="bg-green-100"
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
                                imageColor="bg-purple-100"
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
                                imageColor="bg-orange-100"
                            />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

function UseCaseCard({ title, desc, points, imageColor }: { title: string, desc: string, points: string[], imageColor: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="overflow-hidden border-none shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className={`h-64 md:h-auto ${imageColor} flex items-center justify-center p-8`}>
                        {/* Mock UI Element */}
                        <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4 space-y-3 opacity-90">
                            <div className="h-2 w-1/3 bg-slate-200 rounded-full" />
                            <div className="h-2 w-2/3 bg-slate-200 rounded-full" />
                            <div className="h-32 bg-slate-100 rounded-md mt-4" />
                        </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg">
                            {desc}
                        </p>
                        <ul className="space-y-3">
                            {points.map((point, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}
