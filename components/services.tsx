export default function Services() {
  const services = [
    {
      title: 'Interior Design Consultation',
      description: 'Personalized design consultations to create spaces that reflect your lifestyle and aesthetic preferences.',
      icon: '🎨',
    },
    {
      title: 'Custom Carpentry',
      description: 'Bespoke woodworking and carpentry solutions including built-ins, cabinetry, and architectural elements.',
      icon: '🔨',
    },
    {
      title: 'Space Planning',
      description: 'Strategic layout design and space optimization to maximize functionality and visual flow.',
      icon: '📐',
    },
    {
      title: 'Material Selection',
      description: 'Expert guidance on selecting premium materials, finishes, and furnishings for your project.',
      icon: '🎯',
    },
    {
      title: 'Project Management',
      description: 'Complete project oversight from concept through completion with attention to timeline and budget.',
      icon: '✓',
    },
    {
      title: 'Installation & Styling',
      description: 'Professional installation and styling services to bring your vision to life beautifully.',
      icon: '✨',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design and carpentry solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
