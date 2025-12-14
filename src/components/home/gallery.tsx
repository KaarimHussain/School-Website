import { WaveDivider } from "../wave-divider";
import Gallery1 from "@/assets/image/Gallery.jpg";

export default function Gallery() {
    return (
        <>
            <div className="min-h-[110vh] w-full bg-[#fcf9f4] relative">
                <WaveDivider color="#fcf9f4" className="hidden lg:block absolute lg:-top-55 w-full" />
                <div className="max-w-7xl mx-auto px-4 pt-50 pb-50">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-orange-300 text-sm font-medium mb-2">Our Moments</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-red-500">Joyful Memories</h2>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Image 1 */}
                        <div className="rounded-3xl overflow-hidden">
                            <img src={Gallery1} alt="Gallery moment" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 2 */}
                        <div className="rounded-3xl overflow-hidden">
                            <img src={Gallery1} alt="Gallery moment" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 3 */}
                        <div className="rounded-3xl overflow-hidden">
                            <img src={Gallery1} alt="Gallery moment" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 4 */}
                        <div className="rounded-3xl overflow-hidden">
                            <img src={Gallery1} alt="Gallery moment" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 5 */}
                        <div className="rounded-3xl overflow-hidden">
                            <img src={Gallery1} alt="Gallery moment" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 6 */}
                        <div className="rounded-3xl overflow-hidden">
                            <img src={Gallery1} alt="Gallery moment" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}