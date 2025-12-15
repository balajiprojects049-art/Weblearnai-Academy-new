"use client"

import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2, Plus, Minus, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

declare global {
    interface Window {
        Razorpay: any
    }
}

export function CartDrawer() {
    const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart()
    const [isOpen, setIsOpen] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script")
            script.src = "https://checkout.razorpay.com/v1/checkout.js"
            script.onload = () => resolve(true)
            script.onerror = () => resolve(false)
            document.body.appendChild(script)
        })
    }

    const handleCheckout = async () => {
        setIsProcessing(true)

        // Load Razorpay script
        const res = await loadRazorpayScript()
        if (!res) {
            alert("Razorpay SDK failed to load. Please check your internet connection.")
            setIsProcessing(false)
            return
        }

        // Razorpay options
        const options = {
            key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
            amount: Math.round(totalPrice * 100), // Amount in paise
            currency: "INR",
            name: "Weblearnai Academy",
            description: `Purchase of ${totalItems} item(s)`,
            image: "/logo.png",
            handler: function (response: any) {
                // Payment successful
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
                clearCart()
                setIsOpen(false)

                // Here you would typically:
                // 1. Send payment details to your backend
                // 2. Verify payment signature
                // 3. Generate course/book access
                // 4. Send confirmation email
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            notes: {
                items: JSON.stringify(items.map(item => ({
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity
                })))
            },
            theme: {
                color: "#A855F7" // Purple color matching your theme
            },
            modal: {
                ondismiss: function () {
                    setIsProcessing(false)
                }
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        setIsProcessing(false)
    }

    return (
        <>
            {/* Cart Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-40 right-6 z-40 bg-gradient-to-r from-primary to-accent text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform"
            >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                        {totalItems}
                    </span>
                )}
            </button>

            {/* Cart Drawer */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300">
                        {/* Header */}
                        <div className="p-6 border-b flex items-center justify-between bg-gradient-to-r from-primary/10 to-accent/10">
                            <h2 className="text-2xl font-bold">Shopping Cart</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/50 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                                    <p className="text-muted-foreground">Your cart is empty</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={`${item.type}-${item.id}`} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                                            {/* Item Image */}
                                            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">
                                                    {item.type === "book" ? "📚" : "💻"}
                                                </span>
                                            </div>

                                            {/* Item Details */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                                                <p className="text-primary font-bold mt-1">₹{item.price.toFixed(2)}</p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors h-fit"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t p-6 space-y-4 bg-gray-50">
                                <div className="flex items-center justify-between text-lg font-bold">
                                    <span>Total:</span>
                                    <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
                                </div>

                                <Button
                                    onClick={handleCheckout}
                                    disabled={isProcessing}
                                    className="w-full gradient-primary text-lg py-6"
                                >
                                    {isProcessing ? "Processing..." : "Proceed to Pay"}
                                </Button>

                                <Button
                                    onClick={clearCart}
                                    variant="outline"
                                    className="w-full"
                                >
                                    Clear Cart
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    )
}
