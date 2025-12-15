"use client"

import { BookOpen, Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Instructors", href: "/instructors" },
        { name: "Certifications", href: "/certifications" },
        { name: "Placement", href: "/placement" },
        { name: "Roadmap", href: "/roadmap" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0F172A] border-b border-slate-800 shadow-xl">
            <nav className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-lg shadow-purple-900/20">
                            <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold font-heading text-white leading-none tracking-tight">
                                Weblearnai
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">
                                Academy
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all hover:bg-white/10 rounded-full"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <a href="tel:+919999999999" className="flex items-center gap-3 text-sm font-medium text-slate-300 hover:text-white transition-colors group">
                        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary transition-colors">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span className="hidden xl:inline">+91 99999 99999</span>
                    </a>
                    <Link href="/contact">
                        <Button className="gradient-primary text-white font-bold h-11 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all">
                            Apply Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="xl:hidden flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:block">
                        <Button size="sm" className="gradient-primary border-0 text-white font-semibold rounded-full">
                            Apply
                        </Button>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-[#0F172A] border-t border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top-5">
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between group"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                                <span className="text-slate-600 group-hover:text-primary transition-colors">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
