import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero-section";
import SEO from "@/components/SEO";

export default function Contact() {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Bright Future Academy. Reach out for admissions, inquiries, or visit our campus. We are here to help you and your child's educational journey."
                keywords="contact school, school admissions, inquiry, visit campus, bright future academy"
            />
            <div className="min-h-screen w-full">
                <HeroSection title="Contact Us" backgroundColor="bg-blue-500" />
                <ContactForm />
            </div>
        </>
    )
}