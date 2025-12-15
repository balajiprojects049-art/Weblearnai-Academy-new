"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { X } from "lucide-react"

interface WhatsAppChatWidgetProps {
    isOpen: boolean
    onClose: () => void
    businessName?: string
    phoneNumber: string
    message?: string
}

export function WhatsAppChatWidget({
    isOpen,
    onClose,
    businessName = "Weblearnai Academy",
    phoneNumber,
    message = "Hi, I'm interested in learning more about your courses. Can you help me?"
}: WhatsAppChatWidgetProps) {

    const handleStartChat = () => {
        // WhatsApp API format: https://wa.me/<phone_number>?text=<message>
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    if (!isOpen) return null

    return (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] sm:w-[360px] animate-in slide-in-from-bottom-5 duration-300">
            {/* Chat Widget Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-[#2A8680] text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <FaWhatsapp className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base">{businessName}</h3>
                            <p className="text-xs text-white/90">Online</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="hover:bg-white/20 p-1 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Chat Body */}
                <div className="p-4 bg-gray-50 min-h-[160px] flex items-center">
                    <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[85%]">
                        <p className="text-sm text-gray-600 font-medium mb-1">{businessName}</p>
                        <p className="text-gray-800">Hi,</p>
                        <p className="text-gray-800">How can I help you?</p>
                    </div>
                </div>

                {/* Footer / CTA */}
                <div className="p-4 bg-white border-t">
                    <button
                        onClick={handleStartChat}
                        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg"
                    >
                        <FaWhatsapp className="w-5 h-5" />
                        Start Chat
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-2">
                        Powered by WhatsApp Business
                    </p>
                </div>

            </div>
        </div>
    )
}
