'use client';

import React from 'react';

interface WebFooterProps {
    text?: string;
    images?: { directus_files_id: string }[] | string[];
}

export default function WebFooter({ text, images }: WebFooterProps) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const certLogos = [
        { src: "https://hunterscontracting.com/img/logos/6250-CGB-black.png", alt: "Certified Graduate Builder" },
        { src: "https://hunterscontracting.com/img/logos/6250-CGP-logo.png", alt: "Certified Green Professional" },
        { src: "https://hunterscontracting.com/img/logos/6250-NAHB-black.png", alt: "National Association of Home Builders" }
    ];

    return (
        <footer className="bg-white py-20 px-6 border-t border-gray-100 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

                {/* Certification Logos - Hardcoded as requested */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 transition-all duration-500 hover:opacity-100 w-full mb-8">
                    {certLogos.map((logo, idx) => (
                        <div key={idx} className="group relative">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-20 md:h-28 w-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Dynamic Content from CMS */}
                <div className="w-full flex flex-col items-center gap-10">
                    {text && (
                        <div
                            className="text-gray-500 text-center max-w-3xl text-sm md:text-base leading-relaxed font-medium italic"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}

                    {images && images.length > 0 && (
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 transition-all hover:opacity-90">
                            {images.map((img: any, i: number) => {
                                const fileId = img; // In static data, this is the full URL
                                return (
                                    <img
                                        key={i}
                                        src={`${fileId}`}
                                        alt={`Partner ${i}`}
                                        className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}