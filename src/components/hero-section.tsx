import { motion } from "framer-motion";
import { WaveDivider } from "@/components/wave-divider"

interface HeroSectionProps {
    title?: string;
    className?: string;
    backgroundColor?: string;
}

export default function HeroSection({
    title = "Your Title",
    className = "",
    backgroundColor = "bg-yellow-500",
}: HeroSectionProps) {
    return (
        <>
            <div
                className={`relative min-h-[50vh] lg:min-h-[70vh] w-full flex items-center justify-center ${className}`}
            >
                <div className={`absolute inset-0 ${backgroundColor}`}></div>
                <div className="relative z-10 w-full h-full flex justify-center items-center max-w-7xl p-4 gap-3
                    sm:p-5 sm:gap-5">
                    <motion.h1
                        className="text-5xl sm:text-7xl font-bold text-white leading-12 sm:leading-[0.9]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {title}
                    </motion.h1>
                </div>
                <WaveDivider color="#fff" className="hidden lg:block absolute -bottom-20 w-full" />
            </div>
        </>
    )
}