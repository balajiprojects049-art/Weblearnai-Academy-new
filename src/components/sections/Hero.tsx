"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden -mt-24">
            {/* Top colored bar - overlaps navbar border */}
            <div className="absolute top-0 left-0 right-0 w-full h-[5px] bg-gradient-to-r from-primary via-accent to-secondary z-10"></div>

            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/hero-background.png)',
                    filter: 'brightness(0.4)'
                }}
            />

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-pink-900/90" />

            {/* Animated Background Blobs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

            {/* Content */}
            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Welcome Badge */}
                    <div className="inline-block glass px-6 py-2 rounded-full animate-fade-in">
                        <p className="text-sm font-semibold tracking-wider uppercase text-white/90">
                            WELCOME TO WEBLEARNAI TRAININGS
                        </p>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight text-white animate-slide-in-left">
                        Join a <span className="text-gradient-primary bg-gradient-to-r from-pink-400 via-purple-300 to-orange-300 bg-clip-text text-transparent">practical course</span> that teaches real-world Data Engineering tools
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto animate-slide-in-right">
                        Build a strong foundation for your tech career with industry-expert-led training. Support for IT & Non-IT backgrounds.
                    </p>

                    {/* Key Features */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 animate-fade-in">
                        {[
                            { icon: Users, text: "100+ Teaching Assistants" },
                            { icon: TrendingUp, text: "Flexible Batches" },
                            { icon: Award, text: "Lifetime Access" },
                            { icon: Check, text: "100+ Partners" }
                        ].map((feature, idx) => (
                            <div key={idx} className="glass p-4 rounded-xl hover:scale-105 transition-transform">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-white">{feature.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
                        <Link href="/contact">
                            <Button size="lg" className="gradient-primary text-lg px-10 py-7 rounded-full hover:opacity-90 transition-all hover:shadow-2xl text-white font-bold">
                                Apply Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/courses">
                            <Button size="lg" variant="outline" className="glass border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full backdrop-blur-sm font-bold">
                                Explore Courses
                            </Button>
                        </Link>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                9,000+
                            </div>
                            <p className="text-sm text-white/80">Happy Students</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                10+
                            </div>
                            <p className="text-sm text-white/80">Expert Courses</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                100+
                            </div>
                            <p className="text-sm text-white/80">Partners</p>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 pt-8 opacity-80">
                        <div className="flex items-center gap-2 text-white text-sm">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>Industry Certified</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>Placement Support</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>Real-World Projects</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    )
}
