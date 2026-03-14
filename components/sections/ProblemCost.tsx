"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown } from "lucide-react"

const pains = [
    {
        icon: TrendingDown,
        title: "일관성 없는 수업 품질",
        desc: "강사가 바뀌거나 지점이 늘어날 때마다 수업 품질이 떨어지나요?",
        cost: "재등록률 20% 하락",
    },
    {
        icon: Clock,
        title: "과도한 행정 업무",
        desc: "강사들이 수업보다 채점과 리포트 작성에 더 많은 시간을 쓰고 있나요?",
        cost: "강사 1인당 연 1,200만원 낭비",
    },
    {
        icon: AlertTriangle,
        title: "느린 강사 적응 속도",
        desc: "신규 강사가 커리큘럼에 적응하는 데 몇 달이 걸리나요?",
        cost: "적응 기간 3개월 소요",
    },
]

export function ProblemCost() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-[3.5rem] mb-6 leading-tight">
                        전통적인 학원 운영의 <br className="md:hidden" />숨겨진 비용
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        표준화된 시스템 없이는 규모가 커질수록 수익이 아닌 혼란만 늘어납니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, type: "spring", bounce: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 md:min-h-[420px] rounded-3xl overflow-hidden group bg-white">
                                <CardContent className="pt-10 p-8 flex flex-col items-center text-center h-full relative">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="p-4 rounded-full bg-red-50 text-red-500 mb-8 border border-red-100 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                        <pain.icon className="w-12 h-12" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-extrabold mb-4 text-slate-900 tracking-tight">{pain.title}</h3>
                                    <p className="text-slate-500 mb-8 flex-grow text-lg leading-relaxed">
                                        {pain.desc}
                                    </p>
                                    <div className="w-full pt-6 border-t border-slate-100 mt-auto">
                                        <p className="text-sm font-bold text-red-500 opacity-80 uppercase tracking-widest">
                                            예상 손실
                                        </p>
                                        <p className="text-2xl font-black text-slate-900 mt-1">
                                            {pain.cost}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 mx-auto max-w-2xl bg-white p-8 rounded-2xl shadow-sm border"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-700">운영 비효율 위험도</span>
                        <span className="font-bold text-red-500">높음 (High)</span>
                    </div>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "85%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"
                        />
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                        멀티 지점 학원의 85%가 데이터 파편화로 어려움을 겪고 있습니다.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
