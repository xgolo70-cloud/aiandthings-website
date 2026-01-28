'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 mesh-gradient">
      
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="w-full max-w-7xl relative z-10 flex flex-col items-center text-center">
          {/* Thirdweb style announcement badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors shadow-2xl cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-violet"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">New: ai_core.v2 Released</span>
                <ChevronRight size={12} className="text-zinc-500" />
             </div>
          </motion.div>

          {/* Impact Title - Tight & Bold */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-[-0.05em] text-white max-w-5xl mx-auto shadow-2xl">
              Crafting <span className="text-transparent bg-clip-text bg-linear-to-br from-white via-white to-white/40 group-hover:from-electric-violet group-hover:to-electric-cyan transition-all duration-1000">digital </span> 
              experiences.
            </h1>
          </motion.div>

          {/* Portfolio Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col items-center gap-10"
          >
              <p className="max-w-xl text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                A multidisciplinary studio focusing on high-precision engineering 
                and autonomous industrial design. We bridge the gap between complex logic and human intuition.
              </p>

              {/* Portfolio CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="group relative px-10 py-4 bg-white text-black rounded-full font-bold text-sm tracking-tight transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_50px_rgba(255,255,255,0.2)] flex items-center gap-3">
                    View My Work
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-4 bg-zinc-900/50 backdrop-blur-xl border border-white/10 text-white rounded-full font-bold text-sm tracking-tight transition-all hover:bg-white/5 hover:border-white/20 active:scale-[0.98]">
                    About Nexus
                </button>
              </div>
          </motion.div>
      </div>

      {/* Floating 3D Detail (Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-electric-violet/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
}
