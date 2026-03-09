"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DemoModal } from "./DemoModal"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Product", href: "/product" },
    { name: "Use Cases", href: "/#use-cases" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
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

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || !isHome
                    ? "bg-[#FAF7F0]/90 backdrop-blur-md border-b border-[#DDD8CC] shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-[#5C6B2E] flex items-center justify-center text-[#FAF7F0] font-black text-lg">
                        E
                    </div>
                    <span className="text-xl font-black tracking-tight text-[#1C2010]">
                        EduScale
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-semibold transition-colors hover:text-[#5C6B2E]",
                                pathname === item.href ? "text-[#5C6B2E]" : "text-[#5a5748]"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden sm:block text-sm font-semibold text-[#5a5748] hover:text-[#5C6B2E] transition-colors">
                        Login
                    </Link>
                    <DemoModal>
                        <Button size="sm" className="font-bold bg-[#5C6B2E] text-[#FAF7F0] hover:bg-[#46521F] shadow-md shadow-[#5C6B2E]/20 rounded-lg px-5">
                            Book a Demo
                        </Button>
                    </DemoModal>
                </div>
            </div>
        </header>
    )
}
