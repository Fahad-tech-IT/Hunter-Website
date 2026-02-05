'use client';

import { useGetPageBySlugQuery } from '@/store/services/directusApi';
import EditorJSRenderer from '../components/EditorJSRenderer';
import { useParams } from 'next/navigation';

export default function DynamicWebPage() {
    const params = useParams();
    const slug = params.slug as string;

    // The slug from database has a leading slash, e.g., "/home"
    // Params from Next.js is just "home"
    const { data: page, isLoading, error } = useGetPageBySlugQuery(`/${slug}`);

    if (isLoading) {
        return (
            <div className="web-hero">
                <div className="web-hero-content">Loading...</div>
            </div>
        );
    }

    if (error || !page) {
        return (
            <div className="web-section">
                <div className="glass-card">
                    <h2>Page Not Found</h2>
                    <p>We couldn't find the page you're looking for.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <section className="max-w-5xl mx-auto px-6 pt-32 pb-16 w-full">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/50 animate-fade-in">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#1b5e20] italic mb-8 border-b border-gray-100 pb-6">
                        {page.title}
                    </h1>
                    <EditorJSRenderer content={page.content} />
                </div>
            </section>
        </div>
    );
}
