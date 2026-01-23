
import { PageHeader } from "@/components/ui/PageHeader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge" // Note: Badge might not be available yet, falling back to simple styling if needed
import { LayoutDashboard, GraduationCap, CreditCard, BarChart4, Users } from "lucide-react"

export default function ProductPage() {
    return (
        <>
            <PageHeader
                heading="A Complete Operating System"
                text="Everything you need to run high-performing academies, all in one place."
            />

            <section className="container px-4 md:px-6 py-12">
                <Tabs defaultValue="management" className="space-y-8">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-2xl grid-cols-3 h-auto p-1 bg-slate-100 rounded-full">
                            <TabsTrigger value="management" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">Class Management</TabsTrigger>
                            <TabsTrigger value="analytics" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">Analytics</TabsTrigger>
                            <TabsTrigger value="finance" className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm">Finance & Admin</TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="management" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                                    <Users className="mr-2 h-4 w-4" />
                                    Student & Teacher Portal
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Streamline Daily Operations</h2>
                                <p className="text-lg text-slate-600">
                                    Forget spreadsheets and paper attendance. Manage schedules, assignments, and communication in a unified interface.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Automated Attendance</h3>
                                            <p className="text-sm text-slate-500">QR code check-ins and instant parent notifications.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Lesson Plans & Resources</h3>
                                            <p className="text-sm text-slate-500">Share materials with students instantly.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative rounded-xl border bg-slate-50 p-4 shadow-xl">
                                {/* Placeholder for UI Screenshot */}
                                <div className="aspect-video w-full rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-300">
                                    [Class Management Interface]
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative rounded-xl border bg-slate-50 p-4 shadow-xl">
                                {/* Placeholder for UI Screenshot */}
                                <div className="aspect-video w-full rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-300">
                                    [Analytics Dashboard]
                                </div>
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <div className="inline-flex items-center rounded-lg bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                                    <BarChart4 className="mr-2 h-4 w-4" />
                                    Real-time Insights
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Data That Drives Growth</h2>
                                <p className="text-lg text-slate-600">
                                    Visualize student progress and academy health with powerful charts and key performance indicators.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                                            <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Learning Gaps Identification</h3>
                                            <p className="text-sm text-slate-500">Spot struggling students before they churn.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="finance" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    Billing & Payroll
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Automate Your Back Office</h2>
                                <p className="text-lg text-slate-600">
                                    Handle tuition collection, invoicing, and teacher payroll automatically.
                                </p>
                            </div>
                            <div className="relative rounded-xl border bg-slate-50 p-4 shadow-xl">
                                {/* Placeholder for UI Screenshot */}
                                <div className="aspect-video w-full rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-300">
                                    [Billing Dashboard]
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        </>
    )
}
