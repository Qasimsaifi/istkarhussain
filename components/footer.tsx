import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-foreground text-primary-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                                <span className="font-bold text-sm">IH</span>
                            </div>
                            <span className="font-serif font-semibold">Istkar Hussain</span>
                        </div>
                        <p className="text-primary-foreground/70 text-sm">
                            Premium interior design and carpentry solutions for extraordinary spaces.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2 text-sm">
                            <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition">Home</Link>
                            <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition block">About</Link>
                            <Link href="/portfolio" className="text-primary-foreground/70 hover:text-primary-foreground transition block">Portfolio</Link>
                            <Link href="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition block">Services</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <div className="space-y-2 text-sm">
                            <p className="text-primary-foreground/70">Interior Design</p>
                            <p className="text-primary-foreground/70">Custom Carpentry</p>
                            <p className="text-primary-foreground/70">Space Planning</p>
                            <p className="text-primary-foreground/70">Project Management</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-3 text-sm">
                            <p className="text-primary-foreground/70">Email: info@istkarhussain.com</p>
                            <p className="text-primary-foreground/70">Phone: +91 9711894434</p>
                            <p className="text-primary-foreground/70 mb-4">Based in M - 193 Shakurpur Delhi</p>
                            <div className="flex gap-2">
                                <a
                                    href="tel:+91 9711894434"
                                    className="flex items-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 rounded transition text-xs"
                                    aria-label="Call us"
                                >
                                    <Phone size={14} />
                                    Call
                                </a>
                                <a
                                    href="https://wa.me/919711894434?text=Hi!%20I'm%20interested%20in%20your%20interior%20design%20and%20carpentry%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 rounded transition text-xs"
                                    aria-label="Chat on WhatsApp"
                                >
                                    <MessageCircle size={14} />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
                    <p>&copy; 2025 Istkar Hussain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
