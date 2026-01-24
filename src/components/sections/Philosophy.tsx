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
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <span className="text-accent-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Our DNA</span>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 font-display">
               The <span className="font-serif italic text-accent-500 font-normal">Foundation.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {principles.map((p, i) => (
            <React.Fragment key={i}>
              <div className={`flex flex-col ${p.align === 'right' ? 'md:items-end' : 'md:items-start'} relative`}>
                <div className={`max-w-xl ${p.align === 'right' ? 'md:text-right' : 'md:text-left'} bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-neutral-50 shadow-sm relative z-20`}>
                  <Reveal delay={0.2}>
                    <p className="text-accent-500 font-serif italic text-2xl mb-4">Principle 0{i + 1}</p>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <h3 className="text-4xl md:text-5xl font-black text-neutral-950 uppercase tracking-tighter mb-6 leading-none">
                      {p.title}
                    </h3>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                      {p.description}
                    </p>
                  </Reveal>
                </div>
              </div>
              
              {/* Connector */}
              {i < principles.length - 1 && (
                <Connector direction={p.align === 'left' ? 'ltr' : 'rtl'} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Visual background accent - Optimized with will-change and reduced complexity */}
      <motion.div 
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }, // Slower, smoother rotation
        }}
        style={{ willChange: 'transform' }} // Hint to browser for GPU optimization
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-neutral-50 rounded-full -z-10 pointer-events-none opacity-50"
      />
    </section>
  );
}

function Connector({ direction }: { direction: 'ltr' | 'rtl' }) {
  // LTR: Starts top-left (approx 10%), ends bottom-right (approx 90%)
  // RTL: Starts top-right (approx 90%), ends bottom-left (approx 10%)
  
  const pathD = direction === 'ltr'
    ? "M 100 0 C 100 100, 900 100, 900 200"  // Simplified curve for 0-1000 coordinate space
    : "M 900 0 C 900 100, 100 100, 100 200";

  return (
    <div className="w-full h-[200px] relative -my-10 z-10 hidden md:block pointer-events-none">
       <svg 
         viewBox="0 0 1000 200" 
         className="w-full h-full" 
         preserveAspectRatio="none"
         style={{ overflow: 'visible' }}
       >
         {/* Ghost Path (faint background) */}
         <path 
           d={pathD}
           fill="none"
           stroke="currentColor"
           strokeWidth="1"
           className="text-neutral-100"
         />
         
         {/* Animated Drawing Path */}
         <motion.path 
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent-400"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20%" }} // Optimization: Only animate once
            transition={{ duration: 1.5, ease: "easeInOut" }}
         />
         
         {/* Moving Dot that follows the path */}
         {/* Note: In pure SVG/Framer, a dot following a path accurately usually implies getting point at length. 
             For simplicity and performance, we'll stick to the drawing line which is the requested 'animated line'. */}
       </svg>
    </div>
  );
}
