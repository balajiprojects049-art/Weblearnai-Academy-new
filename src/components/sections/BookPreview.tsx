"use client"

import { Button } from "@/components/ui/button"
import { Check, ShoppingCart, BookOpen, Star, Download } from "lucide-react"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

export function BookPreview() {
    const { addItem } = useCart()
    const [added, setAdded] = useState(false)

    const handleAddToCart = () => {
        addItem({
            id: 1,
            title: "The Modern Web Developer",
            price: 1599,
            type: "book"
        })
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Book Mockup */}
                    <div className="relative w-full max-w-md lg:w-1/2 perspective-1000 group">
                        {/* Book floating animation */}
                        <div className="relative w-[320px] mx-auto transition-transform duration-500 ease-out transform group-hover:scale-105 group-hover:rotate-y-6 animate-float">
                            {/* Book Cover */}
                            <div className="relative aspect-[3/4] rounded-r-xl rounded-l-md shadow-2xl bg-[#0F172A] border-l-4 border-slate-700 overflow-hidden transform-style-3d">
                                {/* Spine Glow */}
                                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/10 to-transparent"></div>

                                {/* Cover Art */}
                                <div className="h-full w-full flex flex-col justify-between p-8 text-white relative z-10">
                                    {/* Cover Decor */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -ml-10 -mb-10"></div>

                                    {/* Header */}
                                    <div className="flex justify-between items-start">
                                        <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold tracking-wider border border-white/10">
                                            v2.0 2025
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="mt-8 text-center space-y-2">
                                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                                            <BookOpen className="w-8 h-8 text-white" />
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Best Seller</p>
                                        <h3 className="text-4xl font-extrabold leading-tight tracking-tight">
                                            The Modern<br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Web Developer</span>
                                        </h3>
                                    </div>

                                    {/* Footer */}
                                    <div className="text-center">
                                        <p className="text-sm text-slate-400 font-medium">By Weblearnai Team</p>
                                        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-slate-400">
                                            <span>React & Node</span>
                                            <span>Cloud & AI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Book Pages/Thickness adjustment */}
                            <div className="absolute top-2 right-2 bottom-2 left-[-12px] -z-10 bg-white rounded-l-md shadow-xl translate-x-3 translate-y-3"></div>
                            <div className="absolute top-3 right-3 bottom-3 left-[-10px] -z-20 bg-slate-200 rounded-l-md shadow-md translate-x-4 translate-y-4"></div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl animate-float animation-delay-2000 hidden md:block">
                            <p className="text-2xl font-bold text-white">4.9/5</p>
                            <p className="text-xs text-slate-300">Student Rating</p>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-primary">Exclusive Digital E-Book</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
                                Unlock Your Potential with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Definite Guide</span>
                            </h2>

                            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Packed with 200+ pages of real-world examples, best practices, interview tips, and system design patterns. Get the unfair advantage in your tech career.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {[
                                "Comprehensive React Patterns",
                                "System Design Basics",
                                "Career Growth Strategies",
                                "Interview Cheatsheets",
                                "Full Stack Project Guide",
                                "Salary Negotiation Tips"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span className="text-slate-200 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
                            <Button
                                size="lg"
                                onClick={handleAddToCart}
                                className="h-14 px-8 text-lg gradient-primary rounded-full shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
                            >
                                {added ? (
                                    <>
                                        <Check className="mr-2 h-5 w-5" />
                                        Added to Cart!
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="mr-2 h-5 w-5" />
                                        Add to Cart • ₹1,599
                                    </>
                                )}
                            </Button>

                            <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5 gap-2">
                                <Download className="w-4 h-4" />
                                Download Sample Chapter
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 justify-center lg:justify-start text-xs text-slate-500 pt-2">
                            <div className="flex items-center gap-1">
                                <Check className="w-3 h-3 text-green-500" /> Instant PDF Download
                            </div>
                            <div className="flex items-center gap-1">
                                <Check className="w-3 h-3 text-green-500" /> Lifetime Updates
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
