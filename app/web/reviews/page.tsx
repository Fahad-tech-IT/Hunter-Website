'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviewsPageData = {
    title: "REVIEWS",

    reviews: [
        {
            reviewer: "The Glasses",
            image: "https://hunterscontracting.com/img/pics/hudgins/6250-hudgins-page.jpg",
            content: [
                "Well, it has been over one-and-a-half years since you completed our beautiful home and we could not be happier. From the first telephone call from Jim, the many meetings, the construction process and the many, many details, everyone we encountered was the ultimate professional.",
                "We thank you from the bottom of our hearts for a job well done. Now that everything is completed and everyone is gone, we feel as if we have lost our best friend.",
                "The question has been asked, \"would you build again?\" Our answer is only if Hunter’s Contracting would build it."
            ]
        },
        {
            reviewer: "The Ivesons",
            image: "https://hunterscontracting.com/img/pics/glass/6250-glass-page.jpg",
            content: [
                "During the construction of our new home, they were true professionals acutely focused on attaining perfection on every detail.",
                "Communication was excellent and the craftsmanship exceeded our expectations."
            ]
        },
        {
            reviewer: "W.B. Hudgins",
            image: "https://hunterscontracting.com/img/pics/evans/full/6250-evans-page.jpg",
            content: [
                "I would have to say it was the easiest and most cooperative project I have ever done.",
                "The entire team stayed on schedule, on budget, and delivered outstanding quality."
            ]
        },
        {
            reviewer: "The Palmers",
            image: "https://hunterscontracting.com/img/pics/glaze/6250-glaze-page.jpg",
            content: [
                "Our home presented some unique challenges due to its modern floorplan, but Hunter’s Contracting executed it flawlessly.",
                "Their attention to detail and problem-solving skills truly set them apart."
            ]
        }
    ]
};

export default function ReviewsPage() {
    const mainRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Floating Background Animation
            gsap.to('.floating-orb', {
                y: -30,
                x: 20,
                rotation: 10,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Hero Stagger Reveal
            gsap.from('.hero-reveal', {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Reviews List Reveal
            const reviews = gsap.utils.toArray('.review-card') as HTMLElement[];
            reviews.forEach((card, i) => {
                gsap.from(card, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });

            // Stats Count-Up & Reveal
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach((stat: any) => {
                const targetValue = stat.getAttribute('data-value');
                const isPercentage = stat.innerHTML.includes('%');
                const isPlus = stat.innerHTML.includes('+');

                // Clean value for counting
                const value = parseFloat(targetValue.replace(/[^0-9.]/g, ''));

                ScrollTrigger.create({
                    trigger: stat,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        gsap.fromTo(stat,
                            { innerText: 0, opacity: 0, y: 20 },
                            {
                                innerText: value,
                                opacity: 1,
                                y: 0,
                                duration: 2,
                                ease: 'power2.out',
                                snap: { innerText: 1 },
                                onUpdate: function () {
                                    stat.innerHTML = Math.ceil(this.targets()[0].innerText) + (isPercentage ? '%' : '') + (isPlus ? '+' : '');
                                    // Handle non-numeric "Premium" case if needed, but logic above assumes numbers
                                    if (targetValue === "Premium") stat.innerHTML = "Premium";
                                }
                            }
                        );
                    }
                });
            });

            // Handle the text stat separately if it's not a number
            gsap.from('.stat-text-only', {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: 'top 80%'
                }
            });


            // Footer Reveal
            gsap.from('.footer-content', {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.site-footer',
                    start: 'top 75%'
                }
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="flex flex-col font-sans overflow-hidden bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 border-b border-gray-100 overflow-hidden">
                <div className="floating-orb absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#f0fdf4] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="hero-reveal text-4xl md:text-7xl font-extrabold text-[#1b5e20] italic mb-8 leading-tight tracking-tighter">
                        {reviewsPageData.title}
                    </h1>
                    <div className="hero-reveal flex items-center justify-center gap-6">
                        <div className="w-12 h-0.5 bg-[#4caf50]"></div>
                        <p className="text-xl text-gray-500 font-medium tracking-widest uppercase">
                            What Our Clients Say
                        </p>
                        <div className="w-12 h-0.5 bg-[#4caf50]"></div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    {reviewsPageData.reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`review-card flex flex-col lg:flex-row items-center gap-16 mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Part */}
                            <div className="w-full lg:w-1/2 group perspective-1000">
                                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
                                    <img
                                        src={review.image}
                                        alt={review.reviewer}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-[#1b5e20]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <div className="mb-8">
                                    <div className="text-[#4caf50] opacity-30 mb-6">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                                            <path d="M10 8v8h6v-8zm12 0v8h6v-8z" />
                                            <path d="M10 20h6v8h-6zm12 0h6v8h-6z" opacity=".5" />
                                        </svg>
                                    </div>
                                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8 italic tracking-tight relative inline-block group cursor-default">
                                        {review.reviewer}
                                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4caf50] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                                    </h2>
                                    <div className="space-y-6 text-xl text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-8 hover:border-[#4caf50] transition-colors duration-300">
                                        {review.content.map((para, pIdx) => (
                                            <p key={pIdx}>"{para}"</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-1 bg-[#1b5e20] rounded-full"></div>
                                    <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#1b5e20]">Verified Homeowner</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sites Stat / Trust Section */}
            <section className="bg-white py-24 border-y border-gray-100 stats-container">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                    <div>
                        <p className="stat-number text-5xl font-extrabold text-[#1b5e20] mb-4 italic" data-value="100%">0%</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Customer Satisfaction</p>
                    </div>
                    <div>
                        <p className="stat-number text-5xl font-extrabold text-[#1b5e20] mb-4 italic" data-value="30+">0+</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Years of Excellence</p>
                    </div>
                    <div>
                        <p className="stat-text-only text-5xl font-extrabold text-[#1b5e20] mb-4 italic">Premium</p>
                        <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Architectural Craftsmanship</p>
                    </div>
                </div>
            </section>

            {/* Site CTA Footer */}
            <section className="site-footer bg-[#1b5e20] py-32 px-6 text-center text-white relative overflow-hidden group">
                {/* Animated Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none animate-[spin_15s_linear_infinite_reverse]"></div>

                <div className="footer-content max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-10 italic leading-tight">Ready to build your <br />own success story?</h2>
                    <p className="text-green-100/70 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
                        Join our satisfied clients and experience the Hunter's Contracting standard of perfection.
                    </p>

                    <Link
                        href="/web/contact"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#1b5e20] hover:bg-[#4caf50] hover:text-white font-extrabold rounded-full shadow-2xl transition-all duration-500 text-lg uppercase tracking-widest transform hover:scale-105 active:scale-95 group/btn"
                    >
                        <span>Request Consultation</span>
                        <svg className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
