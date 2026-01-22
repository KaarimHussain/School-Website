import { motion } from "framer-motion";
import { Gamepad2, Rocket, BookOpen } from "lucide-react";
import WhyChooseUsImage from "@/assets/image/school-web-image/gallery-7.jpeg";
import YToy from "@/assets/image/Y-Letter-Toy.png";
import HToy from "@/assets/image/H-Letter-Toy.png";
import RocketToy from "@/assets/image/Rocket.png";

export default function WhyChooseUs() {
    const features = [
        {
            icon: Gamepad2,
            title: "Elite Sports & Safe Play",
            description: "Our secure, high-standard facilities host professional weekly football coaching to improve physical agility and teamwork."
        },
        {
            icon: Rocket,
            title: "Quiet Study Zones",
            description: "We provide dedicated, distraction-free zones for National Curriculum tuition and our expert-led Coding and Robotics club."
        },
        {
            icon: BookOpen,
            title: "Ofsted-Registered Excellence",
            description: "Our professional status allows parents to access Tax-Free Childcare and vouchers while ensuring the highest UK safeguarding standards."
        }
    ];

    return (
        <>
            <div className="min-h-[20vh] w-full relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 pt-20 pb-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <motion.p
                                className="text-orange-300 text-sm font-medium mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                Why Choose Us?
                            </motion.p>
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            >
                                Our Exceptional Environment
                            </motion.h2>
                            <motion.p
                                className="text-gray-500 mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                            >
                                At Bright Future, we provide a sophisticated, Ofsted-registered environment specifically designed for students aged 8 and above. We bridge the gap between reliable wrap-around childcare and elite academic development, ensuring older children have a professional space to thrive.
                            </motion.p>

                            {/* Features List */}
                            <div className="space-y-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.3 + (index * 0.1),
                                            ease: "easeOut"
                                        }}
                                    >
                                        <div className="shrink-0">
                                            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-7 h-7 text-blue-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-red-500 mb-2">{feature.title}</h3>
                                            <p className="text-gray-500">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="relative w-full h-[500px] rounded-2xl bg-linear-to-br from-cyan-300 to-cyan-400">
                                <img
                                    src={WhyChooseUsImage}
                                    alt="Child playing on playground"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                {/* Decorative Rocket */}
                                <motion.div
                                    className="absolute top-0 right-0 w-27 h-27"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                                >
                                    <img src={RocketToy} className="rotate-12" alt="" />
                                </motion.div>
                                <div className="absolute bottom-0 left-0 items-center gap-3 lg:flex hidden">
                                    <motion.img
                                        src={YToy}
                                        className="rotate-5 w-20 h-20 relative"
                                        alt=""
                                        initial={{ opacity: 0, y: 20, rotate: -10 }}
                                        whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    />
                                    <motion.img
                                        src={HToy}
                                        className="-rotate-12 w-30 h-30 relative bottom-15"
                                        alt=""
                                        initial={{ opacity: 0, y: 20, rotate: 5 }}
                                        whileInView={{ opacity: 1, y: 0, rotate: -12 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}