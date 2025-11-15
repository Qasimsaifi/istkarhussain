import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Interior Design Consultation',
      description: 'Initial consultation to understand your vision, needs, and aesthetic preferences. We review your space and create a customized design strategy.',
      features: ['Space assessment', 'Design concept development', 'Mood board creation', 'Budget planning'],
    },
    {
      title: 'Custom Carpentry & Woodworking',
      description: 'Bespoke woodworking solutions including built-in cabinetry, architectural elements, and custom furniture design.',
      features: ['Built-in cabinetry', 'Custom furniture', 'Architectural millwork', 'Restoration work'],
    },
    {
      title: 'Space Planning & Layout',
      description: 'Strategic planning to optimize your space for functionality, flow, and visual impact. Includes 2D and 3D renderings.',
      features: ['Floor plans', '3D renderings', 'Traffic flow analysis', 'Furniture layout'],
    },
    {
      title: 'Material Selection & Sourcing',
      description: 'Expert guidance on selecting premium materials, finishes, and furnishings that align with your design vision and budget.',
      features: ['Material sourcing', 'Finish selection', 'Supplier relationships', 'Quality assurance'],
    },
    {
      title: 'Project Management',
      description: 'Complete oversight from concept through installation. We manage contractors, timelines, and budgets to ensure smooth project delivery.',
      features: ['Timeline management', 'Budget control', 'Contractor coordination', 'Quality oversight'],
    },
    {
      title: 'Installation & Styling',
      description: 'Professional installation services and final styling to bring your design vision to life beautifully.',
      features: ['Installation supervision', 'Styling & staging', 'Art placement', 'Final touches'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl font-bold text-foreground mb-6 text-center">Our Services</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Comprehensive interior design and carpentry services tailored to your unique needs and vision.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
