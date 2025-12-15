"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, BookOpen } from "lucide-react"
import Link from "next/link"
import { courses } from "@/data/courses"

export function FeaturedCourses() {
    const featuredCourses = courses.slice(0, 4)

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">Featured Courses</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Handpicked courses to help you succeed.</p>
                    </div>
                    <Link href="/courses">
                        <Button variant="outline" className="hidden md:inline-flex">View All Courses</Button>
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredCourses.map((course) => (
                        <Link key={course.id} href={`/courses/${course.slug}`} className="block h-full">
                            <Card className="overflow-hidden flex flex-col h-full border-border/60 hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className={`aspect-video w-full bg-gradient-to-br ${course.color} relative`}>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                    <Badge className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background/100">{course.category}</Badge>
                                </div>

                                <CardHeader className="p-4 pb-0 space-y-2">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" /> {course.duration}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="h-3.5 w-3.5" /> {course.lessons} Lessons
                                        </div>
                                    </div>
                                    <h3 className="font-bold font-heading text-lg group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {course.title}
                                    </h3>
                                </CardHeader>

                                <CardContent className="p-4 pt-2 flex-grow">
                                    <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span>{course.rating}</span>
                                        <span className="text-muted-foreground font-normal ml-1">({course.reviews})</span>
                                    </div>
                                </CardContent>

                                <CardFooter className="p-4 pt-0 flex items-center justify-between border-t bg-muted/20 mt-auto">
                                    <span className="text-lg font-bold text-primary">{course.price}</span>
                                    <Button size="sm" variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">Enroll</Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Link href="/courses" className="w-full block">
                        <Button variant="outline" className="w-full">View All Courses</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
