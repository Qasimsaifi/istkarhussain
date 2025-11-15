'use client'

import { MessageCircle, Phone } from 'lucide-react'

interface ContactButtonsProps {
    phoneNumber?: string
    whatsappNumber?: string
}

export default function ContactButtons({
    phoneNumber = "+91 9711894434",
    whatsappNumber = "+91 9711894434"
}: ContactButtonsProps) {
    const whatsappMessage = "Hi! I'm interested in your interior design and carpentry services."
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    const phoneLink = `tel:${phoneNumber}`

    return (
        <div className="flex gap-3">
            <a
                href={phoneLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition"
                aria-label="Call us"
            >
                <Phone size={20} />
                <span>Call Now</span>
            </a>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
            </a>
        </div>
    )
}
