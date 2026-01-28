'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "TechCorp", "NeuralSystems", "FutureLabs", "DataFlow", "CyberDyne", "OmniCorp", "StarkInd"
];

const MarqueeItem = ({ text }: { text: string }) => (
    <motion.div 
      whileHover={{ scale: 1.1, opacity: 1 }}
      className="flex items-center gap-6 px-12 opacity-20 transition-all duration-300 cursor-default"
    >
        <span className="text-3xl md:text-5xl font-bold text-white font-mono uppercase tracking-tighter">{text}</span>
    </motion.div>
);

export default function TrustedBy() {
  return (
    <section className="py-32 border-y border-white/5 bg-black overflow-hidden relative">
      <div className="mb-16 text-center">
          <span className="text-xs text-zinc-500 mb-4 block font-light">شركاء النجاح</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white arabic-impact">شركاء الرؤية</h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradients to fade edges - Using mask-image for cleaner fade */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
            background: 'linear-gradient(90deg, #000 0%, transparent 15%, transparent 85%, #000 100%)',
            mixBlendMode: 'multiply'
        }} />

        {/* Marquee Content x2 for seamless loop */}
        <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 40 
            }}
        >
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <MarqueeItem key={`${brand}-${i}`} text={brand} />
            ))}
        </motion.div>
      </div>

      {/* Detail Decor */}
      <div className="absolute top-10 left-10 w-px h-20 bg-linear-to-b from-zinc-900 to-transparent" />
      <div className="absolute bottom-10 right-10 w-px h-20 bg-linear-to-t from-zinc-900 to-transparent" />
    </section>
  );
}
