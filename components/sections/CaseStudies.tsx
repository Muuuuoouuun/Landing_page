"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function CaseStudies() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight text-center text-slate-900 sm:text-4xl mb-16">
                    Scalable Success Stories
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">A</div>
                                <div>
                                    <div className="font-bold text-slate-900">Alpha Academy</div>
                                    <div className="text-xs text-muted-foreground">5 Branches, 2,000+ Students</div>
                                </div>
                            </div>
                            <div className="mb-6 space-y-2">
                                <div className="text-sm font-semibold text-slate-500 uppercase">Challenge</div>
                                <p className="text-slate-700 text-sm">Managing standardized tests across 5 locations was a nightmare.</p>
                            </div>
                            <div className="mb-6 space-y-2">
                                <div className="text-sm font-semibold text-blue-600 uppercase">Result</div>
                                <p className="text-slate-900 font-medium">Reduced admin time by 60% and unified curriculum delivery in 2 weeks.</p>
                            </div>
                            <blockquote className="bg-slate-50 p-4 rounded-lg italic text-slate-600 text-sm relative">
                                <Quote className="w-4 h-4 text-slate-300 absolute -top-2 -left-2 fill-current" />
                                "EduScale allowed us to open 2 new branches without adding a single admin staff member."
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">M</div>
                                <div>
                                    <div className="font-bold text-slate-900">MathGenius</div>
                                    <div className="text-xs text-muted-foreground">Online Hybrid, 800+ Students</div>
                                </div>
                            </div>
                            <div className="mb-6 space-y-2">
                                <div className="text-sm font-semibold text-slate-500 uppercase">Challenge</div>
                                <p className="text-slate-700 text-sm">Student engagement was dropping in online classes.</p>
                            </div>
                            <div className="mb-6 space-y-2">
                                <div className="text-sm font-semibold text-blue-600 uppercase">Result</div>
                                <p className="text-slate-900 font-medium">Homework completion rate increased from 65% to 92%.</p>
                            </div>
                            <blockquote className="bg-slate-50 p-4 rounded-lg italic text-slate-600 text-sm relative">
                                <Quote className="w-4 h-4 text-slate-300 absolute -top-2 -left-2 fill-current" />
                                "The interactive tools made our online classes feel just as alive as our physical ones."
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg md:col-span-2 lg:col-span-1">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">S</div>
                                <div>
                                    <div className="font-bold text-slate-900">Sky High English</div>
                                    <div className="text-xs text-muted-foreground">Franchise, 15 Branches</div>
                                </div>
                            </div>
                            <div className="mb-6 space-y-2">
                                <div className="text-sm font-semibold text-slate-500 uppercase">Challenge</div>
                                <p className="text-slate-700 text-sm">Inconsistent teaching quality and parent complaints.</p>
                            </div>
                            <div className="mb-6 space-y-2">
                                <div className="text-sm font-semibold text-blue-600 uppercase">Result</div>
                                <p className="text-slate-900 font-medium">Parent satisfaction score average hit 4.8/5 within one semester.</p>
                            </div>
                            <blockquote className="bg-slate-50 p-4 rounded-lg italic text-slate-600 text-sm relative">
                                <Quote className="w-4 h-4 text-slate-300 absolute -top-2 -left-2 fill-current" />
                                "The transparency gave parents confidence, and the data gave us control."
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
