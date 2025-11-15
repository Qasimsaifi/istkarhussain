export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
          Let's collaborate to create an interior that's uniquely yours. Contact us today to discuss your project.
        </p>
        <a
          href="/contact"
          className="px-10 py-4 bg-primary-foreground text-primary font-medium rounded hover:bg-primary-foreground/90 transition inline-block"
        >
          Start Your Project
        </a>
      </div>
    </section>
  )
}
