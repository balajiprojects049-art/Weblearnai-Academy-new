"use client"

import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MissionSection() {
    const benefits = [
        {
            icon: Target,
            title: "Clear Learning Paths",
            description: "Structured curriculum designed to take you from beginner to expert systematically.",
            color: "from-blue-500 to-cyan-500",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: Lightbulb,
            title: "Practical Projects",
            description: "Learn by building real-world projects that you can add to your portfolio.",
            color: "from-orange-500 to-yellow-500",
            iconColor: "text-orange-600",
            bgColor: "bg-orange-50"
        },
        {
            icon: Users,
            title: "Expert Instructors",
            description: "Learn from industry professionals with years of practical experience.",
            color: "from-purple-500 to-pink-500",
            iconColor: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            description: "Gain skills that are in high demand and accelerate your career advancement.",
            color: "from-green-500 to-emerald-500",
            iconColor: "text-green-600",
            bgColor: "bg-green-50"
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-b from-purple-50/20 to-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50/50 to-transparent -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-in-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-full shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <p className="text-sm font-semibold tracking-wide uppercase text-primary">Our Mission</p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight text-slate-900">
                            Empowering the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tech Leaders</span>
                        </h2>

                        <div className="space-y-4">
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                At Weblearnai Academy, we believe every student has the ability to shape the future through technology. We are a forward-looking edtech platform dedicated to helping students build strong foundations in coding and computer science.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Our goal is to equip young learners with practical skills in technology that prepare them for higher studies, competitive exams, and real-world challenges.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/about">
                                <Button size="lg" className="gradient-primary px-8 h-12 rounded-full text-lg shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1 group">
                                    Read More About Us
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Benefits Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 perspective-1000">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Hover Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-sm border border-black/5`}>
                                    <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                                    {benefit.title}
                                </h3>

                                <p className="text-slate-500 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
