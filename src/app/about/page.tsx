import { Button } from "@/components/ui/button"
import { Users, Target, Globe } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "About Us - Weblearnai Academy",
    description: "Learn more about our mission to democratize education."
}

export default function AboutPage() {
    return (
        <div className="bg-background">
            <div className="bg-primary text-primary-foreground py-20 text-center">
                <h1 className="text-4xl font-extrabold font-heading tracking-tight sm:text-5xl">Empowering the Future</h1>
                <p className="mt-4 text-xl max-w-2xl mx-auto opacity-90">We are on a mission to make world-class education accessible to everyone, everywhere.</p>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">

                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-heading">Our Story</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Founded in 2023, Weblearnai Academy started with a simple idea: Skills matter more than degrees. We observed a gap between traditional education and industry demands.
                            By collaborating with top tech experts, we created a curriculum that is practical, up-to-date, and focused on employability.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Today, we have helped over 10,000 students launch their careers in software development, design, and digital marketing.
                        </p>
                    </div>
                    <div className="bg-muted aspect-video rounded-xl flex items-center justify-center">
                        {/* Placeholder */}
                        <span className="text-muted-foreground">Team Office Image</span>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold font-heading mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Practicality</h3>
                            <p className="text-muted-foreground">We focus on what works in the real world, not just theory.</p>
                        </div>
                        <div className="p-6 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Community</h3>
                            <p className="text-muted-foreground">Learning is better together. We foster a supportive environment.</p>
                        </div>
                        <div className="p-6 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="mx-auto h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                            <p className="text-muted-foreground">Education should be affordable and within reach for all.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Join Our Team</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        We are always looking for passionate educators and creators. If you want to make a difference, we'd love to hear from you.
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </section>

            </div>
        </div>
    )
}
