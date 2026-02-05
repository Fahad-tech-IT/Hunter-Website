'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RedirectPage() {
    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden">
            {/* Full-screen Background */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 25, ease: "linear" }}
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                    alt="Hunter's Contracting Luxury Build"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Centered Login Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative z-10 w-full max-w-md px-6"
            >
                <div className="bg-white/85 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                    <div className="bg-[#1b5e20]/10 py-6 text-center border-b border-[#1b5e20]/5">
                        <span className="text-[#1b5e20] font-bold tracking-[0.4em] uppercase text-xs">
                            Login
                        </span>
                    </div>

                    <div className="p-10 text-center">
                        <div className="mb-10 flex justify-center">
                            <motion.div
                                whileHover={{ rotate: 90 }}
                                transition={{ duration: 0.5 }}
                                className="w-20 h-20 bg-[#1b5e20] rounded-2.5xl flex items-center justify-center shadow-lg transform rotate-3"
                            >
                                <svg
                                    className="w-10 h-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </motion.div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight italic">
                            Welcome Back
                        </h3>

                        <p className="text-gray-600 mb-10 leading-relaxed font-medium">
                            Access your project dashboard, view updates, and communicate with your team.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/login"
                                className="group relative flex items-center justify-center gap-3 w-full py-5 bg-[#1b5e20] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4caf50] transition-all duration-300 uppercase tracking-widest text-sm"
                            >
                                <span>Sign in to Client Portal</span>
                                <motion.svg
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </motion.svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
