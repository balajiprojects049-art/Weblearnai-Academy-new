"use client"

import { Badge } from "@/components/ui/badge"
import {
    FaPython,
    FaGithub,
    FaMicrosoft,
    FaDatabase
} from "react-icons/fa"
import {
    BsBarChartFill,
    BsShieldLockFill,
    BsCloudCheckFill,
    BsCpuFill
} from "react-icons/bs"
import {
    Database,
    Layers,
    Workflow,
    Boxes,
    Cloud
} from "lucide-react"

const techStack = [
    {
        name: "Azure Data Factory",
        description: "Cloud-based ETL and data integration service",
        Icon: BsCloudCheckFill,
        bgColor: "bg-blue-500",
        iconColor: "text-white"
    },
    {
        name: "Azure Databricks",
        description: "Apache Spark-based analytics platform",
        Icon: FaDatabase,
        bgColor: "bg-orange-600",
        iconColor: "text-white"
    },
    {
        name: "Microsoft Fabric",
        description: "Unified analytics platform",
        Icon: FaMicrosoft,
        bgColor: "bg-purple-600",
        iconColor: "text-white"
    },
    {
        name: "Unity Catalog",
        description: "Unified governance for data and AI",
        Icon: Database,
        bgColor: "bg-green-600",
        iconColor: "text-white"
    },
    {
        name: "Delta Lake",
        description: "Open-source storage framework",
        Icon: Layers,
        bgColor: "bg-cyan-500",
        iconColor: "text-white"
    },
    {
        name: "Power BI",
        description: "Business analytics and visualization",
        Icon: BsBarChartFill,
        bgColor: "bg-yellow-500",
        iconColor: "text-gray-900"
    },
    {
        name: "Power Apps",
        description: "Low-code app development",
        Icon: FaMicrosoft,
        bgColor: "bg-purple-600",
        iconColor: "text-white"
    },
    {
        name: "GitHub",
        description: "Version control and collaboration",
        Icon: FaGithub,
        bgColor: "bg-gray-800",
        iconColor: "text-white"
    },
    {
        name: "Apache Airflow",
        description: "Workflow orchestration platform",
        Icon: Workflow,
        bgColor: "bg-teal-600",
        iconColor: "text-white"
    },
    {
        name: "SQL",
        description: "Structured query language",
        Icon: FaDatabase,
        bgColor: "bg-indigo-600",
        iconColor: "text-white"
    },
    {
        name: "Python",
        description: "General-purpose programming",
        Icon: FaPython,
        bgColor: "bg-blue-500",
        iconColor: "text-yellow-400"
    },
    {
        name: "Gen AI with Python",
        description: "Generative AI programming",
        Icon: BsCpuFill,
        bgColor: "bg-pink-600",
        iconColor: "text-white"
    },
    {
        name: "Cybersecurity",
        description: "Security fundamentals and practices",
        Icon: BsShieldLockFill,
        bgColor: "bg-red-600",
        iconColor: "text-white"
    },
]

export function TechStackSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="text-sm px-4 py-1">
                        Technology Stack
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">
                        What You'll <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Learn</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Master industry-standard tools and technologies used by top companies worldwide
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden card-hover"
                        >
                            <div className="relative z-10">
                                {/* Icon with Real Brand Logo */}
                                <div className={`w-16 h-16 rounded-xl ${tech.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                                    <tech.Icon className={`w-8 h-8 ${tech.iconColor}`} />
                                </div>

                                {/* Tech Name */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {tech.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
