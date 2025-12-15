"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Award, ArrowRight, ShoppingCart } from "lucide-react"
import { FaAndroid, FaPython, FaJava, FaReact, FaDatabase } from "react-icons/fa"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

interface Course {
    id: number
    title: string
    description: string
    instructor: string
    students: number
    duration: string
    level: string
    category: string
    price: number
    Icon: React.ElementType
    color: string
}

const courses: Course[] = [
    {
        id: 1,
        title: "Android App Development",
        description: "Build powerful Android applications from scratch using modern tools and best practices.",
        instructor: "Weblearnai Team",
        students: 2500,
        duration: "12 weeks",
        level: "Intermediate",
        category: "Mobile",
        price: 4999,
        Icon: FaAndroid,
        color: "bg-green-500"
    },
    {
        id: 2,
        title: "Data Science + AI + ML",
        description: "Master data science, artificial intelligence, and machine learning with real-world projects.",
        instructor: "Weblearnai Team",
        students: 3200,
        duration: "16 weeks",
        level: "Advanced",
        category: "Data Science",
        price: 6999,
        Icon: FaDatabase,
        color: "bg-blue-600"
    },
    {
        id: 3,
        title: "Python Programming",
        description: "Learn Python from basics to advanced programming concepts with hands-on practice.",
        instructor: "Weblearnai Team",
        students: 4100,
        duration: "10 weeks",
        level: "Beginner",
        category: "Python",
        price: 3999,
        Icon: FaPython,
        color: "bg-yellow-500"
    },
    {
        id: 4,
        title: "Java Programming",
        description: "Master Java programming with object-oriented concepts and enterprise development.",
        instructor: "Weblearnai Team",
        students: 2800,
        duration: "14 weeks",
        level: "Intermediate",
        category: "Java",
        price: 4499,
        Icon: FaJava,
        color: "bg-red-500"
    },
    {
        id: 5,
        title: "Web Development",
        description: "Build modern, responsive websites using HTML, CSS, JavaScript, and React.",
        instructor: "Weblearnai Team",
        students: 5200,
        duration: "12 weeks",
        level: "Beginner",
        category: "Web Dev",
        price: 4999,
        Icon: FaReact,
        color: "bg-cyan-500"
    },
]

function CourseCardActions({ course }: { course: Course }) {
    const { addItem } = useCart()
    const [added, setAdded] = useState(false)

    const handleAddToCart = () => {
        addItem({
            id: course.id,
            title: course.title,
            price: course.price,
            type: "course"
        })
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <>
            <Button
                onClick={handleAddToCart}
                className="flex-1 gradient-primary hover:opacity-90 transition-opacity"
            >
                {added ? "Added!" : (
                    <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </>
                )}
            </Button>
            <Link href={`/courses/${course.id}`}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    View
                </Button>
            </Link>
        </>
    )
}

export function CoursesSection() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="text-sm px-4 py-1 font-semibold tracking-wide">
                        Learn IT Courses
                    </Badge>
                    <div className="flex flex-wrap justify-center items-center gap-x-3 text-4xl md:text-5xl font-bold font-heading">
                        <span className="text-slate-900">Popular</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 pb-1">
                            Courses
                        </span>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our comprehensive range of technology courses designed to prepare students for the digital future.
                    </p>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <Card
                            key={course.id}
                            className="group relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card Header with Icon */}
                            <div className="relative h-48 overflow-hidden">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />

                                {/* Abstract Shapes */}
                                <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${course.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`} />
                                <div className={`absolute -left-10 -bottom-10 w-40 h-40 rounded-full ${course.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`} />

                                {/* Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-20 h-20 rounded-2xl ${course.color} bg-opacity-20 backdrop-blur-sm flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                        <course.Icon className="text-5xl text-white" />
                                    </div>
                                </div>

                                {/* Badges */}
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
                                        {course.level}
                                    </Badge>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="bg-white/90 text-slate-900 font-bold shadow-sm">
                                        {course.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader className="flex-grow pb-2">
                                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                                    {course.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 text-slate-500 mt-2">
                                    {course.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4 pb-2">
                                <div className="flex items-end justify-between border-b border-slate-100 pb-4">
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Course Fee</p>
                                        <div className="text-2xl font-bold text-primary">
                                            ₹{course.price.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm text-slate-500 pt-2">
                                    <div className="flex items-center gap-1.5">
                                        <Users className="h-4 w-4 text-slate-400" />
                                        <span>{course.students.toLocaleString()} students</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Award className="h-4 w-4 text-orange-500" />
                                        <span className="text-orange-600 font-medium">Certified</span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-4 mt-auto">
                                <CourseCardActions course={course} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/courses">
                        <Button size="lg" className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 rounded-full shadow-sm hover:shadow-md transition-all">
                            View All Courses
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
