'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { X } from 'lucide-react'

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    const galleryImages = [
        {
            id: 1,
            image: '/gallery/1.jpg',
        },
        {
            id: 2,
            image: '/gallery/2.jpg',
        },

        {
            id: 4,
            image: '/gallery/4.jpg',
        },
        {
            id: 5,
            image: '/gallery/5.jpg',
        },
        {
            id: 6,
            image: '/gallery/6.jpg',
        },
        {
            id: 7,
            image: '/gallery/7.jpg',
        },
        {
            id: 8,
            image: '/gallery/8.jpg',
        },
        {
            id: 9,
            image: '/gallery/9.jpg',
        },
        {
            id: 10,
            image: '/gallery/10.jpg',
        },
        {
            id: 11,
            image: '/gallery/11.jpg',
        },
        {
            id: 12,
            image: '/gallery/12.jpg',
        },
        {
            id: 13,
            image: '/gallery/13.jpg',
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-20 bg-secondary">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold text-foreground mb-6 text-center">Photo Gallery</h1>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                        Discover our collection of beautifully crafted interior designs and carpentry work. Each project reflects our commitment to quality and excellence.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                onClick={() => setSelectedImage(index)}
                                className="cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                            >
                                <div className="relative h-64 bg-muted overflow-hidden">
                                    <img
                                        src={image.image || "/placeholder.svg"}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-primary transition"
                        >
                            <X size={32} />
                        </button>

                        {/* Image only */}
                        <img
                            src={galleryImages[selectedImage].image || "/placeholder.svg"}
                            alt={`Gallery image ${selectedImage + 1}`}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}
