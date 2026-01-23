'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-neutral-950 text-white selection:bg-white selection:text-neutral-950">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal width="100%">
            <p className="text-neutral-400 text-sm font-medium uppercase tracking-[0.2em] mb-8">
                What&apos;s Next?
            </p>
        </Reveal>
        
        <Reveal width="100%">
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter mb-12 font-display leading-[0.9]">
                Let&apos;s work <br />
                <span className="text-neutral-600 italic font-serif">together.</span>
            </h2>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
            <div className="flex flex-col items-center gap-8">
                <a 
                    href="mailto:hello@aiandthings.com" 
                    className="group flex items-center gap-4 bg-white text-neutral-950 px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300"
                >
                    <Mail size={20} />
                    <span>hello@aiandthings.com</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-neutral-500">
                    We usually respond within 24 hours.
                </p>
            </div>
        </Reveal>
      </div>
    </section>
  );
}
