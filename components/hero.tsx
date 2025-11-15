export default function Hero() {
    return (
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Exceptional Interiors,<br />Timeless Craftsmanship
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Transform your living spaces with bespoke interior design and premium carpentry solutions that reflect your unique style and values.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="/portfolio"
                        className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition"
                    >
                        View Our Work
                    </a>
                    <a
                        href="/contact"
                        className="px-8 py-3 bg-white/20 text-white font-medium rounded border border-white/40 hover:bg-white/30 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    )
}
