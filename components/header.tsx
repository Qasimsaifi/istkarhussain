'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">IH</span>
                        </div>
                        <span className="font-serif text-lg font-semibold text-foreground">Istkar Hussain</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-foreground hover:text-primary transition">Home</Link>
                        <Link href="/about" className="text-foreground hover:text-primary transition">About</Link>
                        <Link href="/portfolio" className="text-foreground hover:text-primary transition">Portfolio</Link>
                        <Link href="/gallery" className="text-foreground hover:text-primary transition">Gallery</Link>
                        <Link href="/services" className="text-foreground hover:text-primary transition">Services</Link>
                        <Link href="/contact" className="text-foreground hover:text-primary transition">Contact</Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground hover:text-primary transition"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <nav className="md:hidden pb-4 border-t border-border flex flex-col gap-4">
                        <Link href="/" className="text-foreground hover:text-primary transition py-2">Home</Link>
                        <Link href="/about" className="text-foreground hover:text-primary transition py-2">About</Link>
                        <Link href="/portfolio" className="text-foreground hover:text-primary transition py-2">Portfolio</Link>
                        <Link href="/gallery" className="text-foreground hover:text-primary transition py-2">Gallery</Link>
                        <Link href="/services" className="text-foreground hover:text-primary transition py-2">Services</Link>
                        <Link href="/contact" className="text-foreground hover:text-primary transition py-2">Contact</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}
