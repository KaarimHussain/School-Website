import { BookOpen, Paintbrush, Wallet, Users } from "lucide-react";
import { Button } from "../ui/button";
import JToy from "@/assets/image/J-Letter-Toy.png";
import TToy from "@/assets/image/T-Letter-Toy.png";
import AirBalloon from "@/assets/image/Hot-Air-Balloon.png";

interface ServiceCard {
    color: string;
    icon: React.ReactNode;
    title: string;
}

const serviceCards: ServiceCard[] = [
    {
        color: "bg-blue-500",
        icon: <BookOpen className="w-12 h-12" />,
        title: "Best Study Value"
    },
    {
        color: "bg-orange-500",
        icon: <Paintbrush className="w-12 h-12" />,
        title: "Cognitive & Creative"
    },
    {
        color: "bg-red-500",
        icon: <Wallet className="w-12 h-12" />,
        title: "Cheap & Good Value"
    },
    {
        color: "bg-green-500",
        icon: <Users className="w-12 h-12" />,
        title: "Parent Trust Guarantee"
    }
];

export default function Services() {
    return (
        <section className="min-h-screen w-full bg-white py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Content */}
                    <div className="relative pb-32">
                        {/* Yellow-Orange Label */}
                        <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">
                            Best Services
                        </span>

                        {/* Red Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight mb-6">
                            Playing & Learning
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* Button */}
                        <Button
                            className="bg-red-600 text-white hover:bg-yellow-500 rounded-full px-8 py-6 text-base font-medium mb-8"
                            size="lg"
                        >
                            Get Start Now
                        </Button>

                        {/* Air Balloon at bottom-left */}
                        <div className="absolute bottom-0 left-0 w-48 h-auto -translate-x-8 translate-y-8">
                            <img
                                src={AirBalloon}
                                alt="Hot Air Balloon"
                                className="w-full h-auto object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>

                    {/* Right Section - Service Cards Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            {serviceCards.map((card, index) => (
                                <div
                                    key={index}
                                    className={`${card.color} rounded-2xl p-6 text-white flex flex-col items-center justify-center min-h-[200px] relative`}
                                >
                                    <div className="mb-4">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-center">
                                        {card.title}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Floating Alphabet Blocks - Above top-right card */}
                        <div className="absolute top-0 right-0 flex gap-2 -translate-y-12 translate-x-4">
                            <img
                                src={JToy}
                                alt="J Letter Toy"
                                className="w-20 h-20 object-contain"
                                draggable={false}
                            />
                            <img
                                src={TToy}
                                alt="T Letter Toy"
                                className="w-20 h-20 object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}