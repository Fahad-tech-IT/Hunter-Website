'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const mainRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            const heroTl = gsap.timeline();

            gsap.set('.hero-img', { scale: 1.2 });
            gsap.set('.hero-content > *', { y: 50, opacity: 0 });
            gsap.set('.hero-divider', { width: 0 });

            heroTl.to('.hero-img', {
                scale: 1,
                duration: 2.5,
                ease: 'power2.out'
            })
                .to('.hero-content > *', {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=2')
                .to('.hero-divider', {
                    width: 96,
                    duration: 1,
                    ease: 'expo.out'
                }, '-=1.5');

            // Form Reveal
            gsap.from(formRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 85%'
                }
            });

            // Staggered Inputs
            gsap.from('.form-input-group', {
                x: -30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 70%'
                }
            });

            // Info Cards Magnetic & Reveal
            gsap.utils.toArray('.info-card-reveal').forEach((card: any, i) => {
                gsap.from(card, {
                    x: 50,
                    opacity: 0,
                    delay: i * 0.1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.info-cards-container',
                        start: 'top 80%'
                    }
                });
            });

            // Map Reveal
            gsap.from('.map-container', {
                clipPath: 'inset(100% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power4.inOut',
                scrollTrigger: {
                    trigger: '.map-container',
                    start: 'top 85%'
                }
            });

            // Footer Elements
            gsap.from('.footer-reveal', {
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: '.site-footer',
                    start: 'top 85%'
                }
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    // Magnetic Button Effect
    const btnRef = useRef<HTMLButtonElement>(null);
    useLayoutEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        btn.parentElement?.addEventListener("mousemove", mouseMove);
        btn.parentElement?.addEventListener("mouseleave", mouseLeave);

        return () => {
            btn.parentElement?.removeEventListener("mousemove", mouseMove);
            btn.parentElement?.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <div ref={mainRef} className="flex flex-col font-sans overflow-hidden bg-gray-50">
            {/* Immersive Hero Section */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        className="hero-img w-full h-full object-cover"
                        src="https://hunterscontracting.com/img/bkgd/6250-customHomes.jpg"
                        alt="Hunter's Contracting Luxury Interior"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1b5e20]/80 via-[#1b5e20]/40 to-[#f5f5f5]"></div>
                </div>

                <div className="hero-content max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-green-300 font-bold text-sm tracking-[0.4em] uppercase mb-8 block">Connect With Us</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-white italic mb-8 leading-tight uppercase tracking-tighter">
                        Let's Build Something <br /> Great Together
                    </h1>
                    <div className="hero-divider h-1 bg-[#4caf50] mx-auto rounded-full"></div>
                </div>
            </section>

            {/* Contact Content Overlay */}
            <section className="max-w-7xl mx-auto px-6 -mt-24 pb-24 relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left: Contact Form (Glassmorphism) */}
                    <div
                        ref={formRef}
                        className="lg:col-span-3 bg-white/90 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/40"
                    >
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 italic">Send a Message</h2>
                            <p className="text-gray-500 font-medium leading-relaxed">Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-input-group space-y-3">
                                    <label className="text-[10px] font-bold text-[#1b5e20] uppercase tracking-[0.2em] ml-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all shadow-sm focus:shadow-md"
                                    />
                                </div>
                                <div className="form-input-group space-y-3">
                                    <label className="text-[10px] font-bold text-[#1b5e20] uppercase tracking-[0.2em] ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all shadow-sm focus:shadow-md"
                                    />
                                </div>
                            </div>

                            <div className="form-input-group space-y-3">
                                <label className="text-[10px] font-bold text-[#1b5e20] uppercase tracking-[0.2em] ml-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 000-0000"
                                    className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all shadow-sm focus:shadow-md"
                                />
                            </div>

                            <div className="form-input-group space-y-3">
                                <label className="text-[10px] font-bold text-[#1b5e20] uppercase tracking-[0.2em] ml-2">Project Details</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your dream home or renovation..."
                                    className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all resize-none shadow-sm focus:shadow-md"
                                ></textarea>
                            </div>

                            <div className="form-input-group pt-4">
                                <button
                                    ref={btnRef}
                                    type="submit"
                                    className="group relative w-full py-6 bg-[#1b5e20] text-white font-extrabold rounded-2xl shadow-xl hover:bg-[#4caf50] transition-all duration-300 flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-sm overflow-hidden"
                                >
                                    <span className="relative z-10">Initiate Discussion</span>
                                    <svg
                                        className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="lg:col-span-2 space-y-8 h-full flex flex-col info-cards-container">
                        <div className="info-card-reveal bg-[#1b5e20] text-white p-12 rounded-[3rem] shadow-2xl flex-1 relative overflow-hidden group transition-transform hover:-translate-y-2 duration-500">
                            {/* Ambient Glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-all duration-700"></div>

                            <h3 className="text-2xl font-bold mb-10 italic relative z-10">Reach Out</h3>

                            <div className="space-y-10 relative z-10">
                                <div className="flex items-start gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                                        <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-green-300 uppercase tracking-widest mb-1">Office Line</p>
                                        <p className="text-xl font-bold">(804) 725-1516</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                                        <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-green-300 uppercase tracking-widest mb-1">Hours</p>
                                        <p className="text-xl font-bold">Mon - Fri • 8AM - 5PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group/item hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                                        <svg className="w-6 h-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-green-300 uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-xl font-bold">info@hunterscontracting.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Map Card */}
                        <div className="map-container info-card-reveal bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[400px]">
                            <div className="flex-1 w-full relative rounded-[2.5rem] overflow-hidden group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.7371918341655!2d-76.49520162344754!3d37.58418042337674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba69145903b44b%3A0xc3f8e58f00db72f7!2s10880%20General%20Puller%20Hwy%2C%20Hartfield%2C%20VA%2023071%2C%20USA!5e0!3m2!1sen!2s!4v1706974123456!5m2!1sen!2s"
                                    className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 block"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="p-6 pb-2">
                                <h4 className="text-gray-900 font-bold mb-2 italic">Hunter's Contracting, Ltd</h4>
                                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest leading-relaxed">
                                    10880 General Puller Hwy, Suite 8 & 9<br />
                                    Hartfield, VA 23071
                                </p>
                                <a
                                    href="https://maps.google.com/?q=10880+General+Puller+Hwy,+Hartfield,+VA+23071"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex items-center gap-2 text-[#4caf50] font-black text-[9px] uppercase tracking-widest hover:text-[#1b5e20] transition-colors group"
                                >
                                    <span>Open In Google Maps</span>
                                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Site CTA Footer Transition */}
            <section className="site-footer bg-white py-24 px-6 text-center overflow-hidden">
                <div className="max-w-4xl mx-auto relative">
                    <div className="footer-reveal absolute -top-24 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-[#1b5e20] to-transparent"></div>
                    <h2 className="footer-reveal text-3xl font-bold text-gray-900 mb-6 italic">Ready to experience the Hunter's standard?</h2>
                    <p className="footer-reveal text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
                        We are currently accepting new projects for the upcoming season. Contact us to reserve your consultation.
                    </p>
                    <div className="footer-reveal flex items-center justify-center gap-4">
                        <div className="h-px w-8 bg-gray-200"></div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">Crafting Excellence Since 2017</span>
                        <div className="h-px w-8 bg-gray-200"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
