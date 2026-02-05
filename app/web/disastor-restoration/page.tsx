'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const disasterRestorationPageData = {
    hero: {
        title: "WE PUT A HOME DISASTER BACK TOGETHER.",
        subtitle: "Architecture • Restoration • Piece of Mind"
    },

    intro: {
        title: "Disaster Restoration",
        paragraphs: [
            "Nothing is worse than having your home destroyed by fire or water or both. It is a devastating experience that leaves you reeling.",
            "We understand this type of loss and the importance of returning your home back to normal as quickly as possible. You need a contractor that has the experience to make this happen for you.",
            "Hunter carefully listens to you and works with your insurance company to get your house back exactly like it was. Once we have completed the repairs the damage to your home will seem like a distant nightmare.",
            "We hope you never need us for this type of construction but if you do you can be confident that you are in good hands."
        ],
        footerNote:
            "At the bottom of this page is an example of a recent disaster restoration. Click the arrow to continue."
    },

    reassurance: {
        title: "YOU WILL BE HOME AGAIN"
    },

    featuredProject: {
        title: "THE DENUNZIO DISASTER RESTORATION",
        shortDescription:
            "The DeNunzio family had a major catastrophe and hired Hunter’s Contracting to make things right. Learn how we restored their sanctuary.",
        linkLabel: "DeNunzio’s Restoration Story"
    },

    projectStory: {
        title: "Denunzio’s Disaster Restoration",
        paragraphs: [
            "In 2015 the DeNunzio home had a major disaster when no one was home. In the middle of a very cold winter they lost power for several days. It was so cold multiple pipes burst and entirely flooded the first floor and basement.",
            "The water ran for several days until the power came on and the flood alarm alerted the security company. By the time someone was able to respond it was too late. The house was devastated.",
            "The DeNunzios called Hunter’s Contracting to put their house back together. It was a huge undertaking but as you can see by the pictures below Hunter’s team was up to the challenge and restored the home to its former beauty."
        ]
    },

    testimonial: {
        quote:
            "I first met Hunter when we had extensive water damage to our home. He quickly and successfully took on the project for the repairs and navigating the somewhat complicated process with the insurance company. His subcontractors are very capable and dependable. It is quite evident that there is a mutual respect between Hunter and his subcontractors. Since then, Hunter has taken on the challenge of redoing my thirty year old master bathroom and walk-in closet.",
        author: "The DeNunzios"
    }
};

export default function DisasterRestorationPage() {
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
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                        alt="Quality Restoration and Craftsmanship"
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
                        <span className="text-white/80 font-bold text-xs md:text-sm tracking-[0.6em] uppercase">{disasterRestorationPageData.hero.subtitle}</span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 48 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-[1px] bg-[#4caf50]"
                        ></motion.div>
                    </motion.div>

                    <motion.h1 variants={fadeInUpVariants} className="text-4xl md:text-7xl font-black text-white italic mb-12 leading-[1.1] tracking-tighter drop-shadow-2xl uppercase">
                        {disasterRestorationPageData.hero.title.split(' ').slice(0, 3).join(' ')} <br />
                        <span className="text-[#4caf50]">{disasterRestorationPageData.hero.title.split(' ').slice(3).join(' ')}</span>
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
                                <span>Speak with a Specialist</span>
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
                            <span>RECLAIMING SANCTUARIES SINCE 1987</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vertical Branding */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute right-8 bottom-24 hidden lg:block"
                >
                    <span className="text-white/10 text-[9px] font-bold tracking-[1.2em] uppercase whitespace-nowrap block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        Specialized Restoration • Insurance Navigation
                    </span>
                </motion.div>
            </section>

            {/* Intro Section - Emphasizing Listening & Reassurance */}
            <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden">
                {/* Decorative Layer */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 0.5, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 text-[18rem] font-black text-[#f8f8f8] -z-0 select-none uppercase tracking-tighter italic -translate-x-1/4 -translate-y-1/4"
                >
                    RENEW
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-12 xl:col-span-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggeringContainer}
                            className="max-w-3xl"
                        >
                            <motion.div variants={fadeInUpVariants} className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-[1px] bg-[#1b5e20]"></div>
                                <span className="text-[10px] font-bold text-[#1b5e20] uppercase tracking-[0.4em]">{disasterRestorationPageData.intro.title}</span>
                            </motion.div>

                            <motion.h2 variants={fadeInUpVariants} className="text-4xl md:text-5xl font-black text-gray-900 mb-12 italic leading-tight tracking-tighter">
                                {disasterRestorationPageData.reassurance.title}
                            </motion.h2>

                            <motion.div variants={fadeInUpVariants} className="space-y-8 text-xl text-gray-600 leading-relaxed font-light">
                                {disasterRestorationPageData.intro.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </motion.div>

                            <motion.div variants={staggeringContainer} className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10">
                                <motion.div variants={fadeInUpVariants} className="space-y-2">
                                    <p className="text-3xl font-black text-[#1b5e20] tracking-tighter italic">Expert</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Insurance Reps</p>
                                </motion.div>
                                <motion.div variants={fadeInUpVariants} className="space-y-2">
                                    <p className="text-3xl font-black text-[#1b5e20] tracking-tighter italic">Rapid</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Response Team</p>
                                </motion.div>
                                <motion.div variants={fadeInUpVariants} className="space-y-2">
                                    <p className="text-3xl font-black text-[#1b5e20] tracking-tighter italic">Precision</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Restoration</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Project - The DeNunzio Disaster */}
            <section className="bg-[#f9fafb] py-32 px-6 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="relative group rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] order-2 lg:order-1"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 1 }}
                                src="https://hunterscontracting.com/img/pics/denunzio/thumbs/6250-denunzio-14.jpg"
                                alt="Denunzio Restoration Project"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#1b5e20]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggeringContainer}
                            className="space-y-10 order-1 lg:order-2"
                        >
                            <motion.div variants={fadeInUpVariants} className="space-y-4">
                                <span className="text-[#4caf50] font-bold text-sm tracking-[0.3em] uppercase">Featured Case Study</span>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter italic leading-tight">
                                    {disasterRestorationPageData.featuredProject.title}
                                </h2>
                            </motion.div>

                            <motion.div variants={fadeInUpVariants} className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                                {disasterRestorationPageData.projectStory.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeInUpVariants}>
                                <Link
                                    href="/web/contact"
                                    className="inline-flex items-center gap-4 text-[#1b5e20] font-black text-xs uppercase tracking-[0.3em] group"
                                >
                                    <span className="border-b-2 border-[#4caf50] pb-1 group-hover:border-[#1b5e20] transition-colors">{disasterRestorationPageData.featuredProject.linkLabel}</span>
                                    <motion.svg
                                        animate={{ x: [0, 8, 0] }}
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="relative py-32 md:py-48 px-6 bg-white overflow-hidden text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="mb-12 flex justify-center">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            transition={{ duration: 1 }}
                            className="h-1 bg-[#4caf50] rounded-full"
                        ></motion.div>
                    </div>

                    <blockquote className="text-2xl md:text-4xl font-light text-gray-800 italic leading-relaxed mb-16">
                        "{disasterRestorationPageData.testimonial.quote}"
                    </blockquote>

                    <div className="flex flex-col items-center gap-2">
                        <cite className="text-xl font-black text-[#1b5e20] not-italic tracking-[0.2em] uppercase">{disasterRestorationPageData.testimonial.author}</cite>
                        <span className="text-[10px] font-bold text-gray-400 tracking-[0.5em] uppercase">Restoration Clients</span>
                    </div>
                </motion.div>
            </section>

            {/* Site CTA Transition */}
            <section className="bg-[#1b5e20] py-24 px-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white italic mb-10 leading-tight">
                        Need immediate restoration assistance?
                    </h2>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/web/contact"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#1b5e20] rounded-2xl font-black tracking-widest text-xs uppercase shadow-2xl hover:bg-[#4caf50] hover:text-white transition-all duration-500"
                        >
                            Schedule Urgent Consultation
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
