import { motion } from "framer-motion"
import HeroBg from "@/assets/image/Home-Hero.jpg"
import HeroBgVid from "@/assets/image/images-v2/Hero-Vid.mp4"
import { Button } from "../ui/button"
import { WaveDivider } from "../wave-divider"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <>

            <div
                className="relative min-h-[110vh] w-full flex items-center justify-center "
                style={{
                    backgroundImage: `url(${HeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={HeroBgVid} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 w-full h-full flex justify-center flex-col max-w-7xl p-4 gap-3
                    sm:p-5 sm:gap-2">
                    <motion.h2
                        className="text-lg sm:text-2xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        Bright Future Child Care.
                    </motion.h2>
                    <motion.h1
                        className="text-5xl sm:text-7xl font-bold text-white sm:leading-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                    >
                        Nurturing Minds, <br />
                        Building Futures.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                    >
                        <Link to={"/contact"}>
                            <Button
                                className="bg-red-600 text-white hover:bg-yellow-500 rounded-full text-base sm:text-lg w-fit py-3 px-6 sm:py-7 sm:px-15 mt-4 sm:mt-5"
                                size={"lg"}
                            >
                                Join Our Family
                            </Button>
                        </Link>
                    </motion.div>
                </div>
                <WaveDivider color="#fff" className="hidden lg:block absolute -bottom-30 w-full" />
            </div>
        </>
    )
}