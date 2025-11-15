'use client'

import { MessageCircle, Phone, X } from 'lucide-react'
import { useState } from 'react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+1 (555) 123-4567"
  const whatsappNumber = "+1 (555) 123-4567"
  
  const whatsappMessage = "Hi! I'm interested in your interior design and carpentry services."
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
  const phoneLink = `tel:${phoneNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-4 min-w-max">
          <a
            href={phoneLink}
            className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary rounded transition mb-2"
            aria-label="Call us"
          >
            <Phone size={20} className="text-primary" />
            <span className="text-sm font-medium">Call Now</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-secondary rounded transition"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={20} className="text-green-600" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition"
        aria-label="Open contact options"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
