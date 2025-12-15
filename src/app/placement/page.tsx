"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, FileText, Video, TrendingUp, Building2, CheckCircle2, Target, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const placementFeatures = [
    {
        icon: Building2,
        title: "100+ Employer Partners",
        description: "Access to our extensive network of partner companies actively hiring skilled data engineers and tech professionals.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50"
    },
    {
        icon: Briefcase,
        title: "Job Referrals",
        description: "Direct referrals to open positions at top companies based on your skills and career goals.",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50"
    },
    {
        icon: Video,
        title: "Mock Interviews",
        description: "Practice with experienced interviewers and get feedback to improve your interviewing skills.",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50"
    },
    {
        icon: FileText,
        title: "Resume Reviews",
        description: "Professional resume review and optimization to help you stand out to recruiters.",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50"
    },
    {
        icon: TrendingUp,
        title: "Career Planning",
        description: "One-on-one career guidance to help you navigate your professional journey effectively.",
        color: "from-indigo-500 to-blue-500",
        bgColor: "bg-indigo-50"
    },
    {
        icon: Users,
        title: "Community Job Sharing",
        description: "Active community where members share job opportunities and career insights regularly.",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50"
    }
]

const placementProcess = [
    { step: "1", title: "Profile Building", description: "Complete your profile with skills, projects, and certifications", icon: Target },
    { step: "2", title: "Resume Optimization", description: "Get expert feedback and optimize your resume for ATS systems", icon: FileText },
    { step: "3", title: "Mock Interviews", description: "Practice with industry professionals and improve your skills", icon: Video },
    { step: "4", title: "Job Matching", description: "Get matched with relevant job openings from our partner network", icon: Building2 },
    { step: "5", title: "Interview Preparation", description: "Prepare specifically for companies interviewing you", icon: Briefcase },
    { step: "6", title: "Job Offers", description: "Receive and evaluate job offers with our guidance", icon: Rocket }
]

export default function PlacementPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-green-50/30">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-20 relative overflow-hidden -mt-24">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5">
                            <Briefcase className="w-3 h-3 mr-2 inline" />
                            100% Job Assistance
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight">
                            Land Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-teal-300">Dream Job</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            We don't just teach you skills — we help you land your dream job with comprehensive placement support, job referrals, and career guidance.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">100+</div>
                                <div className="text-sm text-white/70">Partner Companies</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">500+</div>
                                <div className="text-sm text-white/70">Students Placed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">85%</div>
                                <div className="text-sm text-white/70">Placement Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold">12 LPA</div>
                                <div className="text-sm text-white/70">Avg. Package</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features Grid */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            Comprehensive Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Support</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            End-to-end career support to help you succeed in your job search
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {placementFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 p-8 border-2 border-transparent hover:border-green-200`}>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20 bg-gradient-to-b from-green-50/50 to-white">
                <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            Our Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Process</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            A proven 6-step process to help you land your dream job
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-teal-500"></div>

                        <div className="space-y-12">
                            {placementProcess.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex gap-6 md:gap-10"
                                >
                                    {/* Step Number Circle */}
                                    <div className="flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl z-10">
                                        {item.step}
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center shrink-0">
                                                <item.icon className="w-6 h-6 text-green-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
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
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-12 md:p-16 text-white text-center shadow-2xl">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Rocket className="w-10 h-10 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                    Ready to Start Your Career Journey?
                                </h2>
                                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                    Join Weblearnai Trainings and get access to our comprehensive placement support with guaranteed interview opportunities
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-white text-green-600 hover:bg-gray-100 font-bold h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Apply Now
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
