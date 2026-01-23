'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white selection:bg-gold-200">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 px-10 py-32 md:p-32 text-center group">
          {/* Animated Background Accents */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <motion.div 
               animate={{ 
                 x: [0, 50, 0],
                 y: [0, -30, 0]
               }}
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full" 
            />
            <motion.div 
               animate={{ 
                 x: [0, -40, 0],
                 y: [0, 40, 0]
               }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-400/10 blur-[150px] rounded-full" 
            />
          </div>

          <div className="relative z-10">
            <Reveal width="100%">
              <span className="text-gold-500 text-[10px] uppercase tracking-[0.6em] font-bold mb-10 block">
                Infinite Possibilities
              </span>
            </Reveal>
            
            <Reveal width="100%" delay={0.1}>
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-16 leading-[0.8] uppercase">
                Let&apos;s build <br />
                <span className="font-serif italic text-gold-400 font-normal underline decoration-gold-400/20">something great.</span>
              </h2>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <button className="group relative overflow-hidden bg-white text-neutral-950 px-12 py-6 rounded-full font-bold transition-all hover:scale-[1.05] active:scale-[0.98] shadow-2xl shadow-white/5">
                <span className="relative z-10 flex items-center gap-4 tracking-widest uppercase text-xs md:text-sm">
                  Launch the conversation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gold-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </button>
            </Reveal>
          </div>

          {/* Grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </div>
    </section>
  );
}
