import { motion } from "framer-motion";
import AboutUsImage from "@/assets/image/About-US.jpg"
import AboutToyImage from "@/assets/image/About-Toys.png";

import { Check } from "lucide-react";
import { Button } from "../ui/button";

const features = [
    "Nurturing Environment",
    "Experienced Teachers",
    "Safe & Caring",
    "Creative Learning",
    "Parental Involvement",
    "24/7 Support"
];

export default function AboutUs() {
    return (
        <section className="min-h-[20vh] w-full bg-white py-10 px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Blob with Image */}
                    <motion.div
                        className="relative flex items-center justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-[-20px_20px_0_0_#F1C21B] border border-gray-100">
                            <img
                                src={AboutUsImage}
                                alt="About Us"
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                            {/* Decorative Toy Images */}
                            <motion.img
                                src={AboutToyImage}
                                alt="Toy Bottom Right"
                                className="absolute -bottom-5 -right-5 lg:-bottom-20 lg:-right-20 h-30 w-30 lg:w-50 lg:h-50 object-contain"
                                draggable={false}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Section - Content */}
                    <div className="space-y-6">
                        {/* Yellow Label */}
                        <motion.span
                            className="inline-block text-yellow-500 font-semibold text-sm uppercase tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            About Us
                        </motion.span>

                        {/* Red Headline */}
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            Where Little Minds Bloom
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-gray-400 leading-relaxed text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            At Bright Future Academy, we provide a nurturing environment where children can explore, discover, and grow. Our experienced educators are dedicated to fostering creativity, curiosity, and confidence in every child through play-based learning and personalized attention.
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.4 + (index * 0.05),
                                        ease: "easeOut"
                                    }}
                                >
                                    <Check className="w-5 h-5 text-red-600 shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Call to Action Button */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                        >
                            <Button
                                className="bg-red-600 text-white hover:bg-yellow-500 rounded-full px-8 py-6 text-base font-medium"
                                size="lg"
                            >
                                Discover Bright Future
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}