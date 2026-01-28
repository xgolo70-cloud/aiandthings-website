'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "NEXTUS", "QUANTUM", "SYNAPSE", "VERTEX", "LUMINA", "NEBULA", "STRATOS", "CORE AI"
];



export default function TrustedBy() {
  return (
    <section className="py-24 bg-black overflow-hidden relative border-y border-white/5">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">
                  Success Partners
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white arabic-heading">
                  شركاء <span className="text-zinc-500">النجاح</span>
              </h2>
          </motion.div>
      </div>

      <div className="relative mt-8">
        {/* Mirror Fades */}
        <div className="absolute inset-y-0 left-0 w-48 bg-linear-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-full overflow-hidden py-10">
            <motion.div 
                className="flex items-center whitespace-nowrap"
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 25 
                }}
            >
                {/* Triple the list to ensure the carousel always has enough content to loop invisibly */}
                {[...brands, ...brands, ...brands].map((brand, i) => (
                    <div key={i} className="flex items-center px-12 group shrink-0">
                        <span className="text-2xl md:text-4xl font-black text-zinc-800 group-hover:text-white transition-all duration-500 tracking-tighter cursor-default hover:scale-110">
                            {brand}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>

        {/* Subtle decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
