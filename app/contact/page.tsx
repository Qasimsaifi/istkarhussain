'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactButtons from '@/components/contact-buttons'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-20 bg-secondary">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold text-foreground mb-6 text-center">Get In Touch</h1>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                        Have a project in mind? Let's collaborate to create something extraordinary.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-card rounded-lg p-8 border border-border text-center">
                            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Email</h3>
                            <p className="text-muted-foreground">info@istkarhussain.com</p>
                        </div>
                        <div className="bg-card rounded-lg p-8 border border-border text-center">
                            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Phone</h3>
                            <p className="text-muted-foreground">+91 9711894434</p>
                            <div className="mt-4">
                                <ContactButtons />
                            </div>
                        </div>
                        <div className="bg-card rounded-lg p-8 border border-border text-center">
                            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Location</h3>
                            <p className="text-muted-foreground">M - 193 Shakurpur Delhi</p>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg p-12 border border-border max-w-2xl mx-auto">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Project Type
                                </label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Select a project type</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="hospitality">Hospitality</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
