'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const remodelingPageData = {
    hero: {
        title: "INCOMPARABLE RESIDENTIAL ADDITIONS & REMODELING"
    },

    remodelingIntro: {
        title: "HOME ADDITIONS & REMODELING",
        paragraphs: [
            "We take pride in helping you turn your existing home into your dream. Hunter’s Contracting has the experience to expand your space, modernize your home and raise your property value.",
            "Our reputation is impeccable and we stand behind our work 100%. Our goal is to make renovations to your home that will give you pleasure for years to come.",
            "We carefully listen to your wants and needs of your addition or remodel and work with you to make them happen. Every aspect is then carefully analyzed to be sure the end result is exactly what you expect."
        ],
        cta: "Call us today to discuss your ideas for your project and let’s get started!"
    },

    caseStudies: {
        title: "CUSTOMER CASE STUDIES",
        items: [
            {
                name: "SMITH",
                description:
                    "The Smiths wanted an addition that would give them a large modern kitchen and beautiful views of the river below. After extensive research of local contractors they called Hunter’s Contruction.",
                Image: "https://media.istockphoto.com/id/2189492037/photo/a-front-view-of-a-beautiful-american-house-and-autumn-leaves-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=i_GdzrWFu6URO0UfctV182Vk3J6-VrmBLu2Elm51smo="
            },
            {
                name: "GRIGGS",
                description:
                    "The Griggs home is over 300 years old and needed extensive work done to repair moisture damage, worn out windows and the ravages of time.",
                Image: "https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=6MW2u3Te73LyO3_x5yjLNCh9ql85JLEcJ-aoKH2Vq0k="
            },
            {
                name: "JACKSON",
                description:
                    "The Jacksons needed a new roof and siding to protect their home from the elements and improve its appearance.",
                Image: "https://media.istockphoto.com/id/1455375812/photo/luxury-single-story-home-exterior-surrounded-by-trees.webp?a=1&b=1&s=612x612&w=0&k=20&c=P93ww6tNW6uaZyHYeg2M7wdqrxwlVG6hzSU6hHOrb6Q="
            },
            {
                name: "MARTIN",
                description:
                    "The Martins needed a new roof and siding to protect their home from the elements and improve its appearance.",
                Image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJFQVVUSUZVTCUyMEhPTUVTfGVufDB8fDB8fHww"
            },
        ],
    }
};

export default function RemodelingPage() {
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
        <div className="flex flex-col font-sans overflow-hidden">
            {/* Cinematic Hero Section */}
            <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, ease: "linear" }}
                        src="https://hunterscontracting.com/img/bkgd/6250-additions-1.jpg"
                        alt="Expert Home Remodeling & Additions"
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
                        <span className="text-white/80 font-bold text-xs md:text-sm tracking-[0.6em] uppercase">Modernize • Expand • Elevate</span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[1px] bg-[#4caf50]"
                        ></motion.div>
                    </motion.div>

                    <motion.h1 variants={fadeInUpVariants} className="text-4xl md:text-7xl font-black text-white italic mb-12 leading-[1.1] tracking-tighter drop-shadow-2xl uppercase">
                        {remodelingPageData.hero.title.split(' ').slice(0, 1).join(' ')} <br />
                        <span className="text-[#4caf50]">{remodelingPageData.hero.title.split(' ').slice(1).join(' ')}</span>
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
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </Link>
                        </motion.div>

                        <div className="hidden md:flex items-center gap-4 text-white/50 font-medium text-[10px] tracking-widest uppercase italic border-l border-white/20 pl-8 h-12">
                            <span>REIMAGINING HOMES SINCE 2017</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vertical Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute left-8 bottom-24 hidden lg:block"
                >
                    <span className="text-white/10 text-[9px] font-bold tracking-[1.2em] uppercase whitespace-nowrap block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        Residential Additions & Remodeling Specialists
                    </span>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-0 right-0 w-64 h-64 bg-[#f0fdf4] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
                    ></motion.div>

                    <div className="relative z-10 max-w-4xl">
                        <span className="text-[#4caf50] font-bold text-sm tracking-[0.3em] uppercase mb-6 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight italic">
                            {remodelingPageData.remodelingIntro.title}
                        </h2>

                        <div className="space-y-8 text-xl text-gray-600 leading-relaxed max-w-3xl">
                            {remodelingPageData.remodelingIntro.paragraphs.map((para, idx) => (
                                <motion.p
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-16 flex flex-col md:flex-row items-center gap-8 p-8 bg-[#1b5e20] rounded-[2rem] text-white shadow-xl"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                                <motion.svg
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-8 h-8 text-green-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </motion.svg>
                            </div>
                            <p className="text-xl font-bold italic tracking-wide">
                                {remodelingPageData.remodelingIntro.cta}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Case Studies Section */}
            <section className="bg-white border-y border-gray-50 py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                    >
                        <div className="max-w-2xl">
                            <span className="text-[#4caf50] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Transformation Stories</span>
                            <h2 className="text-5xl font-bold text-gray-900 tracking-tight italic">{remodelingPageData.caseStudies.title}</h2>
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-px bg-gray-100 hidden md:block mb-6 mx-8 flex-grow"
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        variants={staggeringContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                    >
                        {remodelingPageData.caseStudies.items.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUpVariants}
                                className="group flex flex-col md:flex-row bg-[#f9fafb] rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-700 h-full"
                            >
                                <div className="md:w-1/2 h-80 md:h-auto relative overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 1 }}
                                        src={item.Image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#1b5e20]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>
                                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#1b5e20] transition-colors flex items-center gap-3">
                                        <motion.span
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                            className="w-3 h-3 bg-[#4caf50] rounded-full"
                                        ></motion.span>
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                        {item.description}
                                    </p>
                                    <Link
                                        href="/web/contact"
                                        className="inline-flex items-center gap-3 text-[#1b5e20] font-extrabold text-sm uppercase tracking-widest hover:gap-5 transition-all group-hover:underline decoration-[#4caf50] decoration-2 underline-offset-8"
                                    >
                                        Full Case Study
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Site CTA Footer */}
            <section className="bg-[#1b5e20] py-32 px-6 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white rounded-full"
                    ></motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02] }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white rounded-full"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-10 italic leading-tight">Expertly executed <br />additions & renovations.</h2>
                    <p className="text-green-100/70 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
                        Ready to expand your space or modernize your home? Experience the Hunter's Contracting difference today.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/web/contact"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#1b5e20] hover:bg-[#4caf50] hover:text-white font-extrabold rounded-full shadow-2xl transition-all duration-500 text-lg uppercase tracking-widest"
                        >
                            <span>Request A Quote</span>
                            <motion.svg
                                animate={{ rotate: [0, 15, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </motion.svg>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
