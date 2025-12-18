import HeroSection from "@/components/hero-section";
import OurServices from "@/components/services/Our-Services";
import ServicesFromHome from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import SEO from "@/components/SEO";

export default function Services() {
    return (
        <>
            <SEO
                title="Our Services"
                description="Explore the wide range of educational services and programs offered at Bright Future Academy, from primary education to specialized extra-curricular activities."
                keywords="educational services, primary education, extra-curricular activities, school programs, bright future academy"
            />
            <div className="min-h-screen w-full">
                <HeroSection title="Our Services" backgroundColor="bg-red-500" />
                <OurServices />
                <ServicesFromHome />
                <Testimonials />
            </div>
        </>
    )
}