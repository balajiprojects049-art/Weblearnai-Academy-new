"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Map, Clock, TrendingUp, Award, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const roadmapSteps = [
    {
        phase: "Beginner",
        title: "Foundations",
        duration: "Weeks 1-4",
        color: "from-green-500 to-emerald-500",
        icon: Code,
        items: [
            "Programming Fundamentals (Python/SQL)",
            "Version Control with GitHub",
            "Cloud Platform Basics (Azure/AWS)",
            "Data Structures & Algorithms",
            "Basic Database Concepts"
        ]
    },
    {
        phase: "Intermediate",
        title: "Core Skills",
        duration: "Weeks 5-12",
        color: "from-blue-500 to-indigo-500",
        icon: TrendingUp,
        items: [
            "Azure Data Factory & ETL Pipelines",
            "Azure Databricks & Apache Spark",
            "Delta Lake & Data Lakehouse",
            "Power BI & Data Visualization",
            "Apache Airflow & Orchestration"
        ]
    },
    {
        phase: "Advanced",
        title: "Specialization",
        duration: "Weeks 13-20",
        color: "from-purple-500 to-pink-500",
        icon: Award,
        items: [
            "Microsoft Fabric End-to-End",
            "Unity Catalog & Data Governance",
            "Advanced Power BI & Power Apps",
            "Cybersecurity Fundamentals",
            "Generative AI with Python"
        ]
    },
    {
        phase: "Expert",
        title: "Real-World Projects",
        duration: "Weeks 21-24",
        color: "from-orange-500 to-red-500",
        icon: Map,
        items: [
            "Capstone Project (Full Data Pipeline)",
            "Cloud Architecture Design",
            "Performance Optimization",
            "Best Practices & Design Patterns",
            "Project Documentation"
        ]
    },
    {
        phase: "Job Ready",
        title: "Career Preparation",
        duration: "Weeks 25-28",
        color: "from-pink-500 to-rose-600",
        icon: CheckCircle2,
        items: [
            "Certification Preparation",
            "Interview Preparation",
            "Resume Building & Portfolio",
            "Mock Interviews",
            "Job Applications & Referrals"
        ]
    }
]

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden -mt-24">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5">
                            <Map className="w-3 h-3 mr-2 inline" />
                            Your Learning Journey
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight">
                            Your Roadmap to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-pink-300">Data Engineer</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            A structured, step-by-step journey from beginner to job-ready professional in just 28 weeks. Follow our proven path to success.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">28</div>
                                <div className="text-sm text-white/70">Weeks to Job-Ready</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">5</div>
                                <div className="text-sm text-white/70">Learning Phases</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm text-white/70">Hands-on Learning</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Roadmap Timeline */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Vertical Gradient Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full"></div>

                        {/* Steps */}
                        <div className="space-y-20">
                            {roadmapSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Phase Number Circle */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-2xl group-hover:scale-110 transition-transform`}>
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Spacer for mobile */}
                                    <div className="w-16 md:hidden"></div>

                                    {/* Content Card */}
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border-2 border-slate-100 group">
                                            {/* Header */}
                                            <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                    <step.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <Badge className={`bg-gradient-to-r ${step.color} text-white border-0 px-4 py-1`}>
                                                    {step.phase}
                                                </Badge>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">{step.title}</h3>

                                            <div className={`flex items-center gap-2 text-sm text-slate-500 mb-6 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <Clock className="w-4 h-4" />
                                                <span>{step.duration}</span>
                                            </div>

                                            {/* Items List */}
                                            <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                                                {step.items.map((item, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: 0.6 + (idx * 0.05) }}
                                                        className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                                    >
                                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                                        <span className="text-slate-700 leading-relaxed">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Spacer for desktop */}
                                    <div className="hidden md:block flex-1"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 md:p-16 text-white text-center shadow-2xl">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                    Start Your Journey Today
                                </h2>
                                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                    Join thousands of successful students who have transformed their careers with Weblearnai Trainings' structured learning path
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="bg-white text-purple-600 hover:bg-gray-100 font-bold h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                        >
                                            Apply Now
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <Link href="/courses">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold h-14 px-10 rounded-full"
                                        >
                                            View Courses
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
