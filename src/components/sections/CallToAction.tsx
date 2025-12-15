"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
    return (
        <section className="py-16 md:py-24 bg-primary">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
                <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">Ready to Start Your Journey?</h2>
                <p className="mt-4 text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                    Get unlimited access to over 100+ expert-led courses and start building your future today.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="secondary" className="text-primary font-bold">
                        Get Started Now
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Download Course Syllabus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
