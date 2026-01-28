'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "TechCorp", "NeuralSystems", "FutureLabs", "DataFlow", "CyberDyne", "OmniCorp", "StarkInd"
];

const MarqueeItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-6 px-12 opacity-30 transition-all duration-300 hover:opacity-100 cursor-default">
        <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{text}</span>
    </div>
);

export default function TrustedBy() {
  return (
    <section className="py-24 border-y border-zinc-900 bg-black overflow-hidden relative">
      <div className="mb-12 text-center">
          <span className="text-xs text-zinc-500 mb-2 block font-light uppercase tracking-normal">شركاء النجاح</span>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradients using mask for cleaner transparency */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-black via-transparent to-black" />

        {/* Marquee Content */}
        <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 30 
            }}
        >
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <MarqueeItem key={`${brand}-${i}`} text={brand} />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
