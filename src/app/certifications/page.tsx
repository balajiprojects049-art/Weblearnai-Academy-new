"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Cloud, Shield, BarChart, Briefcase, CheckCircle2, TrendingUp, Target, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const certificationCategories = [
    {
        category: "Cloud Certifications",
        icon: Cloud,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        iconBg: "bg-blue-100",
        certifications: [
            "Microsoft Azure Data Engineer Associate",
            "Microsoft Azure Administrator",
            "AWS Certified Solutions Architect",
            "Google Cloud Professional Data Engineer",
            "Databricks Certified Data Engineer Associate",
            "Databricks Certified Data Engineer Professional"
        ]
    },
    {
        category: "Project & Business Management",
        icon: Briefcase,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        iconBg: "bg-purple-100",
        certifications: [
            "PMP (Project Management Professional)",
            "Scrum Master Certification",
            "Agile Project Management",
            "PRINCE2 Foundation"
        ]
    },
    {
        category: "Business Intelligence Platforms",
        icon: BarChart,
        color: "from-orange-500 to-yellow-500",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        iconBg: "bg-orange-100",
        certifications: [
            "Microsoft Power BI Data Analyst",
            "Tableau Desktop Specialist",
            "Microsoft Power Apps Developer",
            "Microsoft Fabric Analytics Engineer"
        ]
    },
    {
        category: "Cybersecurity & Networking",
        icon: Shield,
        color: "from-red-500 to-pink-500",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        iconBg: "bg-red-100",
        certifications: [
            "CompTIA Security+",
            "CISSP (Certified Information Systems Security Professional)",
            "CEH (Certified Ethical Hacker)",
            "Azure Security Engineer Associate",
            "AWS Certified Security Specialty"
        ]
    }
]

export default function CertificationsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-amber-50/30">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-20 relative overflow-hidden -mt-24">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5">
                            <Award className="w-3 h-3 mr-2 inline" />
                            Industry-Recognized Certifications
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight">
                            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300">Certified</span> & Stand Out
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Earn certifications from Microsoft, AWS, Google Cloud, and other leading technology providers to validate your skills and advance your career.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">25+</div>
                                <div className="text-sm text-white/70">Certifications</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">95%</div>
                                <div className="text-sm text-white/70">Pass Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">3,000+</div>
                                <div className="text-sm text-white/70">Certified Students</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Certifications Grid */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {certificationCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 ${category.borderColor}`}>
                                    {/* Category Header with Gradient */}
                                    <div className={`${category.bgColor} p-8 border-b-2 ${category.borderColor}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <category.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold font-heading text-slate-900">{category.category}</h3>
                                                <p className="text-sm text-slate-600 mt-1">{category.certifications.length} Certifications Available</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Certifications List */}
                                    <div className="p-8">
                                        <ul className="space-y-4">
                                            {category.certifications.map((cert, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.5 + (idx * 0.05) }}
                                                    className="flex items-start gap-3 group/item"
                                                >
                                                    <div className="mt-0.5">
                                                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                                                    </div>
                                                    <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors leading-relaxed">{cert}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-20"
                    >
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
                                <p className="text-slate-600">Boost your career prospects with globally recognized certifications</p>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Higher Salary</h3>
                                <p className="text-slate-600">Certified professionals earn 20-30% more on average</p>
                            </div>
                            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-100">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                                <p className="text-slate-600">Stand out with credentials from top tech companies</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-20"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-12 text-white text-center shadow-2xl">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                    Ready to Get Certified?
                                </h2>
                                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                    Join our certification preparation programs with expert guidance, practice tests, and guaranteed success
                                </p>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="bg-white text-orange-600 hover:bg-gray-100 font-bold h-14 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                    >
                                        Enroll Now
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
