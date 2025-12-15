import { motion } from "framer-motion";
import { WaveDivider } from "../wave-divider";
import Gallery1 from "@/assets/image/school-web-image/gallery-1.jpg"
import Gallery2 from "@/assets/image/school-web-image/gallery-2.jpg"
import Gallery3 from "@/assets/image/school-web-image/gallery-3.jpg"
import Gallery4 from "@/assets/image/school-web-image/gallery-4.jpg"
import Gallery5 from "@/assets/image/school-web-image/gallery-5.png"
import Gallery6 from "@/assets/image/school-web-image/gallery-6.jpg"

export default function Gallery() {
    const galleryImages = [
        Gallery1,
        Gallery4,
        Gallery3,
        Gallery2,
        Gallery5,
        Gallery6,
    ]

    return (
        <>
            <div className="min-h-[110vh] w-full bg-[#fcf9f4] relative">
                <WaveDivider color="#fcf9f4" className="hidden lg:block absolute lg:-top-55 w-full" />
                <div className="max-w-7xl mx-auto px-4 pt-30 pb-30">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.p
                            className="text-orange-300 text-sm font-medium mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            Our Moments
                        </motion.p>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-red-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            Joyful Memories
                        </motion.h2>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className="rounded-3xl overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                    ease: "easeOut"
                                }}
                            >
                                <img
                                    src={image}
                                    alt={`Gallery moment ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}