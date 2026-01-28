'use client';

import React from 'react';
import Section from '@/components/ui/Section';

export default function About() {
  return (
    <Section id="about" className="bg-white py-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Huge Title */}
          <div>
              <h2 className="text-[8vw] leading-[0.9] font-bold tracking-tighter text-zinc-900 mb-12">
                  THE<br/>
                  <span className="text-zinc-200">CORE.</span>
              </h2>
          </div>

          {/* Right: Abstract Composition */}
          <div className="flex flex-col justify-center space-y-12">
              <div className="pl-8 border-l-2 border-brand-accent">
                  <p className="text-3xl font-light leading-snug text-neutral-800">
                      We are an engineering unit dedicated to the fabrication of <span className="arabic-text italic text-brand-accent">intelligent digital infrastructure.</span>
                  </p>
              </div>

              <div className="grid grid-cols-2 gap-8 text-xs arabic-text uppercase tracking-normal text-neutral-400">
                  <div className="p-6 bg-neutral-50">
                      Computational Efficiency
                  </div>
                  <div className="p-6 bg-neutral-50">
                      Neural Architecture
                  </div>
                  <div className="p-6 bg-neutral-50">
                      Propulsion Labs
                  </div>
                  <div className="p-6 bg-brand-dark text-white">
                      System Kernel
                  </div>
              </div>
          </div>
      </div>
    </Section>
  );
}
