"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, User, ChevronRight, Mail, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = ["전체", "학원 트렌드", "기능 업데이트", "성공 사례", "에듀테크"]

const dummyPosts = [
    {
        id: 1,
        title: "2024년 학원가 최신 트렌드: AI 기술의 도입과 변화",
        excerpt: "에듀테크의 발전과 함께 학원 교육 현장에 스며들고 있는 AI 기술의 현재와 미래 전망을 짚어봅니다.",
        category: "학원 트렌드",
        date: "2024. 03. 12",
        author: "클래스인 리서치팀",
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        featured: true
    },
    {
        id: 2,
        title: "무궁화 학원, 클래스인 도입 후 매출 150% 성장 스토리",
        excerpt: "서초구에 위치한 무궁화 학원이 클래스인 시스템을 전면 도입한 이후, 학생 관리 효율화와 매출 증대를 동시에 이룬 비결을 공개합니다.",
        category: "성공 사례",
        date: "2024. 03. 08",
        author: "김성장 매니저",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "[업데이트] 학부모 상담용 데이터 리포트 기능 개편",
        excerpt: "더욱 직관적이고 상세해진 학부모 대상 리포트 기능 업데이트 내역과 활용 방법을 안내해 드립니다.",
        category: "기능 업데이트",
        date: "2024. 03. 02",
        author: "클래스인 제품팀",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "예비 창업 원장님을 위한 2024 에듀테크 지원 사업 총정리",
        excerpt: "정부 및 지자체에서 지원하는 주요 에듀테크 지원금 사업 리스트와 신청 가이드를 꼼꼼히 요약했습니다.",
        category: "학원 트렌드",
        date: "2024. 02. 25",
        author: "이동향 에디터",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "대형 어학원에서도 클래스인을 선택하는 3가지 이유",
        excerpt: "수천 명 규모의 학생 데이터를 관리해야 하는 대형 학원에서 클래스인 솔루션이 빛을 발하는 핵심 기능 3가지를 분석합니다.",
        category: "에듀테크",
        date: "2024. 02. 18",
        author: "클래스인 리서치팀",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "클래스인 v2.5 대규모 업데이트 사전 안내",
        excerpt: "다음 달 출시 예정인 클래스인 v2.5의 새로운 UI/UX 컨셉과 추가되는 핵심 기능들을 미리 살펴봅니다.",
        category: "기능 업데이트",
        date: "2024. 02. 10",
        author: "클래스인 제품팀",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    }
]

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("전체")

    const filteredPosts = activeCategory === "전체" 
        ? dummyPosts 
        : dummyPosts.filter(post => post.category === activeCategory)

    const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0]
    const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id)

    return (
        <div className="bg-[#FDFCF8] min-h-screen text-slate-900 font-sans selection:bg-orange-200 pt-20 pb-24">
            {/* Header Section */}
            <section className="relative px-4 pt-12 md:pt-20 pb-12 overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/50 text-[#E05024] text-sm font-semibold border border-orange-200/50"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#E05024]"></span>
                            Classin Blog
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-[4rem] font-serif leading-[1.1] tracking-tight text-[#1a1a19]"
                        >
                            학원 성장의 <br />
                            모든 인사이트를 만나보세요
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            클래스인이 연구하는 에듀테크 트렌드부터 학원 운영 노하우, 성공 사례까지 가장 빠른 인사이트를 전해드립니다.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="container mx-auto max-w-6xl px-4 relative z-10 mb-12">
                <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar snap-x">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`snap-start shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                activeCategory === category
                                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="container mx-auto max-w-6xl px-4 relative z-10 space-y-16">
                
                {/* Featured Post (if exists in current filter) */}
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link href={`/blog/${featuredPost.id}`} className="group block">
                            <Card className="bg-white border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[2rem] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-64 md:h-auto overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <Image
                                            src={featuredPost.imageUrl}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                                                {featuredPost.category}
                                            </span>
                                            <span className="text-slate-400 text-sm flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 line-clamp-2 md:line-clamp-3 group-hover:text-[#E05024] transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-slate-500 text-lg mb-8 line-clamp-3">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                                <User className="w-4 h-4" /> {featuredPost.author}
                                            </div>
                                            <div className="text-[#E05024] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                자세히 보기 <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                )}

                {/* Regular Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                        >
                            <Link href={`/blog/${post.id}`} className="group h-full block">
                                <Card className="h-full flex flex-col bg-white border-slate-100 shadow-[0_5px_20px_rgba(0,0,0,0.02)] rounded-[1.5rem] overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:-translate-y-1">
                                    <div className="relative h-56 overflow-hidden shrink-0">
                                         <div className="absolute inset-0 bg-slate-900/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                        <div className="text-slate-400 text-sm flex items-center gap-1 mb-4">
                                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#E05024] transition-colors leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 mb-6 line-clamp-2 font-medium">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                                            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                                <User className="w-4 h-4" /> {post.author}
                                            </div>
                                             <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-[#E05024] transition-colors">
                                                <ChevronRight className="w-4 h-4" />
                                             </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State if no posts match filter */}
                {filteredPosts.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-24 text-center"
                    >
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                            <span className="text-3xl font-serif">!</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">게시글이 없습니다</h3>
                        <p className="text-slate-500">선택하신 카테고리의 글을 준비 중입니다.</p>
                    </motion.div>
                )}

                {/* Newsletter Subscription Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-24 mb-12"
                >
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E05024]/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
                        
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 relative z-10">
                            <Mail className="w-8 h-8 text-white relative z-10" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10 tracking-tight">
                            매월 가장 유용한 <span className="text-[#E05024]">학원 운영 정보</span>를 받아보세요
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl relative z-10 font-medium font-light">
                            에듀테크 트렌드부터 원장님들의 성공 사례까지. 
                            클래스인이 엄선한 최신 소식을 이메일로 받아보실 수 있습니다.
                        </p>
                        
                        <form className="w-full max-w-lg flex flex-col sm:flex-row gap-3 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('뉴스레터 구독이 완료되었습니다.'); }}>
                            <input 
                                type="email" 
                                placeholder="이메일 주소를 입력해주세요" 
                                required
                                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05024] focus:border-transparent rounded-xl px-5 py-4 text-base backdrop-blur-md transition-all shadow-inner"
                            />
                            <button
                                type="submit"
                                className="bg-[#E05024] hover:bg-[#C9431A] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(224,80,36,0.3)] hover:-translate-y-0.5"
                            >
                                구독하기 <Send className="w-4 h-4 ml-1" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}
