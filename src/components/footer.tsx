import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import LogoWhite from "@/assets/image/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Instagram, href: "#" }
    ];

    const quickLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" }
    ];

    const contactInfo = [
        { icon: MapPin, text: "Grange interlink Summerville Road Bradford BD7 1PX" },
        { icon: Phone, text: "07828 594225" },
        { icon: Mail, text: "info@brightfuturechildcare.uk" },
        { icon: Clock, text: "Mon - Fri : 7:30 AM - 6:00 PM" }
    ];

    return (
        <>
            <footer className="w-full bg-sky-700 text-white pt-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Footer Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* About Section */}
                        <motion.div
                            className="col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">About</h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                At Bright Future Academy, we believe in nurturing every child's potential with love, care, and innovative education. Our warm and welcoming environment is designed to inspire young minds to explore, learn, and grow.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            target="_blank"
                                            href={social.href}
                                            className="w-10 h-10 bg-orange-300 hover:bg-orange-400 rounded-lg flex items-center justify-center transition-colors"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3 + (index * 0.05),
                                                ease: "easeOut"
                                            }}
                                        >
                                            <Icon className="w-5 h-5 text-blue-600" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            className="lg:col-span-1 sm:col-span-2 col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        >
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2 + (index * 0.05),
                                            ease: "easeOut"
                                        }}
                                    >
                                        <a href={link.href} className="text-white/90 hover:text-white text-sm transition-colors">
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="lg:col-span-1 sm:col-span-2 col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                        >
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">Contact Info</h3>
                            <ul className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.li
                                            key={index}
                                            className="flex gap-3 text-sm"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3 + (index * 0.05),
                                                ease: "easeOut"
                                            }}
                                        >
                                            <Icon className="w-5 h-5 text-orange-300 shrink-0 mt-0.5" />
                                            <span className="text-white/90">{info.text}</span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Footer Bottom */}
                    <motion.div
                        className="border-t border-white/20 pt-5 pb-5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-5">
                                <Link to={"/"} onClick={scrollToTop}>
                                    <img
                                        src={LogoWhite}
                                        className="object-contain w-20 sm:w-25 aspect-square"
                                        alt="Bright Future Academy logo"
                                    />
                                </Link>
                                <p className="text-white/80 text-sm">
                                    Bright Future Academy - Where Children Flourish
                                </p>
                            </div>
                            <p className="text-white/80 text-sm">
                                Copyright © {new Date().getFullYear()}. All rights reserved.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </>
    )
}