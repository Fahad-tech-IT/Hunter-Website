'use client';
import EditorJSRenderer from '../components/EditorJSRenderer';
import { useParams } from 'next/navigation';

export default function DynamicWebPage() {
    const params = useParams();
    const slug = params.slug as string;


    return (
        <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
            <p>hello</p>
        </div>
    );
}
