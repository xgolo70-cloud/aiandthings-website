'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

const stats = [
  { value: "124", label: "Artifacts Born", suffix: "+" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
  { value: "15", label: "Global Awards", suffix: "" },
  { value: "24", label: "Hours Avg. Response", suffix: "/7" }
];

export default function Metrics() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Reveal delay={i * 0.1}>
                <div className="flex items-baseline mb-4">
                  <span className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-950 font-display">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-serif italic text-accent-500 ml-1">
                    {stat.suffix}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.2 + i * 0.1}>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-neutral-400">
                  {stat.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-neutral-50 -z-10 hidden lg:block" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-neutral-50 -z-10 hidden lg:block" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-neutral-50 -z-10 hidden lg:block" />
    </section>
  );
}
