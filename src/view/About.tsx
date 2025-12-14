import AboutUs from "@/components/about/About-Us";
import OurTeacher from "@/components/about/Our-Teachers";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function About() {
    return (
        <>
            <div className="min-h-screen w-full">
                <HeroSection title="About Us" />
                <AboutUs />
                <WhyChooseUs />
                <Testimonials />
                <OurTeacher />
            </div>
        </>
    )
}