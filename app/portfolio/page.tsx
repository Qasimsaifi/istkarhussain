'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Apartment',
      category: 'residential',
      image: '/luxury-apartment-interior.png',
      description: 'Contemporary apartment with custom cabinetry and refined aesthetics.',
    },
    {
      id: 2,
      title: 'Executive Office Suite',
      category: 'commercial',
      image: '/modern-executive-office.jpg',
      description: 'Professional workspace combining functionality with sophisticated design.',
    },
    {
      id: 3,
      title: 'Coastal Villa Renovation',
      category: 'residential',
      image: '/coastal-home-interior.png',
      description: 'Complete interior renovation with ocean views and natural materials.',
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'hospitality',
      image: '/luxury-hotel-lobby-design.jpg',
      description: 'Welcoming entrance space with custom architectural elements.',
    },
    {
      id: 5,
      title: 'Downtown Loft',
      category: 'residential',
      image: '/industrial-loft-interior.jpg',
      description: 'Industrial chic loft with custom woodworking and open floor plan.',
    },
    {
      id: 6,
      title: 'Retail Showroom',
      category: 'commercial',
      image: '/modern-retail-showroom.jpg',
      description: 'High-end retail space with bespoke display and lighting design.',
    },
    {
      id: 7,
      title: 'Private Residence Kitchen',
      category: 'residential',
      image: '/luxury-kitchen.png',
      description: 'Custom kitchen design with premium appliances and materials.',
    },
    {
      id: 8,
      title: 'Restaurant Interior',
      category: 'hospitality',
      image: '/fine-dining-interior.png',
      description: 'Elegant dining space with ambient lighting and custom carpentry.',
    },
  ]

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'hospitality', label: 'Hospitality' },
  ]

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-6 text-center">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Explore our diverse collection of interior design and carpentry projects showcasing our expertise and creativity.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded font-medium transition ${
                  activeFilter === filter.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-primary/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 bg-card">
                  <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
