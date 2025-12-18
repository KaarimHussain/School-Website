import { motion } from "framer-motion";
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

    const contactCards = [
        {
            icon: MapPin,
            title: "Visit Us",
            content: "Grange interlink Summerville \n Road Bradford BD7 1PX",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-500"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "07828 594225\nMon - Fri : 7:30 AM - 6:00 PM",
            bgColor: "bg-pink-100",
            iconColor: "text-pink-500"
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "info@brightfuturechildcare.uk",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-500"
        }
    ];

    const formContent = (
        <form onSubmit={handleSubmit}>
            <div className={`${isDialog ? "p-0" : "min-h-screen w-full bg-white py-20 px-4 relative overflow-hidden"}`}>
                <div className={`${isDialog ? "max-w-full" : "max-w-7xl mx-auto relative z-10"}`}>
                    {/* Header */}
                    {!isDialog && (
                        <div className="text-center mb-16">
                            <motion.p
                                className="text-orange-400 text-sm font-medium mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                Get In Touch
                            </motion.p>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            >
                                Let's Start Your Child's Journey! 🚀
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                            >
                                Have questions? We'd love to hear from you! Fill out the form below and our friendly team will get back to you as soon as possible.
                            </motion.p>
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
                                {contactCards.map((card, index) => {
                                    const Icon = card.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-3xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1,
                                                ease: "easeOut"
                                            }}
                                        >
                                            <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                                                <Icon className={`w-8 h-8 ${card.iconColor}`} />
                                            </div>
                                            <h3 className="text-xl font-bold text-red-500 mb-2">{card.title}</h3>
                                            <p className="text-gray-600 text-sm whitespace-pre-line">
                                                {card.content}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Contact Form */}
                        <motion.div
                            className={isDialog ? "w-full" : "lg:col-span-2"}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        >
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
                        </motion.div>
                    </div>
                    <hr className="my-10" />
                    {!isDialog && (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                        >
                            <div className="inline-block bg-white">
                                <p className="text-gray-700 font-medium">
                                    🎨 Can't wait to meet your little one! 🌟
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </form>
    );

    return formContent;
}