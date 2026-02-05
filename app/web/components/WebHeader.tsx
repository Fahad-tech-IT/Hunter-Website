'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Use local type for Pages - preventing errors if unused
export type Page = {
    title: string;
    slug: string;
    navigation: boolean;
};
export type Pages = Page[];

export default function WebHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll for sticky effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navPages = [
        { title: "HOME", slug: "" },
        { title: "COMMERCIAL", slug: "/commercial" },
        { title: "CUSTOM HOMES", slug: "/customHomes" },
        { title: "REMODELING", slug: "/remodeling" },
        { title: "DISASTER RESTORATION", slug: "/disastor-restoration" },
        { title: "REVIEWS", slug: "/reviews" },
        { title: "CONTACT", slug: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full flex items-center z-50 transition-all duration-500 px-8 ${isScrolled
                    ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100'
                    : 'py-8 bg-transparent'
                    }`}
            >
                {/* Logo - LEFT */}
                <div className="flex items-center">
                    <Link href="/web">
                        <img
                            src="https://hunterscontracting.com/img/logos/Hunters-contracting-web-white.png"
                            alt="Hunter's Contracting Logo"
                            className={`w-auto drop-shadow-xl transform transition-all duration-500 hover:scale-105 ${isScrolled
                                ? 'max-h-20 md:max-h-24 invert brightness-0'
                                : 'max-h-32 md:max-h-36'
                                }`}
                        />
                    </Link>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* MENU button - RIGHT */}
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className={`group flex flex-col items-center gap-2 transition-all p-3 rounded-2xl ${isScrolled
                            ? 'bg-[#1b5e20]/5 hover:bg-[#1b5e20]/10'
                            : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                            }`}
                    >
                        <div className="flex flex-col gap-1.5 items-end">
                            <span
                                className={`block w-8 h-[1px] transition-all duration-700 ${isScrolled
                                    ? 'bg-gray-900 group-hover:bg-[#1b5e20]'
                                    : 'bg-white group-hover:w-12'
                                    }`}
                            />
                            <span
                                className={`block w-5 h-[1px] transition-all duration-700 delay-75 ${isScrolled
                                    ? 'bg-gray-900 group-hover:bg-[#1b5e20]'
                                    : 'bg-white group-hover:w-12'
                                    }`}
                            />
                        </div>
                        <span
                            className={`text-[8px] font-black tracking-[0.5em] pl-[0.5em] transition-colors ${isScrolled
                                ? 'text-gray-900 group-hover:text-[#1b5e20]'
                                : 'text-white'
                                }`}
                        >
                            MENU
                        </span>
                    </button>
                </div>
            </header>

            {/* Side Menu Overlay - Less Intrusive */}
            <div
                className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Softer Backdrop */}
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Narrower Sidebar Drawer */}
                <div
                    className={`absolute inset-y-0 right-0 w-full max-w-sm md:max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full bg-white relative">
                        {/* Drawer Header */}
                        <div className="p-8 flex justify-between items-center border-b border-gray-50">
                            <span className="text-[8px] font-bold tracking-[0.5em] text-[#1b5e20] uppercase">Navigation</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-2 p-2"
                            >
                                <span className="text-[9px] font-bold tracking-widest text-gray-400 group-hover:text-[#1b5e20] transition-colors">CLOSE</span>
                                <div className="h-6 w-px bg-gray-200 rotate-45 group-hover:rotate-135 transition-transform duration-500"></div>
                                <div className="h-6 w-px bg-gray-200 -rotate-45 group-hover:rotate-45 transition-transform duration-500 absolute right-10"></div>
                            </button>
                        </div>

                        {/* Beautifully Balanced Links */}
                        <nav className="flex-1 px-10 py-12 overflow-y-auto">
                            <ul className="space-y-6">
                                {navPages.map((page, index) => (
                                    <li key={index} className="group overflow-hidden">
                                        <Link
                                            href={`/web${page.slug}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-4 py-2 transition-all"
                                        >
                                            <span className="text-[10px] font-bold text-[#4caf50] opacity-40 group-hover:opacity-100 transition-opacity">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-xl md:text-2xl font-light tracking-[0.15em] text-gray-800 group-hover:text-[#1b5e20] group-hover:translate-x-2 transition-all duration-300">
                                                {page.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Minimalist Footer */}
                        <div className="p-8 bg-[#fbfbfb] border-t border-gray-50 mt-auto">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Inquiry</h4>
                                    <p className="text-xs font-medium text-gray-600">info@hunterscontracting.com</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[8px] font-bold text-gray-300 tracking-[0.4em]">EST. 1987</span>
                                    <div className="flex gap-2">
                                        <div className="w-1 h-1 rounded-full bg-[#1b5e20]"></div>
                                        <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}