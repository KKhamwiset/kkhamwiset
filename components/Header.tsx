import React from 'react';

export default function Header() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference">
            <div className="text-xl font-bold tracking-tighter text-white">KKHAMWISET</div>
            <div className="flex gap-8 text-sm font-medium tracking-widest uppercase text-white">
                <a href="#work" className="hover:text-orange-500 transition-colors">Work</a>
                <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            </div>
        </nav>
    );
}
