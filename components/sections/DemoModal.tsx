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
            <DialogContent className="sm:max-w-[425px] bg-slate-900/40 backdrop-blur-2xl border border-white/10 text-white shadow-2xl">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center bg-transparent rounded-lg">
                        <CheckCircle2 className="h-12 w-12 text-green-400" />
                        <h3 className="text-xl font-semibold text-white">신청이 접수되었습니다!</h3>
                        <p className="text-slate-300">
                            15분 내로 맞춤형 도입 플랜과 함께 연락드리겠습니다.
                        </p>
                        <Button onClick={() => setSubmitted(false)} variant="outline" className="text-slate-950">
                            닫기
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-white">맞춤형 데모 예약하기</DialogTitle>
                            <DialogDescription className="text-slate-300">
                                LMS와 분석 플랫폼을 직접 경험해보세요. 운영 품질을 표준화하는 방법을 안내해 드립니다.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-slate-200">이름</Label>
                                <Input id="name" placeholder="홍길동" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="org" className="text-slate-200">학원명</Label>
                                <Input id="org" placeholder="클래스인 아카데미" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="role" className="text-slate-200">직책</Label>
                                    <Input id="role" placeholder="원장 / 관리자" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="size" className="text-slate-200">원생 수</Label>
                                    <Input id="size" placeholder="예: 500+" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-slate-200">이메일</Label>
                                <Input id="email" type="email" placeholder="email@example.com" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone" className="text-slate-200">전화번호</Label>
                                <Input id="phone" type="tel" placeholder="010-1234-5678" required className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                            </div>
                            <Button type="submit" className="w-full mt-2 bg-primary hover:bg-primary/90 text-white">
                                데모 신청하기
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}
