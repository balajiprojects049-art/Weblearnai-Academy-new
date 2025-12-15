"use client"

import { useState } from "react"
import { FaInstagram, FaWhatsapp, FaTelegramPlane, FaYoutube } from "react-icons/fa"
import { WhatsAppChatWidget } from "./WhatsAppChatWidget"

export function StickySidebar() {
    const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false)

    return (
        <>
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2">

                {/* Enquire Now Button */}
                {/* Visual Style: Teal, Vertically oriented text, Rounded corners on left */}
                <button
                    className="bg-[#2A8680] text-white font-bold tracking-wide py-8 px-3 rounded-l-xl shadow-lg hover:bg-[#236e69] transition-colors leading-none border-none"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    Enquire Now
                </button>

                {/* Social Icons Strip */}
                {/* Visual Style: Light Blue, Rounded corners on left, Stacked icons */}
                <div className="bg-[#D0E4F5] rounded-l-xl py-4 px-2.5 flex flex-col gap-5 shadow-lg items-center w-[50px]">

                    {/* Instagram - Official Brand Colors & Icon */}
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] flex items-center justify-center shadow-md text-white">
                            <FaInstagram className="w-5 h-5" />
                        </div>
                    </a>

                    {/* WhatsApp - Opens Chat Widget */}
                    <button
                        onClick={() => setIsWhatsAppOpen(true)}
                        className="hover:scale-110 transition-transform"
                    >
                        <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-md text-white">
                            <FaWhatsapp className="w-5 h-5" />
                        </div>
                    </button>

                    {/* Telegram - Official Brand Icon */}
                    <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <div className="w-9 h-9 rounded-full bg-[#0088cc] flex items-center justify-center shadow-md text-white">
                            <FaTelegramPlane className="w-5 h-5" />
                        </div>
                    </a>

                    {/* YouTube - Official Brand Icon */}
                    <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <div className="w-9 h-9 rounded-full bg-[#FF0000] flex items-center justify-center shadow-md text-white">
                            <FaYoutube className="w-6 h-6" />
                        </div>
                    </a>

                </div>

            </div>

            {/* Floating WhatsApp Button - Bottom Right Corner */}
            <button
                onClick={() => setIsWhatsAppOpen(true)}
                className="fixed z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-pulse"
                style={{ bottom: '1.5rem', right: '1.5rem', position: 'fixed' }}
                aria-label="Open WhatsApp Chat"
            >
                <FaWhatsapp className="w-7 h-7" />
            </button>

            {/* WhatsApp Chat Widget Popup */}
            <WhatsAppChatWidget
                isOpen={isWhatsAppOpen}
                onClose={() => setIsWhatsAppOpen(false)}
                businessName="Weblearnai Academy"
                phoneNumber="1234567890"
                message="Hi, I'm interested in learning more about your courses. Can you help me?"
            />
        </>
    )
}
