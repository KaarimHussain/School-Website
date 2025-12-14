import AboutUs from "@/components/home/about-us"
import CardsPreview from "@/components/home/cards"
import CTA from "@/components/home/cta"
import Gallery from "@/components/home/gallery"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Testimonials from "@/components/home/testimonials"
import WhyChooseUs from "@/components/home/why-choose-us"


export default function Home() {
    return (
        <>
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