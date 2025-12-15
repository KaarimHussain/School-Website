import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
        title: "Early Learning"
    },
    {
        color: "bg-orange-500",
        icon: <Paintbrush className="w-12 h-12" />,
        title: "Creative Arts"
    },
    {
        color: "bg-red-500",
        icon: <Wallet className="w-12 h-12" />,
        title: "Affordable Excellence"
    },
    {
        color: "bg-green-500",
        icon: <Users className="w-12 h-12" />,
        title: "Family Partnership"
    }
];

export default function Services() {
    const balloonRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: balloonRef,
        offset: ["start end", "end start"]
    });

    const balloonY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section className="min-h-screen w-full bg-white py-20 px-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Content */}
                    <div className="relative pb-32">
                        {/* Yellow-Orange Label */}
                        <motion.span
                            className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            Best Services
                        </motion.span>

                        {/* Red Heading */}
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            Our Enriching Programs
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-gray-400 leading-relaxed text-lg mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            At Bright Future Academy, we offer a variety of programs designed to nurture your child's development through play, learning, and exploration. Our experienced educators create a safe, fun, and educational environment for children to thrive.
                        </motion.p>

                        {/* Air Balloon at bottom-left with Parallax */}
                        <motion.div
                            ref={balloonRef}
                            className="absolute bottom-0 left-0 w-48 h-auto -translate-x-8 translate-y-8 z-1"
                            initial={{ opacity: 0, y: 30, x: -20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            style={{ y: balloonY }}
                        >
                            <img
                                src={AirBalloon}
                                alt="Hot Air Balloon"
                                className="w-full h-auto object-contain"
                                draggable={false}
                            />
                        </motion.div>
                    </div>

                    {/* Right Section - Service Cards Grid */}
                    <div className="relative">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {serviceCards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    className={`${card.color} rounded-2xl p-6 text-white flex flex-col items-center justify-center min-h-[200px] relative`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <div className="mb-4">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-center">
                                        {card.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Alphabet Blocks - Above top-right card */}
                        <div className="absolute top-0 right-0 flex gap-2 -translate-y-12 translate-x-4">
                            <motion.img
                                src={JToy}
                                alt="J Letter Toy"
                                className="w-20 h-20 object-contain"
                                draggable={false}
                                initial={{ opacity: 0, y: -20, rotate: -15 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -12, 0],
                                    rotate: 0
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.3 },
                                    rotate: { duration: 0.5, delay: 0.3 },
                                    y: {
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.8,
                                        repeatType: "loop"
                                    }
                                }}
                            />
                            <motion.img
                                src={TToy}
                                alt="T Letter Toy"
                                className="w-20 h-20 object-contain"
                                draggable={false}
                                initial={{ opacity: 0, y: -20, rotate: 15 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -15, 0],
                                    rotate: 0
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    opacity: { duration: 0.5, delay: 0.4 },
                                    rotate: { duration: 0.5, delay: 0.4 },
                                    y: {
                                        duration: 2.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                        repeatType: "loop"
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}