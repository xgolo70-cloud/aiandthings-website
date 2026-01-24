'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "They didn't just build a website; they crafted a digital soul for our brand. The attention to detail is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, Lumina Studios"
  },
  {
    quote: "The efficiency of their AI integration saved us countless hours. A perfect blend of art and engineering.",
    author: "Marcus Chen",
    role: "CTO, Vertex AI"
  },
  {
    quote: "Working with the studio was transformative. They pushed us to reimagine what our user experience could be.",
    author: "Elena Rodriguez",
    role: "Product Lead, Nebula"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white border-t border-neutral-100 relative overflow-hidden">
        {/* Ambient background blur */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-50/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center">
            <Reveal width="100%">
                 <span className="text-accent-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">
                    Voices from the Future
                </span>
            </Reveal>
            <Reveal width="100%" delay={0.1}>
                 <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-display text-neutral-950 leading-[0.85]">
                    Client <br className="md:hidden" />
                    <span className="font-serif italic text-accent-500 font-normal">Stories.</span>
                </h2>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                    <div className="group relative p-10 bg-white border border-neutral-100 hover:border-accent-200 transition-all duration-700 h-full flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)]">
                        {/* Hover elements */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                            <div className="absolute inset-0 bg-accent-50/5" />
                            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        </div>

                        <div className="mb-10 relative z-10">
                            <div className="flex gap-1.5 mb-8 text-accent-500">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                            </div>
                            <p className="text-xl md:text-2xl font-serif italic text-neutral-800 leading-relaxed font-normal group-hover:text-neutral-950 transition-colors">
                                &quot;{item.quote}&quot;
                            </p>
                        </div>
                        <div className="relative z-10 pt-8 border-t border-neutral-100 group-hover:border-accent-200/50 transition-colors">
                            <p className="font-bold text-neutral-950 uppercase tracking-widest text-xs mb-1">{item.author}</p>
                            <p className="text-[10px] text-accent-600 uppercase tracking-widest font-bold">{item.role}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
