import { courses } from "@/data/courses"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, BarChart, CheckCircle, Globe, Award, Share2 } from "lucide-react"
import { ApplyForm } from "@/components/forms/ApplyForm"

// For SSG
export function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }))
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const course = courses.find((c) => c.slug === slug)

    if (!course) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Course Hero */}
            <div className={`bg-gradient-to-br ${course.color} text-white`}>
                <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl space-y-6">
                        <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">{course.category}</Badge>
                        <h1 className="text-4xl font-extrabold font-heading tracking-tight sm:text-5xl">{course.title}</h1>
                        <p className="text-lg text-white/90 leading-relaxed font-light">{course.description} Join thousands of students mastering this skill today.</p>

                        <div className="flex flex-wrap gap-6 text-sm font-medium pt-2">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 opacity-80" />
                                <span>{course.duration} Duration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 opacity-80" />
                                <span>{course.lessons} Lessons</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart className="h-5 w-5 opacity-80" />
                                <span>Intermediate Level</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-5 w-5 opacity-80" />
                                <span>Online Access</span>
                            </div>
                        </div>

                        <div className="pt-6 flex gap-4">
                            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold border-none shadow-lg">
                                Enroll Now {course.price}
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                                <Share2 className="mr-2 h-4 w-4" /> Share
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-4">Course Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                This comprehensive course is designed to take you from basics to advanced concepts.
                                You will work on real-world projects, learn industry best practices, and get hands-on experience with the latest tools.
                                Suitable for beginners and experienced professionals looking to upgrade their skills.
                            </p>
                        </section>

                        {/* What you'll learn */}
                        <section className="bg-muted/30 p-8 rounded-xl border border-border/50">
                            <h2 className="text-2xl font-bold font-heading mb-6">What you'll learn</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Master core concepts and advanced techniques",
                                    "Build real-world projects for your portfolio",
                                    "Best practices and design patterns",
                                    "Debugging and performance optimization",
                                    "Industry-standard tools and workflows",
                                    "Career guidance and interview prep"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Syllabus / Content */}
                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-6">Course Content</h2>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((module) => (
                                    <div key={module} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                                        <h3 className="font-semibold text-lg flex justify-between items-center cursor-pointer">
                                            <span>Module {module}: Fundamentals & setup</span>
                                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">4 Lessons</span>
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-heading mb-4">Instructor</h2>
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-slate-200"></div>
                                <div>
                                    <h4 className="font-bold">Alex Johnson</h4>
                                    <p className="text-sm text-muted-foreground">Senior Developer & Educator</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar / Sticky Apply */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-card border rounded-xl shadow-lg p-6 mb-8">
                                <div className="text-center mb-6">
                                    <span className="text-3xl font-bold text-primary">{course.price}</span>
                                    <span className="text-muted-foreground line-through ml-2 text-sm">$199.99</span>
                                    <p className="text-sm text-green-600 font-medium mt-1">20% OFF for limited time</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-sm py-2 border-b">
                                        <span className="text-muted-foreground">Duration</span>
                                        <span className="font-medium">{course.duration}</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b">
                                        <span className="text-muted-foreground">Skill Level</span>
                                        <span className="font-medium">Intermediate</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b">
                                        <span className="text-muted-foreground">Certificate</span>
                                        <span className="font-medium">Yes</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b">
                                        <span className="text-muted-foreground">Access</span>
                                        <span className="font-medium">Lifetime</span>
                                    </div>
                                </div>
                            </div>

                            {/* Apply Form Embedded in Sidebar for high conversion */}
                            <ApplyForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
