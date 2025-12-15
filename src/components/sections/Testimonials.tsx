"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Frontend Developer",
        company: "Amazon",
        content: "Weblearnai changed my career trajectory. The React course was deep, practical, and incredibly well-structured. I landed my dream job within 2 months!",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Product Designer",
        company: "Google",
        content: "The best design resources I've found online. The community support is also top-notch. The instructors genuinely care about your progress.",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Manager",
        company: "Netflix",
        content: "I doubled my skillset in just 3 months. Highly recommend the digital marketing track for anyone looking to upskill quickly.",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        rating: 5
    },
    {
        name: "David Kim",
        role: "Founder",
        company: "TechStart",
        content: "Straight to the point value. No fluff. Exactly what I needed to launch my startup. The project-based learning approach is superior.",
        image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 mb-4 px-4 py-1 text-sm font-medium">
                        Wall of Love
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-slate-900">
                        Student Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Stories</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join 10,000+ happy students who have transformed their careers with Weblearnai.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t, i) => (
                        <Card
                            key={i}
                            className="group bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <CardContent className="pt-8 pb-6 px-6 relative">
                                {/* Quote Icon Background */}
                                <Quote className="absolute top-4 right-6 h-12 w-12 text-slate-100 -z-10 transform scale-x-[-1]" />

                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">
                                    "{t.content}"
                                </p>

                                {/* Divider */}
                                <div className="h-px w-full bg-slate-100 mb-6"></div>

                                {/* User Profile */}
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                                        </div>
                                        <CheckCircle className="absolute -bottom-1 -right-1 h-4 w-4 text-green-500 bg-white rounded-full p-[1px]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                                        <div className="flex flex-col text-xs text-slate-500">
                                            <span>{t.role} @ {t.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
