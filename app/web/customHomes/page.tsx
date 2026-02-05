'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const constructionData = {
    hero: {
        title: "UNSURPASSED CRAFTSMANSHIP FOR YOUR NEW HOME",
        subtitle: "Click the arrows to learn more."
    },

    newConstruction: {
        title: "NEW CONSTRUCTION",
        description:
            "Our tradespeople employ our signature attention to detail, unsurpassed craftsmanship, and first-rate customer service to create a home that is built for you but enjoyed for generations.",
        location:
            "We build on inland or waterfront sites to best meet the needs of as many homeowners as possible."
    },

    greenHomes: {
        title: "GREEN HOMES",
        description:
            "Hunter’s Contracting is a Certified Green Professional and excels in the construction of Green Homes."
    },

    gallery: {
        description:
            "Below are a few examples of our custom built homes. We invite you to take a moment to look at these pictures. Notice the quality of work and the attention to every detail."
    },

    testimonial: {
        title: "FIRST-RATE CUSTOMER SERVICE",
        quote:
            "During the construction of our new home, they were true professionals acutely focused on attaining perfection on every detail…",
        author: "The Ivesons"
    },

    caseStudies: {
        title: "CUSTOMER CASE STUDIES",
        items: [
            {
                name: "IVESON",
                description:
                    "The Iveson's bought a scenic waterfront lot in a beautiful subdivision on the North River. They hired Hunter’s Contracting to build their dream home.",
                fullDescription: "The Iveson's project represented a unique challenge: maximizing the scenic waterfront views while maintaining privacy and structural integrity against the elements. Our team worked closely with architects to design a home that flows naturally with the landscape. The result is a stunning residence featuring expansive glass walls, a custom wraparound deck, and sustainable materials that ensure longevity.",
                Image: "https://hunterscontracting.com/img/pics/iveson/thumbs/6250-iveson-page.jpg",
            },
            {
                name: "EVANS",
                description:
                    "Hunter’s Contracting built this beautiful custom home for the Evans family. Notice the detail in the brickwork, kitchen cabinetry and beautiful ceilings.",
                fullDescription: "For the Evans family, the focus was on traditional craftsmanship meeting modern luxury. We sourced hand-selected brick for the exterior facade and employed master carpenters for the intricate coffered ceilings in the great room. The custom kitchen cabinetry was built on-site to ensure a perfect fit, featuring a hidden pantry and high-end integrated appliances.",
                Image: "https://hunterscontracting.com/img/pics/evans/full/6250-evans-1.jpg",
            },
            {
                name: "PALMER",
                description:
                    "This beautiful modern home built by Hunter’s Contracting had it's own challenges due to the unique floorplan. It was perfectly executed by Hunter and his team as you will read in the Palmer’s testimonial.",
                fullDescription: "The Palmer residence is a testament to modern engineering. The unique floorplan required innovative structural solutions to support wide-open living spaces without visible columns. We utilized steel beam reinforcement hidden within the timber frame. The home features polished concrete floors, floor-to-ceiling windows, and a state-of-the-art geo-thermal heating system.",
                Image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJFQVVUSUZVTCUyMEhPTUVTfGVufDB8fDB8fHww",
            }, {
                name: "NEWMAN",
                description: "The Newman's have been vacationing in the Outer Banks for over 20 years. They hired Hunter’s Contracting to build their dream home.",
                fullDescription: "Bringing the Outer Banks vibe to Virginia, the Newman home is a coastal masterpiece. Elevated to protect against storm surges, the home features durable composite siding and hurricane-rated windows without sacrificing aesthetic appeal. The interior is finished with shiplap walls and reclaimed wood flooring, creating a warm, inviting beach house atmosphere.",
                Image: "https://images.unsplash.com/photo-1675747158954-ebaa41b00466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkVBVVRJRlVMJTIwSE9NRVN8ZW58MHx8MHx8fDA%3D"
            },
            {
                name: "ROBERTS",
                description: "This beautiful modern home built by Hunter’s Contracting had it's own challenges due to the unique floorplan. It was perfectly executed by Hunter and his team as you will read in the Palmer’s testimonial.",
                fullDescription: "The Roberts project focused on sustainable luxury. We integrated solar panels into the roof design so seamlessly they are invisible from the street. The home achieves Net Zero energy consumption while offering 5,000 square feet of luxury living space, proving that eco-friendly design doesn't require compromise on comfort or style.",
                Image: "https://images.unsplash.com/photo-1598041972815-015b42cc2ef2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJFQVVUSUZVTCUyMEhPTUVTfGVufDB8fDB8fHww",
            },
            {
                name: "GLASS",
                description: "This beautiful modern home built by Hunter’s Contracting had it's own challenges due to the unique floorplan. It was perfectly executed by Hunter and his team as you will read in the Palmer’s testimonial.",
                fullDescription: "True to their name, the Glass family wanted a home that blurred the lines between indoors and outdoors. We installed a 20-foot folding glass wall system that opens the living room entirely to the patio and pool area. The challenge was structural support, which we solved with a cantilevered steel roof system.",
                Image: "https://hunterscontracting.com/img/pics/palmer/thumbs/6250_palmer_1_page.jpg",
            },

        ]
    }
};

export default function CustomHomesPage() {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);

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
        <div className="flex flex-col font-sans bg-white overflow-hidden">
            {/* Cinematic Hero Section */}
            <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, ease: "linear" }}
                        src="https://hunterscontracting.com/img/bkgd/6250-customHomes-4.jpg"
                        alt="Signature Custom Home Architectural Detail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
                </div>

                {/* Hero Content Overlay */}
                <motion.div
                    variants={staggeringContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto"
                >
                    <motion.div variants={fadeInUpVariants} className="mb-8 flex flex-col items-center gap-4">
                        <span className="text-white/80 font-bold text-xs md:text-sm tracking-[0.6em] uppercase">Architecture • Craft • Legacy</span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[1px] bg-[#4caf50]"
                        ></motion.div>
                    </motion.div>

                    <motion.h1 variants={fadeInUpVariants} className="text-4xl md:text-7xl font-black text-white italic mb-12 leading-[1.1] tracking-tighter drop-shadow-2xl uppercase">
                        {constructionData.hero.title.split(' ').slice(0, 2).join(' ')} <br />
                        <span className="text-[#4caf50]">{constructionData.hero.title.split(' ').slice(2).join(' ')}</span>
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

                        <div className="hidden md:flex items-center gap-4 text-white/50 font-medium text-[10px] tracking-widest uppercase italic">
                            <span>Scroll to explore luxury builds</span>
                            <motion.div
                                animate={{ height: [24, 48, 24] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-px bg-white/20"
                            ></motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vertical Branding */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute right-8 bottom-24 hidden lg:block vertical-text"
                >
                    <span className="text-white/10 text-[9px] font-bold tracking-[1.2em] uppercase">Custom Residential Excellence</span>
                </motion.div>
            </section>

            {/* Service Focus Sections */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* New Construction */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
                    >
                        <div className="mb-10">
                            <span className="text-[#4caf50] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Building Excellence</span>
                            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">{constructionData.newConstruction.title}</h2>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {constructionData.newConstruction.description}
                        </p>
                        <div className="p-8 bg-gray-50 rounded-3xl border-l-[6px] border-[#1b5e20]">
                            <p className="text-[#1b5e20] font-semibold text-lg italic leading-relaxed">
                                {constructionData.newConstruction.location}
                            </p>
                        </div>
                    </motion.div>

                    {/* Green Homes */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-[#1b5e20] p-12 rounded-[2.5rem] shadow-2xl border border-white/10 text-white relative overflow-hidden group flex flex-col justify-center"
                    >
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                        <div className="relative z-10">
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/20"
                            >
                                <svg className="w-8 h-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-8 text-green-50">{constructionData.greenHomes.title}</h2>
                            <p className="text-xl text-green-50/90 leading-relaxed mb-10">
                                {constructionData.greenHomes.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    transition={{ duration: 0.8 }}
                                    className="h-0.5 bg-green-400/50"
                                ></motion.div>
                                <span className="text-sm font-bold tracking-widest text-green-300 uppercase">Certified Green Professional</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Intro */}
            <section className="bg-white py-24 px-6 border-y border-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight italic">Custom Built Masterpieces</h2>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                        {constructionData.gallery.description}
                    </p>
                    <div className="mt-16 flex items-center justify-center gap-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            transition={{ duration: 1 }}
                            className="h-1 bg-gray-100 rounded-full"
                        ></motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="w-16 h-1 bg-[#4caf50] rounded-full"
                        ></motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            transition={{ duration: 1 }}
                            className="h-1 bg-gray-100 rounded-full"
                        ></motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Testimonial Section */}
            <section className="relative py-32 px-6 bg-[#f0fdf4]/40 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.03, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 left-0 p-20 text-[#1b5e20] pointer-events-none"
                >
                    <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V6C10.017 4.89543 10.9124 4 12.017 4H19.017C21.2261 4 23.017 5.79086 23.017 8V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56929 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56929 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56929 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V6C-1.017 4.89543 -0.121573 4 0.983 4H8.017C10.2261 4 12.017 5.79086 12.017 8V15C12.017 18.3137 9.33071 21 6.017 21H3.017Z" />
                    </svg>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggeringContainer}
                    className="max-w-5xl mx-auto relative z-10 text-center"
                >
                    <motion.span variants={fadeInUpVariants} className="text-[#4caf50] font-bold text-sm tracking-[0.4em] uppercase mb-12 block">{constructionData.testimonial.title}</motion.span>
                    <motion.blockquote variants={fadeInUpVariants} className="text-3xl md:text-5xl font-medium text-gray-800 italic leading-[1.3] mb-16 px-4 md:px-0">
                        "{constructionData.testimonial.quote}"
                    </motion.blockquote>
                    <motion.div variants={fadeInUpVariants} className="flex flex-col items-center">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-[#1b5e20] mb-6 rounded-full"
                        ></motion.div>
                        <cite className="text-2xl font-extrabold text-[#1b5e20] not-italic tracking-tight">
                            {constructionData.testimonial.author}
                        </cite>
                    </motion.div>
                </motion.div>
            </section>

            {/* Case Studies */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-[#4caf50] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Proven Experience</span>
                        <h2 className="text-5xl font-bold text-gray-900 tracking-tight italic">{constructionData.caseStudies.title}</h2>
                    </div>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="h-px flex-grow bg-gray-100 hidden md:block mb-6 mx-8"
                    ></motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggeringContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {constructionData.caseStudies.items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUpVariants}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-50 flex flex-col h-full transform"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    src={item.Image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#1b5e20]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#1b5e20] transition-colors flex items-center gap-3">
                                    <motion.span
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-2 h-2 bg-[#4caf50] rounded-full"
                                    ></motion.span>
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-lg">
                                    {item.description}
                                </p>
                                <motion.div whileHover={{ x: 5 }}>
                                    <button
                                        onClick={() => setSelectedCaseStudy(item)}
                                        className="inline-flex items-center gap-3 text-[#1b5e20] font-extrabold text-sm uppercase tracking-widest transition-all group-hover:underline decoration-[#4caf50] decoration-2 underline-offset-8"
                                    >
                                        View Full Story
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedCaseStudy && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                        >
                            <div className="relative h-64 md:h-96">
                                <img
                                    src={selectedCaseStudy.Image}
                                    alt={selectedCaseStudy.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                                    <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase mb-2">
                                        The {selectedCaseStudy.name}
                                    </h3>
                                    <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Residence</p>
                                </div>
                                <button
                                    onClick={() => setSelectedCaseStudy(null)}
                                    className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8 md:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                    <div className="lg:col-span-2">
                                        <h4 className="text-[#1b5e20] font-bold text-sm tracking-[0.2em] uppercase mb-6">Client Vision & Execution</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                            {selectedCaseStudy.fullDescription || selectedCaseStudy.description}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            "Hunter's Contracting exceeded our expectations. The attention to detail is evident in every corner of our home."
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <div className="bg-gray-50 p-8 rounded-3xl border text-center">
                                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Project Type</p>
                                            <p className="text-xl font-bold text-[#1b5e20]">Custom Build</p>
                                        </div>
                                        <Link
                                            href="/web/contact"
                                            className="group w-full py-4 bg-[#1b5e20] hover:bg-[#4caf50] text-center text-white font-bold rounded-xl uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
                                        >
                                            Start Similar Project
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="absolute inset-0 -z-10" onClick={() => setSelectedCaseStudy(null)}></div>
                    </div>
                )}
            </AnimatePresence>


            {/* Premium CTA Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-[#1b5e20] py-32 px-6 text-center text-white relative overflow-hidden"
            >
                {/* Decorative background elements */}
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
                        Your vision, <br />our unsurpassed craftsmanship.
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-green-100/70 text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
                    >
                        Join the families who have trusted Hunter's Contracting for generations. Let's build something exceptional together.
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
                            <span>Request Consultation</span>
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
