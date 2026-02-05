'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATIC_HOME } from './data/static';
import EditorJSRenderer from './components/EditorJSRenderer';

gsap.registerPlugin(ScrollTrigger);

export default function WebHomePage() {
    // const { data: home, isLoading, error } = useGetHomeQuery(); // Removed for static
    const home = STATIC_HOME;
    const isLoading = false;
    const error = null;

    const mainRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);
    const heroImageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation Timeline
            const tl = gsap.timeline();

            // Initial state for Hero elements
            gsap.set(heroImageRef.current, { scale: 1.2 });
            gsap.set('.hero-text-reveal', { y: 50, opacity: 0 });
            gsap.set('.hero-line', { width: 0 });
            gsap.set('.hero-btn', { scale: 0.8, opacity: 0 });
            gsap.set('.hero-scroll-indicator', { opacity: 0 });

            // Hero Sequence
            tl.to(heroImageRef.current, {
                scale: 1,
                duration: 2.5,
                ease: 'power2.out'
            })
                .to('.hero-text-reveal', {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out'
                }, '-=2')
                .to('.hero-line', {
                    width: 48,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=1.5')
                .to('.hero-btn', {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                }, '-=1')
                .to('.hero-scroll-indicator', {
                    opacity: 1,
                    duration: 1
                }, '-=0.5');

            // Parallax Background Text (HVNTER)
            gsap.fromTo('.bg-text-parallax',
                { x: '10%' },
                {
                    x: '-10%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.legacy-section',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                }
            );

            // Expertise Section Reveal
            gsap.utils.toArray('.expertise-card').forEach((card: any, i) => {
                gsap.from(card, {
                    y: 80,
                    opacity: 0,
                    duration: 1,
                    delay: i * 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.expertise-section',
                        start: 'top 75%'
                    }
                });
            });

            // Legacy Section Elements Reveal
            gsap.from('.legacy-reveal', {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.legacy-section',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Stats Counter Animation (Simulated with scaling/reveal)
            gsap.from('.stat-item', {
                scale: 0.5,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: '.stats-grid',
                    start: 'top 80%'
                }
            });

            // CTA Section Reveal
            gsap.from('.cta-content', {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.cta-section',
                    start: 'top 75%'
                }
            });

        }, mainRef);

        return () => ctx.revert();
    }, [isLoading]); // Re-run if loading state changes to ensure elements exist

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-[#1b5e20] rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-[#f5f5f5]">
                <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-md border border-red-50">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Connection Failed</h2>
                    <p className="text-gray-500 mb-8">Unable to retrieve the latest architectural updates.</p>
                    <button onClick={() => window.location.reload()} className="px-8 py-3 bg-[#1b5e20] text-white rounded-xl font-bold">Retry</button>
                </div>
            </div>
        );
    }

    const coverUrl = home.cover_photo;

    return (
        <div ref={mainRef} className="flex flex-col font-sans bg-white overflow-hidden">

            {/* Cinematic Hero Section */}
            <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        ref={heroImageRef}
                        src={coverUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"}
                        alt="Hunter's Contracting Luxury Build"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
                </div>

                {/* Hero Content Overlay */}
                <div
                    ref={heroContentRef}
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto"
                >
                    <div className="mb-8 flex flex-col items-center gap-4">
                        <span className="hero-text-reveal text-white/90 font-bold text-xs md:text-sm tracking-[0.4em] uppercase">
                            Residential & Commercial Construction
                        </span>
                        <div className="hero-line h-[1px] bg-[#4caf50]"></div>
                    </div>

                    <h1 className="hero-text-reveal text-5xl md:text-8xl font-black text-white italic mb-12 leading-[1.1] tracking-tighter drop-shadow-2xl uppercase">
                        Building Your <br />
                        <span className="text-[#4caf50]">Legacy.</span>
                    </h1>

                    <p className="hero-text-reveal text-lg text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        Premier general contractors serving Virginia with excellence in custom luxury homes and commercial developments.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="hero-btn">
                            <Link
                                href="/web/contact"
                                className="group flex items-center gap-4 bg-[#4caf50] hover:bg-[#1b5e20] text-white px-10 py-6 rounded-2xl font-extrabold shadow-2xl transition-all duration-500 text-xs tracking-[0.2em] uppercase transform hover:scale-105 active:scale-95"
                            >
                                <span>Start Your Project</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>

                        <div className="hero-scroll-indicator hidden md:flex items-center gap-4 text-white/60 font-medium text-xs tracking-widest uppercase italic">
                            <span>Scroll to explore</span>
                            <div className="w-px h-12 bg-white/20 overflow-hidden relative">
                                <span className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-down"></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Side Text */}
                <div className="hero-text-reveal absolute left-8 bottom-24 hidden lg:block vertical-text">
                    <span className="text-white/20 text-[10px] font-bold tracking-[1em] uppercase">Hunter Construction Group</span>
                </div>
            </section>

            {/* New Expertise Section */}
            <section className="expertise-section py-24 px-6 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#1b5e20] font-bold text-xs tracking-[0.4em] uppercase block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 italic tracking-tight">
                            Comprehensive <span className="text-[#1b5e20]">Construction Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Residential Card */}
                        <Link href="/web/customHomes" className="expertise-card group block relative rounded-[2rem] overflow-hidden h-[500px]">
                            <img
                                src="https://hunterscontracting.com/img/pics/evans/full/6250-evans-1.jpg"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Custom Residential Homes"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-black text-white italic mb-4 uppercase">Custom <br /> Residential</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Crafting bespoke luxury homes tailored to your lifestyle and vision.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#4caf50] font-bold uppercase tracking-widest text-xs">
                                    Explore Homes
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Commercial Card */}
                        <Link href="/web/commercial" className="expertise-card group block relative rounded-[2rem] overflow-hidden h-[500px]">
                            <img
                                src="https://hunterscontracting.com/img/bkgd/7525-mainsail-exterior.jpg"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Commercial Construction"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-black text-white italic mb-4 uppercase">Commercial <br /> Development</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Scalable, professional construction solutions for businesses and developers.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#4caf50] font-bold uppercase tracking-widest text-xs">
                                    View Commercial
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </div>
                        </Link>

                        {/* Remodeling Card */}
                        <Link href="/web/remodeling" className="expertise-card group block relative rounded-[2rem] overflow-hidden h-[500px]">
                            <img
                                src="https://hunterscontracting.com/img/pics/griggs/thumbs/6250-Griggs-page.jpg"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Remodeling & Restoration"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-black text-white italic mb-4 uppercase">Restoration <br /> & Remodeling</h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Revitalizing existing spaces with expert craftsmanship and modern design.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#4caf50] font-bold uppercase tracking-widest text-xs">
                                    See Services
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="legacy-section relative py-32 md:py-48 px-6 bg-white overflow-hidden">
                {/* Decorative Layer */}
                <div className="bg-text-parallax absolute top-0 right-0 text-[20rem] font-black text-[#f8f8f8] -z-0 select-none uppercase tracking-tighter italic opacity-50">
                    HVNTER
                </div>

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Content Block */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <div className="max-w-3xl">
                            <div className="legacy-reveal flex items-center gap-4 mb-10">
                                <div className="w-16 h-[1px] bg-[#1b5e20]"></div>
                                <span className="text-[10px] font-bold text-[#1b5e20] uppercase tracking-[0.4em]">Our Legacy</span>
                            </div>

                            <div className="legacy-reveal prose prose-xl prose-stone max-w-none text-[#1b5e20]">
                                <EditorJSRenderer content={home?.about_company} />
                            </div>

                            <div className="stats-grid mt-16 grid grid-cols-2 md:grid-cols-3 gap-10">
                                <div className="stat-item space-y-2">
                                    <p className="text-3xl font-black text-gray-900 tracking-tighter italic">10+</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Years Experience</p>
                                </div>
                                <div className="stat-item space-y-2">
                                    <p className="text-3xl font-black text-gray-900 tracking-tighter italic">500+</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Luxury Builds</p>
                                </div>
                                <div className="stat-item space-y-2">
                                    <p className="text-3xl font-black text-gray-900 tracking-tighter italic">100%</p>
                                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section bg-[#1b5e20] py-24 px-6 relative overflow-hidden group">
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

                <div className="cta-content max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white italic mb-10 leading-tight">
                        Ready to establish your dream home or commercial legacy?
                    </h2>

                    <Link
                        href="/web/contact"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#1b5e20] rounded-2xl font-black tracking-widest text-xs uppercase shadow-2xl hover:bg-[#4caf50] hover:text-white transition-all duration-500 transform hover:scale-105 active:scale-95"
                    >
                        Schedule Private Consultation
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
                @keyframes slide-down {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
                .animate-slide-down {
                    animation: slide-down 1.5s cubic-bezier(0.85, 0, 0.15, 1) infinite;
                }
            `}</style>
        </div>
    );
}