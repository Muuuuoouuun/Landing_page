
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { PageHeader } from "@/components/ui/PageHeader"
import { PricingCalculator } from "@/components/sections/PricingCalculator"

export default function PricingPage() {
    return (
        <>
            <PageHeader
                heading="Simple, Transparent Pricing"
                text="Choose the plan that fits your academy's size and needs. No hidden fees."
            />
            <section className="container px-4 md:px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {/* Starter Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">Starter</CardTitle>
                            <CardDescription>Perfect for single-branch academies.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold mb-6">
                                $199<span className="text-lg font-normal text-muted-foreground">/mo</span>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Up to 200 Students</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">5 Admin Accounts</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Basic Analytics</span>
                                </li>
                                <li className="flex items-center text-muted-foreground">
                                    <X className="mr-2 h-4 w-4" />
                                    <span className="text-sm">Multi-branch Support</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">
                                Get Started
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="flex flex-col border-primary shadow-lg relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                            Most Popular
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl">Professional</CardTitle>
                            <CardDescription>For growing academies needing more power.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold mb-6">
                                $499<span className="text-lg font-normal text-muted-foreground">/mo</span>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Up to 1,000 Students</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Unlimited Admin Accounts</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Advanced Analytics & Reporting</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Auto-Grading AI</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Start Free Trial</Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-2xl">Enterprise</CardTitle>
                            <CardDescription>For large franchises and networks.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-3xl font-bold mb-6">Custom</div>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Unlimited Students</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Multi-branch Dashboards</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Dedicated Success Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-green-500" />
                                    <span className="text-sm">Custom API Integration</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">
                                Contact Sales
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-center mb-8">Not sure which plan? Calculate your price</h2>
                    <PricingCalculator />
                </div>
            </section>
        </>
    )
}
