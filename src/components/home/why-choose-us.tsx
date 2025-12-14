import { WaveDivider } from "../wave-divider";
import { Gamepad2, Rocket, BookOpen } from "lucide-react";
import WhyChooseUsImage from "@/assets/image/Why-Choose-Us.jpg";
import YToy from "@/assets/image/Y-Letter-Toy.png";
import HToy from "@/assets/image/H-Letter-Toy.png";
import RocketToy from "@/assets/image/Rocket.png";

export default function WhyChooseUs() {
    return (
        <>
            <div className="min-h-screen w-full relative overflow-hidden">
                <WaveDivider color="#fff" className="hidden lg:block absolute lg:-top-55 w-full" />
                <div className="max-w-7xl mx-auto px-4 pt-50 pb-15">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <p className="text-orange-300 text-sm font-medium mb-2">Why Choose Us?</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Complete Facilities</h2>
                            <p className="text-gray-500 mb-12">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            </p>

                            {/* Features List */}
                            <div className="space-y-8">
                                {/* Playing Area */}
                                <div className="flex gap-4">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                                            <Gamepad2 className="w-7 h-7 text-blue-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-500 mb-2">Playing Area</h3>
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                        </p>
                                    </div>
                                </div>

                                {/* Outbound Area */}
                                <div className="flex gap-4">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                                            <Rocket className="w-7 h-7 text-blue-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-500 mb-2">Outbound Area</h3>
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                        </p>
                                    </div>
                                </div>

                                {/* Reading Area */}
                                <div className="flex gap-4">
                                    <div className="shrink-0">
                                        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                                            <BookOpen className="w-7 h-7 text-blue-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-500 mb-2">Reading Area</h3>
                                        <p className="text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative w-full h-[500px] rounded-2xl bg-linear-to-br from-cyan-300 to-cyan-400">
                                <img
                                    src={WhyChooseUsImage}
                                    alt="Child playing on playground"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                {/* Decorative Rocket */}
                                <div className="absolute top-0 right-0 w-27 h-27">
                                    <img src={RocketToy} className="rotate-12" alt="" />
                                </div>
                                <div className="absolute bottom-0 left-0 items-center gap-3 lg:flex hidden">
                                    <img src={YToy} className="rotate-5 w-20 h-20 relative " alt="" />
                                    <img src={HToy} className="-rotate-12 w-30 h-30 relative bottom-15" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}