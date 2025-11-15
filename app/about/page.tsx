import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <section className="py-20 bg-secondary">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="font-serif text-5xl font-bold text-foreground mb-12 text-center">About Istkar Hussain</h1>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <img
                                src="/portrait-designer-istkar.jpg"
                                alt="Istkar Hussain"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                                Crafting Spaces, Creating Experiences
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                                With over 15 years of experience in interior design and custom carpentry, Istkar Hussain has established himself as a leading designer in creating sophisticated, functional spaces that enhance quality of life.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                His approach combines meticulous attention to detail, sustainable design principles, and a deep understanding of how spaces should function to create interiors that are both beautiful and practical.
                            </p>
                        </div>
                    </div>

                    <div className="bg-secondary rounded-lg p-12 mb-16">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Philosophy & Approach</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Timeless Design</h3>
                                <p className="text-muted-foreground">Creating spaces that transcend trends and stand the test of time.</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Craftsmanship</h3>
                                <p className="text-muted-foreground">Emphasizing quality materials and expert construction in every project.</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">Client-Centric</h3>
                                <p className="text-muted-foreground">Listening deeply to understand your vision and bringing it to life.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Expertise & Specializations</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Residential Design</h3>
                                <p className="text-muted-foreground">Luxury apartments, homes, and private residences tailored to individual lifestyles.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Commercial Spaces</h3>
                                <p className="text-muted-foreground">Corporate offices, retail spaces, and hospitality environments.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Custom Carpentry</h3>
                                <p className="text-muted-foreground">Bespoke woodworking, built-ins, and architectural elements.</p>
                            </div>
                            <div className="border-l-4 border-primary pl-6">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Sustainable Design</h3>
                                <p className="text-muted-foreground">Eco-conscious material selection and environmentally responsible practices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
