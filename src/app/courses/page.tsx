"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Clock, BookOpen, Search, Users, Award, TrendingUp, Filter } from "lucide-react"
import Link from "next/link"
import { courses } from "@/data/courses"
import { motion } from "framer-motion"

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))]

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
        return matchesSearch && matchesCategory;
    })

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-purple-50/30">
            {/* Hero Header Section */}
            <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900 text-white py-20 relative overflow-hidden -mt-24">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5">
                            <TrendingUp className="w-3 h-3 mr-2 inline" />
                            {courses.length}+ Expert-Led Courses
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight">
                            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300">Premium</span> Courses
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Level up your skills with industry-expert instructors. Get lifetime access, certification, and placement support.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto pt-6">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <Input
                                    type="search"
                                    placeholder="Search for courses, topics, or instructors..."
                                    className="w-full h-14 pl-12 pr-4 bg-white/95 backdrop-blur-sm border-white/20 shadow-xl rounded-full text-lg focus:ring-2 focus:ring-primary"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">9,000+</div>
                                <div className="text-sm text-white/70">Students Enrolled</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">4.8★</div>
                                <div className="text-sm text-white/70">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm text-white/70">Job Assistance</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
                        <Filter className="w-4 h-4 text-slate-500 shrink-0" />
                        <div className="flex gap-2">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={selectedCategory === cat ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`rounded-full whitespace-nowrap transition-all ${selectedCategory === cat
                                        ? "gradient-primary text-white shadow-lg shadow-primary/25"
                                        : "hover:border-primary/50"
                                        }`}
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredCourses.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                        >
                            <Link href={`/courses/${course.slug}`} className="block h-full group">
                                <Card className="overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-slate-200 hover:border-primary/50 hover:-translate-y-2 bg-white">
                                    {/* Course Image/Gradient Header */}
                                    <div className={`aspect-video w-full bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                                        {/* Floating Badge */}
                                        <Badge className="absolute top-3 left-3 bg-white/95 text-slate-900 shadow-md backdrop-blur-sm">
                                            {course.category}
                                        </Badge>

                                        {/* Best Seller Badge (for some courses) */}
                                        {idx % 3 === 0 && (
                                            <Badge className="absolute top-3 right-3 bg-amber-500 text-white shadow-md">
                                                <Award className="w-3 h-3 mr-1" />
                                                Best Seller
                                            </Badge>
                                        )}
                                    </div>

                                    <CardHeader className="p-5 pb-3 space-y-3">
                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between text-xs text-slate-500">
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="h-3.5 w-3.5" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <BookOpen className="h-3.5 w-3.5" />
                                                <span>{course.lessons} Lessons</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Users className="h-3.5 w-3.5" />
                                                <span>{Math.floor(Math.random() * 500 + 100)}+</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-bold font-heading text-lg group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                            {course.title}
                                        </h3>
                                    </CardHeader>

                                    <CardContent className="px-5 pb-4 flex-grow">
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                                            {course.description}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
                                                <Star className="h-4 w-4 fill-current" />
                                                <span>{course.rating}</span>
                                            </div>
                                            <span className="text-xs text-slate-500">({course.reviews} reviews)</span>
                                        </div>
                                    </CardContent>

                                    <CardFooter className="p-5 pt-4 flex items-center justify-between border-t bg-slate-50 group-hover:bg-primary/5 transition-colors">
                                        <div>
                                            <div className="text-2xl font-bold text-primary">{course.price}</div>
                                            <div className="text-xs text-slate-500">Lifetime Access</div>
                                        </div>
                                        <Button size="sm" className="gradient-primary text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
                                            Enroll
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}

                    {filteredCourses.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No courses found</h3>
                            <p className="text-slate-500">Try adjusting your search or filter to find what you're looking for.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
