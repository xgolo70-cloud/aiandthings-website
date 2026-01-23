'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    title: "Insight",
    desc: "We analyze the core problem and extract the essential truth behind your vision.",
    tag: "Analysis"
  },
  {
    title: "Sculpt",
    desc: "Our designers craft high-fidelity interfaces that merge aesthetics with function.",
    tag: "Design"
  },
  {
    title: "Engineer",
    desc: "We build robust, intelligent systems using the latest architectural standards.",
    tag: "Development"
  },
  {
    title: "Artifact",
    desc: "The final product is launched as a digital masterpiece, ready to inspire.",
    tag: "Delivery"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-40 px-6 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-40">
            <Reveal>
              <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">The Laboratory</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-neutral-950 font-display leading-[0.85] mb-12">
                 How <br />
                 <span className="font-serif italic text-gold-500 font-normal">Artifacts</span> <br />
                 Are Born.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-neutral-500 text-xl max-w-md font-light leading-relaxed">
                Our process is a rigorous blend of research, artistic intuition, and specialized engineering. 
                We don&apos;t follow trends; we define them.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1} width="100%">
                <div className="group relative p-12 bg-white border border-neutral-100 rounded-sm hover:border-gold-300 transition-all duration-700">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-gold-400 font-serif italic text-3xl">0{i + 1}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-neutral-950 uppercase tracking-tighter mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-40 border-r-40 border-t-transparent border-r-transparent group-hover:border-r-gold-50 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic line animation */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-200/20 to-transparent" />
    </section>
  );
}
