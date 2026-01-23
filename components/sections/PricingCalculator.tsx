"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingCalculator() {
    const [students, setStudents] = React.useState([100])

    // Simple pricing logic: Base $50 + $1 per student
    // This is just an example formula
    const basePrice = 49
    const pricePerStudent = 0.5
    const estimatedCost = Math.round(basePrice + (students[0] * pricePerStudent))

    // Tier determination
    const getTier = (count: number) => {
        if (count < 200) return "Starter"
        if (count < 1000) return "Professional"
        return "Enterprise"
    }

    return (
        <Card className="w-full max-w-3xl mx-auto shadow-xl border-primary/20">
            <CardHeader className="text-center pb-8 border-b bg-slate-50/50">
                <CardTitle className="text-2xl font-bold">Estimate Your Monthly Cost</CardTitle>
                <CardDescription>Drag the slider to match your academy's size</CardDescription>
            </CardHeader>
            <CardContent className="pt-8 md:px-12">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-medium text-slate-700">Active Students</span>
                            <span className="text-3xl font-bold text-primary">{students[0]}</span>
                        </div>
                        <Slider
                            defaultValue={[100]}
                            max={2000}
                            step={10}
                            value={students}
                            onValueChange={setStudents}
                            className="py-4"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground px-1">
                            <span>0</span>
                            <span>500</span>
                            <span>1000</span>
                            <span>1500</span>
                            <span>2000+</span>
                        </div>
                    </div>

                    <div className="rounded-lg bg-blue-50 p-6 flex flex-col items-center justify-center space-y-2 border border-blue-100">
                        <span className="text-sm font-medium text-blue-800 uppercase tracking-widest">Recommended Plan: {getTier(students[0])}</span>
                        <div className="text-5xl font-bold text-slate-900">
                            ${estimatedCost}
                            <span className="text-xl font-medium text-slate-500 ml-1">/mo</span>
                        </div>
                        <p className="text-sm text-slate-500">Billed annually</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row gap-4 items-center justify-center bg-slate-50/50 p-6 border-t">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600 mb-4 md:mb-0">
                    <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Unlimited Teachers</div>
                    <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Free Migration</div>
                    <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> Mobile App</div>
                    <div className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" /> 24/7 Support</div>
                </div>
                <Button size="lg" className="w-full md:w-auto shadow-lg hover:shadow-xl transition-all">
                    Start Your Free Trial
                </Button>
            </CardFooter>
        </Card>
    )
}
