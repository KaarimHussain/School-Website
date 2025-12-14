import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import LogoWhite from "@/assets/image/Logo-White.png";

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-sky-700 text-white pt-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Footer Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* About Section */}
                        <div className="col-span-2">
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">About</h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                                At Bright Future Academy, we believe in nurturing every child's potential with love, care, and innovative education. Our warm and welcoming environment is designed to inspire young minds to explore, learn, and grow.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a target="_blank" href="#" className="w-10 h-10 bg-orange-300 hover:bg-orange-400 rounded-lg flex items-center justify-center transition-colors">
                                    <Facebook className="w-5 h-5 text-blue-600" />
                                </a>
                                <a target="_blank" href="#" className="w-10 h-10 bg-orange-300 hover:bg-orange-400 rounded-lg flex items-center justify-center transition-colors">
                                    <Twitter className="w-5 h-5 text-blue-600" />
                                </a>
                                <a target="_blank" href="#" className="w-10 h-10 bg-orange-300 hover:bg-orange-400 rounded-lg flex items-center justify-center transition-colors">
                                    <Youtube className="w-5 h-5 text-blue-600" />
                                </a>
                                <a target="_blank" href="#" className="w-10 h-10 bg-orange-300 hover:bg-orange-400 rounded-lg flex items-center justify-center transition-colors">
                                    <Instagram className="w-5 h-5 text-blue-600" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/" className="text-white/90 hover:text-white text-sm transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-white/90 hover:text-white text-sm transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/services" className="text-white/90 hover:text-white text-sm transition-colors">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-white/90 hover:text-white text-sm transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-bold text-orange-300 mb-4">Contact Info</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm">
                                    <MapPin className="w-5 h-5 text-orange-300 shrink-0 mt-0.5" />
                                    <span className="text-white/90">
                                        123 Education Lane, Brightville, BV 12345
                                    </span>
                                </li>
                                <li className="flex gap-3 text-sm">
                                    <Phone className="w-5 h-5 text-orange-300 shrink-0" />
                                    <span className="text-white/90">+1 (555) 234-5678</span>
                                </li>
                                <li className="flex gap-3 text-sm">
                                    <Mail className="w-5 h-5 text-orange-300 shrink-0" />
                                    <span className="text-white/90">info@brightfuture.edu</span>
                                </li>
                                <li className="flex gap-3 text-sm">
                                    <Clock className="w-5 h-5 text-orange-300 shrink-0" />
                                    <span className="text-white/90">Mon - Fri : 7:30 AM - 6:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-white/20 pt-5">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-5">
                                <img
                                    src={LogoWhite}
                                    className="object-contain w-28 sm:w-35 aspect-video"
                                    alt="Bright Future Academy logo"
                                />
                                <p className="text-white/80 text-sm">
                                    Bright Future Academy - Where Children Flourish
                                </p>
                            </div>
                            <p className="text-white/80 text-sm">
                                Copyright © 2021. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}