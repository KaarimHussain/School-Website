import ContactForm from "@/components/contact-form";
import HeroSection from "@/components/hero-section";

export default function Contact() {
    return (
        <>
            <div className="min-h-screen w-full">
                <HeroSection title="Contact Us" backgroundColor="bg-blue-500" />
                <ContactForm />
            </div>
        </>
    )
}