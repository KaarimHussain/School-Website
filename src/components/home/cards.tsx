import { Send, Brain, Lightbulb, ArrowRight } from "lucide-react";
import WoodenAircraft from "@/assets/image/Wooden-Aircraft.png";

interface CardData {
    color: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const cardsData: CardData[] = [
    {
        color: "bg-blue-500",
        icon: <Send className="w-12 h-12" />,
        title: "Building Imagination",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    },
    {
        color: "bg-red-500",
        icon: <Brain className="w-12 h-12" />,
        title: "Growing Cognitive",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    },
    {
        color: "bg-yellow-500",
        icon: <Lightbulb className="w-12 h-12" />,
        title: "Increase Creativity",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
    }
];

export default function CardsPreview() {
    return (
        <section className="pt-20 px-10 relative lg:-top-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className={`${card.color} rounded-2xl p-8 text-white relative`}
                        >
                            {/* Aircraft image on last card */}
                            {index === cardsData.length - 1 && (
                                <img
                                    src={WoodenAircraft}
                                    alt="Wooden Aircraft"
                                    className="absolute top-0 right-0 w-32 h-auto -translate-y-10 translate-x-10 opacity-90"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}