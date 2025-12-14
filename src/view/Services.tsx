import HeroSection from "@/components/hero-section";
import OurServices from "@/components/services/Our-Services";
import ServicesFromHome from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";

export default function Services() {
    return (
        <>
            <div className="min-h-screen w-full">
                <HeroSection title="Our Services" backgroundColor="bg-red-500" />
                <OurServices />
                <ServicesFromHome />
                <Testimonials />
            </div>
        </>
    )
}