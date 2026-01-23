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
                    ? "bg-white/80 backdrop-blur-md border-b shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        E
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary">
                        EduScale
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden sm:block text-sm font-medium text-primary hover:underline">
                        Login
                    </Link>
                    <DemoModal>
                        <Button size="sm" className="font-semibold shadow-lg">
                            Book a Demo
                        </Button>
                    </DemoModal>
                </div>
            </div>
        </header>
    )
}
