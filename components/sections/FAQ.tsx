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
        <section id="faq" className="py-24 bg-[#FAF7F0]">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#E8EDD4] border border-[#C8D49A] text-[#46521F] text-xs font-black uppercase tracking-wider mb-4">
                        Have Questions?
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[#1C2010] mb-4 leading-tight">
                        Everything You Need
                        <br />
                        <span className="text-[#5C6B2E] italic">Before You Decide</span>
                    </h2>
                    <p className="text-lg text-[#5a5748] font-medium">
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
                    <Accordion type="single" collapsible className="w-full divide-y divide-[#E8E3D8]">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-none py-1">
                                <AccordionTrigger className="text-left text-base font-black text-[#1C2010] hover:text-[#5C6B2E] py-4 [&[data-state=open]]:text-[#5C6B2E]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#5a5748] text-base leading-relaxed pb-4 pl-0 font-medium [&[data-state=open]]:border-l-2 [&[data-state=open]]:border-[#5C6B2E] [&[data-state=open]]:pl-4">
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
                    className="mt-14 rounded-2xl bg-[#F0F4E0] border border-[#C8D49A] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <h3 className="font-black text-[#1C2010] text-lg mb-1">Still have questions?</h3>
                        <p className="text-[#5a5748] text-sm font-medium">Our team typically replies within a few hours.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <DemoModal>
                            <Button size="sm" className="gap-2 bg-[#5C6B2E] text-[#FAF7F0] hover:bg-[#46521F] font-bold">
                                <MessageCircle className="w-4 h-4" />
                                Talk to our team
                            </Button>
                        </DemoModal>
                        <Button variant="ghost" size="sm" className="gap-2 text-[#5a5748] hover:text-[#5C6B2E] hover:bg-[#E8EDD4] font-semibold">
                            <ExternalLink className="w-4 h-4" />
                            See full docs
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
