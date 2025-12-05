'use client';

import React, { useState, useEffect } from 'react';

const images = [
    'https://e0.pxfuel.com/wallpapers/900/884/desktop-wallpaper-mostima-rainbow-arknights-manga-artwork-arknights-characters-protagonist-mostima-arknights.jpg',
    'https://i.pinimg.com/736x/0c/09/6f/0c096fb1adf97464b2d97855f1d62e48.jpg',
    'https://s1.zerochan.net/Elesis.Sieghart.600.2451419.jpg',
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
                <img
                    src={images[currentIndex]}
                    alt={`Carousel Image ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-1000"
                />
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
