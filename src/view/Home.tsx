import AboutUs from "@/components/home/about-us"
import CardsPreview from "@/components/home/cards"
import CTA from "@/components/home/cta"
import Gallery from "@/components/home/gallery"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Testimonials from "@/components/home/testimonials"
import WhyChooseUs from "@/components/home/why-choose-us"
import SEO from "@/components/SEO"


export default function Home() {
    return (
        <>
            <SEO
                title="Home"
                description="Welcome to Bright Future Academy - Empowering students with quality education, innovative learning programs, and a nurturing environment for academic excellence."
                keywords="school, education, bright future academy, academy, learning, students, academic excellence"
            />
            <Hero />
            <CardsPreview />
            <AboutUs />
            <Services />
            <Gallery />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </>
    )
}