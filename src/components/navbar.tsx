import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import ContactForm from "./contact-form";
import Logo from "@/assets/image/Logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const links = [
        {
            to: "/",
            label: "Home",
        },
        {
            to: "/about",
            label: "About Us",
        },
        {
            to: "/services",
            label: "Services",
        },
        {
            to: "/contact",
            label: "Contact",
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="fixed sm:top-5 top-3 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[80%] max-w-7xl z-50">
            <nav className="bg-white rounded-2xl shadow-lg px-5 flex items-center justify-between">
                {/* Logo */}
                <Link to={"/"} onClick={scrollToTop} className="shrink-0 flex items-center">
                    <img
                        src={Logo}
                        className="object-contain w-28 sm:w-35 aspect-video"
                        alt="logo"
                    />
                </Link>

                {/* Hamburger Menu button (Mobile) */}
                <button
                    className="lg:hidden ml-4 rounded-full p-2 hover:bg-gray-100 transition"
                    aria-label="Open main menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg
                        className="w-7 h-7 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 8h16M4 16h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation Links (Desktop) */}
                <ul className="hidden lg:flex space-x-8 mx-auto">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Link
                                to={link.to}
                                onClick={scrollToTop}
                                className="text-red-600 hover:text-yellow-400 duration-300 transition-all ease-in-out font-bold"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button (Desktop) */}
                <div className="hidden lg:block">
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-red-600 text-white hover:bg-yellow-500 rounded-full text-lg" size={"lg"}>
                                Get Started
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <ContactForm isDialog={true} onSuccess={() => setDialogOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div
                className={`lg:hidden transition-all duration-200 ${menuOpen
                    ? "max-h-80 opacity-100 mt-1 pointer-events-auto"
                    : "max-h-0 opacity-0 pointer-events-none"
                    } overflow-hidden bg-white rounded-2xl shadow-lg w-full`}
            >
                <ul className="flex flex-col space-y-2 px-6 py-4">
                    {links.map((link) => (
                        <li key={link.label}>
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
                        </li>
                    ))}
                    <li>
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
                    </li>
                </ul>
            </div>
        </header>
    );
}