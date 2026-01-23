'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';

const principles = [
  {
    title: "Pure Logic",
    description: "Every pixel and line of code must serve a purpose. We eliminate the redundant to reveal the essential.",
    align: "left"
  },
  {
    title: "Elevated Art",
    description: "Technology alone is not enough. We infuse every artifact with a soul through curated aesthetics.",
    align: "right"
  },
  {
    title: "Intelligence",
    description: "We don't just build interfaces; we build systems that learn, adapt, and empower.",
    align: "left"
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-40 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-neutral-100 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-32">
          <Reveal width="100%">
            <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Our DNA</span>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 font-display">
               The <span className="font-serif italic text-gold-500 font-normal">Foundation.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-40">
          {principles.map((p, i) => (
            <div key={i} className={`flex flex-col ${p.align === 'right' ? 'md:items-end' : 'md:items-start'}`}>
              <div className={`max-w-2xl ${p.align === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                <Reveal delay={0.2}>
                  <p className="text-gold-500 font-serif italic text-2xl mb-4">Principle 0{i + 1}</p>
                </Reveal>
                <Reveal delay={0.3}>
                  <h3 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase tracking-tighter mb-8 leading-none">
                    {p.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed">
                    {p.description}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual background accent */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-neutral-50 rounded-full -z-10 pointer-events-none"
      />
    </section>
  );
}
