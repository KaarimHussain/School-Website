import TToy from "@/assets/image/T-Letter-Toy.png";
import YToy from "@/assets/image/Y-Letter-Toy.png";
import HToy from "@/assets/image/H-Letter-Toy.png";

export default function CTA() {
    return (
        <>
            <div className="min-h-[50vh] w-full bg-[#fcf9f4] relative overflow-hidden py-20 px-4">
                {/* Decorative Toy Images */}
                <img
                    src={YToy}
                    alt="Y Letter Toy"
                    className="absolute left-4 md:left-20 bottom-10 md:bottom-20 w-20 md:w-32 lg:w-40 animate-bounce"
                    style={{ animationDuration: '3s' }}
                />
                <img
                    src={TToy}
                    alt="T Letter Toy"
                    className="absolute right-4 md:right-20 top-20 md:top-32 w-16 md:w-24 lg:w-32 animate-bounce"
                    style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
                />
                <img
                    src={HToy}
                    alt="H Letter Toy"
                    className="absolute right-10 md:right-32 bottom-32 md:bottom-40 w-14 md:w-20 lg:w-28 animate-bounce"
                    style={{ animationDuration: '2.8s', animationDelay: '0.3s' }}
                />

                {/* Content */}
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* Subtitle */}
                    <p className="text-orange-300 text-sm font-medium mb-4">Join Us Now</p>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-6 leading-tight px-4">
                        Join Our Bright Future Family!
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl mx-auto px-4">
                        Give your child the gift of a nurturing, educational environment where they can explore, learn, and grow. Contact us today to schedule a visit and see how we can support your child's development.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Schedule a Visit
                    </button>
                </div>
            </div>
        </>
    )
}