import YToy from "@/assets/image/Y-Letter-Toy.png";
import HToy from "@/assets/image/H-Letter-Toy.png";
import AboutUsImage from "@/assets/image/About-Us-2.jpg"

export default function AboutUs() {
    return (
        <>
            <div className="min-h-[50vh] w-full bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image with Decorative Toys */}
                        <div className="relative">
                            <div className="relative">
                                <img
                                    src={AboutUsImage}
                                    alt="Children playing"
                                    className="w-full h-auto rounded-3xl"
                                />

                                {/* Decorative Letter Toys */}
                                <img
                                    src={HToy}
                                    alt="H Letter Toy"
                                    className="absolute -left-8 md:-left-16 top-20 w-16 md:w-24 animate-bounce"
                                    style={{ animationDuration: '3s' }}
                                />
                                <img
                                    src={YToy}
                                    alt="Y Letter Toy"
                                    className="absolute -left-4 md:-left-12 bottom-32 w-12 md:w-20 animate-bounce"
                                    style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div>
                            <p className="text-orange-300 text-sm font-medium mb-2">About Us</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6 leading-tight">
                                Fostering Growth and Discovery
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                At Bright Future Academy, we're committed to providing a nurturing environment where children feel safe, valued, and excited to learn. Our play-based curriculum encourages curiosity and creativity while building foundational academic and social skills. We believe in celebrating each child's unique learning journey.
                            </p>

                            {/* Headmaster Info */}
                            <div className="mt-8">
                                <p className="text-blue-600 text-xl font-bold">Maria Rodriguez, School Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}