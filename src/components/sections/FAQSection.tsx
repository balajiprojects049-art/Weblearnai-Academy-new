"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FAQItem {
    question: string
    answer: string
    category: string
}

const faqs: FAQItem[] = [
    {
        category: "Learning",
        question: "What if I miss a live class session?",
        answer: "Don't worry! All live sessions are recorded in HD and uploaded to your dashboard within 2 hours. You get lifetime access to these recordings, so you can watch them anytime, anywhere."
    },
    {
        category: "Access",
        question: "Can I access the course material on mobile?",
        answer: "Yes, our platform is fully responsive. You can watch lectures, read notes, and even track your progress from your smartphone or tablet."
    },
    {
        category: "Duration",
        question: "How much time do I need to commit daily?",
        answer: "We recommend dedicating 1-2 hours daily for optimal learning. However, the course is self-paced with flexible deadlines, allowing you to learn at your own convenience."
    },
    {
        category: "Certification",
        question: "Is the certificate industry recognized?",
        answer: "Absolutely! Our certificates are recognized by top tech companies. We also provide a unique verification URL for every certificate that you can add to your LinkedIn profile."
    },
    {
        category: "Prerequisites",
        question: "Do I need a technical background to join?",
        answer: "No prior coding experience is required for our beginner tracks. We start from the absolute basics. For advanced courses, specific prerequisites are listed on the course page."
    },
    {
        category: "Refunds",
        question: "What is your refund policy?",
        answer: "We offer a no-questions-asked 7-day money-back guarantee. If you don't find value in the course, simply email us and we'll process your refund instantly."
    }
]

function FAQCard({ faq, isOpen, onToggle, index }: { faq: FAQItem, isOpen: boolean, onToggle: () => void, index: number }) {
    return (
        <div
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'bg-white border-primary/30 shadow-lg scale-[1.01]'
                    : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-md'
                }`}
        >
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
                <div className="flex items-center gap-4">
                    <span className="text-primary/10 font-bold text-2xl hidden md:block">0{index + 1}</span>
                    <div>
                        <span className={`text-xs font-semibold uppercase tracking-wide mb-1 block transition-colors ${isOpen ? 'text-primary' : 'text-slate-400'}`}>
                            {faq.category}
                        </span>
                        <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                            {faq.question}
                        </h3>
                    </div>
                </div>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <ChevronDown className="h-5 w-5" />
                </div>
            </button>

            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 pl-6 md:pl-20 text-slate-600 leading-relaxed">
                    {faq.answer}
                </div>
            </div>
        </div>
    )
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-slate-50/50" id="faq">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-100 px-4 py-1 text-sm font-medium">
                        Support
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
                    </h2>

                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQCard
                            key={index}
                            index={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Support Card */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
                        <p className="text-slate-300 mb-6 max-w-md mx-auto">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 font-semibold">
                                Get in touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
