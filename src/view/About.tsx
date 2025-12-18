import AboutUs from "@/components/about/About-Us";
import OurTeacher from "@/components/about/Our-Teachers";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import SEO from "@/components/SEO";

export default function About() {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn more about Bright Future Academy's mission, our dedicated teachers, and our commitment to providing a holistic and supportive educational experience."
                keywords="about school, school mission, dedicated teachers, educational values, bright future academy"
            />
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