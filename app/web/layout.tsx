'use client';

import { ReactNode } from 'react';
import WebHeader from './components/WebHeader';
import WebFooter from './components/WebFooter';
import { STATIC_GLOBALS, STATIC_PAGES } from './data/static';

export default function WebLayout({ children }: { children: ReactNode }) {
    const globals = STATIC_GLOBALS;
    const pages = STATIC_PAGES;

    const logoUrl = globals.company_logo;

    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <WebHeader logo={logoUrl} pages={pages} />
            <main className="flex-grow">
                {children}
            </main>
            <WebFooter text={globals.footer_text} images={globals.footer_images} />
        </div>
    );
}