'use client';

import React, { useState, useEffect } from 'react';

const images = [
    '/placeholder-1.jpg', // Replace with actual images
    '/placeholder-2.jpg',
    '/placeholder-3.jpg',
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[300px] bg-neutral-900 overflow-hidden border border-white/20">
            {/* Placeholder for actual images */}
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                <span className="text-lg uppercase tracking-widest">Image Carousel {currentIndex + 1}</span>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 w-8 transition-colors duration-300 ${i === currentIndex ? 'bg-orange-500' : 'bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
}
