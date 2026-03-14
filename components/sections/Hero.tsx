"use client"

import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { motion } from "framer-motion"
import { trackEvent } from "@/lib/analytics"


export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes text-gradient {
                    0% { background-position: 0% center; }
                    100% { background-position: -200% center; }
                }
                .animate-text-gradient {
                    background: linear-gradient(to right, #10b981, #cef17b, #38bdf8, #cef17b, #10b981);
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: text-gradient 3s linear infinite;
                }
                .prism-glass {
                    position: relative;
                    overflow: hidden;
                }
                .prism-glass::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -50%; width: 200%; height: 200%;
                    background: conic-gradient(from 180deg at 50% 50%, rgba(206, 241, 123, 0) 0deg, rgba(206, 241, 123, 0.1) 60deg, rgba(8, 204, 255, 0.1) 120deg, rgba(255, 100, 200, 0.1) 180deg, rgba(255, 180, 50, 0.1) 240deg, rgba(206, 241, 123, 0) 360deg);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                    transform: rotate(0deg);
                }
                .prism-glass:hover::before {
                    opacity: 1;
                    animation: spin 4s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(80px, -100px) scale(1.1); }
                    66% { transform: translate(-60px, 40px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob1 { animation: blob 15s infinite ease-in-out; }
                .animate-blob2 { animation: blob 18s infinite ease-in-out reverse; }
                .animate-blob3 { animation: blob 22s infinite ease-in-out 3s; }
            `}} />
            {/* Advanced Texture and Animated SVG Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
                <svg className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] mix-blend-screen opacity-60 filter blur-[90px]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.4)" />
                            <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                        </radialGradient>
                        <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                            <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                        </radialGradient>
                        <radialGradient id="orb3" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(206, 241, 123, 0.25)" />
                            <stop offset="100%" stopColor="rgba(206, 241, 123, 0)" />
                        </radialGradient>
                    </defs>
                    <g className="animate-blob1 origin-center">
                        <circle cx="30%" cy="40%" r="35%" fill="url(#orb1)" />
                    </g>
                    <g className="animate-blob2 origin-center">
                        <circle cx="70%" cy="50%" r="40%" fill="url(#orb2)" />
                    </g>
                    <g className="animate-blob3 origin-center">
                        <circle cx="45%" cy="70%" r="45%" fill="url(#orb3)" />
                    </g>
                </svg>
            </div>
            <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-20 mix-blend-overlay pointer-events-none z-0" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-green-300 text-sm md:text-base font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            500개 이상의 학원이 선택한 혁신 솔루션
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
                    >
                        티칭 퀄리티 <span className="font-black animate-text-gradient inline-block pb-2 filter drop-shadow-[0_0_20px_rgba(206,241,123,0.4)]">상향 표준화</span>, 확실한 학습 성과 보장.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        다지점 학원을 위한 프리미엄 올인원 운영 시스템. <br className="hidden md:block" />
                        수업부터 자동 채점, 성과 분석까지 하나의 플랫폼으로 완성하세요.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center w-full px-4 sm:px-0 flex-wrap"
                    >
                        <DemoModal>
                            <Button size="lg" onClick={() => trackEvent('click_cta', { button: 'hero_demo' })} className="prism-glass h-[3.5rem] px-8 text-[1.05rem] font-bold bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.4)] backdrop-blur-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.03] active:scale-95">
                                <span className="relative z-10">제품 도입 문의</span>
                            </Button>
                        </DemoModal>
                        <Button variant="outline" size="lg" onClick={() => trackEvent('download_materials')} className="prism-glass h-[3.5rem] px-8 text-[1.05rem] font-bold bg-primary/20 hover:bg-primary text-white hover:text-white border border-primary/50 hover:border-primary rounded-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.4)] backdrop-blur-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.03] active:scale-95">
                            <span className="relative z-10">자료 받아보기</span>
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => trackEvent('view_demo_video')} className="prism-glass h-[3.5rem] px-8 text-[1.05rem] font-bold bg-slate-900/40 hover:bg-[#CEF17B] text-slate-200 hover:text-slate-900 border border-slate-700/50 hover:border-[#CEF17B] rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(206,241,123,0.3)] backdrop-blur-xl w-full sm:w-auto transition-all duration-300 hover:scale-[1.03] active:scale-95">
                            <span className="relative z-10">3분 투어 영상</span>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-16 sm:mt-20 flex w-full justify-center px-4"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-[0.2em] uppercase text-center select-none text-slate-950" style={{ textShadow: "0px 1px 2px rgba(255,255,255,0.12)" }}>
                            Empowering Education Online
                        </h2>
                    </motion.div>
                </div>

                {/* Dashboard Image Preview with 3D-like animation */}
                <motion.div
                    initial={{ opacity: 0, y: 60, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.15 }}
                    style={{ perspective: 1000 }}
                    className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl lg:rounded-[2rem] lg:p-4 group"
                >
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:shadow-[0_0_60px_rgba(8,71,52,0.3)] transition-shadow duration-700">
                        <img
                            src="/images/hero-dashboard.png"
                            alt="Classin Education Dashboard"
                            className="w-full h-auto object-cover rounded-xl relative z-10 transition-transform duration-1000 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-20 pointer-events-none" />
                    </div>
                </motion.div>
            </div>

            {/* Bottom fading line */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </section>
    )
}
