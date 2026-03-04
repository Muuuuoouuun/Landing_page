"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { MessageCircle, ExternalLink } from "lucide-react"

const faqs = [
    {
        question: "How long does onboarding take?",
        answer: "For most academies, we can migrate your data and set up your instance in under 48 hours. Our team provides dedicated training sessions during the first week to ensure your teachers are comfortable.",
    },
    {
        question: "Do students need specific devices?",
        answer: "No. EduScale is entirely web-based and responsive. It works on any laptop, tablet, or smartphone (iOS and Android) without requiring app installation.",
    },
    {
        question: "Can I integrate with my existing billing software?",
        answer: "Yes, we offer API integrations with major billing and CRM platforms. During your demo, let us know what stack you use, and we can confirm specific compatibility.",
    },
    {
        question: "Is our content secure?",
        answer: "Absolutely. All your proprietary content, lesson plans, and student data are encrypted. You retain full ownership, and we have strict access controls to prevent unauthorized sharing.",
    },
    {
        question: "How does pricing work?",
        answer: "We charge per active student/seat, which scales with your growth. This includes unlimited teacher accounts and admin users so you don't pay extra for your staff.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
                        Have Questions?
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know before getting started.
                    </p>
                </div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full divide-y divide-slate-100">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-none py-1">
                                <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:text-primary py-4 [&[data-state=open]]:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4 pl-0 [&[data-state=open]]:border-l-2 [&[data-state=open]]:border-primary [&[data-state=open]]:pl-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-14 rounded-2xl bg-slate-50 border border-slate-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">Still have questions?</h3>
                        <p className="text-slate-500 text-sm">Our team typically replies within a few hours.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <DemoModal>
                            <Button size="sm" className="gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Talk to our team
                            </Button>
                        </DemoModal>
                        <Button variant="ghost" size="sm" className="gap-2 text-slate-500">
                            <ExternalLink className="w-4 h-4" />
                            See full docs
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
