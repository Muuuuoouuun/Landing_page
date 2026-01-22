"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function DemoModal({ children }: { children: React.ReactNode }) {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true)
        }, 1000)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center bg-white rounded-lg">
                        <CheckCircle2 className="h-12 w-12 text-primary" />
                        <h3 className="text-xl font-semibold">Request Received!</h3>
                        <p className="text-muted-foreground">
                            We'll be in touch with your tailored rollout plan within 15 minutes.
                        </p>
                        <Button onClick={() => setSubmitted(false)} variant="outline">
                            Close
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle>Book a Tailored Demo</DialogTitle>
                            <DialogDescription>
                                Get a guided tour of our LMS and Analytics platform. See how we can standardize your institute's quality.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="org">Academy / Institute Name</Label>
                                <Input id="org" placeholder="Acme Academy" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input id="role" placeholder="Director / Admin" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="size">Student Count</Label>
                                    <Input id="size" placeholder="e.g. 500+" required />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" type="email" placeholder="john@acme.com" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                            </div>
                            <Button type="submit" className="w-full mt-2">
                                Book Demo
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}
