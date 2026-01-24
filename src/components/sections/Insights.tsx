'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: "Philosophy",
    title: "Why Minimalist Logic Outlasts Aesthetic Trends",
    date: "MAR 12, 2026",
    link: "#"
  },
  {
    category: "Intelligence",
    title: "Bridging the Gap: How We Integrate AI into Real-World Artifacts",
    date: "FEB 28, 2026",
    link: "#"
  },
  {
    category: "Design",
    title: "The Emotional Resonance of Geometric Precision",
    date: "JAN 15, 2026",
    link: "#"
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-40 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <Reveal>
              <span className="text-accent-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Thought Leadership</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 font-display leading-[0.85]">
                Latest <br />
                <span className="font-serif italic text-accent-500 font-normal">Insights.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-950 transition-colors">
              Explore All Thoughts
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>

        <div className="space-y-0 border-t border-neutral-100">
          {insights.map((item, i) => (
            <Reveal key={i} delay={i * 0.1} width="100%">
              <a 
                href={item.link}
                className="group flex flex-col md:grid md:grid-cols-12 items-center py-12 md:py-16 border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors px-4 md:px-8"
              >
                <div className="md:col-span-2 mb-4 md:mb-0">
                  <span className="text-accent-500 font-serif italic text-xl">{item.category}</span>
                </div>
                <div className="md:col-span-8 mb-6 md:mb-0">
                  <h3 className="text-3xl md:text-5xl font-black text-neutral-950 uppercase tracking-tighter leading-none group-hover:text-accent-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 mb-2">{item.date}</span>
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-950 group-hover:border-neutral-950 transition-all">
                    <ArrowRight size={16} className="text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
