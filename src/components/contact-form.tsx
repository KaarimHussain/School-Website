import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";

interface ContactFormProps {
    isDialog?: boolean;
    onSuccess?: () => void;
}

export default function ContactForm({ isDialog = false, onSuccess }: ContactFormProps) {
    const [formData, setFormData] = useState({
        parentName: "",
        childName: "",
        email: "",
        phone: "",
        childAge: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.parentName || !formData.childName || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill in all required fields!");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing. Please check your .env file.");
            }

            // Prepare template parameters
            const templateParams = {
                from_name: formData.parentName,
                child_name: formData.childName,
                from_email: formData.email,
                phone: formData.phone,
                child_age: formData.childAge || "Not specified",
                message: formData.message,
            };

            // Send email using EmailJS
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus("success");

            // Reset form
            setFormData({
                parentName: "",
                childName: "",
                email: "",
                phone: "",
                childAge: "",
                message: ""
            });

            // Show success message
            alert("Thank you! We'll get back to you soon! 🎉");

            // Close dialog if in dialog mode
            if (isDialog && onSuccess) {
                setTimeout(() => {
                    onSuccess();
                }, 500);
            }

        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
            alert("Oops! Something went wrong. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const formContent = (
        <form onSubmit={handleSubmit}>
            <div className={`${isDialog ? "p-0" : "min-h-screen w-full bg-white py-20 px-4 relative overflow-hidden"}`}>
                <div className={`${isDialog ? "max-w-full" : "max-w-7xl mx-auto relative z-10"}`}>
                    {/* Header */}
                    {!isDialog && (
                        <div className="text-center mb-16">
                            <p className="text-orange-400 text-sm font-medium mb-2">Get In Touch</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
                                Let's Start Your Child's Journey! 🚀
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Have questions? We'd love to hear from you! Fill out the form below and our friendly team will get back to you as soon as possible.
                            </p>
                        </div>
                    )}

                    {isDialog && (
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-red-500 mb-2">Contact Us</h3>
                            <p className="text-gray-600 text-sm">
                                Fill out the form below and we'll get back to you soon!
                            </p>
                        </div>
                    )}

                    <div className={`grid grid-cols-1 ${isDialog ? "" : "lg:grid-cols-3"} gap-8`}>
                        {/* Contact Info Cards - Only show on full page */}
                        {!isDialog && (
                            <div className="lg:col-span-1 space-y-6">
                                {/* Address Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                                        <MapPin className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-red-500 mb-2">Visit Us</h3>
                                    <p className="text-gray-600 text-sm">
                                        123 Sunshine Street<br />
                                        Kidsville, KD 12345
                                    </p>
                                </div>

                                {/* Phone Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Phone className="w-8 h-8 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-red-500 mb-2">Call Us</h3>
                                    <p className="text-gray-600 text-sm">
                                        +1 (555) 123-4567<br />
                                        Mon - Fri, 8AM - 6PM
                                    </p>
                                </div>

                                {/* Email Card */}
                                <div className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Mail className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-red-500 mb-2">Email Us</h3>
                                    <p className="text-gray-600 text-sm">
                                        hello@brightfuture.edu<br />
                                        info@brightfuture.edu
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Contact Form */}
                        <div className={isDialog ? "w-full" : "lg:col-span-2"}>
                            <div className={`${isDialog ? "bg-transparent" : "bg-white rounded-3xl p-8 md:p-10 shadow-xl"}`}>
                                {!isDialog && (
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-red-500 mb-2 flex items-center gap-2">Send us a Message <Mail /></h3>
                                        <p className="text-gray-500">We'll respond within 24 hours!</p>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Parent Name */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Parent's Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="parentName"
                                                value={formData.parentName}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Child Name */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Child's Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="childName"
                                                value={formData.childName}
                                                onChange={handleChange}
                                                placeholder="Enter child's name"
                                                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-pink-400 focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-orange-400 focus:outline-none transition-colors"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-cyan-400 focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Child Age */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Child's Age
                                        </label>
                                        <select
                                            name="childAge"
                                            value={formData.childAge}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-400 focus:outline-none transition-colors"
                                        >
                                            <option value="">Select age range</option>
                                            <option value="1-2">1-2 years</option>
                                            <option value="3-4">3-4 years</option>
                                            <option value="5-6">5-6 years</option>
                                            <option value="7+">7+ years</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your child and what you're looking for..."
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-red-400 focus:outline-none transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex gap-3">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto bg-red-500 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-6 rounded-full text-lg transition-all duration-300 transform shadow-lg flex items-center justify-center gap-3"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin">⏳</span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                        {isDialog && submitStatus === "success" && (
                                            <DialogClose asChild>
                                                <button
                                                    type="button"
                                                    className="px-6 py-4 rounded-full text-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors"
                                                >
                                                    Close
                                                </button>
                                            </DialogClose>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!isDialog && (
                        <div className="mt-12 text-center">
                            <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
                                <p className="text-gray-700 font-medium">
                                    🎨 Can't wait to meet your little one! 🌟
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </form>
    );

    return formContent;
}