'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

const logos = [
  "Lumina", "Vertex", "Oculus", "Nebula", "Quantum", "Apex", "Zenith", "Horizon"
];

export default function TrustedBy() {
  return (
    <section className="py-20 border-b border-neutral-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
            <Reveal>
                <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest text-center md:text-left">
                    Trusted by industry leaders
                </p>
            </Reveal>
        </div>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden group">
            <motion.div 
                className="flex gap-16 md:gap-32 animate-marquee whitespace-nowrap py-4"
                animate={{ x: [0, -1000] }}
                transition={{ 
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {[...logos, ...logos, ...logos].map((logo, i) => (
                    <span 
                        key={i} 
                        className="text-3xl md:text-4xl font-display font-bold text-neutral-300 hover:text-gold-500 transition-colors duration-300 cursor-default select-none group-hover/marquee:text-neutral-200 group-hover/marquee:hover:text-gold-500"
                    >
                        {logo}
                    </span>
                ))}
            </motion.div>
        
             {/* Fade Edges */}
             <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent pointer-events-none" />
             <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent pointer-events-none" />
        </div>
    </section>
  );
}
