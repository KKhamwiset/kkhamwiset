'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollTimeline() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 bottom-0 w-1 bg-orange-500 origin-top z-40"
            style={{ scaleY }}
        />
    );
}
