"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"

const navItems = [
    { name: "제품 소개", href: "/product" },
    { name: "활용 사례", href: "/#use-cases" },
    { name: "요금제", href: "/pricing" },
    { name: "블로그", href: "/blog" },
    { name: "문의하기", href: "/contact" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()
    const isHome = pathname === "/"

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isLightModeHeader = isScrolled || !isHome;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isLightModeHeader
                    ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Classin Logo" className="h-7 md:h-8 w-auto object-contain" />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                pathname === item.href
                                    ? (isLightModeHeader ? "text-primary font-bold" : "text-white font-bold")
                                    : (isLightModeHeader ? "text-slate-600 hover:text-primary" : "text-slate-300 hover:text-white")
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3 md:gap-4">
                    <Button variant="ghost" size="sm" onClick={() => trackEvent('download_materials')} className={cn("hidden md:flex font-medium transition-colors hover:bg-transparent",
                         isLightModeHeader ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"
                    )}>
                        자료 받아보기
                    </Button>
                    <DemoModal>
                        <Button size="sm" onClick={() => trackEvent('click_cta', { button: 'header_demo' })} className={cn("font-semibold shadow-lg transition-all",
                            isLightModeHeader ? "bg-primary hover:bg-primary/90 text-white" : "bg-white hover:bg-white/90 text-slate-950"
                        )}>
                            도입 문의
                        </Button>
                    </DemoModal>
                </div>
            </div>
        </header>
    )
}
