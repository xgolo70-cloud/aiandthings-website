'use client';

import React from 'react';
import { Lightbulb, Target, Zap } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const stats = [
  {
    icon: <Zap className="text-accent-500" strokeWidth={1} size={32} />,
    title: "High Efficiency",
    description: "Optimized workflows and intelligent automation to deliver results faster.",
  },
  {
    icon: <Target className="text-accent-500" strokeWidth={1} size={32} />,
    title: "Integrated Solutions",
    description: "From strategy to engineering, we handle every layer with artistic precision.",
  },
  {
    icon: <Lightbulb className="text-accent-500" strokeWidth={1} size={32} />,
    title: "R&D Focussed",
    description: "Dedicated research division exploring new frontiers in AI and design.",
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white border-t border-neutral-100 relative overflow-hidden">
        {/* Ambient background blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-50/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
        <div>
            <Reveal>
                <span className="text-accent-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block">
                    Our Philosophy
                </span>
            </Reveal>
            <Reveal delay={0.1}>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 font-display text-neutral-950 leading-[0.85]">
                    Masterful <br />
                    <span className="font-serif italic text-accent-500 font-normal">Products.</span>
                </h2>
            </Reveal>
            <Reveal delay={0.2}>
                <p className="text-neutral-500 text-xl leading-relaxed mb-12 font-light text-balance">
                    At <strong className="font-semibold text-neutral-900">ai and things</strong>, we merge the precision of code 
                    with the soul of art. We believe technology should not only solve problems but inspire awe.
                </p>
            </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-8 border-l border-accent-200 pl-8">
                 <p className="text-neutral-400 font-serif italic text-2xl leading-relaxed max-w-md">
                    &quot;We don&apos;t build features. We craft digital artifacts that stand the test of time.&quot;
                 </p>
                 <button className="self-start text-neutral-900 font-bold uppercase tracking-widest text-xs border-b border-accent-500 pb-1 hover:text-accent-600 transition-colors">
                    Read our Manifesto
                </button>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={0.2 + (index * 0.1)}>
                <div className="group relative p-10 bg-white border border-neutral-100 hover:border-accent-200 transition-all duration-700 overflow-hidden rounded-sm">
                    {/* Hover highlights */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-accent-50/5" />
                    <div className="absolute inset-0 opacity-[0.02] group-hover:block hidden mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    
                    <div className="relative z-10 flex gap-8 items-start">
                        <div className="p-3 bg-accent-50/50 rounded-full group-hover:scale-110 transition-transform duration-500">
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-neutral-950 mb-3 group-hover:text-accent-700 transition-colors">
                                {stat.title}
                            </h3>
                            <p className="text-neutral-500 leading-relaxed font-light group-hover:text-neutral-600 transition-colors">
                                {stat.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
