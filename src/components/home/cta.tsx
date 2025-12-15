import { motion } from "framer-motion";
import TToy from "@/assets/image/T-Letter-Toy.png";
import YToy from "@/assets/image/Y-Letter-Toy.png";
import HToy from "@/assets/image/H-Letter-Toy.png";
import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <>
            <div className="min-h-[50vh] w-full bg-[#fcf9f4] relative overflow-hidden py-20 px-4">
                {/* Decorative Toy Images */}
                <motion.img
                    src={YToy}
                    alt="Y Letter Toy"
                    className="absolute left-4 md:left-20 bottom-10 md:bottom-20 w-20 md:w-32 lg:w-40"
                    initial={{ opacity: 0, y: 30, rotate: -20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -15, 0],
                        rotate: 0
                    }}
                    viewport={{ once: true }}
                    transition={{
                        opacity: { duration: 0.5, delay: 0.2 },
                        rotate: { duration: 0.5, delay: 0.2 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.7,
                            repeatType: "loop"
                        }
                    }}
                />
                <motion.img
                    src={TToy}
                    alt="T Letter Toy"
                    className="absolute right-4 md:right-20 top-5 w-16 md:w-24 lg:w-32"
                    initial={{ opacity: 0, y: 30, rotate: 20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -5, 0],
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
                    src={HToy}
                    alt="H Letter Toy"
                    className="absolute right-10 md:right-32 bottom-37 md:bottom-30 w-14 md:w-20 lg:w-28"
                    initial={{ opacity: 0, y: 30, rotate: -15 }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0],
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
                            delay: 0.9,
                            repeatType: "loop"
                        }
                    }}
                />

                {/* Content */}
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* Subtitle */}
                    <motion.p
                        className="text-orange-300 text-sm font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        Join Us Now
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-6 leading-tight px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    >
                        Join Our Bright Future Family!
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl mx-auto px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                    >
                        Give your child the gift of a nurturing, educational environment where they can explore, learn, and grow. Contact us today to schedule a visit and see how we can support your child's development.
                    </motion.p>

                    {/* CTA Button */}
                    <Link to={"/contact"}>
                        <motion.button
                            className="bg-red-500 hover:bg-yellow-500 text-white font-semibold px-10 py-2 rounded-full text-lg transition-all duration-200 transform shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        >
                            Schedule a Visit
                        </motion.button>
                    </Link>
                </div>
            </div>
        </>
    )
}