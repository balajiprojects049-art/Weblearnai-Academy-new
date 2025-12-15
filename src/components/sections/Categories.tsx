"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Code2, Palette, TrendingUp, Megaphone } from "lucide-react"

const categories = [
    {
        title: "Development",
        icon: Code2,
        count: "40+ Courses",
        description: "Master Python, React, and Full-Stack Development.",
    },
    {
        title: "Design",
        icon: Palette,
        count: "25+ Courses",
        description: "UI/UX, Graphic Design, and Motion Graphics.",
    },
    {
        title: "Business",
        icon: TrendingUp,
        count: "18+ Courses",
        description: "Startup strategies, Finance, and Leadership.",
    },
    {
        title: "Marketing",
        icon: Megaphone,
        count: "30+ Courses",
        description: "Digital Marketing, SEO, and Content Strategy.",
    },
]

export function Categories() {
    return (
        <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">Explore Categories</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Find the perfect path to upskill your career.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Card key={category.title} className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
                            <CardHeader className="space-y-4">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                    <p className="text-sm font-medium text-muted-foreground">{category.count}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{category.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
