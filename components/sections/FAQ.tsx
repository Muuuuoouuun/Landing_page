"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                <h2 className="text-3xl font-bold tracking-tight text-center text-slate-900 sm:text-4xl mb-12">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-primary">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
