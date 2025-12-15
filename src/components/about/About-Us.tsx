import { motion } from "framer-motion";
import YToy from "@/assets/image/Y-Letter-Toy.png";
import HToy from "@/assets/image/H-Letter-Toy.png";
import AboutUsImage from "@/assets/image/About-Us-2.jpg"

export default function AboutUs() {
    return (
        <>
            <div className="min-h-[20vh] w-full bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image with Decorative Toys */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="relative">
                                <img
                                    src={AboutUsImage}
                                    alt="Children playing"
                                    className="w-full h-auto rounded-3xl"
                                />

                                {/* Decorative Letter Toys */}
                                <motion.img
                                    src={HToy}
                                    alt="H Letter Toy"
                                    className="absolute -left-8 md:-left-16 top-20 w-16 md:w-24"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                                    animate={{
                                        opacity: 1,
                                        y: [0, -12, 0],
                                        scale: 1,
                                        rotate: 0
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.3 },
                                        scale: { duration: 0.5, delay: 0.3 },
                                        rotate: { duration: 0.5, delay: 0.3 },
                                        y: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.8,
                                            repeatType: "loop"
                                        }
                                    }}
                                />
                                <motion.img
                                    src={YToy}
                                    alt="Y Letter Toy"
                                    className="absolute -left-4 md:-left-12 bottom-32 w-12 md:w-20"
                                    initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                                    animate={{
                                        opacity: 1,
                                        y: [0, -10, 0],
                                        scale: 1,
                                        rotate: 0
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.4 },
                                        scale: { duration: 0.5, delay: 0.4 },
                                        rotate: { duration: 0.5, delay: 0.4 },
                                        y: {
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1,
                                            repeatType: "loop"
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <div>
                            <motion.p
                                className="text-orange-300 text-sm font-medium mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                About Us
                            </motion.p>
                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                            >
                                Fostering Growth and Discovery
                            </motion.h2>
                            <motion.p
                                className="text-gray-500 leading-relaxed mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                            >
                                At Bright Future Academy, we're committed to providing a nurturing environment where children feel safe, valued, and excited to learn. Our play-based curriculum encourages curiosity and creativity while building foundational academic and social skills. We believe in celebrating each child's unique learning journey.
                            </motion.p>

                            {/* Headmaster Info */}
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                            >
                                <p className="text-blue-600 text-xl font-bold">Maria Rodriguez, School Director</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}