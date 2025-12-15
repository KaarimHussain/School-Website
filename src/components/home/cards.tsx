import { motion } from "framer-motion";
import { Send, Brain, Lightbulb, ArrowRight } from "lucide-react";
import WoodenAircraft from "@/assets/image/Wooden-Aircraft.png";
import { Link } from "react-router-dom";

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
        description: "At Bright Future, we nurture creativity through imaginative play, storytelling, and open-ended activities that encourage children to dream big."
    },
    {
        color: "bg-red-500",
        shadow: "shadow-2xl shadow-red-500",
        icon: <Brain className="w-12 h-12" />,
        title: "Growing Cognitive",
        description: "Our thoughtfully designed curriculum helps develop critical thinking, problem-solving skills, and a love for learning that lasts a lifetime."
    },
    {
        color: "bg-yellow-500",
        shadow: "shadow-2xl shadow-yellow-500",
        icon: <Lightbulb className="w-12 h-12" />,
        title: "Increase Creativity",
        description: "We provide diverse opportunities for artistic expression, from painting to music, drama to dance, allowing each child to discover their unique talents."
    }
];

export default function CardsPreview() {
    return (
        <section className="pt-10 px-10 relative lg:-top-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <Link to={"/services"}>
                            <motion.div
                                key={index}
                                className={`${card.color} rounded-2xl p-8 text-white relative ${card.shadow}`}
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

                                <div className="relative z-10">
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
                    ))}
                </div>
            </div>
        </section>
    );
}