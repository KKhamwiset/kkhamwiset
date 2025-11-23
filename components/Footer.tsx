import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-40 border-t border-white/20 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="text-[10vw] font-black tracking-tighter text-neutral-800 select-none">
                CONDE
            </div>
            <div className="flex flex-col gap-4 text-right">
                <a href="mailto:k.khamwiset@outlook.com" className="text-2xl hover:text-orange-500 transition-colors text-white">k.khamwiset@outlook.com</a>
                <div className="flex gap-6 justify-end text-sm uppercase tracking-widest text-neutral-500">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
