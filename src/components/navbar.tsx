import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ContactForm from "./contact-form";
import Logo from "@/assets/image/Logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/services", label: "Services" },
        { to: "/contact", label: "Contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Nav variants for staggered children
    const navVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.header
            className="fixed sm:top-5 top-3 left-1/2 w-[95%] md:w-[80%] max-w-7xl z-50"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <nav className="bg-white rounded-2xl shadow-lg px-5 flex items-center justify-between">
                {/* Logo */}
                <Link to={"/"} onClick={scrollToTop} className="shrink-0 flex items-center">
                    <motion.img
                        src={Logo}
                        className="object-contain w-22 sm:w-25 aspect-square"
                        alt="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    />
                </Link>

                {/* Hamburger Menu button (Mobile) */}
                <button
                    className="lg:hidden ml-4 rounded-full p-2 hover:bg-gray-100 transition"
                    aria-label="Open main menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <motion.svg
                        className="w-7 h-7 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={menuOpen ? "open" : "closed"}
                    >
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={{
                                closed: { d: "M4 8h16" },
                                open: { d: "M6 18L18 6" }
                            }}
                        />
                        <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={{
                                closed: { d: "M4 16h16" },
                                open: { d: "M6 6l12 12" }
                            }}
                        />
                    </motion.svg>
                </button>

                {/* Navigation Links (Desktop) */}
                <motion.ul
                    className="hidden lg:flex space-x-8 mx-auto"
                    variants={navVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {links.map((link) => (
                        <motion.li key={link.label} variants={linkVariants}>
                            <Link
                                to={link.to}
                                onClick={scrollToTop}
                                className="text-red-600 hover:text-yellow-400 duration-300 transition-all ease-in-out font-semibold px-2 py-1 relative group"
                            >
                                {link.label}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* CTA Button (Desktop) */}
                <motion.div
                    className="hidden lg:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="bg-red-600 text-white hover:bg-yellow-500 rounded-full text-lg" size={"lg"}>
                                    Get Started
                                </Button>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <ContactForm isDialog={true} onSuccess={() => setDialogOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </motion.div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden bg-white rounded-2xl shadow-lg w-full mt-2"
                    >
                        <ul className="flex flex-col space-y-2 px-6 py-4">
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-red-600 hover:text-yellow-400 duration-300 transition-all ease-in-out font-bold block py-2"
                                        onClick={() => {
                                            setMenuOpen(false);
                                            scrollToTop();
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button
                                            className="bg-red-600 text-white hover:bg-yellow-500 rounded-full w-full py-2 text-base mt-2"
                                            size="lg"
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setDialogOpen(true);
                                            }}
                                        >
                                            Get Started
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                                        <ContactForm isDialog={true} onSuccess={() => setDialogOpen(false)} />
                                    </DialogContent>
                                </Dialog>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}