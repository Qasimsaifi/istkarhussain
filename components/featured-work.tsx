export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Apartment',
      category: 'Residential',
      image: '/luxury-apartment-interior.png',
    },
    {
      id: 2,
      title: 'Contemporary Office Space',
      category: 'Commercial',
      image: '/modern-office.png',
    },
    {
      id: 3,
      title: 'Coastal Retreat Villa',
      category: 'Residential',
      image: '/coastal-villa-interior.jpg',
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby',
      category: 'Hospitality',
      image: '/luxury-hotel-lobby.png',
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of our most distinctive interior design and carpentry projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/portfolio"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
