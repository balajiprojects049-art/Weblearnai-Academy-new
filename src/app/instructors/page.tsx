"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Linkedin, Mail, Users, GraduationCap, Star, MessageCircle, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const instructors = [
    {
        name: "Munavath",
        role: "Co-founder & Lead Instructor",
        experience: "10+ years in Data Engineering",
        certifications: ["Azure Data Engineer", "Databricks Certified", "AWS Solutions Architect"],
        bio: "Expert in Azure Databricks, Microsoft Fabric, and cloud data solutions. Passionate about teaching practical, industry-relevant skills.",
        image: "/instructors/munavath.jpg",
        linkedin: "#",
        students: "3,500+",
        rating: 4.9,
        courses: 8,
        expertise: ["Azure", "Databricks", "Cloud Architecture"]
    },
    {
        name: "Pranay Kumar Sikilambatla",
        role: "Senior Data Engineer",
        experience: "8+ years in Cloud & Data",
        certifications: ["Azure Data Engineer", "Power BI Specialist", "Apache Airflow Expert"],
        bio: "Specialist in Azure Data Factory, Power BI, and data orchestration. Focused on real-world project-based learning.",
        image: "/instructors/pranay.jpg",
        linkedin: "#",
        students: "2,800+",
        rating: 4.8,
        courses: 6,
        expertise: ["Power BI", "Data Factory", "Airflow"]
    },
    {
        name: "Geetha",
        role: "Cybersecurity & Python Instructor",
        experience: "6+ years in Security & Development",
        certifications: ["CISSP", "Python Developer", "Gen AI Specialist"],
        bio: "Expert in cybersecurity fundamentals, Python programming, and Generative AI applications. Committed to student success.",
        image: "/instructors/geetha.jpg",
        linkedin: "#",
        students: "2,200+",
        rating: 4.9,
        courses: 5,
        expertise: ["Cybersecurity", "Python", "Gen AI"]
    }
]

export default function InstructorsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20 relative overflow-hidden -mt-24">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5">
                            <GraduationCap className="w-3 h-3 mr-2 inline" />
                            Meet Your Expert Mentors
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight">
                            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300">Industry Experts</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Our instructors bring years of real-world experience, industry certifications, and a passion for teaching to help you achieve your career goals.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">8,500+</div>
                                <div className="text-sm text-white/70">Students Taught</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">4.9★</div>
                                <div className="text-sm text-white/70">Instructor Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">19+</div>
                                <div className="text-sm text-white/70">Expert Courses</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Instructors Grid */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {instructors.map((instructor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-slate-100">
                                    {/* Profile Header with Gradient */}
                                    <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                                        {/* Animated Background Pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
                                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                                        </div>

                                        {/* Avatar */}
                                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                                            <div className="w-24 h-24 rounded-full bg-white p-1 shadow-xl">
                                                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold ring-4 ring-white group-hover:scale-110 transition-transform">
                                                    {instructor.name.charAt(0)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Rating Badge */}
                                        <Badge className="absolute top-4 right-4 bg-white/95 text-slate-900 shadow-md">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                            {instructor.rating}
                                        </Badge>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-16 px-6 pb-6 space-y-5">
                                        {/* Name & Role */}
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{instructor.name}</h3>
                                            <p className="text-primary font-semibold text-sm">{instructor.role}</p>
                                            <p className="text-xs text-slate-500 mt-1">{instructor.experience}</p>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-100">
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-slate-900">{instructor.students}</div>
                                                <div className="text-xs text-slate-500">Students</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-slate-900">{instructor.courses}</div>
                                                <div className="text-xs text-slate-500">Courses</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-lg font-bold text-slate-900">{instructor.rating}★</div>
                                                <div className="text-xs text-slate-500">Rating</div>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-sm text-slate-600 leading-relaxed">{instructor.bio}</p>

                                        {/* Expertise Tags */}
                                        <div>
                                            <div className="text-xs font-semibold text-slate-500 mb-2">Expertise:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {instructor.expertise.map((skill, idx) => (
                                                    <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Certifications */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award className="h-4 w-4 text-amber-500" />
                                                <span className="text-xs font-semibold text-slate-700">Certifications:</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {instructor.certifications.map((cert, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs border-slate-300">
                                                        {cert}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 pt-4">
                                            <Button
                                                size="sm"
                                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md group-hover:shadow-lg transition-all"
                                            >
                                                <MessageCircle className="w-3 h-3 mr-2" />
                                                Contact
                                            </Button>
                                            <a
                                                href={instructor.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-slate-300 bg-background hover:bg-slate-50 h-9 px-3"
                                            >
                                                <Linkedin className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Teaching Assistants Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-24 text-center"
                    >
                        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                Supported by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">100+ Teaching Assistants</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Our dedicated team of teaching assistants ensures you get personalized support, doubt resolution, and guidance throughout your learning journey.
                            </p>
                            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                    <span>24/7 Support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4 text-blue-600" />
                                    <span>Instant Doubt Resolution</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
