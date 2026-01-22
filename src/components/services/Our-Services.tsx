import { motion } from "framer-motion";
import { BookOpen, Palette, Heart, Sparkles, Code, Book } from "lucide-react";

export default function OurServices() {
    const services = [
        {
            id: 1,
            icon: Heart, // Changed from BookOpen to Heart for Care
            title: "Wrap-Around Care",
            description: "Ofsted-Registered Childcare Professional wrap-around care for students aged 8 to 14. We provide a safe, regulated, and sophisticated environment that bridges the gap between school and home while meeting the highest UK safeguarding standards.",
            color: "bg-blue-500",
            iconBg: "bg-blue-100"
        },
        {
            id: 2,
            icon: BookOpen, // Changed from Palette to BookOpen for Exam Prep
            title: "11+ & SATS Preparation",
            description: "Targeted coaching for KS2 SATS and 11+ entrance exams. We focus on verbal reasoning, non-verbal reasoning, English, and Maths to ensure your child secures their place in top grammar and independent schools.",
            color: "bg-red-500",
            iconBg: "bg-red-100"
        },
        {
            id: 3,
            icon: Sparkles, // Changed from Music to Sparkles for Secondary Tuition (Academic success)
            title: "Secondary Tuition",
            description: "KS3 & GCSE Tuition Expert-led subject mastery for secondary students. We align our teaching with the UK National Curriculum to boost grades in core subjects, building the academic discipline required for GCSE success.",
            color: "bg-orange-400",
            iconBg: "bg-orange-100"
        },
        {
            id: 4,
            icon: Code, // Kept as Globe (often used for tech/web) or could be Sparkles, but Globe fits "World Wide Web" context of coding
            title: "Coding & Robotics",
            description: "Weekly Coding & Robotics Club A high-tech STEM program where students move from digital consumers to creators. Once a week, children build and program robots, developing essential skills in logic, engineering, and Python/Block coding.",
            color: "bg-cyan-500",
            iconBg: "bg-cyan-100"
        },
        {
            id: 5,
            icon: Palette,
            title: "Professional Football Coaching",
            description: "Professional Football Coaching Weekly high-energy sessions led by qualified coaches. We focus on agility, teamwork, and tactical play, ensuring older students stay physically active and build social confidence in a professional sports setting.",
            color: "bg-pink-500",
            iconBg: "bg-pink-100"
        },
        {
            id: 6,
            icon: Book, // Using Palette for Homework/Support as creating/crafting work
            title: "Homework & Academic Support",
            description: "A dedicated, distraction-free 'study hub' for older students. We provide the resources and professional guidance needed to complete school assignments accurately, ensuring they stay ahead of their curriculum.",
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