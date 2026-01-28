'use client';

import React from 'react';
import Counter from '@/components/ui/Counter';

const metrics = [
  { label: "Years", value: 12, suffix: "+" },
  { label: "Experts", value: 45, suffix: "" },
  { label: "Shipped", value: 180, suffix: "+" },
];

export default function Metrics() {
  return (
    <section className="bg-white py-40 px-6">
      <div className="flex flex-col gap-40">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col relative group">
             {/* Massive Number */}
             <div className="text-[25vw] leading-[0.8] font-bold tracking-tighter text-neutral-100 group-hover:text-brand-dark transition-colors duration-700 select-none">
                 <Counter value={metric.value} suffix={metric.suffix} />
             </div>
             
             {/* Tiny Label Overlay */}
             <div className="absolute top-1/2 left-4 md:left-20 -translate-y-1/2 mix-blend-difference text-white">
                 <span className="text-sm md:text-xl arabic-text uppercase tracking-widest block rotate-90 md:rotate-0 origin-left">
                     {metric.label}
                 </span>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
