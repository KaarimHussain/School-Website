import { motion } from "framer-motion";
import { BookOpen, Palette, Music, Globe, Heart, Sparkles } from "lucide-react";

export default function OurServices() {
    const services = [
        {
            id: 1,
            icon: BookOpen,
            title: "Early Education",
            description: "Comprehensive learning programs designed to build strong educational foundations for young minds.",
            color: "bg-blue-500",
            iconBg: "bg-blue-100"
        },
        {
            id: 2,
            icon: Palette,
            title: "Creative Arts",
            description: "Nurturing creativity through painting, drawing, and hands-on art activities that spark imagination.",
            color: "bg-red-500",
            iconBg: "bg-red-100"
        },
        {
            id: 3,
            icon: Music,
            title: "Music & Dance",
            description: "Fun music and movement classes that develop rhythm, coordination, and self-expression.",
            color: "bg-orange-400",
            iconBg: "bg-orange-100"
        },
        {
            id: 4,
            icon: Globe,
            title: "Language Learning",
            description: "Interactive language programs that introduce children to new languages in a playful environment.",
            color: "bg-cyan-500",
            iconBg: "bg-cyan-100"
        },
        {
            id: 5,
            icon: Heart,
            title: "Social Development",
            description: "Building social skills, empathy, and teamwork through guided group activities and play.",
            color: "bg-pink-500",
            iconBg: "bg-pink-100"
        },
        {
            id: 6,
            icon: Sparkles,
            title: "Special Activities",
            description: "Exciting field trips, celebrations, and seasonal events that create lasting memories.",
            color: "bg-purple-500",
            iconBg: "bg-purple-100"
        }
    ];

    return (
        <>
            <div className="min-h-screen w-full bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.p 
                            className="text-orange-300 text-sm font-medium mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            Our Services
                        </motion.p>
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            What We Offer Your Child
                        </motion.h2>
                        <motion.p 
                            className="text-gray-500 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            Discover our comprehensive range of programs and activities designed to nurture every aspect of your child's development in a safe and joyful environment.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ 
                                        duration: 0.4, 
                                        delay: index * 0.08,
                                        ease: "easeOut" 
                                    }}
                                >
                                    {/* Icon */}
                                    <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className={`w-10 h-10 ${service.color.replace('bg-', 'text-')}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-red-500 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Decorative Bottom Bar */}
                                    <div className={`${service.color} h-1 w-16 rounded-full mt-6`}></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}