'use client';

import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    index: string;
}

export default function Accordion({ title, children, index }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-1/2 border border-white/20 transition-colors duration-300 group mx-auto">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-white hover:text-black transition-colors duration-300 text-left"
            >
                <div className="flex flex-col">
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-800 mb-2 transition-colors">{index}</span>
                    <span className="text-xl font-bold uppercase">{title}</span>
                </div>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="my-4 p-6 pt-0 text-neutral-400 group-hover:text-neutral-600">
                    {children}
                </div>
            </div>
        </div>
    );
}
