"use client"

import { useState } from "react"
import { books } from "@/data/books"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Book, Check, Download, CreditCard, Loader2 } from "lucide-react"

export default function BooksPage() {
    const [purchasedBookId, setPurchasedBookId] = useState<number | null>(null)
    const [isProcessing, setIsProcessing] = useState<number | null>(null)

    const handleBuy = async (id: number) => {
        setIsProcessing(id)
        // Mock Payment Delay
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsProcessing(null)
        setPurchasedBookId(id)
    }

    return (
        <div className="min-h-screen bg-muted/20 py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">Digital Library</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Premium ebooks to accelerate your learning.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
                    {books.map((book) => (
                        <Card key={book.id} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow border-primary/20 bg-background">
                            <div className="bg-gradient-to-br from-slate-100 to-slate-200 aspect-[16/9] flex items-center justify-center relative p-8">
                                {/* Mock Book Cover */}
                                <div className="w-24 h-32 bg-primary rounded shadow-2xl flex items-center justify-center text-primary-foreground font-bold text-center p-2 text-xs">
                                    {book.title}
                                </div>
                            </div>

                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold font-heading">{book.title}</h3>
                                        <p className="text-sm text-muted-foreground">By {book.author}</p>
                                    </div>
                                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200">
                                        ${book.price}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="flex-grow space-y-4">
                                <p className="text-muted-foreground">{book.description}</p>
                                <div className="flex gap-4 text-sm font-medium text-slate-600">
                                    <div className="flex items-center gap-1"><Book className="h-4 w-4" /> {book.pages} Pages</div>
                                    <div className="flex items-center gap-1"><Badge variant="outline" className="h-5">PDF</Badge></div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-0 pb-6">
                                {purchasedBookId === book.id ? (
                                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                                        <Download className="mr-2 h-4 w-4" /> Download PDF
                                    </Button>
                                ) : (
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={() => handleBuy(book.id)}
                                        disabled={isProcessing === book.id}
                                    >
                                        {isProcessing === book.id ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CreditCard className="mr-2 h-4 w-4" />}
                                        {isProcessing === book.id ? "Processing..." : "Buy Now"}
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Trust features */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                    <div className="p-4">
                        <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                            <Download className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold mb-2">Instant Download</h4>
                        <p className="text-sm text-muted-foreground">Access your files immediately after secure payment.</p>
                    </div>
                    <div className="p-4">
                        <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                            <Check className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold mb-2">Lifetime Access</h4>
                        <p className="text-sm text-muted-foreground">Pay once, own it forever. Free updates included.</p>
                    </div>
                    <div className="p-4">
                        <div className="mx-auto h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                            <CreditCard className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold mb-2">Secure Payment</h4>
                        <p className="text-sm text-muted-foreground">Encrypted transactions via Stripe/Razorpay.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
