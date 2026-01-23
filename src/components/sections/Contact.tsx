'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, Mail } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 bg-neutral-950 text-white selection:bg-gold-500 selection:text-neutral-950 relative overflow-hidden">
        {/* Cinematic ambient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 blur-[180px] rounded-full" />
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <Reveal width="100%">
            <span className="text-gold-500 text-[10px] uppercase tracking-[0.5em] font-bold mb-10 block">
                The Next Chapter
            </span>
        </Reveal>
        
        <Reveal width="100%" delay={0.1}>
            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter mb-16 leading-[0.8]">
                Let&apos;s build <br />
                <span className="font-serif italic text-gold-400 font-normal">together.</span>
            </h2>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
            <div className="flex flex-col items-center gap-10">
                <Magnetic strength={0.4}>
                    <a 
                        href="mailto:hello@aiandthings.com" 
                        className="group flex items-center gap-6 bg-white text-neutral-950 px-12 py-6 rounded-full text-xl font-bold hover:bg-gold-400 transition-all duration-300"
                    >
                        <Mail size={24} />
                        <span>hello@aiandthings.com</span>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </a>
                </Magnetic>
                <p className="text-neutral-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                    Response time: Within 24 hours.
                </p>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
