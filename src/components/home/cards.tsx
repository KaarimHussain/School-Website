import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Brain, Lightbulb, ArrowRight } from "lucide-react";
import WoodenAircraft from "@/assets/image/Wooden-Aircraft.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface CardData {
    color: string;
    shadow: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const cardsData: CardData[] = [
    {
        color: "bg-blue-500",
        shadow: "shadow-2xl shadow-blue-500",
        icon: <Send className="w-12 h-12" />,
        title: "Building Imagination",
        description: "As an Ofsted-registered hub, we turn imagination into innovation through weekly Robotics and Coding. Children don't just play; they build and program, developing the creative confidence to design digital solutions. This hands-on STEM approach ensures your child learns to think big in a safe, regulated environment."
    },
    {
        color: "bg-red-500",
        shadow: "shadow-2xl shadow-red-500",
        icon: <Brain className="w-12 h-12" />,
        title: "Growing Cognitive",
        description: "We sharpen young minds with professional tuition services tailored to the UK National Curriculum. By blending core academic support with logical problem-solving in our tech labs, we boost classroom confidence. Our structured sessions focus on critical thinking, helping students master complex subjects and achieve peak cognitive growth."
    },
    {
        color: "bg-yellow-500",
        shadow: "shadow-2xl shadow-yellow-500",
        icon: <Lightbulb className="w-12 h-12" />,
        title: "Increasing Creativity",
        description: "We nurture artistic expression and innovative thinking through a blend of creative arts and digital design. Our programs empower children to explore their unique talents, fostering the creative problem-solving skills needed for a rapidly evolving world."
    }
];

export default function CardsPreview() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="pt-10 px-10">
            <div className="max-w-7xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative lg:-top-50">
                    {cardsData.map((card, index) => {
                        // Create different parallax speeds for each card
                        const y = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [50 + (index * 20), -50 - (index * 20)]
                        );

                        return (
                            <Link key={index} to={"/services"}>
                                <motion.div
                                    className={`${card.color} rounded-2xl p-8 text-white relative ${card.shadow} h-full`}
                                    style={{ y }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    {/* Aircraft image on last card */}
                                    {index === cardsData.length - 1 && (
                                        <motion.img
                                            src={WoodenAircraft}
                                            alt="Wooden Aircraft"
                                            className="absolute top-0 right-0 w-32 h-auto -translate-y-10 translate-x-10 opacity-90"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 0.9, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.3,
                                                ease: "easeOut"
                                            }}
                                        />
                                    )}

                                    <div className="relative z-10 flex flex-col items-start justify-between h-full">
                                        <div>
                                            <div className="mb-6">
                                                {card.icon}
                                            </div>

                                            <h3 className="text-2xl font-bold mb-4">
                                                {card.title}
                                            </h3>

                                            <div className="w-12 h-0.5 bg-white mb-4"></div>

                                            <p className="text-white/90 mb-6 leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>

                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 text-white hover:underline group"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}