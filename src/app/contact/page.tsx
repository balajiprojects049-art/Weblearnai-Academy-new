"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const contactMethods = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: ["Weblearnai Trainings", "Hyderabad, Telangana, India"],
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50"
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+91 99999 99999", "Mon-Fri 9am-8pm IST"],
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50"
    },
    {
        icon: Mail,
        title: "Email Us",
        details: ["contact@weblearnai.com", "support@weblearnai.com"],
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50"
    }
]

const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, name: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, name: "Instagram", color: "hover:bg-pink-600" }
]

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-purple-50/30">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-fuchsia-900 text-white relative overflow-hidden -mt-24">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5">
                            <MessageCircle className="w-3 h-3 mr-2 inline" />
                            We're Here to Help
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-300">Touch</span>
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Have questions about our courses, placement support, or enrollment? We'd love to hear from you and help you start your learning journey.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold">&lt;24hrs</div>
                                <div className="text-sm text-white/70">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">24/7</div>
                                <div className="text-sm text-white/70">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">100%</div>
                                <div className="text-sm text-white/70">Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Methods Grid */}
            <section className="py-20">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 -mt-24 mb-20 relative z-50">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border-2 border-slate-100">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 shadow-lg`}>
                                        <method.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">{method.title}</h3>
                                    {method.details.map((detail, idx) => (
                                        <p key={idx} className={`${idx === 0 ? 'text-slate-900 font-medium' : 'text-slate-600 text-sm'}`}>
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Form and Info Grid */}
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form - Takes 3 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold font-heading mb-3 text-slate-900">
                                        Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Message</span>
                                    </h2>
                                    <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 99999 99999"
                                            className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject *</Label>
                                        <Input
                                            id="subject"
                                            placeholder="Course inquiry, Enrollment, Support..."
                                            className="h-12 border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-semibold text-slate-700">Message *</Label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[150px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full h-14 gradient-primary text-white font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all text-base"
                                    >
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Sidebar Info - Takes 2 columns */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            {/* Office Hours */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Office Hours</h3>
                                </div>
                                <div className="space-y-3 text-slate-700">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Monday - Friday</span>
                                        <span className="text-slate-600">9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Saturday</span>
                                        <span className="text-slate-600">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Sunday</span>
                                        <span className="text-slate-600">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                                <h3 className="text-xl font-bold mb-6 text-slate-900">Follow Us</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r from-purple-500 to-pink-500 text-slate-700 hover:text-white transition-all duration-300 group"
                                        >
                                            <social.icon className="w-5 h-5" />
                                            <span className="font-medium text-sm">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick CTA */}
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white shadow-2xl">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-3">Need Immediate Help?</h3>
                                    <p className="text-white/80 mb-6">Schedule a free consultation call with our admission team</p>
                                    <Button
                                        className="w-full bg-white text-purple-600 hover:bg-slate-100 font-bold h-12 rounded-full shadow-lg"
                                    >
                                        Book a Call
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
