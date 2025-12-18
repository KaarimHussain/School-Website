import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import ReviewAvatar1 from "@/assets/image/images-v2/avatar-1.jpeg";
import ReviewAvatar2 from "@/assets/image/images-v2/avatar-2.jpeg";
import ReviewAvatar3 from "@/assets/image/images-v2/avatar-3.jpeg";
import ReviewAvatar4 from "@/assets/image/images-v2/avatar-4.jpeg";
import ReviewAvatar5 from "@/assets/image/images-v2/avatar-5.jpeg";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            text: "Finding high-quality childcare for older children is a challenge, but Bright Future has been a game-changer. My son absolutely loves the weekly Robotics and Coding club. It’s so much more than just an after-school club; it’s a professional environment where he’s actually learning the skills of the future. Highly recommended for any parent wanting more than just basic supervision!",
            name: "Sarah Thompson",
            role: "Parent of a 9-year-old",
            avatar: ReviewAvatar1
        },
        {
            id: 2,
            text: "The balance of academics and sport here is perfect. The National Curriculum tuition has given my daughter so much confidence with her schoolwork, and she looks forward to the weekly football sessions all bridge. As they are Ofsted-registered, I can use my Tax-Free Childcare, which makes this elite level of service incredibly affordable for our family.",
            name: "David Miller",
            role: "Parent of a Year 6 Student",
            avatar: ReviewAvatar2
        },
        {
            id: 3,
            text: "I am so impressed by the professionalism at Bright Future. The staff are clearly experts and they treat the older kids with real respect. My daughter has attended other childcare settings, but none offer this level of enrichment. From the quiet study zones to the energetic football coaching, it is a well-rounded, safe, and stimulating environment.",
            name: "Amara Okafor",
            role: "Parent of an 8-year-old",
            avatar: ReviewAvatar3
        },
        {
            id: 4,
            text: "Bright Future provides total peace of mind. Knowing they are Ofsted-registered means I don't have to worry about safety or standards. My boys are thriving—one is obsessed with the coding projects and the other has improved his football skills immensely. It’s the best wrap-around care we’ve ever used, specifically because they cater so well to the needs of older students",
            name: "James Wilson",
            role: "Parent of two students, ages 7 and 10",
            avatar: ReviewAvatar4
        },
        {
            id: 5,
            text: "I am so impressed by the professionalism at Bright Future. The staff are clearly experts and they treat the older kids with real respect. My daughter has attended other childcare settings, but none offer this level of enrichment. From the quiet study zones to the energetic football coaching, it is a well-rounded, safe, and stimulating environment.",
            name: "Olivia Johnson",
            role: "Parent of a 12-year-old",
            avatar: ReviewAvatar5
        },
    ];

    return (
        <>
            <div className="min-h-[50vh] w-full bg-[#fcf9f4] py-20">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            className="text-orange-300 text-sm font-medium mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            What Parents Say
                        </motion.p>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            Happy Families
                        </motion.h2>
                        <motion.p
                            className="text-gray-500 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            Hear from parents who have experienced the Bright Future difference. We're proud to be part of so many children's educational journeys.
                        </motion.p>
                    </div>

                    {/* Carousel */}
                    <motion.div
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="h-full">
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 select-none h-full">
                                        <motion.div
                                            className="p-4 h-full"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.4 + (index * 0.1),
                                                ease: "easeOut"
                                            }}
                                        >
                                            <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                                                {/* Testimonial Text */}
                                                <p className="text-gray-500 mb-8 leading-relaxed">
                                                    {testimonial.text}
                                                </p>

                                                {/* Author Info */}
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="w-16 h-16 rounded-full object-cover object-center"
                                                    />
                                                    <div>
                                                        <h4 className="text-lg font-bold text-red-500">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-gray-400 text-sm">
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex" />
                            <CarouselNext className="hidden md:flex" />
                        </Carousel>
                    </motion.div>
                </div>
            </div>
        </>
    )
}