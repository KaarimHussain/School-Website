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
        <section className="min-h-screen w-full bg-white py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Blob with Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-[-20px_20px_0_0_#F1C21B] border border-gray-100">
                            <img
                                src={AboutUsImage}
                                alt="About Us"
                                className="w-full h-auto object-cover rounded-2xl"
                            />
                            {/* Decorative Toy Images */}
                            <img
                                src={AboutToyImage}
                                alt="Toy Bottom Right"
                                className="absolute -bottom-5 -right-5 lg:-bottom-20 lg:-right-20 h-30 w-30 lg:w-50 lg:h-50 object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className="space-y-6">
                        {/* Yellow Label */}
                        <span className="inline-block text-yellow-500 font-semibold text-sm uppercase tracking-wide">
                            About Us
                        </span>

                        {/* Red Headline */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight">
                            Where Little Minds Bloom
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-lg">
                            At Bright Future Academy, we provide a nurturing environment where children can explore, discover, and grow. Our experienced educators are dedicated to fostering creativity, curiosity, and confidence in every child through play-based learning and personalized attention.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-red-600 shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Button */}
                        <div className="mt-8">
                            <Button
                                className="bg-red-600 text-white hover:bg-yellow-500 rounded-full px-8 py-6 text-base font-medium"
                                size="lg"
                            >
                                Discover Bright Future
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}