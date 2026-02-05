'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const commercialPageData = {
    hero: {
        title: "ON TIME. ON BUDGET. COMMERCIAL CONSTRUCTION"
    },

    commercialIntro: {
        title: "NEW CONSTRUCTION",
        paragraphs: [
            "With Hunter’s Contracting signature attention to detail along with unrivaled workmanship and first-class customer service we create a commercial building beyond your expectations. We pride ourselves on completing the job on time and on budget while keeping our high standards of construction.",
            "Do you have a location you love but it's time for a face lift? We apply the same dedication to commercial renovation as we do to our residential work and we'll keep it on time and on budget."
        ],
        cta: "Call us today to discuss your commercial building or renovation needs."
    },

    testimonial: {
        title: "TOTAL CUSTOMER SATISFACTION",
        quote:
            "I would have to say it was the easiest and most cooperative project I have ever done.",
        author: "W.B. Hudgins"
    },

    projectHighlight: {
        client: "Mainsail Wealth Advisors, Gloucester, Virginia",
        projectType: "Commercial Renovation"
    },

    beforeAfter: {
        title: "BEFORE & AFTER",
        items: [
            {
                before: "https://hunterscontracting.com/img/pics/mainsail/before-after/7525-front-1-before.jpg",
                after: "https://hunterscontracting.com/img/pics/mainsail/before-after/7525-front-1-after.jpg"
            },
            {
                before: "https://hunterscontracting.com/img/pics/mainsail/before-after/7525-interior-1-before.jpg",
                after: "https://hunterscontracting.com/img/pics/mainsail/before-after/7525-interior-1-after.jpg"
            }
        ]
    },

    projectGallery: {
        title: "PROJECT GALLERY",
        images: [
            "https://hunterscontracting.com/img/pics/mainsail/thumb/7525-lobby-4.jpg",
            "https://hunterscontracting.com/img/pics/mainsail/thumb/7525-lobby-3.jpg",
            "https://hunterscontracting.com/img/pics/mainsail/thumb/7525-upstairs-area-2.jpg"
        ]
    }
};

const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const handleStart = () => setIsDragging(true);
    const handleEnd = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleEnd);
        } else {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ref={containerRef}
            className="relative w-full aspect-video rounded-[2rem] overflow-hidden cursor-ew-resize select-none border border-gray-100 shadow-2xl group"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
        >
            {/* After Image (Background) */}
            <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

            {/* Before Image (Clip) */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute inset-y-0 left-0"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#1b5e20] rounded-full shadow-2xl flex items-center justify-center transition-transform"
                >
                    <div className="flex gap-1">
                        <svg className="w-3 h-3 text-[#1b5e20]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <svg className="w-3 h-3 text-[#1b5e20]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                Before
            </div>
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                After
            </div>
        </motion.div>
    );
};

export default function CommercialPage() {
    const fadeInUpVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggeringContainer: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5] font-sans overflow-hidden">
            {/* Cinematic Hero Section */}
            <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, ease: "linear" }}
                        src="https://hunterscontracting.com/img/bkgd/6250-hudgins-1.jpg"
                        alt="High-Scale Commercial Construction"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
                </div>

                {/* Hero Content Overlay */}
                <motion.div
                    variants={staggeringContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto"
                >
                    <motion.div variants={fadeInUpVariants} className="mb-8 flex flex-col items-center gap-4">
                        <span className="text-white/80 font-bold text-xs md:text-sm tracking-[0.6em] uppercase">Performance • Efficiency • Scale</span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[1px] bg-[#4caf50]"
                        ></motion.div>
                    </motion.div>

                    <motion.h1 variants={fadeInUpVariants} className="text-4xl md:text-7xl font-black text-white italic mb-12 leading-[1.1] tracking-tighter drop-shadow-2xl uppercase">
                        {commercialPageData.hero.title.split(' ').slice(0, 4).join(' ')} <br />
                        <span className="text-[#4caf50]">{commercialPageData.hero.title.split(' ').slice(4).join(' ')}</span>
                    </motion.h1>

                    <motion.div variants={fadeInUpVariants} className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/web/contact"
                                className="group flex items-center gap-4 bg-[#4caf50] hover:bg-[#1b5e20] text-white px-10 py-6 rounded-2xl font-extrabold shadow-2xl transition-all duration-500 text-xs tracking-[0.2em] uppercase"
                            >
                                <span>Consult with Our Team</span>
                                <motion.svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </Link>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-4 text-white/50 font-medium text-[10px] tracking-widest uppercase italic border-l border-white/20 pl-8 h-12">
                            <span>BUILT FOR SUCCESS SINCE 2017</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vertical Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute left-8 bottom-24 hidden lg:block vertical-text"
                >
                    <span className="text-white/10 text-[9px] font-bold tracking-[1.2em] uppercase whitespace-nowrap">On Time • On Budget • Commercial Excellence</span>
                </motion.div>
            </section>

            {/* Commercial Intro Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#4caf50] font-bold text-sm tracking-[0.3em] uppercase mb-6 block">Our Mission</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight italic">
                            {commercialPageData.commercialIntro.title}
                        </h2>
                        <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
                            {commercialPageData.commercialIntro.paragraphs.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 inline-block"
                        >
                            <Link
                                href="/web/contact"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-[#1b5e20] text-white hover:bg-[#4caf50] font-bold rounded-2xl shadow-xl transition-all duration-300 text-lg"
                            >
                                <span>Speak With An Expert</span>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-[#4caf50]/5 rounded-[3rem] blur-2xl"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100">
                            <div className="bg-[#1b5e20] text-white p-12 rounded-[2.5rem] flex flex-col justify-center min-h-[400px]">
                                <h3 className="text-2xl font-bold mb-6 italic">Ready to scale?</h3>
                                <p className="text-lg text-green-50/80 mb-10 leading-relaxed">
                                    {commercialPageData.commercialIntro.cta}
                                </p>
                                <div className="flex items-center gap-4">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.513 6.513l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 3z" />
                                        </svg>
                                    </motion.div>
                                    <span className="text-xl font-bold">Contact Us Today</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="relative py-32 px-6 bg-white overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggeringContainer}
                    className="max-w-5xl mx-auto relative z-10 text-center"
                >
                    <motion.span variants={fadeInUpVariants} className="text-[#4caf50] font-bold text-sm tracking-[0.4em] uppercase mb-12 block">{commercialPageData.testimonial.title}</motion.span>
                    <motion.blockquote variants={fadeInUpVariants} className="text-3xl md:text-5xl font-medium text-gray-800 italic leading-[1.3] mb-16 px-4 md:px-0">
                        "{commercialPageData.testimonial.quote}"
                    </motion.blockquote>
                    <motion.div variants={fadeInUpVariants} className="flex flex-col items-center">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ duration: 0.8 }}
                            className="w-12 h-1 bg-[#1b5e20] mb-6 rounded-full"
                        ></motion.div>
                        <cite className="text-2xl font-extrabold text-[#1b5e20] not-italic tracking-tight">
                            {commercialPageData.testimonial.author}
                        </cite>
                    </motion.div>
                </motion.div>
            </section>

            {/* Project Highlight & Before/After */}
            <section className="bg-[#f9fafb] border-y border-gray-100 py-32">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic tracking-tight">
                            {commercialPageData.projectHighlight.client}
                        </h2>
                        <span className="px-6 py-2 bg-[#1b5e20] text-white rounded-full text-sm font-bold tracking-widest uppercase">
                            {commercialPageData.projectHighlight.projectType}
                        </span>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
                        >
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 italic tracking-tight">{commercialPageData.beforeAfter.title}</h3>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 64 }}
                                    transition={{ duration: 0.8 }}
                                    className="h-1 bg-[#4caf50] mt-3 rounded-full"
                                ></motion.div>
                            </div>
                            <p className="text-gray-500 font-medium italic">Slide to reveal transformation</p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-12">
                            {commercialPageData.beforeAfter.items.map((item, idx) => (
                                <BeforeAfterSlider key={idx} before={item.before} after={item.after} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="bg-white py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left"
                    >
                        <div className="max-w-2xl">
                            <span className="text-[#4caf50] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Execution Excellence</span>
                            <h2 className="text-5xl font-bold text-gray-900 tracking-tight italic">{commercialPageData.projectGallery.title}</h2>
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="h-px flex-grow bg-gray-100 hidden md:block mb-6 mx-8"
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        variants={staggeringContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {commercialPageData.projectGallery.images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUpVariants}
                                className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-gray-50 bg-[#f5f5f5]"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    src={img}
                                    alt={`Gallery item ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e20]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Site CTA Footer */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-[#1b5e20] py-32 px-6 text-center text-white relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"
                    ></motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
                        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full"
                    ></motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-10 italic leading-tight"
                    >
                        High-quality construction <br />on time and on budget.
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-green-100/70 text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
                    >
                        Trust Hunter's Contracting for your next commercial project. Unrivaled workmanship for businesses that demand the best.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            href="/web/contact"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#1b5e20] hover:bg-[#4caf50] hover:text-white font-extrabold rounded-full shadow-2xl transition-all duration-500 text-lg uppercase tracking-widest"
                        >
                            <span>Start Your Build</span>
                            <motion.svg
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </motion.svg>
                        </Link>
                    </motion.div>
                </div>
            </motion.section>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
            `}</style>
        </div>
    );
}