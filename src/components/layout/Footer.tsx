"use client"

import Link from "next/link"
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
            <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="rounded-xl bg-gradient-to-br from-primary to-purple-600 p-2.5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold font-heading text-white tracking-tight group-hover:text-primary transition-colors">
                                Weblearnai
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Empowering learners worldwide with premium education, expert-led courses, and accessible digital resources. Join our community today.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold font-heading uppercase tracking-widest text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "All Courses", href: "/courses" },
                                { name: "Instructors", href: "/instructors" },
                                { name: "Certifications", href: "/certifications" },
                                { name: "Placement Support", href: "/placement" },
                                { name: "Learning Roadmap", href: "/roadmap" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold font-heading uppercase tracking-widest text-white">
                            Company
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "Privacy Policy", href: "/privacy" },
                                { name: "Terms of Service", href: "/terms" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold font-heading uppercase tracking-widest text-white">
                            Contact Us
                        </h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-3 text-slate-400 group">
                                <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                                    <MapPin className="h-4 w-4 text-primary" />
                                </div>
                                <span className="mt-1">Weblearnai Trainings<br />Hyderabad, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                                    <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <span>+91 99999 99999</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 group">
                                <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                                    <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <span className="hover:text-white transition-colors">contact@weblearnai.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-slate-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>&copy; 2025 Weblearnai Academy. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
