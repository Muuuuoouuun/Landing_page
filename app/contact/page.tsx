
import { PageHeader } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
    return (
        <>
            <section className="bg-slate-50 pt-32 pb-12">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                                Let's build the future of education together.
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Whether you're a single academy or a global franchise, we're here to help you scale.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-full max-w-md h-[400px]">
                                <Image
                                    src="/team-illustration.png"
                                    alt="Happy team with wings"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container px-4 md:px-6 py-12">
                {/* QR Code Section */}
                <div className="mb-20">
                    <Card className="max-w-4xl mx-auto shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <h3 className="text-2xl font-bold">In a hurry?</h3>
                                <p className="text-blue-100 text-lg">
                                    Skip the form and chat with our sales team instantly on WhatsApp/KakaoTalk.
                                </p>
                                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg py-2 px-4 border border-white/20">
                                    <span className="font-semibold text-xl tracking-wide">
                                        바로 상담을 원하신다면 스캔하세요!
                                    </span>
                                </div>
                            </div>
                            <div className="shrink-0 bg-white p-4 rounded-xl shadow-inner">
                                <Image
                                    src="/qr-code.png"
                                    alt="Scan for Consultation"
                                    width={150}
                                    height={150}
                                    className="w-32 h-32 md:w-40 md:h-40"
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Send us a message</CardTitle>
                            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name">First name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name">Last name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="john@example.com" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we help you?"
                                    id="message"
                                />
                            </div>
                            <Button className="w-full text-lg h-12">Send Message</Button>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                            <p className="text-slate-600 mb-8">
                                Whether you have a question about features, trials, pricing, or need a demo, our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Office</h4>
                                        <p className="text-slate-600">
                                            123 Education Lane<br />
                                            Gangnam-gu, Seoul<br />
                                            South Korea
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-slate-600">support@eduscale.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Phone</h4>
                                        <p className="text-slate-600">+82 (02) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
