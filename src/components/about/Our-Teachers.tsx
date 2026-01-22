import { motion } from "framer-motion";
import Teacher1 from "@/assets/image/images-v2/Teacher-1.jpeg";
import Teacher2 from "@/assets/image/images-v2/Teacher-2.jpeg";
import Teacher3 from "@/assets/image/images-v2/Teacher-3.jpeg";

export default function OurTeacher() {
    const teachers = [
        {
            id: 1,
            name: "Haleema Khantoon",
            role: "Early Childhood Specialist",
            image: Teacher2,
            bgColor: "bg-red-500",
            circleBg: "bg-white"
        },
        {
            id: 2,
            name: "Faisal Khan",
            role: "Creative Arts Educator",
            image: Teacher1,
            bgColor: "bg-blue-600",
            circleBg: "bg-white"
        },
        {
            id: 3,
            name: "Saira Atif",
            role: "Play-Based Learning Expert",
            image: Teacher3,
            bgColor: "bg-orange-400",
            circleBg: "bg-white"
        }
    ];

    return (
        <>
            <div className="min-h-[50vh] w-full bg-gray-50 py-20 px-4">
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
                            Our Team
                        </motion.p>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-red-500 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            Caring Educators
                        </motion.h2>
                        <motion.p
                            className="text-gray-500 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            Our dedicated team of educators brings passion, expertise, and genuine care to every interaction with your child. They create a warm, inclusive environment where every child can thrive.
                        </motion.p>
                    </div>

                    {/* Teachers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teachers.map((teacher, index) => (
                            <motion.div
                                key={teacher.id}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                            >
                                {/* Teacher Card */}
                                <div className={`${teacher.bgColor} rounded-3xl w-full max-w-sm pt-8 pb-8 px-6 relative`}>
                                    {/* Circular Image */}
                                    <div className="flex justify-center mb-6">
                                        <motion.div
                                            className={`${teacher.circleBg} rounded-full p-2 w-64 h-64 flex items-center justify-center`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.3 + (index * 0.1),
                                                ease: "easeOut"
                                            }}
                                        >
                                            <img
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Teacher Info */}
                                    <motion.div
                                        className="text-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.4 + (index * 0.1),
                                            ease: "easeOut"
                                        }}
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {teacher.name}
                                        </h3>
                                        <p className="text-white text-sm">
                                            {teacher.role}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}