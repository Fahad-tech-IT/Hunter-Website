import React from 'react';

// Define types locally
export interface EditorJSBlock {
    id: string;
    type: string;
    data: {
        text?: string;
        level?: number;
        style?: string;
        items?: string[];
        [key: string]: any;
    };
}

export interface EditorJSContent {
    time?: number;
    blocks: EditorJSBlock[];
    version?: string;
}

interface EditorJSRendererProps {
    content?: EditorJSContent;
}

const EditorJSRenderer: React.FC<EditorJSRendererProps> = ({ content }) => {
    if (!content || !content.blocks) return null;

    return (
        <div className="space-y-6">
            {content.blocks.map((block: EditorJSBlock) => {
                switch (block.type) {
                    case 'header':
                        const level = block.data.level || 2;
                        const HeaderTag = `h${level}` as React.ElementType; // Fix for JSX element type
                        const headerClasses = level === 1
                            ? "text-3xl md:text-4xl font-bold text-[#1b5e20] italic mb-6"
                            : level === 2
                                ? "text-2xl md:text-3xl font-bold text-[#1b5e20] italic mb-4"
                                : "text-xl font-bold text-[#1b5e20] italic mb-3";

                        return (
                            <HeaderTag key={block.id} className={headerClasses}>
                                {block.data.text}
                            </HeaderTag>
                        );
                    case 'paragraph':
                        return (
                            <p
                                key={block.id}
                                className="text-gray-600 text-lg leading-relaxed mb-4"
                                dangerouslySetInnerHTML={{ __html: block.data.text || '' }}
                            />
                        );
                    case 'list':
                        const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
                        const listClasses = block.data.style === 'ordered' ? "list-decimal pl-6 space-y-2 text-gray-600" : "list-disc pl-6 space-y-2 text-gray-600";
                        return (
                            <ListTag key={block.id} className={listClasses}>
                                {block.data.items?.map((item: string, index: number) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                ))}
                            </ListTag>
                        );
                    default:
                        console.warn(`Unknown block type: ${block.type}`, block);
                        return null;
                }
            })}
        </div>
    );
};

export default EditorJSRenderer;
