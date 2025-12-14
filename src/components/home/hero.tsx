import HeroBg from "@/assets/image/Home-Hero.jpg"
import { Button } from "../ui/button"
import { WaveDivider } from "../wave-divider"

export default function Hero() {
    return (
        <>
            <div
                className="relative min-h-[110vh] w-full flex items-center justify-center"
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full h-full flex justify-center flex-col max-w-7xl p-4 gap-3
                    sm:p-5 sm:gap-5">
                    <h2 className="text-lg sm:text-2xl font-bold text-white">
                        Bright Future Academy.
                    </h2>
                    <h1 className="text-5xl sm:text-7xl font-bold text-white leading-12 sm:leading-[0.9]">
                        Nurturing Minds, <br />
                        Building Futures.
                    </h1>
                    <Button
                        className="bg-red-600 text-white hover:bg-yellow-500 rounded-full text-base sm:text-lg w-fit py-3 px-6 sm:py-7 sm:px-15 mt-4 sm:mt-5"
                        size={"lg"}
                    >
                        Join Our Family
                    </Button>
                </div>
                <WaveDivider color="#fff" className="hidden lg:block absolute -bottom-20 w-full" />
            </div>
        </>
    )
}